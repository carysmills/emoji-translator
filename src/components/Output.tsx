import * as React from 'react';

interface Props {
    value: string;
}

class Output extends React.Component<Props, never> {
  render() {
    return (
        <p className="output">{this.props.value}</p>
    );
  }
}

export default Output;
