import * as React from 'react';

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

class Button extends React.Component<IButtonProps> {
    constructor(props: Readonly<IButtonProps>) {
        super(props);
    }

    public onClick = (event: React.MouseEvent<HTMLElement>) => {
        this.props.passClickToParent();
    }

    public render() {
        const caption = "Click me. " + this.props.caption
        return <button onClick={this.onClick}>
            {caption} 
        </button>
    }
}

export default Button;