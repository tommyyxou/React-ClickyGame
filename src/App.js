import React from 'react';
import ImageBox from './components/imageBox'
import ScoreBoard from './components/scoreBoard';
import friendsImagesUrls from './cards.json'

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      friendsImagesUrls,
      clickedId: [],
      score: 0,
      highScore: 0,
      statusMsg: "Click On Any Image to start game!"
    }
  }

  randomizeImage = id => {
    let clickedId = this.state.clickedId;

    if (clickedId.includes(id)) {
      if (clickedId.length > this.state.highScore) {
        this.setState({highScore:clickedId.length})
      }
      this.setState ({clickedId: [], score:0, statusMsg: "You Lose!" })
    } else {
      clickedId.push(id);

      if (clickedId.length === this.state.friendsImagesUrls.length) {
        this.setState ({score:32, clickedId: [], statusMsg: "You Win!"})
        return;
      }
      
      let randomized = [];
      let copied = this.state.friendsImagesUrls.slice();
      while (copied.length > 0) {
        let randomIndex = Math.floor(Math.random() * copied.length);
        let spliced = copied.splice(randomIndex, 1)[0];
        randomized.push(spliced);
      }
      this.setState({
        friendsImagesUrls: randomized,
        clickedId,
        score: clickedId.length,
        statusMsg: "Good Job!",
      });
    }
    
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="text-center">
          <div className="scoreBar">
            <ScoreBoard score={this.state.score} statusMsg={this.state.statusMsg} highScore={this.state.highScore}/>
          </div>
          <div className="body">
            <div className="row ImageBoxStyle">
              {this.state.friendsImagesUrls.map(imageLink => (
                <ImageBox
                  randomizeImage = {this.randomizeImage}
                  friendsImagesUrls={this.friendsImagesUrls}
                  id={imageLink.id}
                  key={imageLink.id}
                  image={imageLink.url}
                  
                />
              ))};
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
