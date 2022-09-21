import React from 'react';
import './App.css';

class App extends React.Component {

  title = "First App";
  colors = "#";
  letters = "0123456789ABCDEF";

  h1Click()
  {
    this.colors = "#";
    for (var i = 0; i < 6; i++) {
      this.colors += this.letters[Math.floor(Math.random() * 16)];
    }
  }

  render()
  {
    return (
      <>
        <h1 className='centerdiv' onClick={() => this.h1Click()}>Welcome to my {this.title} using ReactJS</h1>
      </>
    );
  }
}

export default App;