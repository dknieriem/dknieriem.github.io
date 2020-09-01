import React from "react"

export default function Section(props) {
  return <section>
  <h1>{props.title}</h1>
  {props.children}
  </section>
}