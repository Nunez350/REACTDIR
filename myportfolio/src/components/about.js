import React, {Component } from 'react';

export default class About extends Component {
    render() {
        return(
            <div>
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div classname="col-md-12">
                            <div className="about-desc">
                                <span classname="heading-meta"> About Us</span>
                                <h2 className="colorlib-heading"> Wh am I?</h2>
                                <p> Excited abou the opportunity to showcase my work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="colorlib-about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta"> What I do?</span>
                            <h2 className="colorlib-heading"> My skills</h2>
                        </div>
                    </div>
                    <div classname="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                            <div className="service color-1">
                                <span className="icon">
                                    <i className="icon-bulb"/>
                                </span>
                                <div className="desc">
                                    <h3> Web Development</h3>
                                    <p> I have experiaence building Web Applications</p>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-3">
                            <span classname="icon">
                                <i className="icon-phone3"></i>
                                </span>
                                <div className="desc">
                                    <h3> Java </h3>
                                    <p> More work comming soon!</p>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div classname="col-md-4 text-center animate-box">
                    <div className="service color-5">
                        <span className="icon">
                            <i className="icon-data"/>
                        </span>
                        <div className="desc">
                            <h3> Backend/Data science</h3>
                            <p> background</p> 
                        </div>
                    </div>
                </div>

            </section>
            </div>
        )
    }
}