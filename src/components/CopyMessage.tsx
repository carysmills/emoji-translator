import * as React from 'react';

interface Props {
  clicked: boolean;
}

class CopyMessage extends React.Component<Props, never> {

  render() {
    const {clicked} = this.props;
    return clicked ? <div className="copied">Copied!</div>
      : null;
  }
}

export default CopyMessage;
