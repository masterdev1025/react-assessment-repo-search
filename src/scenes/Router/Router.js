import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from '../Home';
import List from '../List';
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/list/:q" exact render={props => <List {...props} />} />
                <Route path="/" exact render={props => <Home {...props} />} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;