import Warning from "../icons/warning"
import InputStyleWrapper from "../styleWrap/InputStyleWrap"

const ValidatedTextInput = ({state, name, setState, errors}) => {
    return (
    <InputStyleWrapper>
        <input name={name} value={state[name]} 
         onChange={(e) => {
             setState({
                 ...state,
                 [name]: e.target.value
             })
         }}/>
        <div className={`w-6 h-6`}>
           {errors[name] && <Warning/>} 
        </div>
    </InputStyleWrapper>
    )
}

export default ValidatedTextInput