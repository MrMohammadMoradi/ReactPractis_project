import FoodDish from '../assets/images/foodDish.svg'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid bg-dark ">
                <Link className="navbar-brand ms-4" to="/home">
                    <img src={FoodDish} alt = 'logoImage'/>
                </Link>
                
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='d-flex mx-auto'>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold text-white" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold text-white mx-4" to="/Search/Advance">Advance Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold text-white" to="/About">About</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="d-flex">
                        <Link to='/User/Login'> <button className="btn text-white bg-info px-4 mx-2 rounded-pill" type="submit">Log In</button> </Link>
                        <Link to='/User/SingUp'> <button className="btn text-white bg-primary px-4 rounded-pill" type="submit">Sign Up</button> </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;