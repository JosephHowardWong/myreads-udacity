import React from 'react';
import PropTypes from 'prop-types';
import ChangeBtn from './ChangeBtn'

const Book = ({ image, title, authors, shelf, shelfChange, book }) => {

    return (
        <div>
            <li className="book">
                {!image ? <h3>No Image available</h3> 
                : <img src={image} className="bookCover" alt="cover of book" />
                }
                <h3>{title}</h3>
                <div className="author-sec">
                    <p>Written By:</p>
                    {authors.map(author => <h3 key={author} >{author}</h3>)}
                </div>
                <ChangeBtn shelf={shelf} shelfChange={shelfChange} book={book} />
            </li>
        </div>
    )
}

Book.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.array,
    shelf: PropTypes.string,
    shelfChange: PropTypes.func,
    book: PropTypes.object
}

export default Book