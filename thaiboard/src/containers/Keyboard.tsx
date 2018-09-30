import Button from '@material-ui/core/Button';
import * as React from 'react';
import Key from '../components/Key';

interface IKeyboardState {
    input: string,
    isCapsLock: boolean,
    isShift: boolean,
    keyboard: object[],
    textFieldClass: string
}

class Keyboard extends React.Component<{}, IKeyboardState> {
    constructor(props: any) {
        super(props);

        this.state = {
            input: '',
            isCapsLock: false,
            isShift: false,
            keyboard: [],
            textFieldClass: ''
        }
    }

    public componentDidMount() {
        this.setState({keyboard: this.createKeyboard()});
        this.setState({textFieldClass: 'not-focused-text-field'});
    }

    public componentWillUpdate() {
        if (this.state.textFieldClass !== 'focus-text-field' && this.state.input) {
            this.setState({textFieldClass: 'focus-text-field'});
        }
    }

    public render() {
        return (
            <div>
                <textarea id='input-text-field' className={this.state.textFieldClass} value={this.state.input} onChange={this.handleOnChange} placeholder='Write something interesting...'/>
                <Button variant="contained" color="primary" id='copy-button' >Copy</Button>
                <div className='grid-container' onClick={this.handleOnClick} >
                    {this.state.keyboard}
                </div>
            </div>
        )
    }

    private handleOnChange = (event: any): void => {
        console.log(event);
        
        this.setState({input: event.target.value})
    }

    private handleOnClick = (event: any): void => {
        if (event.target.dataset.value !== undefined) {
            const key = event.target.dataset.value;
            console.log(key);

            switch (key) {
                case 'CAPS LOCK':
                    this.setState({isCapsLock: !this.state.isCapsLock}, () => {
                        this.setState({keyboard: []}, () => {
                            this.setState({keyboard: this.createKeyboard()});
                        });
                    });
                    break;
                case 'SHIFT':
                    this.setState({isShift: !this.state.isShift}, () => {
                        this.setState({keyboard: []}, () => {
                            this.setState({keyboard: this.createKeyboard()});
                        });
                    });
                    break;
                case 'SPACE':
                    this.setState({input: this.state.input + ' '});
                    break;
                case 'BACKSPACE':
                    this.setState({input: this.state.input.substring(0, this.state.input.length - 1)});
                    break;
                case 'ENTER':
                    this.setState({input: this.state.input + '\n'});
                    break;
                case 'TAB':
                    this.setState({input: this.state.input + '    '});
                    break;
                default:
                    if (this.state.isShift) {
                        this.setState({isShift: false}, () => {
                            this.setState({keyboard: []}, () => {
                                this.setState({keyboard: this.createKeyboard()});
                            });
                        });
                    }
                    this.setState({input: this.state.input + key});
                    break;
            }
        }
    }

