import React from 'react';
import './Panel.css';

const Panel = () => {
    return (
        <div id="panel" className="card">
            <div className="card-body">
                <h5 className="card-title">Quick Start</h5>
                <ol>
                    <li>
                        Edit any value via double clicks
                    </li>
                    <li>
                        To empty a dropdown cell, select the cell, press space, and enter
                    </li>
                    <li>
                        Right click on cells (except for the plot cells) to see the menu that allows inserting rows,
                        columns, etc.
                    </li>
                </ol>
                <h5 className="card-title">Questions</h5>
                <p className="card-text tab">
                    Please contact <a href="mailto: zackL@bu.edu">Zack</a>
                </p>
                <h5 className="card-title">Questions</h5>
                <p className="card-text tab">
                    Please contribute <a href="https://github.com/Zackhardtoname/internships-2020-summer" target="_blank" rel="noopener noreferrer">here</a>
                </p>
            </div>
        </div>
    );
};

export default Panel;