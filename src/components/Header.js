import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector} from "react-redux";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSlice";
import {SUPPORTED_LANGUAGES} from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector(store=>store.gpt.showGPTSearch)
  const handleGPTSearchClick = () =>{
   // Toggle GPT Search button
   dispatch(toggleGptSearchView);
  }
  const handleLanguageChange= (e) =>{
 dispatch(changeLanguage(e.target.value));
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });

        return () => unsubcribe();
      }, []);
// unsubscribed when component unmount
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (<select className="p-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=><option key ={lang.identifier}value="en">English</option>)}
            
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
          </select>)}
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGPTSearchClick}>{showGPTSearch? "HomePage":"GPT SEARCH"}</button>
          
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;