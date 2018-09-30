import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import Keyboard from './containers/Keyboard';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <h1>Thaiboard</h1>
                <h3>A virtual thai keyboard</h3>
                <p>ภาษาไทย</p>
                <Keyboard />
                <br />
                <Footer />
            </div>
        );
    }
}

export default App;
