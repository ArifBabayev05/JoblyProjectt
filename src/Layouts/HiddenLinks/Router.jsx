import {useSelector} from 'react-redux' 
import { Route } from 'react-router-dom'
import Admin from '../../Pages/Admin'
import { selectEmail } from '../../Redux/Slice/authSlice'

export const ShowOnAdmin = ({children}) => {
    const isLoggedIn = useSelector(selectEmail)

    if(isLoggedIn == 'admin@gmail.com'){
        return children;

    }
    
    //    else{
    //     // return null
    //    }
}
export const ShowOnUser = ({children}) => {
    const isLoggedIn = useSelector(selectEmail)

    if(isLoggedIn){
        return children;
    }
    
        // return null;
}

