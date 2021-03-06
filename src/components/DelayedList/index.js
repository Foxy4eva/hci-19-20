import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
// import * as bb from 'bluebird'

import './style.module.scss'

const List = ({ children, listStyleContainer, timeout }) => {
  const [visible, setVisible] = useState(false)
  const [visibleElements, setVisibleElements] = useState([])

  useEffect(() => {
    if (!visible || children.length === visibleElements.length) {
      return
    }

    const newElement = children.find(e => visibleElements.indexOf(e) === -1)

    if (!newElement) {
      return
    }

    setTimeout(() => setVisibleElements([...visibleElements, newElement]), timeout)
  })

  return <VisibilitySensor onChange={ ((isVisible) => {
    !visible && setVisible(isVisible)
  })}
  partialVisibility>
    <ul styleName={listStyleContainer}>
      {children.map(e => ({
        ...e,
        props: {
          ...e.props,
          visible: visibleElements.indexOf(e) !== -1
        }
      })
      )}
    </ul>
  </VisibilitySensor>
}

List.propTypes = {
  children: PropTypes.array.isRequired,
  listStyleContainer: PropTypes.string.isRequired,
  timeout: PropTypes.number
}

List.defaultProps = {
  timeout: 300
}

export default List
