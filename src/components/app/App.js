import React, {Component} from 'react';
import './App.scss'
import Search from '../search/Search';
import Capitals from '../capitals/Capitals'
import Weather from '../weather/Weather';

const API_KEY = '051f55950afd406c29fef8724b3ca520'

export default class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
}

getWeather = async (e) => {
  e.preventDefault();

  let city = e.target.elements.city.value

  let country = e.target.elements.country.value;

  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric&lang=en_us&count=10`)
  //Convert the api data to Json format to a readable format
  const data = await api_call.json();
  // If the error code is 404, set State to error message else if the city and country exists run the code 

  console.log(data);

  if (data.cod === '404') {
      this.setState({
          error: 'Invalid Entry (Not Found)'
      })
  } else if (city && country) {

      this.setState({
          date: data.list.dt_txt,
          tempMin: data.list.main.temp_min,
          tempMax: data.list.main.temp_max,
          city: data.city.name,
          country: data.city.country,
          humidity: data.list.main.humidity,
          description: data.list.weather[0].description,
          icon: data.list.weather[0].icon,
          error: null
      })
  console.log(data);

  }
}

  render() {

    return (
      <div className="App">
        <div className="App__column banner">
          <h1 className="App__column__title">Weather Forecast</h1>
        </div>
        <div className="App__column content">
          <Search
            getWeather={this.getWeather}
          />
          <Weather
            date={this.state.date}
            tempMin={this.state.tempMin}
            tempMax={this.state.tempMax}
            humidity={this.state.humidity}
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            icon={this.state.icon}
            error={this.state.error}
          />
          {/* <Capitals/> */}
        </div>
      </div>
    )
  }

}
