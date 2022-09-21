import React, { Component } from "react";
import './Clock.css'
export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
          }}
        />
        <span className="text-dark twelve">12</span>
        <span className="text-dark one">1</span>
        <span className="text-dark two">2</span>
        <span className="text-dark three">3</span>
        <span className="text-dark four">4</span>
        <span className="text-dark five">5</span>
        <span className="text-dark six">6</span>
        <span className="text-dark seven">7</span>
        <span className="text-dark eight">8</span>
        <span className="text-dark nine">9</span>
        <span className="text-dark ten">10</span>
        <span className="text-dark eleven">11</span>
      </div>
    );
  }
}
