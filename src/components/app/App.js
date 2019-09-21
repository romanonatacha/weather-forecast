import React, {Component} from 'react';
import './App.scss'
import Search from '../search/Search';
import Capitals from '../capitals/Capitals'
import Weather from '../weather/Weather';

const API_KEY = '051f55950afd406c29fef8724b3ca520'

export default class App extends Component {

  state = {
    data: undefined,
    dataList: [],
    error: undefined,
    errorTip: undefined,
    loading: true
}

getWeather = async (e) => {
  e.preventDefault();

  this.setState({
    loading: true
  })

  let city = e.target.elements.city.value

  let country = e.target.elements.country.value;

  const api_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric&lang=en_us&count=3`)
  const api_weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric&lang=en_us`)
  
  //Convert the api data to Json format to a readable format
  const data = await api_forecast.json()
  const currentData = await api_weather.json()


  if (data.cod === '404' || currentData.cod === '404') {
      this.setState({
          data: undefined,
          dataList: undefined,
          error: 'The city was not found.',
          errorTip: 'Make sure you typed it correctly and in English.'
      })
      
  } else if (city && country) {

      this.setState({
          data: data,
          dataList: data.list,
          currentData: currentData,
          error: undefined
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
            error={this.state.error}
            errorTip={this.state.errorTip}
            loading={this.state.loading}
          />
          {/* <Capitals/> */}
        </div>
      </div>
    )
  }

}
