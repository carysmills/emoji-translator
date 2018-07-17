import * as React from 'react';

interface Props {
    value: string;
}

class Footer extends React.Component<Props, never> {
  render() {
    return (
        <div className="footer">{this.props.value}</div>
    );
  }
}

export default Footer;
