import React, { useState, useEffect } from "react"
import { useTransition, animated } from "react-spring"
import "./fadingdiv.scss"

/* const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>
      Adsa das da sdmalk
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>
      sadas da sdm,a B
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      sdasmdklmals dlask d als dalk
    </animated.div>
  ),
]
 */

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, color: "darkred" }}>
      <div className="d-block">
        <h4>Who We Are</h4>
        <hr />
        <p>We have atoler a sd asmda sd,m as,d as,md dhkadnjas dkasj sas</p>
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, color: "darkblue" }}>
      <div className="d-block">
        <h4>Why Us</h4>
        <hr />
        <p>We hav sd,m as,d as,md dhkadnj lksda dk al lsdak as dkasj sas</p>
      </div>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, color: "darkgreen" }}>
      <div className="d-block">
        <h4>What We Do</h4>
        <hr />
        <p>We hav sd,lorem ipusj s,dm sadasdkmk daksl dlak sdlka</p>
      </div>
    </animated.div>
  ),
]

const FadingDiv = () => {
  const [index, set] = useState(0)
  useEffect(
    () =>
      void setInterval(() => set(state => (state + 1) % pages.length), 4000),
    []
  )

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const SingleDiv = pages[item]
        return <SingleDiv key={key} style={props} />
      })}
    </div>
  )
}

export default FadingDiv
