import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from 'Utils/PublicRoute';
import { Home } from 'Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <PublicRoute exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
