import '../styles/topNavBar.scss'

const TopNavBar = () => {
    return (
        <div className="topNavBar">
            <div className="section">
                <a className='item' href='/'>Network Analysis Portal</a>
            </div>
            <div className="section">
                <a href="/dashboard" className="item">Dashboard</a>
            </div>
        </div>
    )
}

export default TopNavBar