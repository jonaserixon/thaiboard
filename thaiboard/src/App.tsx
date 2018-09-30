import * as React from 'react';
import './App.css';
import Keyboard from './containers/Keyboard';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
              <p>Thaiboard!</p>
                <Keyboard />
            </div>
        );
    }
}

export default App;
