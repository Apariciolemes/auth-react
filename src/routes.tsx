import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import { Products } from './components/Products'
import { SignIn } from './components/SignIn'
import history from './history';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route path="/product" component={Products} />
          <Route exact path="/" component={SignIn} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}