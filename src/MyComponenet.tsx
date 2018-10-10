import * as React from 'react';
import Button from './Button'
import { Operations } from './Button'
import MyLabel from './MyLabel';

export interface IMyComponentProps {
    default : number
}

export interface IState {
    curNum : number
}

class MyComponent extends React.Component<IMyComponentProps, IState> {
    constructor(props: Readonly<IMyComponentProps>) {
        super(props);
        this.state = { curNum : props.default };
    }
    
    public render() {
        return <div>
        <MyLabel label = {this.state.curNum.toString()}/>
        <Button caption="(Add)" passClickToParent={this.increase} operation={Operations.Add}/>
        <Button caption="(Sub)" passClickToParent={this.decrease} operation={Operations.Sub}/>
        </div>
    }
    
    private increase = () => {
        this.setState((state, props) => ({
            curNum : state.curNum + 1
        }));
        }
    private decrease = () => {
        this.setState((state, props) => ({
            curNum: state.curNum - 1
          }));
    }
}

export default MyComponent;