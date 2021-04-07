import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class SearchPage extends Component {
    
    state = {
        query: "",
        books: []
    }
    
    handleChange = async (e) => {

        this.setState(() => ({ query: e }))

        const booksBack = await BooksAPI.search(e)
        
        if(booksBack === undefined || booksBack.length < 1 || booksBack.items < 1) {
            this.setState(() => ({ books: [] }))
        } else {
            const booksMax20 = booksBack.map(book => {
                let rObj = {}

                if(book.authors) {
                    rObj["authors"] = book.authors
                } else {
                    rObj["authors"] = ["missing author info"]
                }
                if(book.imageLinks) {
                    rObj["imageLinks"] = book.imageLinks.thumbnail
                } else {
                    rObj["imageLinks"] = ""
                }
                
                rObj["title"] = book.title
                rObj["id"] = book.id

                let [ bookOnShelf ] = this.props.books.filter(bk => bk.id === book.id)
                if(bookOnShelf) {
                    rObj["shelf"] = bookOnShelf.shelf
                } else {
                    rObj["shelf"] = "none"
                }
                bookOnShelf = ""
                
                return rObj
            })
            this.setState(() => ({ books: booksMax20 }))
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const { shelfChange } = this.props
        return (
            <div className="search-page">
                <h1 className="search-title">search page display</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <label>Search Books</label>
                    <input type="text" value={this.state.query} onChange={(e) => this.handleChange(e.target.value)}/>
                </form>

                {this.state.books.length > 0 
                ? 
                this.state.query && <Books shelfChange={shelfChange} books={this.state.books} className="books" />
                : 
                this.state.query && "Invalid search terms, please try again"
                }
                
                <Link to='/'>
                    <button>Go Back</button>
                </Link>
            </div>
        )
    }
}

SearchPage.propTypes = {
    shelfChange: PropTypes.func,
    books: PropTypes.array
}

export default SearchPage