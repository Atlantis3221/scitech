import Magnifier from "../icons/magnifier"

const SearchDropdown = () => {
    return (
    <div className={`h-10 ring-blue-400 transition-all bg-white max-w-xs flex items-center px-3 py-2 cursor-pointer focus-within:ring-1`}>
        <div className={`w-6 h-6 `}>
            <Magnifier/>
        </div>
        <input 
        onChange={(e) => {}} 
        value={``} 
        className={`pl-2 font-raleway  ring-0 focus:ring-0 border-0 focus:outline-none w-full`} 
        placeholder="Поиск" 
        type="search" 
        name="" 
        id="" />
    </div>
    )
}

export default SearchDropdown