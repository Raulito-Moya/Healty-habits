import { useState } from "react"

export const useHeader = () => {
   
   const [NavisOpen, setNavisOpen] = useState(false)
   const [BottomText, setBottomText] = useState('open')
   const [GoArticles, SetGoArticles] = useState(false)

   const openNav = () => {

      setNavisOpen(!NavisOpen)
      BottomText === 'open' ?
      setBottomText('cerrado') : setBottomText('open')

   }

   const openArticles = () => {
     
     SetGoArticles(!GoArticles)

   }

return{NavisOpen,openNav,BottomText, GoArticles,openArticles}

}