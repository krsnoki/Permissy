import '../styles/global.css'

import Login from './login'
import { useState, useEffect } from 'react'
// import svgSquare from '../assets/beautiful square.svg'
// import Footer from '../components/footer'
import stripy from '../assets/stripy.png'
function Hero() {
    const [ offsetY, setOffsetY ] = useState(0);

    useEffect(() => { 
    const handleScroll = () => setOffsetY(window.scrollY);
    return () => window.addEventListener('scroll', handleScroll);
}, [])

    
    return (
    <> 
        <div className='hero' style={{transform: `translateY(${offsetY * 0.5}px)`}}>
            <div>
                <img src={stripy} alt='hero' className='hero-img' style={{transform: `translateY(${offsetY * 0.5}px)`}}/>
            </div>
            <div className='text' style={{transform: `translateY(${offsetY * 0.8}px)`}}>
                <h1>Permissy</h1>
                <div className='subheading'><h3>Effortless Authorization, Simplified Permissions</h3></div>
            </div>
          
        </div>
        <Login/>
    </>
    )
}

export default Hero
