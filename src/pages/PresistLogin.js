import {Outlet} from 'react-router-dom'
import {react,useEffect,useContext,useState} from 'react'

import {AuthContext} from '../AuthProvider'


const PresistLogin =()=>{
    const {userToken,setUserToken,setUserData,userData}= useContext(AuthContext);
    const [isloading,setIsLoading] = useState(true);
  

    useEffect(() => {

        const tokenGet = () =>{
            console.log("hello")
            const strtoken = window.localStorage.getItem('userToken');
            const strdata = window.localStorage.getItem('userData');
            const token = JSON.parse(strtoken);
            const data = JSON.parse(strdata);
            console.log(token)
            setUserToken(token)
            setUserData(data)
            setIsLoading(false)
        }
      

        
    userToken && userData ? setIsLoading(false):tokenGet()
     
    }, [])

    return (
        <>
        {isloading  
            ? <div id="cover-spin"></div>
            :<Outlet/>
         }
    </>
    )

    
}

export default PresistLogin
