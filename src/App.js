import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Login from "./pages/login";
import Layout from './components/layout';

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  const user = localStorage.getItem('id_token');
  if (user == null) {
    //dispatch(logoutUser());
    return (<Redirect to="/login" />)
  } else {
    return ( // eslint-disable-line
      <Route {...rest} render={props => (React.createElement(component, props))} />
    );
  }
};

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Layout />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
