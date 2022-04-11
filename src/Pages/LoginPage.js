import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import PastaDish from '../assets/images/Pasta.jpg'
import SocialMedia from '../components/SocialMedia'

function LoginPage() {
    
    const [userName, setUserName] = useState("")
    const [passWord, setPassword] = useState("")
    const [checked, setChecked] = useState(false)

    function handelData(e){
        e.preventDefault();
        console.warn("All Data", userName, passWord, checked)
    }


    return (
        <div className='LoginPage'>
            <div className='LoginSecion bg-white d-flex my-5 mx-auto'>
                <div className='py-3'>
                    <h3 className='ps-5'> Login In to Foody </h3>
                    <p className='px-5 text-secondary'>
                        Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                            adipisicing
                    </p>
                    <form onSubmit={handelData} className='ps-5'>
                        <input 
                            type='text' 
                            className='userName pe-5 ps-1 py-2 mx-auto mt-2 border-0 border-bottom' 
                            placeholder='Username' 
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />

                        <br/>

                        <input 
                            type='password' 
                            className='passWord pe-5 ps-1 py-2 mx-auto mb-2 border-0 border-bottom' 
                            placeholder='Password' 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <br/>

                        <input 
                            type='checkbox' 
                            className='checkBox pe-2' 
                            onChange={(e) => setChecked(e.target.checked)}
                        />
                        <span className='ps-2'>
                            Remmember Me or Forget Password 
                        </span>

                        <br/>

                        <button 
                            type='submit' 
                            className='loginbtn bg-primary text-white fs-5 border-0 my-3 px-5 py-3'
                        >
                            Login 
                        </button>
                        <br/>
                        <Link className='OS ps-1'
                            to='/User/SignUp'> 
                            Or SignUp
                        </Link>
                    </form>
                    
                    <SocialMedia/>
                </div>   
                <img className='pastaIMG' src={PastaDish} alt='pasta'/>

                
            </div>
        </div>
    )
}

export default LoginPage