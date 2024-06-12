import { useState } from "react";
import PropTypes from "prop-types";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

const App = () => {
    
    const [selectedChar, setChar] = useState(null);
    const [showRandomChar, setRandomChar] = useState(true);
    
    const onCharSelected = (id) => {
        setChar(id);
    }
     
    const toggleRandomChar = () => {
        setRandomChar(!showRandomChar)
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundary>
                    {showRandomChar ? <RandomChar/> : null}
                </ErrorBoundary>
                {showRandomChar ? <button style={{marginTop: '15px'}} className="button button__main" onClick={toggleRandomChar}><div className="inner">Hide random character</div></button> :<button style={{marginTop: '15px'}} className="button button__main" onClick={toggleRandomChar}><div className="inner">Show random character</div></button>}
                
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

CharList.protTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default App;