import React from 'react';
import './Panel.css';

const Panel = () => {
    return (
        <div id="panel" className="card">
            <div className="card-body">
                <h5 className="card-title">General</h5>
                <ol>
                    <li>
                        We am considering buying a domain if enough people are interested in this project (for now I will just look at the number of stars and/or pull requests for this repo)
                    </li>
                    <li>
                        Please kindly consider starring this repo (top right corner) to help it grow and make revisiting it easier for you
                    </li>
                    <li>
                        Helpful sites to find internships are [LinkedIn](https://www.linkedin.com/), [Indeed](https://www.indeed.com/), [Glassdoor](https://www.glassdoor.com/), [StackOverflow](https://stackoverflow.com/jobs), [BuiltIn](https://builtin.com/) (has different websites for NYC, Chicago, Seattle, Boston, LA, Colorado, Austin), and [AngelList](https://angel.co/) (startups)
                    </li>
                </ol>
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
                <h5 className="card-title">Contributions</h5>
                <ol>
                    <li>
                        Fork this repo <a href="https://github.com/Zackhardtoname/internships-2020-summer" target="_blank" rel="noopener noreferrer">here</a>
                    </li>
                    <li>
                        Make changes
                        If you are adding internships, edit internships.csv (No need to worry about ordering since we would sort jobs via a script)
                    </li>
                    <li>
                        Open a pull request!
                    </li>
                </ol>
                <p className="card-text tab">
                    If you find the process above difficult, just make an issue in GitHub, and we would take a look.
                </p>
                <h5 className="card-title">Column Explanations</h5>
                <ol>
                    <li>
                        <h6>Location</h6>
                        Two-letter locations indicate states in the U.S. <br/>
                        U.S. indicates multiple locations in the U.S. <br/>
                        countries other than the U.S. are spelled out. (Ex: CA = California, not Canada)
                    </li>
                </ol>
                <h5 className="card-title">Questions</h5>
                <p className="card-text tab">
                    Please contact <a href="mailto: zack.hardtoname@gmail.com">Zack</a>
                </p>
            </div>
        </div>
    );
};

export default Panel;