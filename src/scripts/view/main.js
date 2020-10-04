import '../component/cust-navbar.js'
import '../component/book-list.js'
import DataSource from '../data/data-source.js'

function main () {
  // icon in web
  const feather = require('feather-icons')
  // search
  const bookListElement = document.querySelector('book-list')
  const searchElement = document.querySelector('cust-navbar')
  const onButtonSearchClicked = async () => {
    try {
      const responseJson = await DataSource.searchBook(
        searchElement.value)
      renderAllBooks(responseJson.items)
      renderTitleSearch()
    } catch (message) {
      fallbackResult(message)
    }
  }
  // getbooks
  const getBook = async () => {
    try {
      const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=Novel&maxResults=30`
      )
      const responseJson = await response.json()
      if (responseJson.error) {
        showResponseMessage(responseJson.status_message)
      } else {
        renderTitlePop()
        renderAllBooks(responseJson.items)
      }
    } catch (error) {
      showResponseMessage(error)
    }
  }
  const renderAllBooks = (items) => {
    bookListElement.books = items
  }
  const renderTitlePop = () => {
    const titleElement = document.querySelector('#title-page')
    titleElement.innerHTML = '<h1 id="title1">Novel Books</h1>'
  }
  const renderTitleSearch = () => {
    const titleElement = document.querySelector('#title-page')
    titleElement.innerHTML = '<h1>Find Results</h1>'
  }
  const showResponseMessage = (message =
  'Check your internet connection') => {
    alert(message)
  }
  const fallbackResult = message => {
    bookListElement.renderError(message)
  }
  document.addEventListener('DOMContentLoaded', () => {
    getBook()
  })
  searchElement.clickEvent = onButtonSearchClicked
  feather.replace()
}
export default main
