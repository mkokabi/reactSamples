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
        {this.numButtons()}
        </div>
    }
    
    private numButtons() {
        const count:number = 10;
        const btns = [];
        for(let num : number = 0;num<count;num++) {
            btns.push(<button>{num}</button>)
        }
        return <div>{btns}</div>;
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