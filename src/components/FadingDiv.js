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

const data = [
  {
    title: "Who We Are",
    desc:
      "as,md dhkadnjas dkasj sasas,md dhkadnjas dkasj sasas,md dhkadnjas dkasj sasas,md dhkadnjas dkasj sasWe have atoler a sd asmda sd,m as,d as,md dhkadnjas dkasj sas",
    color: "darkslateblue",
  },
  {
    title: "What We Do",
    desc:
      "We have atoler a sd asmda sd,moler a sd asmda sd,moler a sd asmda sd,moler a sd asmda sd,moler a sd asmda sd,m as,d as,md dhkadnjas dkasj sas",
    color: "darkgoldenrod",
  },
  {
    title: "Why Us",
    desc:
      "We havedkas  dsa dkas dasild klas dlkas kdl aslk dlad sakdlkas d laksd lka sdlas kdaskld asl atoler a sd asmda sd,m as,d as,md dhkadnjas dkasj sas",
    color: "darkolivegreen",
  },
  {
    title: "Who We Are",
    desc:
      "We have atoler a sd asmda sd,m as,d as,md dhkadnjas dkasj sasasmda sd,m as,d as,md dhkadnjas dkasj sasasmda sd,m as,d as,md dhkadnjas dkasj sasasmda sd,m as,d as,md dhkadnjas dkasj sasasmda sd,m as,d as,md dhkadnjas dkasj sasasmda sd,m as,d as,md dhkadnjas dkasj sas",
    color: "darkred",
  },
]

const pages = data.map(d => ({ style }) => {
  return (
    <animated.div style={{ ...style, color: d.color || "darkblue" }}>
      <div className="d-block">
        <h4 className="text-center">{d.title}</h4>
        <hr />
        <p>{d.desc}</p>
      </div>
    </animated.div>
  )
})

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
