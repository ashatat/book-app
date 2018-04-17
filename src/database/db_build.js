const fs = require('fs');
const dbConnection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
dbConnection.query(sql, (err, res) => {
  if (err) throw new Error(err);
  console.log('Books library tables has been initialised');
    
  const membersValues = [['John','Reese','john_r@gmail.com'], ['Harold', 'Finch', 'harold_r@gamil.com'], ['Samantha', 'Groves', 'samantha_g@gmail.com'], ['Lionel','Fusco', 'lionel_f@gmail.com'], ['Sameen', 'Shaw', 'sameen_s@gmail.com']];
  membersValues.forEach(element => {
    const insertsql = {
      text:"INSERT INTO members (first_name, last_name, email) VALUES ($1, $2, $3)",
      values: element
    };
    
    dbConnection.query(insertsql, (err, res) => {
      if (err) throw new Error(err);
      console.log('Values has been added to memebers table');
    });
  });

  const booksValues = [['Don Quixote', 2], ['In Search of Lost Time', 2], ['Ulysses', 3], ['The Odyssey', 3], ['War and Peace', 1], ['Hamlet', 5]];
  
  booksValues.forEach(element => {
    const insertsql = {
      text: "INSERT INTO members (book_name, book_owner_id) VALUES ($1, $2)",
      values: element
    };

    dbConnection.query(insertsql, (err, res) => {
      if (err) throw new Error(err);
      console.log('Values has been added to books table');
    });
  });

});
