async function handleGetBook() {
	try {
		console.log(`attempting to load book...`);
		const bookName = getBookName(); //@ts-ignore
		const { data } = await axios.get(`/books/get-a-book?bookName=${bookName}`);
		const { books, error } = data;
		const bookToShow = books[0];
		const isFav = checkIfBookIsFav(bookToShow);
		console.log(isFav)
		const bookWrapper = document.querySelector('.book_wrapper');
		let html = `<img src="${bookToShow.bookImg}">
        <p>Did I read this book? ${bookToShow.list}</p>
		<p>${isFav}</p>`;
		bookWrapper.innerHTML = html;
		editPageH2();
	} catch (error) {
		console.error(error);
	}
}


function getBookName(): string | false {
	try {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const bookName = urlParams.get('bookName');
		return bookName;
	} catch (error) {
		console.error(error);
		return false;
	}
}

function onPageLoad() {
	handleGetBook();
	addPagetitle();
}

function addPagetitle() {
	const bookName = getBookName();
	document.head.innerHTML += `<title>${bookName}</title>`;
}

function editPageH2() {
	const bookName = getBookName();
	const bookHeader = document.querySelector('#book_name_header');
	bookHeader.innerHTML = bookName;
}

function checkIfBookIsFav(book){
	const result = book.favorite === true ? "This is one of your fav!" : "You didn't add this one to your faves..."
	return result;
}

function handleBack() {
	history.back()
}