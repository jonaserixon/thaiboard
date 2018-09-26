
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
            <div>
                <p>Representerar en key</p>
            </div>
        )
    }
}

export default Key;
