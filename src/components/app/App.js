import { Component } from "react";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    
    state = {
        selectedChar: null,
        showRandomChar: true
    }
    
    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {
        
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBoundary>
                        {this.state.showRandomChar ? <RandomChar/> : null}
                    </ErrorBoundary>
                    {this.state.showRandomChar ? <button style={{marginTop: '15px'}} className="button button__main" onClick={this.toggleRandomChar}><div className="inner">Hide random character</div></button> :<button style={{marginTop: '15px'}} className="button button__main" onClick={this.toggleRandomChar}><div className="inner">Show random character</div></button>}
                    
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={this.onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
    
}

export default App;