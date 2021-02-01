import { BrowserRouter, Route } from 'react-router-dom';
import EN from './pages/EN';
import Home from './pages/Home';
import Lang from './pages/Lang';




export function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/lang" component={Lang} />
            <Route path="/en" component={EN} />
        </BrowserRouter>
    )
}