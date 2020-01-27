import React, {Component } from 'react';

export default class Blog extends Component {
    render() {
        return(
            <div>
                <section classname="colorlib-blog" data-section="blog">
                    <div className="colorlib-narrow-content">
                        <div classname="row">
                            <div className="col-md-d col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span classname="heading-meta"> Read</span>
                                <h2 className="colorlib-heading"> Recent Blog</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                {/* <a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a> */}
                                    <div className="desc">
                                        <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                                        <h3><a href="blog.html"> Renovating National Gallery</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="blog-entry">
                                    <a href="blog.html" className="blog-img"> <img src="images/blog-2.jpg" className ="img-responsive" alt=""/></a>
                                    <div className="desc">
                                        <span><small> dtae</small>| <small> da </small> | <small><i className="icon-bubble3" /> 4</small></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

