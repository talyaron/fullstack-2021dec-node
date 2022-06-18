console.log(`books!`);

const tbrList = document.querySelector('.tbrList');
const readList = document.querySelector('.readList');
const currentlyReadingList = document.querySelector('.currently_Reading');
const addBookForm = document.querySelector('#addBookForm');

function getUserId(): string | false {
	try {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const userId = urlParams.get('userId');
		return userId;
	} catch (error) {
		console.error(error);
		return false;
	}
}

async function handleGetUserBooks() {
	try {
		const userId = getUserId(); //@ts-ignore
		const { data } = await axios.get(`/books/get-books?userId=${userId}`);
		const { books, error } = data;
		renderbooks(books);

		// if (error) throw new Error('Items was not found!');
	} catch (error) {
		console.error(error);
	}
}

async function handleDeleteBook(event) {
	try {
		console.log(`delete button pressed`);
		const userId = getUserId();
		const bookId = event.target.id;
		const { data } = await axios.delete('/books/delete-book', { data: { bookId, userId } });
		const { books, error } = data;
		renderbooks(books);
	} catch (error) {
		console.error(error);
	}
}

function renderbooks(books) {
	let tbrHtml = 'TBR List:';
	let readHtml = 'Already Read List:';
	let currentlyReadingHtml = 'Currently Reading';
	books.forEach((book) => {
		if (book.list === 'tbr') {
			tbrHtml += `<div class="Book_card">
			<a href="/book.html?bookName=${book.bookName}"><h2>${book.bookName}</h2></a>
            <img src="${book.bookImg}">
			<div class="btn_bookList">
            <button id="${book.bookId}" onclick="handleDeleteBook(event)" type="submit"> <i class="fa-solid fa-trash"></i> delete</button>
			<button id="${book.bookId}" onclick="handleMarkAsCurrentlyReading(event)" type="submit"> <i class="fa-solid fa-book-open"></i> mark as reading</button>
            </div>
			</div>`;
		} else if (book.list === 'read') {

			if(book.favorite) {
				readHtml += `<div class="Book_card">
				<a href="/book.html?bookName=${book.bookName}"><h2>${book.bookName}</h2></a>
            <img src="${book.bookImg}">
				<div class="btn_bookList">
            		<button id="${book.bookId}" onclick="handleDeleteBook(event)" type="submit"> <i class="fa-solid fa-trash"></i> delete</button>
					<button id="${book.bookId}" onclick="handleFavoriteBook(event)" type="submit"> <i class="fa-solid fa-heart pink"></i> Favorite </button>
				</div>
            </div>`;
			} else if (!book.favorite) {
				readHtml += `<div class="Book_card">
				<a href="/book.html?bookName=${book.bookName}"><h2>${book.bookName}</h2></a>
            <img src="${book.bookImg}">
				<div class="btn_bookList">
            		<button id="${book.bookId}" onclick="handleDeleteBook(event)" type="submit"> <i class="fa-solid fa-trash"></i> delete</button>
					<button id="${book.bookId}" onclick="handleFavoriteBook(event)" type="submit"> <i class="fa-solid fa-heart"></i> Favorite </button>
				</div>
            </div>`;
			} 

			
		} else if (book.list === 'current') {
			currentlyReadingHtml += `<div class="Book_card">
			<a href="/book.html?bookName=${book.bookName}"><h2>${book.bookName}</h2></a>
            <img src="${book.bookImg}">

			<div class="btn_bookList onlyMark">
            <button id="${book.bookId}" onclick="handleMarkAsRead(event)" type="submit"> <i class="fa-solid fa-book-bookmark"></i> Mark as Read</button>
            </div>
			</div>`;
		}
	});
	tbrList.innerHTML = tbrHtml;
	readList.innerHTML = readHtml;
	currentlyReadingList.innerHTML = currentlyReadingHtml;
}

addBookForm.addEventListener('submit', (ev) => {
	ev.preventDefault();
	const newBookName = ev.target.bookName.value;
	const newBookImg = ev.target.bookImg.value;
	handleAddNewBook(newBookName, newBookImg);

	ev.target.bookName.value = '';
	ev.target.bookImg.value = '';
});

async function handleAddNewBook(newBookName, newBookImg) {
	try {
		const userId = getUserId(); //@ts-ignore
		const { data } = await axios.post(`/books/add-Book`, { newBookName, newBookImg, userId });
		const { books } = data;
		renderbooks(books);
	} catch (error) {
		console.error(error);
	}
}

async function handleMarkAsRead(event) {
	try {
		console.log('mark as read please');
		const bookId = event.target.id;
		const userId = getUserId(); //@ts-ignore
		const { data } = await axios.patch(`/books/mark-as-read`, { bookId, userId });
		const { books } = data;
		renderbooks(books);
	} catch (error) {
		console.error(error);
	}
}

async function handleMarkAsCurrentlyReading(event) {
	try {
		const bookId = event.target.id;
		const userId = getUserId(); //@ts-ignore
		const { data } = await axios.patch(`/books/mark-currently`, { bookId, userId });
		const { books } = data;
		renderbooks(books);
	} catch (error) {
		console.error(error);
	}
}

async function handleFavoriteBook(event) {
	try {
		const bookId = event.target.id;
		const userId = getUserId(); //@ts-ignore
		const { data } = await axios.patch(`/books/add-Favorite`, { bookId, userId });
		const { books } = data;
		renderbooks(books);
	} catch (error) {
		console.error(error);
	}
}



async function handleGetABook() {
	try {
		const userId = getUserId(); //@ts-ignore
		const { data } = await axios.get(`/books/get-a-book?bookId=${bookId}`);
		const { books, error } = data;
		renderbooks(books);

		// if (error) throw new Error('Items was not found!');
	} catch (error) {
		console.error(error);
	}
}
