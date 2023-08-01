import '../styles/global.css'

import Login from './login'
// import svgSquare from '../assets/beautiful square.svg'
// import Footer from '../components/footer'


function Hero() {
    return (
    <> 
        <div className='hero'>
            <div className='text'>
                <h1>Permissy</h1>
                <div className='subheading'><h3>Effortless Authorization, Simplified Permissions</h3></div>
            </div>
          
        </div>
        <Login/>
    </>
    )
}

export default Hero
