//modules
import {createContext, useState, useEffect} from 'react'

export const QuoteContext = createContext()

export const QuoteProvider = ({children}) => {
    const [Quote, setQuote] = useState([])

    const updateQuote = async (url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random') => {

        try {
            const res = await fetch(url)
            const newQuote = await res.json()
            setQuote(newQuote.data[0])
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        updateQuote('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    }, [])

    return(
        <QuoteContext.Provider value = {{Quote, updateQuote}}>
            {children}
        </QuoteContext.Provider>
    )
}