import React from "react"
import teamList from "./teamList.json"

const Team = () => {
  return (
    <div className="companies">
      {teamList.map(te => (
        <>
          <div>
            {te.name}
            {te.image}
          </div>
        </>
      ))}
    </div>
  )
}

export default Team
