import PropTypes from 'prop-types';
import { createContext } from "react";

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {
    const authInfo = {name: 'nodi sagor khal bil'};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}



/*  

1. create context and export it
2. set provider with value
3. use the auth provider in the main.jsx file
4. access children inthe AuthProvider component as children and use it in the middle of the provider
5. 

*/