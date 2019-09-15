import React, { Component } from 'react';
import './Weather.scss'

export default class Weather extends Component {
    render() {
        return (
            <div className="weather__info">
          {/* If the props exist only then will the <p> tags be shown */}

            { 
              this.props.date && <p className="weather__key">Date: 
              <span className="weather__value"> {this.props.date}</span>
              </p>
            }
            { 
              this.props.city && this.props.country && <p className="weather__key">Location: 
              <span className="weather__value"> {this.props.city}, {this.props.country}</span>
              </p>
            }
          { 
              this.props.tempMin && this.props.tempMax && <div><p className="weather__key">Low: 
              <span className="weather__value"> {this.props.tempMin}ºC</span>
              </p>
              <p className="weather__key">High: 
              <span className="weather__value"> {this.props.tempMax}ºC</span>
               </p></div>
              }
          { 
              this.props.humidity && <p className="weather__key">Humidity:
              <span className="weather__value"> {this.props.humidity} </span>
              </p>
              }
          {
              this.props.description && this.props.icon && <p className="weather__key">Description:
              <span className="weather__value"> {this.props.description}
              <img className="weather__icon" src = {`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather_icon"/>
              </span>
              </p>
              }
          {
              this.props.error && <p className="weather__key"> 
              <span className="weather__error"> {this.props.error}
              </span>
              </p>
              }
      </div>
        )
    }
}