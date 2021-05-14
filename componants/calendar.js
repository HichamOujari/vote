import React, { Component } from 'react';
import style from "../styles/Home.module.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DoneIcon from '@material-ui/icons/Done';

export default class Calendar extends Component {
    hours = ["9:00 AM","10:00 AM","11:00 AM"]
    days = ["MON","TUE","WEB","THU","FRI","SAT","SUN"]
    state = {
        nbrDay: 7
    }
    selectDay(index,time){
    
    }
  render() {
      
    return (
      <div className={style.Calendar}>
          <div className={style.header}>
              <div className={style.Selected}>
                  <p className={style.date}>11 November 2019</p>
                  <p className={style.day}>Monday</p>
              </div>
              <div className={style.right}>
                  <EventNoteIcon className={style.Icon} />
                  <select name="">
                      <option>March 21, 2021 - March 27, 2021</option>
                  </select>
              </div>
          </div>
          <div className={style.Content}>
              <div className={style.top}>
                  <ArrowBackIosIcon className={style.toleft} />
                  <div className={style.Days}>
                    {this.days.map((ele,index)=>{
                        if(index<this.state.nbrDay){
                            return (<div key={index} className={style.day}>
                                <p className={style.title}>{this.days[index]}</p>
                                <p className={style.date}>{11+index} NOV 2019</p>
                            </div>)
                        }
                    })}
                  </div>
                  <ArrowForwardIosIcon className={style.toright} />
              </div>
              <div className={style.bottom}>
                  {this.days.map((ele,index)=>{
                      if(index<this.state.nbrDay){
                        return (<ul key={index} className={style.days}>
                            <li onClick={this.selectDay(index,this.hours[0])}>{this.hours[0]}</li>
                            <li onClick={this.selectDay(index,this.hours[1])}>{this.hours[1]}</li>
                            <li onClick={this.selectDay(index,this.hours[2])}>{this.hours[2]}</li>
                        </ul>)
                      }
                  })}
              </div>
          </div>
          <div className={style.btnSubmit}>
              <button className={style.submit}>Proceed to Pay</button>
          </div>
      </div>
    );
  }
}