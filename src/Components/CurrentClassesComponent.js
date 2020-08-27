import React from 'react';

//make a function class to display the data

function CurrentClasses (props) {
   
    return(
        <div>
            <div className="classes">
                <div className="container">
                    <div className="row">
                        <div className="col align-items-center">
                            <a role="button" className="btn btn-outline-secondary active m-3" href="#household" aria-pressed="true">Household</a>
                            <a role="button" className="btn btn-outline-secondary active m-3" href="#financial" aria-pressed="true">Financial</a>
                            <a role="button" className="btn btn-outline-secondary active m-3" href="#education" aria-pressed="true">Education</a>
                            <a role="button" className="btn btn-outline-secondary active m-3" href="#foreignLanguage" aria-pressed="true">Foreign Language</a>
                            <a role="button" className="btn btn-outline-secondary active m-3" href="#health" aria-pressed="true">Health</a>
                            <a role="button" className="btn btn-outline-secondary active m-3" href="#social" aria-pressed="true">Social</a>
                            <a role="button" className="btn btn-outline-secondary active m-3" href="#misc" aria-pressed="true">Misc.</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="household">
                <h3>Household</h3>
            </div>

            <div id="finance">
                <h3>Finance</h3>
            </div>

            <div id="education">
                <h3>Education</h3>
            </div>

            <div id="foreignLanguage">
                <h3>Foreign Language</h3>
            </div>

            <div id="health">
                <h3>Health</h3>
            </div>

            <div id="social">
                <h3>Social</h3>
            </div>

            <div id="misc">
                <h3>Misc.</h3>
            </div>


        </div>
    );
    
}

export default CurrentClasses;