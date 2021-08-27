import Cash from "../../../components/icons/cash"
import Globe from "../../../components/icons/globe"
import { IShortVacancy } from "../types"

const VacancyCard = ({name, image, salary, employer, location}:IShortVacancy) => {
    return (
        <div className={`bg-white w-full p-4 font-raleway h-full`}>
            <div className={`w-full`}>
            <img src={image} alt="" className={`mb-3 w-full `} />
            </div>
            <div className={`font-bold mb-2`}>
                {name}
            </div>
            <div className={`mb-4`}>
                {employer}
            </div>
            <div className={`flex items-center mb-2`}>
                <div className={`w-4 h-4 flex items-center flex-shrink-0 mr-2`}>
                    <Globe/>
                </div>
                <div className={`text-ui-gray`}>
                    {location}
                </div>
            </div>
            {salary &&  
            <div className={`flex items-center`}>
                <div className={`w-4 h-4 flex items-center flex-shrink-0 mr-2`}>
                    <Cash/>
                </div>
                <div className={`text-ui-gray`}>
                    {salary}
                </div>
            </div>}
        </div>
    )
}

export default VacancyCard