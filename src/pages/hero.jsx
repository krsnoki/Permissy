import '../styles/global.css'
import Navbar from '../components/navbar'
import Login from './login'
import Footer from '../components/footer'


function Hero() {
    return (
    <> <Navbar/>
        <div className='hero'>
            <div className='text'>
                <h1>Permissy</h1>
                <div className='subheading'><h3>Effortless Authorization, Simplified Permissions</h3></div>
            </div>
        </div>
        <Login/>
        <Footer />
    </>
    )
}

export default Hero
