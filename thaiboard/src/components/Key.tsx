import Backspace from '@material-ui/icons/Backspace';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import KeyboardCapslock from '@material-ui/icons/KeyboardCapslock';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import KeyboardTab from '@material-ui/icons/KeyboardTab';
import Language from '@material-ui/icons/Language';
import SpaceBar from '@material-ui/icons/SpaceBar';

import * as React from 'react';

interface IKeyProps {
    value: string,
    type: string
}

class Key extends React.Component<IKeyProps> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className={this.props.type} data-value={this.props.value}>
                {this.iconToRender()}
                {this.props.value}
            </div>
        )
    }


    private iconToRender = (): any => {
        if (this.props.value.length > 1) {
            switch (this.props.value) {
                case 'CAPS LOCK':
                    return <KeyboardCapslock style={{ position: 'absolute', left: '5px' }}/>
                    break;
                case 'SHIFT':
                    return <KeyboardArrowUp style={{ position: 'absolute', left: '5px' }}/>
                    break;
                case 'SHIFT_1':
                    return <KeyboardArrowUp style={{ position: 'absolute', left: '5px' }}/>
                    break;
                case 'SPACE':
                    return <SpaceBar />
                    break;
                case 'ENTER':
                    return <KeyboardReturn style={{ position: 'absolute', left: '5px' }}/>
                    break;
                case 'BACKSPACE':
                    return <KeyboardBackspace style={{ position: 'absolute', left: '5px' }}/>
                    break;
                case 'ESC':
                    return;
                    break;
                case 'TAB':
                    return <KeyboardTab style={{ position: 'absolute', left: '5px' }}/>
                    break;
                case 'CTRL':
                    return;
                    break;
                case 'ALT':
                    return;
                    break;
                case 'Thaiboard':
                    return <Language />;
                    break;
                default:
                    break;
            }
        } else {
            return null;
        }
    }
}

export default Key;
