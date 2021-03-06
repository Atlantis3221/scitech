import { useContext } from "react"
import NewsContext from "./context/newsContext"

const Loader = ({loading}) => {
    const {newsLoading} = useContext(NewsContext)
    return (
        <div className={`h-screen w-full ${(loading || newsLoading) ? "opacity-100 visible" : "invisible opacity-0"} transition-all bg-white flex items-center justify-center fixed z-50 top-0 left-0`}>
            <div className="loader"><div className="line one"></div><div className="line two"></div><div className="line three"></div><div className="line four"></div><div className="line five"></div></div>
        </div>
        
    )
}

export default Loader