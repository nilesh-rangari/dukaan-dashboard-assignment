import ContentSection from "./ContentSection"
import Navbar from "./Navbar"


function Dashboard() {
    return(
        <div className='flex h-screen bg-white font-["Inter"]'>
            <Navbar/>
            <ContentSection/>
        </div>
    )
}

export default Dashboard;