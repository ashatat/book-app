BEGIN;

DROP TABLE IF EXISTS members, books. reservations CASCADE;

CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  book_name TEXT NOT NULL,
  book_owner_id FOREIGN KEY REFERENCES members(id)
);

CREATE TABLE reservations (
  id SERIAL,
  book_id FOREIGN KEY REFERENCES books(id),
  member_id FOREIGN KEY REFERENCES members(id),
  reserve_date DATE NOT NULL,
  PRIMARY KEY (book_id, reserve_date)
);

COMMITdate ;