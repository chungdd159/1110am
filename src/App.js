import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './components/Context';
import AddContact from './components/contact/addContact';
import About from './components/page/About';
import NotFound from './components/page/NotFound';
import Test from './components/test/Test';
import EditContact from './components/contact/EditContact';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header brand="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/add" component={AddContact} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/edit/:id" component={EditContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
