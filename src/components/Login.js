import React,{useState} from 'react'
import Header from './Header'
const Login = () => {
const [isSignInForm,setIsSignInForm] = useState(true);
const toggleSignInForm = () =>{
 setIsSignInForm(!isSignInForm);
};
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="backgound"/>
        </div>
        <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        {!isSignInForm && (<input type="text" placeholder="FullName"  className='p-2 my-4 w-full bg-gray-700'/>)}
        <input type="text" placeholder="Email Address"  className='p-2 my-4 w-full bg-gray-700'/>
        <input type="password" placeholder="Password"  className='p-2 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "New to NetFlix? Sign up Now":"Already registered? Sign in Now"}</button>
        <p className='py-4 cursor-pointer'onClick ={toggleSignInForm}>New to NetFlix? Sign up Now </p>
    </form>
    </div>
    
  )
}

export default Login