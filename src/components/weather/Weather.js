import React, { Component, Fragment } from 'react';
import { FormattedDate, IntlProvider, FormattedTime } from "react-intl"
import './Weather.scss'
import $ from 'jquery'

import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

$("li:empty").remove();
export default class Weather extends Component {


    
    render() {

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
        return (

          <IntlProvider locale={navigator.language}>
            <div className="weather">
              { this.props.currentData &&
                <div>
                  <h4>{this.props.currentData.name}, {this.props.currentData.sys.country}</h4>
                  <img className="weather__icon" src = {`http://openweathermap.org/img/w/${this.props.currentData.weather[0].icon}.png`} alt="weather_icon"/>
                  <div>current temperature: {parseInt(this.props.currentData.main.temp)} ºC</div>
                  <div>humidity: {this.props.currentData.main.humidity}</div>
                  <div>{this.props.currentData.weather[0].description}</div>
                  <h4>extended forecast</h4>
                </div>
              }
              { this.props.data &&

              <div id="slider">
                <Carousel arrows infinite>
                  {this.props.dataList.map((item, index) => {

                    return (
                      <Fragment>
                        {item.dt_txt.substr(11, 19) === '12:00:00'
                          ?
                            <div className="item">
                              <FormattedDate
                                key={index}
                                className="weather__info__date"
                                value={item.dt_txt}
                                day="numeric"
                                month="long"
                                year="numeric"
                              />
                              <span className="weather__info__temp">
                                {parseInt(item.main.temp)} ºC
                              </span>
                            </div>
                          :
                            null
                        }
                      </Fragment>
                    )
                  })}
                </Carousel>
              </div>
              
              }
            </div>
          </IntlProvider>
        )
    }
}