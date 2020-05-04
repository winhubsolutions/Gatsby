import React, { Component } from "react"

import Portfoliolist from "../content/My-JSON-Content.json"

import Layout from "../components/layout"
// import SEO from "../components/seo"

// import Portfolio2 from "../img/portfolio/2-columns/grid2.jpg"
// import Portfolio3 from "../img/portfolio/2-columns/grid3.jpg"
// import Portfolio4 from "../img/portfolio/2-columns/grid4.jpg"
// import Portfolio5 from "../img/portfolio/2-columns/grid5.jpg"
// import Portfolio6 from "../img/portfolio/2-columns/grid6.jpg"
// import Portfolio7 from "../img/portfolio/2-columns/grid7.jpg"
// import Portfolio8 from "../img/portfolio/2-columns/grid8.jpg"



function portfolio() {
    return (
        <Layout>
            <section className="portfolio_area sec_pad bg_color">
                <div className="container">
                    <div id="portfolio_filter" className="portfolio_filter mb_50">
                        <div
                            className="row portfolio_gallery ml-0 mr-0 mb-50"
                            id="work-portfolio"
                            style={{ position: "relative", height: "883.532px" }}
                        >

                            {Portfoliolist.content.map((data, index) => {
                                return (<div className="col-lg-3 col-sm-6 portfolio_item br ux mb_50" key={`content_item_${index}`}>
                                    <div className="portfolio_img">
                                        <img src={data.imageurl} alt />
                                        <div className="hover_content">
                                            <a href={data.imageurl} className="img_popup leaf">
                                                <i className="ti-plus" />
                                            </a>
                                            <div className="portfolio-description leaf">
                                                <a href="work-default.html" className="portfolio-title">
                                                    <h3 className="f_500 f_size_20 f_p"> {data.name}</h3>
                                                </a>
                                                <div className="links">
                                                    <a href="#">{data.item1}</a>
                                                    <a href="#">{data.item2}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}




                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )



}

















export default portfolio

