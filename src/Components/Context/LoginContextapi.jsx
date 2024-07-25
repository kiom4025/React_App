import { createContext, useState } from "react";

/* 
Context API Understandings:
From the code below the two important export to make the context API concept to work are,
1. LoginContextapi - Actual react component for Context API
2. LoginProvider - A function which holds all the state variables, functions & 
    returns the "LoginContextapi" property 'Provider' with it value as a list of functions and variables.
    That is wrapped around the 'childern' passed into the "LoginProvider" function.
    In this case the 'childern' are the components that are wrapped using "LoginProvider" on the 'App.js' file.

The value that are passed into the provider (i.e., LoginContextapi.Provider) are available 
to all the siblings and children's of the wrapped components on the 'App.js' file.

To use these values in the childern or siblings the following steps has to be done 
in the children or sibling that needs access to these values or functions,

1. import "LoginContextapi"
    ex: import { LoginContextapi } from '../Components/Context/LoginContextapi';

2. Fetch all required variables and functions using 'useContext' hook.
    ex: const {checkLogin, currentUser, Logout}=useContext(LoginContextapi);

*/
const initialLoggedInState = localStorage.getItem('isloggedIn') === 'true';
const initialUserState = localStorage.getItem('isAdmin') === 'true';

export const LoginContextapi = createContext();

export function LoginProvider({ children }) {
    const [checkLogin, setLogin] = useState(initialLoggedInState);
    const [adminCheck, setAdmin] = useState(initialUserState);
    const currentUser = localStorage.getItem('user');


    function Login(values) {
        if (values.username === 'admin' && values.password === 'admin') {
            setLogin(true);
            localStorage.setItem('isloggedIn', 'true');
            setAdmin(true);
            localStorage.setItem('isAdmin', 'true');

            localStorage.setItem('user', values.username);
        }
        else if (values.username === 'moki' && values.password === 'moki') {
            setLogin(true);
            localStorage.setItem('isloggedIn', 'true');
            setAdmin(false);
            localStorage.setItem('isAdmin', 'false');

            localStorage.setItem('user', values.username);   
        }
        else {
            alert("Credential doesn't Match");
        }
    }
    function Logout() {
        setLogin(false);
        localStorage.setItem('isloggedIn', 'false');
    }
    return (
        <LoginContextapi.Provider value={{ checkLogin, currentUser, adminCheck, Login, Logout }}>
            {children}
        </LoginContextapi.Provider>
    );
};