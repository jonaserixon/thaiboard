
import * as React from 'react';

interface IKeyboardState {
    input: string,
    isCapsLock: boolean,
    isSpace: boolean
}

class Keyboard extends React.Component<{}, IKeyboardState> {
    constructor(props: any) {
        super(props);

        this.state = {
            input: '',
            isCapsLock: false,
            isSpace: false
        }
    }

    public render() {
        return (
            <div>
                <p>Representerar ett tangentbord!</p>
                <p>Grid Container</p>
                <div className='grid-container' onClick={this.handleOnClick}>

                </div>
            </div>
        )
    }

    private handleOnClick = (event: any): void => {
        console.log(event.target);
        console.log(this.createKeyboard());
    }

    private createKeyboard = (): any[] => {
        const keyboard = [
            {1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '0', 11: 'back'},
            {1: 'Q', 2: 'W', 3: 'E', 4: 'R', 5: 'T', 6: 'Y', 7: 'U', 8: 'I', 9: 'O', 10: 'P', 11: ''},
            {1: 'capsLock', 2: 'A', 3: 'S', 4: 'D', 5: 'F', 6: 'G', 7: 'H', 8: 'J', 9: 'K', 10: 'L', 11: 'enter'},
            {1: 'shift', 2: 'Z', 3: 'X', 4: 'C', 5: 'V', 6: 'B', 7: 'N', 8: 'M', 9: 'space', 10: '', 11: ''},
        ];

        return keyboard;
    }
}

export default Keyboard;
