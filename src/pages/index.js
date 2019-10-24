import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
    <h1>
    <b>Teaching</b>
    </h1>
    <ul>
      <li><Link to='/examples/example-1'>Example 1</Link></li>
      <li> <Link to='/examples/example-2'>Example 2</Link></li>
      <li><Link to='/examples/example-3'>Example 3</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
    </ul>
  </div>

)

export default IndexPage
