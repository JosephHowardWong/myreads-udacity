import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import BookShelf from './BookShelf'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(backBooks => {
      const shelfBooks = backBooks.map(book => {
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
        rObj["shelf"] = book.shelf
        rObj["id"] = book.id
        return rObj
      })
      this.setState(() => ({books: shelfBooks}))
    })
  }
  
  shelfChange = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(res => {
      if(shelf !== "none") {
        this.setState(prevState => ({ 
          books: [...prevState.books.filter(bk => bk.id !== book.id ), book]
        }))
      } else {
        this.setState(prevState => ({ 
          books: [...prevState.books.filter(bk => bk.id !== book.id )]
        }))
      }
    })
  }

  render() {
    return (
      <>
        <Router>

          <h1 className="my-reads">My Reads</h1>
          
          <Route exact path='/' render={ (props) => (<BookShelf {...props} books={this.state.books} shelfChange={this.shelfChange} />)} />
          <Route path='/search' render={ (props) => (<SearchPage {...props} books={this.state.books} shelfChange={this.shelfChange} />) }/>
          
        </Router>
      </>
    )
  }
}

export default App
