import RegModal from "./reg/RegModal"
import VacancyModal from './vacancy/VacancyModal'

const Modals = ({ modalFormText }) => {
    return (
        <> 
        <RegModal modalFormText={modalFormText}/>
        <VacancyModal modalFormText={modalFormText}/>
        </>
    )
}

export default Modals