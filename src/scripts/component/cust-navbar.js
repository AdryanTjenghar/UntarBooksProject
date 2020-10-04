class custNavBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get value () {
    return this.querySelector('#searchElement').value
  }

  render () {
    this.innerHTML = `
      <header>
      <nav class="navbar fixed-top navbar-expand-md navbar-dark">
         <span class="navbar-brand h1">
           <i data-feather="layers"></i> Your Books Catalog
         </span>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
               <li class="nav-item">
                   <a class="nav-link" href="#title-page">
                       Book List
                   </a>
               </li>
               <li class="nav-item">
                   <a class="nav-link" href="#about-us">
                       About Us
                   </a>
               </li>
               <li>
                   <form class="form-inline w-80">
                       <input class="form-control p-30" size="95%" type="search" placeholder="Search Books" id="searchElement" aria-label="Search">
                       <button class="btn btn-outline-secondary" id="searchButtonElement" type="submit">
                           <i data-feather="search"></i>
                       </button>
                   </form>
               </li>
            </ul>
         </div>
      </nav>
      </header>
      `
    this.querySelector('#searchButtonElement').addEventListener('click',
      e => {
        e.preventDefault()
        this._clickEvent()
      })
  }
}

customElements.define('cust-navbar', custNavBar)
