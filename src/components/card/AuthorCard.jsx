//modules
import { useContext } from "react"

//context
import { QuoteContext } from "../../context/QuoteContext"

export const AuthorCard = () => {
    const {Quote} = useContext(QuoteContext)
    
    return (
        <div className = "author-card">
            <h2 className = "author-card__name">
                {Quote.quoteAuthor}
            </h2>

            <p className = "author-card__gender">
                {Quote.quoteGenre}
            </p>
        </div>
    )
}
