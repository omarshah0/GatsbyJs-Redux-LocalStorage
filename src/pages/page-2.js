import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ name, count, increment, decrement }) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome {name}</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const mapStateToProps = ({ count, name }) => {
  return { count, name }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: `INCREMENT` }),
    decrement: () => dispatch({ type: `DECREMENT` }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage)
