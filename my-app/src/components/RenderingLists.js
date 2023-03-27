import React from "react"
import Book from "./Book"

function RenderingLists() {
    const booklist = [
        'To Kill a Mockingbird',
        'The Great Gatsby',
        'The Catcher in the Rye'
    ]

    const books = [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            pages: '285',
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            pages: '230',
        },
        {
            title: 'The Catcher in the Rye',
            author: 'J. D. Salinger',
            pages: '310',
        }
    ]

    return (
        <div>
            {booklist.map(book => {
                return <h2>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        <div>
                            <h5>{book.title}</h5>
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                books.map(book => {
                    return <Book book={book} />
                })
            }
        </div>
    )
}

export default RenderingLists