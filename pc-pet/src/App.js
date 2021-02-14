import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frog: "assets/frogs_sprite.gif",
      happiness: 1
    };

    this.checkWellness = this.checkWellness.bind(this);
  }

  checkWellness(event) {
    event.preventDefault();
    console.log("hiii")
  }

  selectSleep(event) {
    
  }

  selectFood(event) {

  }

  selectBalloon() {

  }

  selectMusic() {

  }

  selectPhone() {

  }

  selectCar() {

  }

  render() {
    return (
      <div className="App">
        <header class="background">
          <div>
            <img class="wellness button" src="assets/wellness_icon.gif" onClick={e => this.checkWellness(e)}/>
          </div>
          <div class="frogs-container">
            <img class="frogs" src={this.state.frog}/>
          </div>
          <div class="actions">
            <div class="top-row">
              <img class="button" src="assets/sleep_icon.gif"/>
              <img class="button" src="assets/food_icon.gif"/>
              <img class="button" src="assets/balloon.gif"/>
            </div>
            <div class="bottom-row">
              <img class="button" src="assets/music_icon.gif"/>
              <img class="button" src="assets/phone_icon.gif"/>
              <img class="button" src="assets/car.gif"/>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
