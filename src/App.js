import {GlobalStyle, GlobalPageSetup} from './GlobalStyle';
import Home from './pages/HomePage';
import NavBar from './Nav/NavBar';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>

      <GlobalStyle/>
      <NavBar />

      <GlobalPageSetup>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </GlobalPageSetup>

    </>
  );
}

export default App;
