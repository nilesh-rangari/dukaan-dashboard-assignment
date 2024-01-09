import ContentSection from "./ContentSection"
import Navbar from "./Navbar"


function Dashboard() {
    return(
        <div className='flex h-screen bg-[#FAFAFA] font-["Inter"] mb-0'>
            <Navbar/>
            <ContentSection/>
        </div>
    )
}

export default Dashboard;