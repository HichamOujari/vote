import React, { Component } from 'react';
import style from "../styles/Home.module.css"
import InputSection from "./inputSection"

export default class LocationImformation extends Component {
  
  states = ["state1","state2","state3","state4"]
  LGA = ["LGA1","LGA2","LGA3","LGA4"]
  registrationArea = ["Area1","Area2","Area3","Area4"]
  pollingNuit = ["polling1","polling2","polling3","polling4"]
    render() {
    return (
      <div className={style.LocationImformation}>
          <div className={style.Header}>
              <p className={style.title}>NB:</p>
              <p className={style.text}>This section contains information of deserved voting location of the application</p>
          </div>
          <form className={style.Infos}>
                <div className={style.content}>
                    <InputSection title="state" data={this.states}/>
                    <InputSection title="L.G.A" data={this.LGA}/>
                    <InputSection title="Registration Area" data={this.registrationArea}/>
                    <InputSection title="Polling nuit" data={this.pollingNuit}/>
                </div>
                <div className={style.btnSubmit}>
                    <input type="submit" className={style.submit} />
                </div>
          </form>
      </div>
    );
  }
}
