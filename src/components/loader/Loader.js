import React, {Component} from 'react'
import './Loader.scss'


export default class Loader extends Component {
    render() {
        return (
            <div class="lds-ripple"><div></div><div></div></div>
        )
    }
}