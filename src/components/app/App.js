import React, {Component} from 'react';
import './App.scss'
import Search from '../search/Search';
import Capitals from '../capitals/Capitals'
import Weather from '../weather/Weather';

const API_KEY = '051f55950afd406c29fef8724b3ca520'

export default class App extends Component {

  state = {
    data: undefined,
    dataList: []
}

getWeather = async (e) => {
  e.preventDefault();

  let city = e.target.elements.city.value

  let country = e.target.elements.country.value;

  const api_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric&lang=en_us&count=3`)
  const api_weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric&lang=en_us`)
  
  //Convert the api data to Json format to a readable format
  const data = await api_forecast.json()
  const currentData = await api_weather.json()
  
  // If the error code is 404, set State to error message else if the city and country exists run the code 

  console.log(data);
  console.log(currentData);


  if (data.cod === '404' || currentData.cod === '404') {
      this.setState({
          error: 'Invalid Entry (Not Found)'
      })
  } else if (city && country) {

      this.setState({
          data: data,
          dataList: data.list,
          currentData: currentData
          // tempMin: data.list.main.temp_min,
          // tempMax: data.list.main.temp_max,
          // city: data.city.name,
          // country: data.city.country,
          // humidity: data.list.main.humidity,
          // description: data.list.weather[0].description,
          // icon: data.list.weather[0].icon,
          // error: null
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
            data={this.state.data}
            dataList={this.state.dataList}
            currentData={this.state.currentData}
          />
          {/* <Capitals/> */}
        </div>
      </div>
    )
  }

}
