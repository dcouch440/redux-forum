import {GlobalStyle, GlobalPageSetup} from './GlobalStyle';
import Home from './pages/HomePage';
import FormPage from './pages/FormPage';
import NavBar from './Nav/NavBar';
import { Switch, Route } from 'react-router-dom';
import Secret from './pages/Secret';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <NavBar />

      <GlobalPageSetup>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/new' component={FormPage} />
          <Route exact path='/234234234234' component={Secret} />
        </Switch>
      </GlobalPageSetup>

    </>
  );
}

export default App;
