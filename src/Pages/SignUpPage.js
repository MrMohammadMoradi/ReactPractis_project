import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import PastaDish from '../assets/images/Pasta.jpg'
import SocialMedia from '../components/SocialMedia'


function SignUpPage() {

    const [name, setName] = useState("")    
    const [email, setEmail] = useState("")
    const [phonNumber, setPhonNumber] = useState("")
    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")
    const [rePassWord, setRePassWord] = useState("")
    const [checked, setChecked] = useState(false)

    function SendData(e){
        e.preventDefault();
        console.warn("All Data",name,email,phonNumber, userName, passWord,rePassWord, checked)
    }

    
    return (
        <div className='SignUpPage d-flex'>
            <div className='SignupSecion bg-white d-flex my-5 mx-auto'>
                <div className='py-3'>
                    <h3 className='ps-5 fs-3'>
                        Sign In to 
                        <span className='fw-bold'> Foody</span> 
                    </h3>
                    <p className='px-5 text-secondary'>
                        Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                            adipisicing
                    </p>
                    <form className='ps-5' onSubmit={SendData} >
                        <input 
                            type='text' 
                            className='name fs-5 pe-5 ps-1 py-2 mx-auto mt-2 border-0 border-bottom' 
                            placeholder='Name' 
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        
                        <input 
                            type='email' 
                            className='eMail fs-5 pe-5 ps-1 py-2 mx-auto mt-2 border-0 border-bottom' 
                            placeholder='Email' 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input 
                            type='number' 
                            className='phonNumber fs-5 pe-5 ps-1 py-2 mx-auto mt-2 border-0 border-bottom' 
                            placeholder='Phon Number'
                            onChange={(e) => setPhonNumber(e.target.value)} 
                            required
                        />

                        <input 
                            type='text' 
                            className='userName fs-5 pe-5 ps-1 py-2 mx-auto mt-2 border-0 border-bottom' 
                            placeholder='Username' 
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />

                        <input 
                            type='password' 
                            className='passWord fs-5 pe-5 ps-1 py-2 mx-auto mb-2 border-0 border-bottom' 
                            placeholder='Password' 
                            onChange={(e) => setPassWord(e.target.value)}
                            required
                        />

                        <input 
                            type='password' 
                            className='rePassWord fs-5 pe-5 ps-1 py-2 mx-auto mb-2 border-0 border-bottom' 
                            placeholder='Repet Password' 
                            onChange={(e) => setRePassWord(e.target.value)}
                            required
                        />
                        <br/>

                        <input 
                            type='checkbox' 
                            className='checkBox py-5' 
                            onChange={(e) => setChecked(e.target.checked)}
                        />
                        <Link className='ps-2' 
                            to='/TAndP'>
                            Terms and privacy
                        </Link>

                        <br/>
                        <button 
                            type='submit' 
                            className='loginbtn bg-primary text-white border-0 my-3 px-5 py-3'
                            >
                            SignUp 
                        </button>
                        <br/>
                        <Link className='OS ps-1'
                            to='/User/Login'> 
                            Or Login
                        </Link>
                    </form>
                    <SocialMedia/>
                </div>
                <img className='pastaIMG SUI' 
                    src={PastaDish}
                    alt='PastaImg'/>
            </div>
            
        </div>
    )
}

export default SignUpPage