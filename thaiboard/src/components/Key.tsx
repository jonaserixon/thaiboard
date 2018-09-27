
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
                {this.props.value}
            </div>
        )
    }
}

export default Key;
