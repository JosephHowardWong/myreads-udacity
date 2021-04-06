import React, { Component } from 'react';
import Books from './Books'

class Shelf extends Component {
    
    render() {
        const { shelf, books, shelfChange } = this.props
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
}

export default Shelf