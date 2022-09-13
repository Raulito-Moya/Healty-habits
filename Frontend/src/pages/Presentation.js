import React, { useEffect,useState } from 'react'
import { useStorage } from '../context/useStorage'
import './presentation.css'
import logIcon from '../img/hojas.svg'
import menuicon from '../img/menu-icon.svg'
import strong from '../img/presentation/strong.png'
import meat from '../img/presentation/meat.png'
import fitness from '../img/presentation/fitness.png'

export const Presentation = () => {

 const { changePath,setChangePath} =  useStorage()
  
 const [menu,setMenu] = useState(false)

 useEffect(()=> {
    setChangePath(true)
 },[])


  function displaymenu(){
        setMenu(!menu)
  }

  console.log('prsentation',changePath)
  return (
    <div className='presentation'>
    
       <header className='header'>
         <div className='headericon'>  
           <div>
             <img src={logIcon} className="icon" alt=""/>
          </div>
          <h1>Synergy Habits</h1>
         </div>
          <button type="click" onClick={displaymenu} className="iconbutton"><img className='menubutton' src={menuicon} alt=""/></button>
       </header>
 
       
         <ul className={menu ? 'navbar' : 'navbar-open'}>
           <li>Login</li>
           <li>Articles</li>
          
         </ul>
       
      

     <section >
      <video playsInline autoPlay muted loop poster=""  width="x" height="y">
        <source id='video'  src="https://res.cloudinary.com/dx33ki9ul/video/upload/v1663085896/15a597632545d96ce4bb9fab8c06ffb91e73cea0875b22c7f3ed983ba0549d81_vsviai.mp4"  type="video/mp4"/>
      </video> 
    </section>

    <section className="Section">
             <div className="InfoCards">
                <div className="Card">
                  <div className="CardContent">
                  <img src={fitness} alt="" className='cardimg' />
                    <h1>Hellodada adadac</h1>
                    <p>dadadasddadlkmddkldadadada dada sddas daddd</p>

                  </div>
                    
                </div>
                <div className="Card">
                   <div className="CardContent">
                      <img src={strong} alt=""/>
                     <h1>We make the difference</h1>
                     <p>dadadasddadlkmddkldadadada dada sddas daddd</p>
                   </div>
                
                </div>
                <div className="Card">
                <div className="CardContent"> 
                  <img src={meat} alt=""/>
                  <h1>We make the diference</h1>
                  <p>dkasndlasdsad d  ddladlandald adadljnadnladnad dalddnadnadan</p>
                </div>
                </div>
             </div>

            <hr />
           </section>
      </div>
  )
}
