// import Hero from './pages/hero'
// import Footer from './components/footer'
// import Navbar from './components/navbar'
// import About from './pages/About'
// import { Router, Routes, Route } from 'react-router-dom'
// import Login from './pages/login'

// function App() {

//     return (
//         <Router>
//             <Navbar />
//             <Hero />
//             <Routes>
//                 <Route exact to='/#about' element={<About />} />
//                 <Route exact to= '#login' element= {<Login/>}/>
//                 {/* <Login /> */}
//             </Routes>

//             <Footer />
//         </Router>
//     )
// }

// export default App


import Hero from './pages/hero'
import Footer from './components/footer'
import Navbar from './components/navbar'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'

function App() {
    return (
        <div>
            <Navbar/>
            <Hero />
            <About/>
            <Footer />
    </div>
    )
}

export default App

