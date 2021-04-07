import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books'

const Shelf = ({ shelf, books, shelfChange }) => {

    const shelfBooks = books.filter(book => book.shelf === shelf)
    // Only Books belonging to particular shelf
    return (
        <div className="shelf">
            <h1>{shelf}</h1>
            {shelfBooks.length > 0 ?
            <Books shelfChange={shelfChange} books={shelfBooks} shelf={shelf} />
            : "No Books on this shelf"}
        </div>
    )
}

Shelf.propTypes = {
    shelf: PropTypes.string,
    books: PropTypes.array,
    shelfChange: PropTypes.func
}

export default Shelf