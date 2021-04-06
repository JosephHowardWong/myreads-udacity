import React, { Component } from 'react';
import Book from './Book'

class Books extends Component {

    render() {
        const { shelfChange, books, shelf } = this.props
        return (
            <ul className="books">
                {books.map((book, index) => (
                    <Book 
                        key={index}
                        image={book.imageLinks} 
                        title={book.title} 
                        authors={book.authors} 
                        shelf={shelf} 
                        shelfChange={shelfChange}
                        book={book}
                    />
                ))}
            </ul>
        )
    }
}

export default Books