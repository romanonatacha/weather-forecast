import React, {Component} from 'react'
import './Search.scss'


export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="city"/>
                    <input type="text" name="country" placeholder="country"/>
                    <button className="submit-search" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
                {/* <input type="text" placeholder="enter here the city name" />
                <button className="submit-search" type="submit">
                    <i className="fa fa-search"></i>
                </button> */}
            </div>
        )
    }
}