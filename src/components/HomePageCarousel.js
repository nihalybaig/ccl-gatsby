import React from "react"
import { Carousel } from "react-bootstrap"
import Image from "./image"
import "./home-page-carousel.scss"

export default function HomePageCarousel() {
  return (
    <div className="home-page-carousel">
      <Carousel>
        <Carousel.Item>
          <div className="d-block w-100">
            <Image alt="first image" filename="carousel-images/0.jpg" />
          </div>
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100">
            <Image alt="first image" filename="carousel-images/1.jpg" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100">
            <Image alt="first image" filename="carousel-images/3.jpg" />
          </div>

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
