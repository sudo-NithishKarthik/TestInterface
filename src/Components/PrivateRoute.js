import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../Contexts/Authcontext'

 const PrivateRoute = ({component: Component, ...rest}) => {

    const {currentUser} = useAuth()
    return (
      <Route {...rest} render= {props => ( currentUser? <Component {...props} /> : <Redirect to="/signup" />) } />
    )
}
export default PrivateRoute
