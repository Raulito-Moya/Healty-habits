import { useState } from "react"

export const useHeader = () => {
   
   const [NavisOpen, setNavisOpen] = useState(false)
   const [BottomText, setBottomText] = useState('open')
   const [GoArticles, SetGoArticles] = useState(false)
   const [GoLogin, SetGoLogin] = useState(false)

   const openNav = () => {

      setNavisOpen(!NavisOpen)
      BottomText === 'open' ?
      setBottomText('cerrado') : setBottomText('open')

   }

   const openItem = (param) => {
     if(param === 'article'){
      console.log('article')
         SetGoArticles(!GoArticles)
     }

     if(param === 'login'){
        console.log('login')
      SetGoLogin(!GoLogin)
     }
    

   }

return{NavisOpen,openNav,BottomText, GoArticles,openItem,GoLogin}

}