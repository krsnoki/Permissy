import { Link } from 'react-router-dom'
import '../styles/fdashboard.css'

function Fdashboard() {
    return (
        <div className='Fdashboard'>
            <div className='head'>
                <h1>Dashboard</h1>
            </div>
            <div className='dashboard'>
                <div className='sidebar'>
                    <div className='profile-area'>
                        <div className='profile-pic'>
                            {/* circular picture for profile */}
                        </div>
                        <div className='profile-name'>
                            <h2>John Doe</h2>

                            {/* border down solid 1 pt with low opacity */}
                        </div>
                        <div className='menu'>
                            <ul>
                                <li><Link>hello</Link></li>
                                <li><Link>hey</Link></li>
                                <li><Link>bonjour</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='main'></div>
                </div>
            </div>
        </div>
    )
}

export default Fdashboard
