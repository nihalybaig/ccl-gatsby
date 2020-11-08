import React from "react"
import { Carousel, Row, Col } from "react-bootstrap"
import Image from "./image"
import { useMediaQuery } from "beautiful-react-hooks"

const totalBrandImages = 7

export default function BrandCarousel() {
  const isSmall = useMediaQuery("(max-width:650px")
  return (
    <div>
      {isSmall ? (
        <Carousel fade interval={2500}>
          {[...Array(totalBrandImages).keys()].map(i => {
            return (
              <Carousel.Item key={i}>
                <Row className="px-5">
                  <Col xs={12} className="p-3">
                    <Image
                      alt={i + " brand carousel img"}
                      filename={`brands-images/${i + 1}.png`}
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            )
          })}
        </Carousel>
      ) : (
        <Carousel fade interval={2500}>
          <Carousel.Item>
            <Row>
              <Col lg={3} md={3} sm={3}>
                <Image alt="first image" filename="brands-images/1.png" />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <Image alt="first image" filename="brands-images/2.png" />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <Image alt="first image" filename="brands-images/3.png" />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <Image alt="first image" filename="brands-images/4.png" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col lg={3} md={3} sm={3}>
                <Image alt="first image" filename="brands-images/5.png" />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <Image alt="first image" filename="brands-images/6.png" />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <Image alt="first image" filename="brands-images/7.png" />
              </Col>
              <Col lg={3} md={3} sm={3}>
                <Image alt="first image" filename="brands-images/9.png" />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  )
}