    private createKeyboard = (): object[] => {
        const keyNotCaps = [
            {0: 'ESC', 1: 'ๅ', 2: '/', 3: '-', 4: 'ภ', 5: 'ถ', 6: 'ุ', 7: 'ึ', 8: 'ค', 9: 'ต', 10: 'จ', 11: 'ข', 12: 'ช', 13: 'BACKSPACE'},
            {0: 'TAB', 1: 'ๆ', 2: 'ไ', 3: 'ำ', 4: 'พ', 5: 'ะ', 6: 'ั', 7: 'ี', 8: 'ร', 9: 'น', 10: 'ย', 11: 'บ', 12: 'ล', 13: 'ฃ'},
            {1: 'CAPS LOCK', 2: 'ฟ', 3: 'ห', 4: 'ก', 5: 'ด', 6: 'เ', 7: '้', 8: '่', 9: 'า', 10: 'ส', 11: 'ว', 12: 'ง', 13: 'ENTER'},
            {1: 'SHIFT', 2: 'ผ', 3: 'ป', 4: 'แ', 5: 'อ', 6: 'ิ', 7: 'ื', 8: 'ท', 9: 'ม', 10: 'ใ', 11: 'ฝ', 12: 'SHIFT_1'},
            {1: 'CTRL', 2: 'ALT', 3: 'Thaiboard', 4: 'SPACE', 5: 'CTRL', 6: 'Thaiboard'}
        ];

        const keyCaps = [
            {0: 'ESC', 1: '+', 2: '๑', 3: '๒', 4: '๓', 5: '๔', 6: 'ู', 7: '฿', 8: '๕', 9: '๖', 10: '๗', 11: '๘', 12: '๙', 13: 'BACKSPACE'},
            {0: 'TAB', 1: '๐', 2: '"', 3: 'ฎ', 4: 'ฑ', 5: 'ธ', 6: 'ํ', 7: '๊', 8: 'ณ', 9: 'ฯ', 10: 'ญ', 11: 'ฐ', 12: ',', 13: 'ฅ'},
            {1: 'CAPS LOCK', 2: 'ฤ', 3: 'ฆ', 4: 'ฏ', 5: 'โ', 6: 'ฌ', 7: '็', 8: '๋', 9: 'ษ', 10: 'ศ', 11: 'ซ', 12: '.', 13: 'ENTER'},
            {1: 'SHIFT', 2: '(', 3: ')', 4: 'ฉ', 5: 'ฮ', 6: 'ฺ',7: '์', 8: '?', 9: 'ฒ', 10: 'ฬ', 11: 'ฦ', 12: 'SHIFT_1'},
            {1: 'CTRL', 2: 'ALT', 3: 'Thaiboard', 4: 'SPACE', 5: 'CTRL', 6: 'Thaiboard'}
        ];

        if (this.state.isCapsLock || this.state.isShift) {
            return this.mapKeys(keyCaps);
        } else {
            return this.mapKeys(keyNotCaps);
        }
    }

    private mapKeys = (keys: object[]): object[] => {
        const keyboard: object[] = [];
        console.log(keyboard);
        keys.forEach(row => {
            for (const value of Object.keys(row)) {
                let key;
                if (row[value].length > 1) {
                    switch (row[value]) {
                        case 'CAPS LOCK':
                            key = <Key key={row[value]} value={row[value]} type={'key keyboard__key--1-75u'}/>
                            break;
                        case 'SHIFT':
                            key = <Key key={row[value]} value={row[value]} type={'key keyboard__key--2-25u'}/>
                            break;
                        case 'SHIFT_1':
                            key = <Key key={row[value]} value={'SHIFT'} type={'key keyboard__key--2-75u'}/>
                            break;
                        case 'SPACE':
                            key = <Key key={row[value]} value={row[value]} type={'key keyboard__key--6-25u'}/>
                            break;
                        case 'ENTER':
                            key = <Key key={row[value]} value={row[value]} type={'key keyboard__key--2-25u'}/>
                            break;
                        case 'BACKSPACE':
                            key = <Key key={row[value]} value={row[value]} type={'key keyboard__key--2u'}/>
                            break;
                        case 'ESC':
                            key = <Key key={row[value]} value={row[value]} type={'key'}/>
                            break;
                        case 'TAB':
                            key = <Key key={row[value]} value={'TAB'} type={'key keyboard__key--1-5u'}/>   
                            break;
                        case 'CTRL':
                            key = <Key key={row[value]} value={row[value]} type={'key keyboard__key--1-25u'}/>
                            break;
                        case 'ALT':
                            key = <Key key={row[value]} value={row[value]} type={'key keyboard__key--1-25u'}/>
                            break;
                        case 'Thaiboard':
                            key = <Key key={row[value]} value={'Thaiboard'} type={'key keyboard__key--1-5u'}/>
                            break;
                        default:
                            break;
                    }
                } else {
                    if (row[value] === 'ฃ' || row[value] === 'ฅ') {
                        key = <Key key={row[value]} value={(this.state.isCapsLock || this.state.isShift ? row[value] : row[value].toLowerCase())} type={'key letter keyboard__key--1-5u'}/>
                    } else {
                        key = <Key key={row[value]} value={(this.state.isCapsLock || this.state.isShift ? row[value] : row[value].toLowerCase())} type={'key letter'}/>
                    }
                }
                keyboard.push(key);
            }
        });

        return keyboard;
    }
}

export default Keyboard;
