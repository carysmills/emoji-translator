import * as React from 'react';
import CopyMesssage from './CopyMessage';

interface Props {
  value: string;
}

interface State {
  clicked: boolean;
}

class Copy extends React.Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props, state);

    this.state = {
      clicked: false,
    };
  }

  copyToClipboard() {
    const text = document.getElementsByClassName('emojis')[0] as HTMLInputElement;
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      const editable = text.contentEditable;
      const readOnly = text.readOnly;
      text.contentEditable = true as any; 
      text.readOnly = false;
      const range = document.createRange();
      range.selectNodeContents(text);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      text.setSelectionRange(0, 999999);
      text.contentEditable = editable;
      text.readOnly = readOnly;
    } else {
      text.select();
    }
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    this.setState({
      clicked: true,
    });

    setTimeout(() => {
      this.setState({clicked: false});
    }, 500);
  }

  render() {
    return (
        <React.Fragment>
          <CopyMesssage clicked={this.state.clicked}/>
          <button 
            className="copy" 
            onClick={() => this.copyToClipboard()}
          >
            Copy translation 💖
          </button>
        </React.Fragment>
    );
  }
}

export default Copy;
