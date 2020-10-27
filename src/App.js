import React from 'react';
import './App.css';
import {Layout, Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components.js/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className= "header-color" title="Title" scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/Aboutme">About Me</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contactme">Contact Me</Link>
                </Navigation>
            </Header>
            <Drawer title="Title">
                 <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/Aboutme">About Me</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contactme">Contact Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
  );
}

export default App;
