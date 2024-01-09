import Header from "./Header"
import Overview from "./Overview"
import Transactions from "./Transactions"

function ContentSection() {
    return(
        <div className="">
            <Header/>
            <Overview/>
            <Transactions/>
        </div>
    )
}

export default ContentSection