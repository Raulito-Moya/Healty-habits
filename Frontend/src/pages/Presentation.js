import React, { useEffect,useState } from 'react'
import { useStorage } from '../context/useStorage'
import './presentation.css'
import logIcon from '../img/hojas.svg'
import menuicon from '../img/menu-icon.svg'
import strong from '../img/presentation/strong.png'
import meat from '../img/presentation/meat.png'
import fitness from '../img/presentation/fitness.png'
import { Link } from 'react-router-dom'

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
 
       
         <ul className={!menu ? 'navbar' : 'navbar-open'}>
           <Link to={'/login'}>Login </Link >
           <Link to={'/articles'}>Articles</Link>
          
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
                    <h1>Good Habits in Life</h1>
                    <p>These are actions that you do every day that help create synergys in life with other areas or bettween them</p>

                  </div>
                    
                </div>
                <div className="Card">
                   <div className="CardContent">
                      <img src={strong} alt=""/>
                     <h1>+=======+</h1>
                         <h2>🌀</h2>  
                         <h2>SYNERGY</h2> 
                     <h1> ======= </h1>
                   </div>
                
                </div>
                <div className="Card">
                <div className="CardContent"> 
                  <img src={meat} alt=""/>
                  <h1>Invest your Energy</h1>
                  <p>Where you dicede put your energy and free time </p>
                </div>
                </div>
             </div>

            <hr />
           </section>
      </div>
  )
}
