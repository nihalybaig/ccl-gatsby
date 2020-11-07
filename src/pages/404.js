import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const [counter, setCounter] = useState(10)
  useEffect(() => {
    if (counter === 0) {
      window.location.href = "/"
    }
    setTimeout(() => {
      setCounter(counter - 1)
    }, 1000)
  }, [counter])

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div style={{ maxWidth: 750, margin: "5% auto" }}>
        <h1>404: Not Found</h1>
        <p>
          <em>{window.location.href}</em> - This page doesn&#39;t exist... Page
          under construction...
        </p>
        <p>Redirecting to homepage in {counter} seconds</p>
        <Link to="/">Go to homepage</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
