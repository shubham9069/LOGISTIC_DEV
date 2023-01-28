import axios from 'axios';
import { useContext } from 'react';
import {AuthContext} from './AuthProvider'



export default  axios.create({
    baseURL: "https://shopninja.in/anurag/budgetlogistics/api/user/",
   
})
