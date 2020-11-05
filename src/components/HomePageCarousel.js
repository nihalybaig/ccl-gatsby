import React from "react"
import { Carousel } from "react-bootstrap"
import Image from "./image"

export default function HomePageCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="d-block w-100">
            <Image alt="first image" filename="carousel-images/0.jpg" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100">
            <Image alt="first image" filename="carousel-images/1.jpg" />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100">
            <Image alt="first image" filename="carousel-images/3.jpg" />
          </div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
