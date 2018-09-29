import * as React from 'react';
import Key from '../components/Key';

interface IKeyboardState {
    input: string[],
    isCapsLock: boolean,
    isShift: boolean,
    keyboard: object[],
}

class Keyboard extends React.Component<{}, IKeyboardState> {
    constructor(props: any) {
        super(props);

        this.state = {
            input: [],
            isCapsLock: false,
            isShift: false,
            keyboard: [],
        }
    }

    public componentDidMount() {
        console.log('did mount')
        this.setState({keyboard: this.createKeyboard()});
    }

    public render() {
        return (
            <div onKeyDown={this.handleOnKeyDown} tabIndex={0}>
                <p>Representerar ett tangentbord!</p>
                <p>Grid Container</p>
                <div className='grid-container' onClick={this.handleOnClick} >
                    {this.state.keyboard}
                </div>
                {this.state.input}
            </div>
        )
    }

    private handleOnKeyDown = (event: any): void => {
        console.log(event.key);
    }

    private handleOnClick = (event: any): void => {
        if (event.target.dataset.value !== undefined) {
            const key = event.target.dataset.value;
            console.log(key);

            switch (key) {
                case 'capsLock':
                    this.setState({isCapsLock: !this.state.isCapsLock}, () => {
                        this.setState({keyboard: this.createKeyboard()});
                    });
                    break;
                case 'shift':
                    this.setState({isShift: !this.state.isShift}, () => {
                        this.setState({keyboard: this.createKeyboard()});
                    });
                    break;
                case 'space':
                    this.setState((prevState): any => ({
                        input: [...prevState.input, ' ']
                    }));
                    break;
                case 'back':
                    
                    break;
                case 'enter':
                    this.setState((prevState): any => ({
                        input: [...prevState.input, '\n']
                    }));
                    break;
                default:
                    if (this.state.isShift) {
                        this.setState({isShift: false}, () => {
                            this.setState({keyboard: this.createKeyboard()});
                        });
                    }
                    this.setState((prevState): any => ({
                        input: [...prevState.input, key]
                    }));
                    break;
            }
        }
    }

    private createKeyboard = (): object[] => {
        console.log('gets called')
        const keys = [
            {1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '0', 11: 'back'},
            {1: 'Q', 2: 'W', 3: 'E', 4: 'R', 5: 'T', 6: 'Y', 7: 'U', 8: 'I', 9: 'O', 10: 'P', 11: 'enter'},
            {1: 'capsLock', 2: 'A', 3: 'S', 4: 'D', 5: 'F', 6: 'G', 7: 'H', 8: 'J', 9: 'K', 10: 'L', 11: ''},
            {1: 'shift', 2: 'Z', 3: 'X', 4: 'C', 5: 'V', 6: 'B', 7: 'N', 8: 'M', 9: 'space', 10: '', 11: ''},
        ];

        const keyboard: object[] = [];

        keys.forEach(row => {
            for (const value of Object.keys(row)) {
                let key;
                if (row[value].length > 1) {
                    if (row[value] === 'capsLock' || row[value] === 'shift') {
                        key = <Key key={row[value]} value={row[value]} type={'special-left'}/>
                    } else {
                        key = <Key key={row[value]} value={row[value]} type={'special-right'}/>
                    }
                } else if (row[value].length === 0) {
                    console.log('empty');
                } else {
                    key = <Key key={row[value]} value={(this.state.isCapsLock || this.state.isShift ? row[value] : row[value].toLowerCase())} type={'letters'}/>
                }
                keyboard.push(key);
            }
        });

        return keyboard;
    }
}

export default Keyboard;
