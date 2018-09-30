import KeyboardIcon from '@material-ui/icons/Keyboard';
import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import Keyboard from './containers/Keyboard';


class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <h1>Thaiboard <KeyboardIcon /></h1>
                <h3>A virtual thai keyboard</h3>
                <Keyboard />
                <br />
                <Footer />
            </div>
        );
    }
}

export default App;
