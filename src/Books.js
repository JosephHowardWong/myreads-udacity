import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

const Books = ({ shelfChange, books, shelf }) => {

    return (
        <ul className="books">
            {books.map(book => (
                <Book 
                    key={book.id}
                    image={book.imageLinks} 
                    title={book.title} 
                    authors={book.authors} 
                    book={book}
                    shelfChange={shelfChange}
                    shelf={shelf} 
                />
            ))}
        </ul>
    )
}

Books.propTypes = {
    shelfChange: PropTypes.func,
    books: PropTypes.array,
    shelf: PropTypes.string
}

export default Books