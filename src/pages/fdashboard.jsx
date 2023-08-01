import {Link} from 'react-router-dom'


function Fdashboard() {
    return (
        <div className='Fdashboard'>
            <div className='head'>
                <h1>Dashboard</h1>
                <div className='dashboard'>
                    <div className='sidebar'>
                        <div className='profile-area'>
                            <div className='profile-pic'>
                                {/* circlar picture for profile */}
                            </div>
                            <div className='profile-name'>
                                <h2>John Doe</h2>

                                {/* border down solid 1 pt with low opacity */}
                        </div>
                        <div className='menu'>
                            <ul>
                                <li><Link></Link></li>
                                <li><Link></Link></li>
                                <li><Link></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='main'></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Fdashboard
