//styles css
import './Card.css'

//context
import { useContext } from 'react'
import { QuoteContext } from '../../context/QuoteContext'

//components
import {AuthorCard} from './AuthorCard'

const Card = () => {
    const {Quote} = useContext(QuoteContext)

    return(
        <article className = "card">
            <div className = "card__texts">
                <span className = "card__line">
                
                </span>
    
                <div className = "card__quote">
                    <p className = "card__paragraph">
                        {Quote.quoteText}
                    </p>
                </div>
            </div>

            <AuthorCard />
        </article>
    )
}

export default Card