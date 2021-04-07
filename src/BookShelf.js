import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Shelf from './Shelf'

const BookShelf = ({ books, shelfChange }) => {

    return (
        <div className="bookShelf">

            <h1 className="main-title">BookShelf display</h1>
            {/* hard coded the values of the shelves here */}
            <Shelf books={books} shelfChange={shelfChange} shelf={"currentlyReading"} />
            <Shelf books={books} shelfChange={shelfChange} shelf={"wantToRead"} />
            <Shelf books={books} shelfChange={shelfChange} shelf={"read"} />
            
            <Link to="/search" >
                <button>Search Books</button>
            </Link>
            
        </div>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array,
    shelfChange: PropTypes.func,
}

export default BookShelf



