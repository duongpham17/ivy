import './App.scss';

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* Redux */
import {Provider} from 'react-redux';
import Store from './redux/Store';

/* onLoad */
import Data from './onLoad/Data';

/* Alert */
import Alert from './components/alert/Alert';

/* Routing */
import Title from './routing/Title';
import NotFound from './routing/NotFound';
import Connection from './routing/Connection';

/* Navigation */
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';

/* Authentication */
import Login from './components/authentication/Login';

/* Home */
import Home from './components/home';

/* Price */
import Price from './components/price';

/* Gallery */
import Gallery from './components/gallery';

/* Services */
import Services from './components/services';

const App = () => {
  return (
    <Provider store={Store}>

      <Router>
        <Data />
        <Title />
        <Connection/>
        <Alert/>
        
        <Navbar/>
        
        <div id="body-content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/prices" component={Price} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/services" component={Services} />
            <Route component={NotFound} />
          </Switch>
        </div>

        <div id="footer">
          <Footer/>
        </div>
        
      </Router>
    </Provider>
    )
};

export default App
