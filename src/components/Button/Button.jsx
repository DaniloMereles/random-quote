//modules
import {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

//privider
import { QuoteContext } from '../../context/QuoteContext'


//styles 
import './Button.css'
const Button = () => {
    const {updateQuote} = useContext(QuoteContext)

    return(
        <button onClick = { ()=> updateQuote() } className = "button">
            <span className = "button__text">
                Random Quote
            </span>
            
            <FontAwesomeIcon icon = {faSync}/>
        </button>
    )
}

export default Button 