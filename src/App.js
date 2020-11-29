import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Landing from '../src/components/LandingPage/landing'
import FAQ from '../src/components/layouts/FAQ/faq'
import Terms from '../src/components/layouts/Terms/terms'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/faq" component={FAQ} />
          <Route path="/terms" component={Terms} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
