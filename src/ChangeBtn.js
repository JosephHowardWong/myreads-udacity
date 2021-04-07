import React from 'react'
import PropTypes from 'prop-types'

const ChangeBtn = ({ shelfChange, book }) => {

    const handleChange = (e) => {
        e.preventDefault()
        shelfChange(book, e.target.value )
    }
    
    return (
        <div className="shelf-change">
            <label>Change Shelves?</label>
            <select value={book.shelf} onChange={(e) => handleChange(e)} >
                <option value="move" disabled>Change Shelves ??</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

ChangeBtn.propTypes = {
    shelfChange: PropTypes.func,
    book: PropTypes.object
}

export default ChangeBtn