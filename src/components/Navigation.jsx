function Navigation(params) {
    return (
        <div>
          <nav className="container">
            <div className="logo">
              <img src="images/nike.jpg" height="30" width="50" alt="logo"/>
            </div>
    
            <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>
    
            <button>Login</button>
          </nav>
        </div>
      )
}

export default Navigation