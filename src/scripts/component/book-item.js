class BookItem extends HTMLElement {
  set book (book) {
    this._book = book

    this._img_src = book.volumeInfo.imageLinks.thumbnail
    this._title = book.volumeInfo.title

    if (book.volumeInfo.authors == undefined)
      this._author = "Tidak diketahui"
    else 
      this._author = book.volumeInfo.authors[0]

    if (book.volumeInfo.publishedDate == undefined) 
      this._date = "Tidak diketahui"
    else
      this._date = book.volumeInfo.publishedDate

    //this._desc = book.volumeInfo.description --unused

    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="card">
          <div class="card-body bg-secondary text-white border rounded">
            <div class="row">
              <div class="col">
                <img src="${this._book.volumeInfo.imageLinks.thumbnail}" class="img-fluid">
              </div>
              <div class="col">
                <h4>${this._title}</h4>
              </div>
            </div>
            
            <div class="row">
              <h6>${this._author} - ${this._date}</h6>
            </div>
            <!-- //unused karena desc beragam besarnya
            <div class="row">
              <p>${this._desc}</p>
            </div>-->
          </div>
        </div>
        `
  }
}

customElements.define('book-item', BookItem)