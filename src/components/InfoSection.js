import React from "react"
import { Row } from "react-bootstrap"
import Image from "./image"

export default function InfoSection({
  reverse = false,
  title = "",
  text = "",
  img,
}) {
  return (
    <div className="p-4">
      <div className="col-12 pb-4">
        <h2 className="text-center">{title}</h2>
      </div>
      <Row className={`${reverse ? `flex-row-reverse` : ``}`}>
        <div className="col-md-6 m-auto">
          <Image alt={img} filename={img} />
        </div>
        <div
          className="col-md-6 text-justify"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Row>
      {/* <div className={`row ${reverse ? `reverse` : ``}`}> */}

      {/* </div> */}
    </div>
  )
}
