import * as React from 'react';
import '../App.css';

interface Props {
    onChange: (output: string, url: string) => void;
    output: string;
    input: string;
}

class Input extends React.Component<Props, never> {

  render() {
    return (
          <React.Fragment>
            <textarea className="emojis" value={this.props.output} />
            <div className="inputContainer">
              <textarea 
                placeholder="Or ✍️ your own message here" 
                id="input" 
                onChange={(e) => this.props.onChange(e.target.value, '')}
                value={this.props.input}
              />
            </div>
          </React.Fragment>
    );
  }
}

export default Input;
