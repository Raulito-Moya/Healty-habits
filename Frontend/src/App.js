import React, { lazy, Suspense, useEffect } from 'react'
import { Route,
        HashRouter as Router, Switch, useLocation } from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import styled from "styled-components"
import Header from './components/Header/Header'
import Articles from './components/Articles/Articles'
import ExercisesArticles from './components/Articles/ExerciseArticles'
import HealtyFoodArticle from './components/Articles/HealthyFoodArticles'
import { useStorage } from './context/useStorage'
import ScrollToTop from './components/UX/ScrollToUp'
import { LoginScreen } from './components/Auth/LoginScreen'
import { SignUpScreen } from './components/Auth/SignUpScreen'
import CreateArticle from './components/Articles/CreateArticle'



const App = ()=>{

  const AppStyled = styled.div`
   display: flex;
   flex-flow: column;
   height: 100%;
   justify-content: space-between;
   align-content: space-between;
  `

/*const Articles = lazy(()=> import('./components/Articles/Articles'))
const ExercisesArticles = lazy(() => import('./components/Articles/ExerciseArticles'))
const HealtyFoodArticle = lazy(() => import('./components/Articles/HealthyFoodArticles') )
*/

let url = window.location.hash
 useEffect(()=> {
  url = window.location.hash
console.log(url)
 },[])

 const {changePath} = useStorage()



return ( 

<ThemeProvider theme={
  {
   lightGreen: 'rgb(18, 228, 18)',
   darkGreen: 'rgb(0, 150, 62)',
   prettyGray: 'rgb(241, 222, 222)',
   lightBlue: 'rgb(95, 224, 241)',
   darckTextShadow:'  -2px -1px 0 #000',
   whiteTextShadow:'  -2px -1px 0 #fff',
   lightTextShadow:'-1px 1px 1px #000',
   lightBoxShadow:'1px 1px 5px #00000057',
   darckBoxShadow:'2px 4px 14px 6px rgb(23 23 23 / 36%);',
   fontTextColor:'rgba(211, 211, 211, 0.829)'
   
  }

}>



<Router>
 
    {!changePath  && (
     <Header/>)}
     <ScrollToTop/>
  
     <Switch>
        <Route path="/login"  component={LoginScreen}/>
        <Route path="/signup" component={SignUpScreen}/>
        <Route path="/" exact  component={Articles} />
        <Route path="/articles/exercises"   component={ExercisesArticles} />
        <Route path="/articles/healthyfood"   component={HealtyFoodArticle} />
        <Route path="/articles/createarticle"   component={CreateArticle} />
        <Route path = "*" component={Articles} />
     </Switch>




  
</Router> 
 
 
</ThemeProvider>
)
}

export default App