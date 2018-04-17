const dbConnections = require('../database/db_connection');

// get books id into array
const getBooks = () => {
  const query = { text: 'SELECT id FROM books' };
  dbConnections.query(query, (err, res) => {
    if (err) throw new Error(err, 'can\'t get books id');
    return res.rows;
  });
}

// get book name, book owner, reservation dates for the given book id
// and the member who reserve the book
const getBookInfo = (book_id) => {
  const query = { text: 'SELECT books.name, memebers.first_name, members.last_name, '}
}