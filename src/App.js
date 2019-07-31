import React from 'react';
import Navbar from "./components/layout/NavBar";
import Panel from "./components/instructions/Panel";
import Matrix from "./components/matrix/Matrix";
import ReactGA from 'react-ga';

function App() {
    return (
            <div className="App">
                <Navbar title="Search for Your Dream Internships" subtitle="Contributions are welcome!"/>
                <main id="content" className="container">
                    <Panel/>
                    <Matrix/>
                </main>
            </div>
    );
}

function initializeReactGA() {
    ReactGA.initialize('UA-144935830-1');
    ReactGA.pageview('/homepage');
    ReactGA.event({
        category: 'User',
        action: 'Create an Account'
    });
}

// track website visits and events
initializeReactGA()
export default App;