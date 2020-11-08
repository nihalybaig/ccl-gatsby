import React from "react"
import { Carousel, Row, Col } from "react-bootstrap"
import Image from "./image"
import { useMediaQuery } from "beautiful-react-hooks"

const totalBrandImages = 32
// Example
// multiples of 4
// png files in brands-images folder
// Eg.: brands-images/30.png

export default function BrandCarousel() {
  const isSmall = useMediaQuery("(max-width:576px)")
  const isMedium = useMediaQuery("(max-width:992px)")
  return (
    <div>
      {isSmall ? (
        <Carousel fade interval={2500} indicators={false}>
          {[...Array(totalBrandImages).keys()].map(i => {
            return (
              <Carousel.Item key={i}>
                <Row className="px-5">
                  <Col xs={12} className="py-2 px-5">
                    <Image
                      alt={i + 1 + " brand carousel img"}
                      filename={`brands-images/${i + 1}.png`}
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            )
          })}
        </Carousel>
      ) : isMedium ? (
        <Carousel fade interval={2500} indicators={false}>
          {[...Array(Math.ceil(totalBrandImages / 2)).keys()].map(i => {
            return (
              <Carousel.Item>
                <Row className="px-5">
                  {[...Array(2).keys()].map(j => {
                    return (
                      <Col lg={6} md={6} sm={6} className="py-2 px-5">
                        <Image
                          alt={i * 2 + j + 1 + " brand carousel img"}
                          filename={`brands-images/${i * 2 + j + 1}.png`}
                        />
                      </Col>
                    )
                  })}
                </Row>
              </Carousel.Item>
            )
          })}
          {/* {[...Array(Math.ceil(totalBrandImages / 2)).keys()].map(i => {
            return (
              <Carousel.Item>
                <Row className="px-5">
                  <Col lg={6} md={6} sm={6} className="py-2 px-5">
                    <Image
                      alt={i * 2 + 1 + " brand carousel img"}
                      filename={`brands-images/${i * 2 + 1}.png`}
                    />
                  </Col>
                  <Col lg={6} md={6} sm={6} className="py-2 px-5">
                    <Image
                      alt={i * 2 + 2 + " brand carousel img"}
                      filename={`brands-images/${i * 2 + 2}.png`}
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            )
          })} */}
          {/* <Carousel.Item>
            <Row className="px-5">
              <Col lg={6} md={6} sm={6} className="py-2 px-5">
                <Image alt="first image" filename="brands-images/1.png" />
              </Col>
              <Col lg={6} md={6} sm={6} className="py-2 px-5">
                <Image alt="first image" filename="brands-images/2.png" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="px-5">
              <Col lg={6} md={6} sm={6} className="py-2 px-5">
                <Image alt="first image" filename="brands-images/3.png" />
              </Col>
              <Col lg={6} md={6} sm={6} className="py-2 px-5">
                <Image alt="first image" filename="brands-images/4.png" />
              </Col>
            </Row>
          </Carousel.Item> */}
        </Carousel>
      ) : (
        <Carousel fade interval={2500} indicators={false}>
          {[...Array(Math.ceil(totalBrandImages / 4)).keys()].map(i => {
            return (
              <Carousel.Item>
                <Row className="px-5">
                  {[...Array(4).keys()].map(j => {
                    return (
                      <Col lg={3} md={3} sm={3} className="py-2 px-5">
                        <Image
                          alt={i * 4 + j + 1 + " brand carousel img"}
                          filename={`brands-images/${i * 4 + j + 1}.png`}
                        />
                      </Col>
                    )
                  })}

                  {/* <Col lg={3} md={3} sm={3} className="py-2 px-5">
                    <Image
                      alt={i * 4 + 2 + " brand carousel img"}
                      filename={`brands-images/${i * 4 + 2}.png`}
                    />
                  </Col>
                  <Col lg={3} md={3} sm={3} className="py-2 px-5">
                    <Image
                      alt={i * 4 + 3 + " brand carousel img"}
                      filename={`brands-images/${i * 4 + 3}.png`}
                    />
                  </Col>

                  <Col lg={3} md={3} sm={3} className="py-2 px-5">
                    <Image
                      alt={i * 4 + 4 + " brand carousel img"}
                      filename={`brands-images/${i * 4 + 4}.png`}
                    />
                  </Col> */}
                </Row>
              </Carousel.Item>
            )
          })}
          {/* <Carousel.Item>
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
          </Carousel.Item> */}
        </Carousel>
      )}
    </div>
  )
}
