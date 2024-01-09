import Header from "./Header"
import Overview from "./Overview"
import Transactions from "./Transactions"

function ContentSection() {
    return(
        <div className="w-[1216px]  px-[32px] py-[12px]">
            <Header/>
            <Overview/>
            <Transactions/>
        </div>
    )
}

export default ContentSection