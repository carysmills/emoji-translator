import * as React from 'react';

interface Props {
  value: string;
  onChange: (output: string, url: string) => void;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Random extends React.Component<Props, never> {

  async getQuote() {
    const url = 'https://newsapi.org/v2/top-headlines?country=ca&pageSize=30&apiKey=20706d3a0f0a4926a0f77ed82e03beb4';
    await fetch(url).then(response => {
      response.json().then(data => {
        const numArticles = data.articles.length;
        const randomNumer = getRandomInt(numArticles);
        const result = data.articles[randomNumer] != null 
          ? data.articles[randomNumer].title 
          : 'Something went wrong :( - try again';
        this.props.onChange(result, data.articles[randomNumer].url);
      });
    });
  }

  render() {
    return (
        <button 
          className="random" 
          onClick={() => this.getQuote()}
        >
         Translate 🗞 headline
        </button>
    );
  }
}

export default Random;
