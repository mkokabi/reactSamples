import * as React from 'react'
import './Mycss.css'

export interface IMyLabelProps {
    label: string
}

class MyLabel extends React.Component<IMyLabelProps> {
    constructor(props: Readonly<IMyLabelProps>) {
        super(props);
    }
    public render() {
        return <label>{this.props.label}</label>
    }
}

export default MyLabel;