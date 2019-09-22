import React, { Component, Fragment } from 'react';
import { FormattedDate, IntlProvider, FormattedTime } from "react-intl"
import './Weather.scss'
import Loader from '../loader/Loader'
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

export default class Weather extends Component {


    
    render() {

        return (

          <IntlProvider locale={navigator.language}>
            <div className="weather">

              { !this.props.currentData && !this.props.data && !this.props.dataList && !this.props.error && !this.props.errorTip && this.props.loading &&
                <Loader/>
              }

              { this.props.currentData && !this.props.error &&
                <div>
                  <h4 className="weather__city">{this.props.currentData.name}, {this.props.currentData.sys.country}</h4>
                  <img className="weather__icon" src = {`http://openweathermap.org/img/w/${this.props.currentData.weather[0].icon}.png`} alt="weather_icon"/>
                  <p>current temperature&ensp;<span className="bold_data">{parseInt(this.props.currentData.main.temp)} ºC</span></p>
                  <p>humidity&ensp;<span className="bold_data">{this.props.currentData.main.humidity}</span></p>
                  <p>{this.props.currentData.weather[0].description}</p>
                </div>
              }
              { this.props.data && !this.props.error &&


              <div>
                <h4 className="weather__forecast">hourly extended forecast</h4>
                <i className="fa fa-caret-down"></i>
                <Carousel arrows infinite>
                  
                  {this.props.dataList.map((item, index) => {

                    return (
                      <Fragment>
                            <div className="item">
                              <div className="weather__date">
                                <FormattedDate
                                  key={index}
                                  value={item.dt_txt}
                                  day="numeric"
                                  month="long"
                                  year="numeric"
                                />
                              </div>
                              <div>
                                <div className="weather__time">
                                  <FormattedTime 
                                    value={item.dt_txt}
                                  />
                                </div>
                                <div>
                                  <img className="weather__icon" src = {`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="weather_icon"/>
                                </div>
                                <div className="weather__temp">
                                  {parseInt(item.main.temp)} ºC
                                </div>
                                <div className="weather__desc">
                                  <div>{item.weather[0].description}</div>
                                </div>
                              </div>
                            </div>
                      </Fragment>
                    )
                  })}
                </Carousel>
              </div>
              
              }
              {
                this.props.error && !this.props.data && !this.props.dataList &&
                  <div>
                    <p>{this.props.error}</p>
                    <p>{this.props.errorTip}</p>
                  </div>
              }
            </div>
          </IntlProvider>
        )
    }
}