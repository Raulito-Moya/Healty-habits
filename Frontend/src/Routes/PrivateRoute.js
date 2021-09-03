import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoute = ({ isLoged, component:Component,  ...rest}) => {
//console.log(isLoged);
  return(
     <Route {...rest}
       component={ (props) => (isLoged) ? (<Component {...props}/>) : (<Redirect to='/'/>) }/>
  )

}