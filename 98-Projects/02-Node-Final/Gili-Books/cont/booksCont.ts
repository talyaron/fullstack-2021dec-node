import uid from '../helpers';

let books = [
	{
		bookName: 'Harry Potter',
		bookImg: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/3385/9781338596700.jpg',
		userId: '123',
		list: 'tbr',
		bookId: uid(),
		favorite: false
	},
	{
		bookName: 'Percy Jackson',
		bookImg: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1413/9780141346809.jpg',
		userId: '123',
		list: 'read',
		bookId: uid(),
		favorite: false
	},
	{
		bookName: 'Fire',
		bookImg: '	https://images-na.ssl-images-amazon.com/images/I/91IEg8HFceL.jpg',
		userId: '123',
		list: 'current',
		bookId: uid(),
		favorite: false
	},
	{
		bookName: 'Eragon',
		bookImg: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3758/9780375826689.jpg',
		userId: '456',
		list: 'read',
		bookId: uid(),
		favorite: false
	},
	{
		bookName: "Hitchhiker's guide",
		bookImg: 'https://simania.co.il/bookimages/covers44/442005.jpg',
		userId: '456',
		list: 'tbr',
		bookId: uid(),
		favorite: false
	}
];

export async function getUserBooks(req, res) {
	try {
		const userId = req.query.userId;
		res.send({ books: books.filter((book) => book.userId === userId) });
	} catch (error) {
		console.log('books array not valid');
		res.send({ error: error.message });
	}
}

export async function deleteBook(req, res) {
	try {
		const { bookId, userId } = req.body;
		books = books.filter(function(book) {
			if (book.bookId === bookId && userId === book.userId) {
				return false;
			}
			return true;
		});
		res.send({ books: books.filter((book) => book.userId === userId) });
	} catch (error) {}
}

export async function addBook(req, res) {
	const { newBookName } = req.body;
	const { newBookImg } = req.body;
	const { userId } = req.body;

	const newBook = {
		bookName: newBookName,
		bookImg: newBookImg,
		userId: userId,
		list: 'tbr',
		bookId: uid(),
		favorite: false
	};
	books.push(newBook);
	res.send({ books: books.filter((book) => book.userId === userId) });
}

export async function markAsRead(req, res) {
	const { bookId } = req.body;
	console.log(bookId);
	const { userId } = req.body;

	books.forEach((book) => {
		if (book.bookId === bookId) {
			book.list = 'read';
		}
	});

	res.send({ books: books.filter((book) => book.userId === userId) });
}

export async function getABook(req, res) {
	try {
		const bookName = req.query.bookName;
		console.log(bookName);
		res.send({ books: books.filter((book) => book.bookName === bookName) });
	} catch (error) {
		console.log('books array not valid');
		res.send({ error: error.message });
	}
}

export async function markCurrently(req, res) {
	const { bookId } = req.body;
	const { userId } = req.body;

	books.forEach((book) => {
		if (book.bookId === bookId) {
			book.list = 'current';
		}
	});

	res.send({ books: books.filter((book) => book.userId === userId) });
}

export async function addFavorite(req, res) {
	const { bookId } = req.body;
	const { userId } = req.body;

	books.forEach((book) => {
		if (book.bookId === bookId) {
			if (book.favorite === false) {
				book.favorite = true;
			} else if (book.favorite === true) {
				book.favorite = false;
			}
		}
	});

	res.send({ books: books.filter((book) => book.userId === userId) });
}

