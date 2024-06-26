import {createContext,useEffect,useState} from "react";


export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState()
    const [userData, setUserData] = useState()
    const [enquiry_id,setEnquiry_id] = useState("")
    const [HomePage, setHomePage] = useState({
      testimonial:[],
      city:[],
      gallery:[]
    })
    
  //   const initialFetch = {
  //     loading: false,
  //     success: false,
  //     error: false,
  //     response: false
  // // }
  // const fetchReducer = (state, action) => {
  //     switch (action.type) {
  //         case 'setLoading': return { ...state, loading: action.value }
  //         case 'setSuccess': return { ...state, success: action.value }
  //         case 'setError': return { ...state, error: action.value }
  //         case 'setResponse': return { ...state, response: action.value }
  //         case 'reset': return initialFetch
  //         default: return state
  //     }
  // }








  return (
    <>
  <AuthContext.Provider value={{userToken,setUserToken,userData,setUserData,enquiry_id,setEnquiry_id,HomePage,setHomePage}}>
        {children}
        </AuthContext.Provider>

    </>
  )
}

export default AuthProvider