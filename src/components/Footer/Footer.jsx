import React, { Component } from "react";
import Styles from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <section className={`h-auto text-center text-white ${Styles.info}`}>
          <div className="container pt-3 m-auto">
            <div className="row py-5 mb-3 d-flex justify-content-center">
              <div className="col-md-3 px-2">
                <h3>location</h3>
                <p>2215 John Daniel Drive Clark, MO 65243</p>
              </div>
              <div className="col-md-5">
                <h3>around the web</h3>
                <a href=""><i className="fab fa-fw fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-fw fa-twitter"></i></a>
                <a href=""><i className="fab fa-fw fa-linkedin-in"></i></a>
                <a href=""><i className="fab fa-fw fa-dribbble"></i></a>
              </div>
              <div className="col-md-3 px-2">
                <h3>about freelancer</h3>
                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
              </div>
            </div>

           
          </div>
          <div className={`${Styles.footer} text-center py-1`}>
              <p className={``}>Copyright 2022 © <span>Mamdouh</span> All Rights Reserved</p>
            </div>
        </section>
      </>
    );
  }
}
