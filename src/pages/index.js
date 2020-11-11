import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { connect } from "react-redux"

const IndexPage = ({ id, count, increment }) => {
  console.log("State is ", count)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Link to="/page-2">Page 2</Link>
      <p>This is value from ID {id}</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </Layout>
  )
}

const mapStateToProps = ({ count, id }) => {
  return { count, id }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
