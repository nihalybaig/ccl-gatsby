import React from "react"
import { GiCutDiamond } from "react-icons/gi"

export default function CustomList({ title = "", items = [] }) {
  return (
    <div className="m-2 p-2 text-white background-1">
      <h5 className="my-2">{title}</h5>
      <ul className="my-2">
        {items.map((item, i) => (
          <li key={i}>
            <span className="mr-2">
              <GiCutDiamond />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
