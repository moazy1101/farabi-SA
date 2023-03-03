import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import alanBtn from '@alan-ai/alan-sdk-web'
import {useEffect} from 'react';


const Header=()=> {
    const location = useLocation();
    const navigate = useNavigate();
    const pathMatchRoute=(route)=>{
        if(route===location.pathname){
            return true;
        }
    }
    
    const alanKey = 'faa7cebf9173f5719f11d7645d73852a2e956eca572e1d8b807a3e2338fdd0dc/stage'
    // const navigate = useNavigate();
  
    
      useEffect(()=>{
        alanBtn({
          key:alanKey , 
          onCommand:({command})=>{
            if(command==='Home'){
              navigate("/")
            }
            else if(command==='Profile'){
              navigate("/Profile")
            }
            else if(command==='Forgot-password'){
              navigate("/Forgot-password")
            }
            else if(command==='Sign-up'){
              navigate("/Sign-up")
            }
            else if(command==='Sign-in'){
              navigate("/Sign-in")
            }
            else if(command==='Offers'){
              navigate("/Offers")
            }
          }
        })
      },[])



  return (
    <div className="shadow-sm bg-white border-b sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div onClick={()=>navigate("/")} className="cursor-pointer flex justify-between items-center">
                <img src="logo.png" alt="logo" className="h-12"/>
                <h3 className="text-red-600 font-bold text-xl">FARABI</h3>
            </div>
            <div>
                <ul className="flex space-x-10 ">
                    <li className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${pathMatchRoute("/") && "text-black border-b-red-500" }`}
                    onClick={()=>navigate("/")}
                    >Home</li>
                    <li className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${pathMatchRoute("/Offers") && "text-black border-b-red-500" }`}
                    onClick={()=>navigate("/Offers")}
                    >Offers</li>
                    <li className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent
                    ${pathMatchRoute("/Sign-in") && "text-black border-b-red-500" }`}
                    onClick={()=>navigate("/Sign-in")}
                    >SignIn</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header