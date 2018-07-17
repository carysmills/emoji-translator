import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';
import Copy from './components/Copy';
import Tweet from './components/Tweet';
import Headline from './components/Random';
import Footer from './components/Footer';
import Data from './emojis.js';
import Phrases from './emojiPhrases.js';

interface State {
  output: string;
  input: string;
  url: string;
}

function createEmojis(input: string) {
  if (input === '') {
    return '';
  }

  // look for phrases
  let phraseString = input;

  Phrases.map(phrase => {
    var re = new RegExp(phrase.word, 'ig');
    const included = (input).toLowerCase().includes(phrase.word);
    phraseString = included 
      ? phraseString.replace(re, phrase.emoji)
      : phraseString;
  });

  // loop through all the input's words, already with phrases
  // loop through each emoji options' description
  // if they match, add the word to the sentence and stop looking for emojis 
  // otherwise add word to sentence
  const words = phraseString.split(/\b/);
  const sentence: string[] = [];
  let item: string = '';

  words.forEach((word) => {
    emojiLoop:
    for (const value of Data) {
      if (word.toLocaleLowerCase() === value.word || word === value.word) {
        item = value.emoji;
        break emojiLoop;
      } else {
        item = word;
      }
    }
    sentence.push(item);
  });
  return sentence.join('');
}

class App extends React.Component<{}, State> {

  constructor(state: State) {
    super(state);

    this.onChange = this.onChange.bind(this);

    this.state = {
      input: '',
      output: '',
      url: '',
    };
}

  onChange(input: string, url: string) {
    this.setState({
      output: createEmojis(input),
      input,
      url,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header />

          <div className="buttonContainer">
            <Headline 
              value={this.state.output} 
              onChange={(output, url) => this.onChange(output, url)}
            />
          </div>

          <div className="container">
            <Input 
              onChange={(output, url) => this.onChange(output, url)}
              output={this.state.output}
              input={this.state.input}
            />
            <Output 
              value={this.state.output}
            />
          </div>

          <div className="buttonContainer copyContainer">
            <Copy value={this.state.output}/>
            <Tweet output={this.state.output} url={this.state.url} />
          </div>
        </div>

        <Footer 
          value={'Made by Carys Mills, using newsapi.org.'}
        />
      </React.Fragment>
    );
  }
}

export default App;
