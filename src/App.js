//css
import './App.css'

//contexts
import {QuoteProvider} from './context/QuoteContext'

//views
import Home from './views/Home'
const App = () => {
    
    return(
        <QuoteProvider>
            <Home/>
        </QuoteProvider>
    )
}

export default App