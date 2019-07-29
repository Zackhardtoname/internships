import React from 'react';
import Navbar from "./components/layout/NavBar";
import Panel from "./components/instructions/Panel";
import Matrix from "./components/matrix/Matrix";

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

export default App;