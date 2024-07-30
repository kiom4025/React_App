import { createContext, useState } from "react";
import {
    DesktopOutlined,
    UserOutlined,
    PlusCircleOutlined,
    DashboardOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { message } from "antd";

const initialLoggedInState = localStorage.getItem('isloggedIn') === 'true';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items_Default = [
    getItem(<Link to="/">Dashboard</Link>, "1", <DashboardOutlined />),
    getItem(<Link to="/courses">Courses</Link>, '2', <DesktopOutlined />),
    getItem(<Link to="/assignments">Assignments</Link>, '3', <UserOutlined />),
];

export const LoginContextapi = createContext();

export function LoginProvider({ children }) {
    const [checkLogin, setLogin] = useState(initialLoggedInState);
    const [items, setSidemenu] = useState(items_Default);
    const currentUser = localStorage.getItem('user');

    function modifySidemenu(username) {
        if (username === 'admin') {
            var newSidemenuList = [...items_Default, getItem(<Link to="/editContent">Add / Modify</Link>, '4', <PlusCircleOutlined />)]
            console.log(newSidemenuList);
            return newSidemenuList;
        } else {
            console.log(items_Default);
            return items_Default;
        }
    }

    function Login(values) {
        if (values.username === 'admin' && values.password === 'admin') {
            setLogin(true);
            localStorage.setItem('isloggedIn', 'true');
            setSidemenu(modifySidemenu(values.username));
            localStorage.setItem('user', values.username);
        }
        else if (values.username === 'moki' && values.password === 'moki') {
            setLogin(true);
            localStorage.setItem('isloggedIn', 'true');
            setSidemenu(modifySidemenu(values.username));
            localStorage.setItem('user', values.username);
        }
        else {
            // alert("Credential doesn't Match");
            message.error("Credential doesn't Match");
        }
    }

    function Logout() {
        setLogin(false);
        localStorage.setItem('isloggedIn', 'false');
        localStorage.removeItem('user');
    }
    return (
        <LoginContextapi.Provider value={{ checkLogin, currentUser, items, Login, Logout }}>
            {children}
        </LoginContextapi.Provider>
    );
};


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