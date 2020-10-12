import * as React from 'react'

function SvgBack(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g>
        <path
          d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
          fill="rgba(29,161,242,1)"
        ></path>
      </g>
    </svg>
  )
}

export default SvgBack
