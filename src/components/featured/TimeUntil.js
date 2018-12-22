import React, { Component } from "react";
import Slide from "react-reveal/Slide";
export default class TimeUntil extends Component {
  state = {};
  render() {
    return (
      <Slide left delay={700}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">12</div>
              <div className="countdown_tag">Hours</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">06</div>
              <div className="countdown_tag">Minutes</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">56</div>
              <div className="countdown_tag">Seconds</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
