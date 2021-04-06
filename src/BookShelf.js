import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class BookShelf extends Component {
    
    render() {
        const { books, shelfChange } = this.props
        return (
            <div className="bookShelf">

                <h1 className="main-title">BookShelf display</h1>
                
                <Shelf books={books} shelfChange={shelfChange} shelf={"currentlyReading"} />
                <Shelf books={books} shelfChange={shelfChange} shelf={"wantToRead"} />
                <Shelf books={books} shelfChange={shelfChange} shelf={"read"} />
                
                <Link to="/search" >
                    <button>Search Books</button>
                </Link>
                
            </div>
        )
    }
}

export default BookShelf



