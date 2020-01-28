import React, {Component} from 'react';

export default class Introduction extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <ul className="slides">
                        <li style={{backgroundImage: 'url(images/img_bg.jpg'}}>
                            <div classNmae="overlay"/>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1> Hi! <br/> My name is Roy</h1>
                                                <p> <a className="btn btn-primary btn-learn" href="https://www.linkedin.com/in/roynunez" target="_blank" rel="noopener noreferrer"> View resume<i className="icon-download4" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li style={{backgroundImage: 'url(images/img_bg.jpg'}}>
                            <div className="overlay"/>
                            <div classname="container-fluid">
                                <div className="row">
                                    <div classname="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1> My header</h1>
                                                <p><a className="btn btn-primary btn-learn" href="https://github.com/Nunez350" target="blank" rel="noopener noreferrer"> View Projects on Gihub<i className="icon-briefcase3" /> </a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </section>
            </div>
        )
    }
}