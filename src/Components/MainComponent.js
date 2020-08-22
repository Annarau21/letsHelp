import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Cafe from './CafeComponent';
import CurrentClasses from './CurrentClassesComponent';
import RequestAClass from './RequestAClassComponent';
import Volunteer from './VolunteerComponent';

class Main extends Component {

    render() {

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/requestAClass' component={RequestAClass} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/cafe' component={Cafe} />
                    <Route exact path='/currentClasses' component={CurrentClasses} />
                    <Route exact path='/volunteer' component={Volunteer} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;