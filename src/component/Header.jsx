
export default function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light"  style={{ backgroundColor: '#222222' }}>
        <a class="navbar-brand" href="#"  style={{ color:'white' }}>LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item ">
              <a class="nav-link" href="#" style={{ color:'white' }}>Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color:'white' }}>Services</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#" style={{ color:'white' }}>Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color:'white' }}>contact</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      
    );
}