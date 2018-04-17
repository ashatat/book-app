const dbConnections = require('../database/db_connection');

// get bookId and bookOwner into array
const getBooks = () => {
  const query = {
    text: 'SELECT books.id,books.book_name, members.first_name, members.last_name FROM books INNER JOIN members ON books.book_owner_id = members.id' };
  dbConnections.query(query, (err, res) => {
    if (err) throw new Error(err, 'can\'t get books');
    return res.rows;
  });
}

// get book name, book owner, reservation dates for the given book id
// and the member who reserve the book
const getBookInfo = (book_id) => {
  const query = { text: 'SELECT books.book_name, members.first_name, members.last_name, reservations.reserve_date FROM reservations INNER JOIN members ON reservations.member_id = members.id INNER JOIN books ON reservations.book_id = books.id WHERE books.id = $1',
  values: [1]}
}