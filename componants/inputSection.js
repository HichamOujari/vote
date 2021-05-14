import React, { Component } from 'react';
import style from "../styles/Home.module.css"

export default class InputSection extends Component {
  render() {
    return (
      <div className={style.InputSection}>
          <div className={style.select}>
                <p className={style.title}>{this.props.title} :</p>
                <select name={this.props.title} id={"Id"+this.props.title} className={style.Input} required>
                    {this.props.data.map((ele,index)=>{
                        return (
                            <option value={ele}>{ele}</option>
                        )
                    })}
                </select>
            </div>
            <div className={style.Code}>
                <p className={style.title}>Code :</p>
                <input type="text" name={"Code"+this.props.title} id={"IdCode"+this.props.title} className={style.Input} required/>
            </div>
      </div>
    );
  }
}
