import FoodDish from '../assets/images/foodDish.svg'

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid bg-dark ">
                <a className="navbar-brand ms-4" href="#">
                    <img src={FoodDish} alt = 'logoImage'/>
                </a>
                
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='d-flex mx-auto'>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold text-white mx-4" href="#">Advance Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold text-white" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="d-flex">
                        <a href='##'> <button className="btn text-white bg-info px-4 mx-2 rounded-pill" type="submit">Log In</button> </a>
                        <a href='###'> <button className="btn text-white bg-primary px-4 rounded-pill" type="submit">Sign Up</button> </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;