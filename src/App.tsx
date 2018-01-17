import * as React from 'react';
import  './App.css';

// import Announcement from './component/announcment';
// import ResetButton from './component/resetButton';
import Board from './containers/Board';
import WelcomeScreen from './component/welcomeScreen';

interface ParentStateItem {
    isVisible: boolean;
    turn: string;
    winner: string;

}

class App extends React.Component<{}, ParentStateItem> {

    render() {
        return (
            <div className="container">
                <WelcomeScreen />
                <div>
                    <Board/>
                </div>

            </div>
        );
    }
}

export default App;
