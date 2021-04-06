import React, { Component } from 'react'

class ChangeBtn extends Component {
    
    state = {
        shelf: "move"
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ shelf: e.target.value })
        this.props.shelfChange(this.props.book, e.target.value )
    }
    
    render() {
        return (
            <div className="shelf-change">
                <label>Change Shelves?</label>
                <select value={this.props.book.shelf} onChange={(e) => this.handleChange(e)} >
                    <option value="move" disabled>Change Shelves ??</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ChangeBtn