import {useSelector} from 'react-redux' 

import { selectEmail } from '../../Redux/Slice/authSlice'

export const ShowOnAdmin = ({children}) => {
    const isLoggedIn = useSelector(selectEmail)

    if(isLoggedIn === 'admin@gmail.com'){
        return children;
    }
}
export const ShowOnUser = ({children}) => {
    const isLoggedIn = useSelector(selectEmail)

    if(!(isLoggedIn === 'admin@gmail.com')){
        return children;
    }
}

