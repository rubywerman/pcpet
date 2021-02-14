import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frog: "assets/frogs_sprite.gif",
      happiness: 1,
      sleepiness: 0,
      tweeted: false,
      currTweet: ""
    };

    this.checkWellness = this.checkWellness.bind(this);
  }

  checkWellness(event) {
    event.preventDefault();
    
  }

  selectSleep(event) {
    event.preventDefault();
    this.setState({
      frog: "assets/sleep.gif",
      sleepiness: 0
    });
    setTimeout(() => {this.setState({
      frog: "assets/frogs_sprite.gif"
    })}, 5000);
  }

  selectFood(event) {
    event.preventDefault();
    this.setState({
      frog: "assets/frogs_eating.gif"
    })
    setTimeout(() => {this.setState({
      frog: "assets/frogs_sprite.gif"
    })}, 5000);
  }

  selectBalloon(event) {
    event.preventDefault();
    this.setState({
      frog: "assets/frogs_balloon.gif"
    })
    setTimeout(() => {this.setState({
      frog: "assets/frogs_sprite.gif"
    })}, 5000);
  }

  selectMusic(event) {
    event.preventDefault();
    this.setState({
      frog: "assets/music.gif"
    })
    setTimeout(() => {this.setState({
      frog: "assets/frogs_sprite.gif"
    })}, 5000);
  }

  selectPhone(event) {
    event.preventDefault();
    this.setState({
      frog: "assets/iphone.gif",
      currTweet: "@jenlbuja: this is a tweet",
      tweeted: true
    })
    setTimeout(() => {this.setState({
      frog: "assets/frogs_sprite.gif",
      currTweet: "",
      tweeted: false
    })}, 5000);
  }

  selectCar(event) {
    event.preventDefault();
    this.setState({
      frog: "assets/frogs_cars.gif"
    })
    setTimeout(() => {this.setState({
      frog: "assets/frogs_sprite.gif"
    })}, 5000);
  }

  render() {
    return (
      <div className="App">
        <header class="background">
          <div>
            <img class="wellness button" src="assets/wellness_icon.gif" onClick={e => this.checkWellness(e)}/>
          </div>
          <div class="frogs-container">
            { this.state.tweeted &&
            <div>
              <p class="tweet">
                  {this.state.currTweet}
              </p>
            </div>
  }
            
          </div>
          <div class="actions">
          <img class="frogs" src={this.state.frog}/>
            <div class="top-row">
              <img class="button" src="assets/sleep_icon.gif" onClick={e => this.selectSleep(e)}/>
              <img class="button" src="assets/food_icon.gif"onClick={e => this.selectFood(e)}/>
              <img class="button" src="assets/balloon.gif" onClick={e => this.selectBalloon(e)}/>
            </div>
            <div class="bottom-row">
              <img class="button" src="assets/music_icon.gif" onClick={e => this.selectMusic(e)}/>
              <img class="button" src="assets/phone_icon.gif" onClick={e => this.selectPhone(e)}/>
              <img class="button" src="assets/car.gif" onClick={e => this.selectCar(e)}/>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
