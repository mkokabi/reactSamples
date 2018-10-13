import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'reactstrap';

export enum Operations {
    Add,
    Sub,
    Mul
}

export interface IButtonProps {
    caption : string,
    operation : Operations,
    passClickToParent : any
}

class MyButton extends React.Component<IButtonProps> {
    constructor(props: Readonly<IButtonProps>) {
        super(props);
    }

    public onClick = (event: React.MouseEvent<HTMLElement>) => {
        this.props.passClickToParent();
    }

    public render() {
        const caption = "Click me. " + this.props.caption
        return <Button color="info" onClick={this.onClick}>
            {caption} 
        </Button>
    }
}

export default MyButton;