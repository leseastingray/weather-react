import React, { Component } from 'react';
import WeatherListItem from './weatherlistitem';

// list, remember extends = : base class
class WeatherList extends Component {
  constructor (props) {
  super(props);
      this.state = {};
  }
  
render () {
  const { forecastDays, onDayClicked } = this.props;
  // returns weather list containing WeatherListItems
  return (
      <div className="weather-list flex-parent">
          { forecastDays.map((forecastDay, index) =>
              <WeatherListItem
                  key={forecastDay.dt}
                  forecastDay={forecastDay}
                  index={index}
                  onDayClicked={onDayClicked}
              />
          ) }
      </div>
    );
  }
} 
  
export default WeatherList;