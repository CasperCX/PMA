import * as React from 'react';

export interface ITestProps {
  name: string
}

interface IState {
  age: number
}

export default class Test extends React.Component<ITestProps, IState> {
  state: IState = {
    age: 26
  }

  public render() {
    const {name} = this.props;
    return (
      <div>
        <span>
          <h1>ddd</h1>
        <div>aaa</div>
        </span>
        hello {name} age {this.state.age}
      </div>
    );
  }
}
