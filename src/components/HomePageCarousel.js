import React from "react"
import { Carousel } from "react-bootstrap"
// import Image from "./image"
import "./home-page-carousel.scss"

export default function HomePageCarousel() {
  return (
    <div className="home-page-carousel">
      <Carousel>
        <Carousel.Item>
          <div style={{ maxHeight: 480, maxWidth: 1980 }}>
            <img
              src={require("../images/carousel-images/0.jpg")}
              alt="sa"
              width="100%"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ maxHeight: 480, maxWidth: 1980 }}>
            <img
              src={require("../images/carousel-images/1.jpg")}
              alt="sa"
              width="100%"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ maxHeight: 480, maxWidth: 1980 }}>
            <img
              src={require("../images/carousel-images/2.jpg")}
              alt="sa"
              width="100%"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ maxHeight: 480, maxWidth: 1980 }}>
            <img
              src={require("../images/carousel-images/3.jpg")}
              alt="sa"
              width="100%"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ maxHeight: 480, maxWidth: 1980 }}>
            <img
              src={require("../images/carousel-images/4.jpg")}
              alt="sa"
              width="100%"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ maxHeight: 480, maxWidth: 1980 }}>
            <img
              src={require("../images/carousel-images/5.jpg")}
              alt="sa"
              width="100%"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ maxHeight: 480, maxWidth: 1980 }}>
            <img
              src={require("../images/carousel-images/6.jpg")}
              alt="sa"
              width="100%"
            />
          </div>
          {/* <div className="d-block w-100">
            <div style={{ maxHeight: 544, maxWidth: 1980 }}>
              <img
                src={require("../images/carousel-images/0.jpg")}
                alt="sa"
                width="100%"
              />
              // <Image alt="first image" filename="carousel-images/1.jpg" />
            </div>
          </div> */}
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
