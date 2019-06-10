import React, { Component } from 'react';

class WeatherListItem extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    // onClick handler bind
    this.onClick = this.onClick.bind(this);
  }
  // onClick handler method, used in render return
  onClick () {
    const { onDayClicked, index } = this.props;
    onDayClicked(index);
  }  

  render() {
    const { forecastDay } = this.props;
    const date = new Date(forecastDay.dt * 1000);
    const weekday = this.getWeekday(date);
    // returns clickable weather list item
    return (
      <div className="weather-list-item" onClick={this.onClick}>
        <h2>{date.getMonth() + 1} / {date.getDate()}</h2>
            <h3>{weekday}</h3>
            <h3>{forecastDay.minTemp.toFixed(1)}&deg;F &#124; {forecastDay.maxTemp.toFixed(1)}&deg;F</h3>
      </div>
    );
  }
  // returns the day name of the date
  getWeekday(date) {
    const dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = date.getDay();
    return dayNames[weekday];
  }  
}
  
export default WeatherListItem;