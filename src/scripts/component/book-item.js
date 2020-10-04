class BookItem extends HTMLElement {
  set book (book) {
    this._book = book

    this._img_src = book.volumeInfo.imageLinks.thumbnail
    this._title = book.volumeInfo.title

    if (book.volumeInfo.authors == undefined)
      this._author = "Unknown"
    else 
      this._author = book.volumeInfo.authors[0]

    if (book.volumeInfo.publishedDate == undefined) 
      this._date = "Unknown"
    else
      this._date = book.volumeInfo.publishedDate

    if (book.volumeInfo.description == undefined) 
      this._desc = "Unknown"
    else
      this._desc = book.volumeInfo.description 
    //this._desc = book.volumeInfo.description --unused 

    this.render()
  }

  render () {
    this.innerHTML = `
        <hr>
        <div class="card shadow">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <img src="${this._book.volumeInfo.imageLinks.thumbnail}" class="card-img">
              </div>
              <div class="col">
                <h4 class="card-title">${this._title}</h4>
                <hr>
                <p class="card-text">${this._desc}</p>
              </div>
            </div>
            
            <div class="row">
              <h6 class="card-made">${this._author} (${this._date})</h6>
            </div>
            
          </div>
        </div>
      `
  }
}

customElements.define('book-item', BookItem)