import '../styles/dashboard.scss'
import TopNavBar from '../components/topNavBar'
import Workstation from '../components/dashboard/workstation'

const Dashboard = () => {
    return (
        <div>
            <TopNavBar />
            <Workstation />
        </div>
    )
}

export default Dashboard