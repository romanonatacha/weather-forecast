import React, { Component } from 'react';
import './Capitals.scss';


export default class Capitals extends Component {
    render() {
        return (
            <div className="capitals">
                <div className="capitals__content">
                    <h3 className="capitals__content__title">Capitals</h3>
                    <div className="capitals__content__table">
                        <table>
                            <thead>
                                <tr>
                                    <td>Min</td>
                                    <td>Max</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Min</td>
                                    <td>Max</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>18º</td>
                                    <td>27º</td>
                                    <td>Rio de Janeiro</td>
                                </tr>
                                <tr>
                                    <td>18º</td>
                                    <td>27º</td>
                                    <td>Rio de Janeiro</td>
                                </tr>
                                <tr>
                                    <td>18º</td>
                                    <td>27º</td>
                                    <td>Rio de Janeiro</td>
                                </tr>
                                <tr>
                                    <td>18º</td>
                                    <td>27º</td>
                                    <td>Rio de Janeiro</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <div className="capitals__content__table">
                        <table>
                            <thead>
                                <tr>
                                    <td>Min</td>
                                    <td>Max</td>
                                    <td></td>        
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>17º</td>
                                    <td>25º</td>
                                    <td>São Paulo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
        )
    }
}