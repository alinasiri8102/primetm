"use client";
import Slider from "react-slick";
import React, { Component } from "react";

export default class mySlider extends Component {
  render() {
    const portfolios = [
      "/img/portfolio1.png",
      "/img/portfolio2.png",
      "/img/portfolio5.png",
      "/img/portfolio1.png",
      "/img/portfolio5.png",
    ];
    var settings = {
      className: "center",
      arrows: false,
      dots: true,
      infinite: true,
      speed: 600,
      centerMode: true,
      centerPadding: "0px",
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {portfolios.map((p, index) => (
          <img key={index} src={p} alt="پرایم تیم نمونه کار" className="img" />
        ))}
      </Slider>
    );
  }
}
