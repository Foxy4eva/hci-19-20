import React from "react"
import { Link } from "gatsby"

import MenuItem from '../components/menuItem'

const arr = [
  {
    link: '/examples/example-1',
    text: 'Example 1'
  },
  {
    link: '/examples/example-2',
    text: 'Example 2'
  },
  {
    link: '/examples/example-3',
    text: 'Example 3'
  }
]

const IndexPage = () => (
  <div>
    <h1>
    <b>Teaching</b>
    </h1>
    {<ul>
      {arr.map(item => <MenuItem link={item.link} text={item.text} />)}
    </ul>}
  </div>

)

export default IndexPage
