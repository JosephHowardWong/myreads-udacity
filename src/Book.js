import React, { Component } from 'react';
import ChangeBtn from './ChangeBtn'

class Book extends Component {

    render() {
        const { image, title, authors, shelf, shelfChange, book } = this.props;
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
}

export default Book