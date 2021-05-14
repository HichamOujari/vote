import React, { Component } from 'react';
import style from "../styles/Home.module.css"

export default class VoterInformation extends Component {
  render() {
    return (
      <div className={style.VoterInformation}>
          <p className={style.title}>Voter information</p>
          <form className={style.formInfos}>
              <div className={style.top}>
                <div className={style.Username}>
                    <p className={style.title}>username :</p>
                    <input type="text" name="username" id="IdUser" className={style.Input} required/>
                </div>
                <div className={style.Middlename}>
                    <p className={style.title}>MiddleName :</p>
                    <input type="text" name="middlename" id="IdMiddlename" className={style.Input} required/>
                </div>
                <div className={style.FirstName}>
                    <p className={style.title}>First name :</p>
                    <input type="text" name="firstname" id="IdFirstname" className={style.Input} required/>
                </div>
                <div className={style.Job}>
                    <p className={style.title}>Job :</p>
                    <select name="job" id="IdJob" className={style.Input} required>
                        <option ></option>
                        <option value="job1">job1</option>
                        <option value="job2">job2</option>
                        <option value="job3">job3</option>
                    </select>
                </div>
                <div className={style.Occupation}>
                    <p className={style.title}>Occupation :</p>
                    <input type="text" name="occupation" id="IdOccupation" className={style.Input} required/>
                </div>
                <div className={style.Address}>
                    <p className={style.title}>Address :</p>
                    <input type="text" name="address" id="IdAddress" className={style.Input} required/>
                </div>
              </div>
              <div className={style.Check}>
                  <input type="Checkbox" required name="check" id="IdCheck" />
                  <p className={style.text}>I already declare that all information provided on this application form is true and that i have not registred before</p>
              </div>
              <div className={style.btnSubmit}>
                <input type="submit" value="Submit" className={style.submit} />
              </div>
          </form>
      </div>
    );
  }
}
