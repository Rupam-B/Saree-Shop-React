


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getLocalUserDetails = () => {
    let localUserSareeDetails = localStorage.getItem("localStoredSareeUserDetails");
    if (localUserSareeDetails) {
      return JSON.parse(localUserSareeDetails)
    } else {
      return [];
    }
  };
  const getLocalUserCheck = () => {
    let localUserSareeCheck = localStorage.getItem("localStoredSareeUserCheck");
    if (localUserSareeCheck) {
      return JSON.parse(localUserSareeCheck)
    } else {
      return [];
    }
  };

const AutheninitialState = {
    sendArr : getLocalUserDetails(),
    checkArr : getLocalUserCheck()
}

const AuthenticationReducer = (state=AutheninitialState, action)=>{

    const UserDetails = action.payload

    

    if(action.type==="SIGN-UP"){
        console.log(AutheninitialState.sendArr ,'stateArr')

        if(UserDetails.newname ===''|| UserDetails.email ===''|| UserDetails.password ===''){
            toast.error("Please Provide Valid Credentials");
        }
        else {
            toast.success('Signed Up succesfully ! Please LogIn')
        return {
            ...state,
            sendArr:[...state.sendArr, UserDetails]
            
        };
        
    }
    }
    if(action.type==="LOG-IN"){

        const findArr = [...state.sendArr]
        const passArr = findArr.find((items)=>items.email===UserDetails.email&& items.password === UserDetails.password)

        console.log(AutheninitialState.checkArr, 'stateCheckArr')

        if(passArr===undefined){
            toast.error('Please Provide Valid Credentials')
            return state

        }
        else{
            toast.success('Log In Succesfull !')
            window.location.assign("/")
        return {
            ...state,
            checkArr:passArr
        }
    }
    }
     if(action.type==="LOG-OUT"){
      toast.success('Logged Out Succesfully!')

        return {
            ...state,
            checkArr:[]
        }
    }
    
    
    else {
        return state;
    }
}






export default AuthenticationReducer;