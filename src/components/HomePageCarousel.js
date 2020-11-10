import React from "react"
import { Carousel } from "react-bootstrap"
import HomeCarouselImage from "./home-carousel-image"
import "./home-page-carousel.scss"

const totalCarouselImages = 7

export default function HomePageCarousel() {
  return (
    <div className="home-page-carousel">
      <Carousel>
        {[...Array(totalCarouselImages).keys()].map(i => {
          return (
            <Carousel.Item key={i}>
              <div style={{ maxHeight: 480, maxWidth: 1920 }}>
                <HomeCarouselImage
                  alt={`carousel ${i} image`}
                  filename={`carousel-images/${i}.jpg`}
                />
              </div>
            </Carousel.Item>
          )
        })}
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
      </Carousel>
    </div>
  )
}
