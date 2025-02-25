/**
 * Collect Data
 * Validate Data
 * Store Data
 * Display Data
 */

/**Build class to collect data */
class Book {
    constructor(bookTitle, bookAuthor, bookFormat, yrReleased, category, genre) {
        this.bookInfo = {
            bookTitle: bookTitle,
            bookAuthor: bookAuthor,
            bookFormat: bookFormat,
            yrReleased: parseInt(yrReleased),
            category: category,
            genre: genre
        }
    }

    returnGenres() {
        this.bookInfo.genre.forEach(item => {
            console.log(item)
        })
    }

    getDescription(bookTitle, bookAuthor, yrReleased) {
        return `${bookTitle} is a work by ${bookAuthor} first released in ${yrReleased}`
    }
}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    // console.log('click')
    let obj = {}

    obj = {...getInfo()}

    const book = new Book(
        obj.title, obj.author, 
        obj.bookFormat, 
        obj.year, 
        obj.category, 
        obj.genres
    )
    console.log(book)
})

const getInfo =()=> {
    const title = document.getElementById('bookTitle').value
    const author = document.getElementById('bookAuthor').value
    const year = document.getElementById('yrReleased').value

    const bookFormat = document.querySelector('input[name="bookFormat"]:checked').value

    const category = document.querySelector('input[name="category"]:checked').value

    const bookGenres = document.querySelectorAll('input[name="genres"]')

    let genres = []

    bookGenres.forEach(item => item.checked ? genres = [...genres, item.value] : null)

    return { title, author, year, bookFormat, category, genres}
}