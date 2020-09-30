class PageNavigation extends HTMLElement {
    connectedCallback(){
      this.render()
    }
  
    render () {
      this.innerHTML = `
        <nav aria-label="Page navigation example" style="margin-top: 10px">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
          `
    }
  }
  
customElements.define('page-navigation', PageNavigation)
  