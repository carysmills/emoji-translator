import * as React from 'react';

interface Props {
  output: string;
  url: string;
}

class Tweet extends React.Component<Props, never> {

  render() {
    const {output, url} = this.props;

    const newUrl = output !== '' ? 
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(output)} ${url}` 
      : `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        'Check out this emoji translator 🎉 https://www.emojify.xyz')}`;
    
    const buttonText = output === '' 
      ? '🎉 Tweet translator' 
      : url === ''
        ? '🎉 Tweet translation'
        : '🎉 Tweet headline + story';

    return (
    <a 
      className="twitter-share-button" 
      target="_blank" 
      href={newUrl}
    > <button className="tweet">{buttonText}</button>
    </a>
    );
  }
}

export default Tweet;
