import React from 'react';
import { Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Landingpage from './Landingpage';
import Aboutme from './Aboutme';
import Contactme from './Contactme';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/Aboutme" component={Aboutme} />
        <Route path="/Contactme" component={Contactme} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />


    </Switch>
)

export default Main;