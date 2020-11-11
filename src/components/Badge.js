
import React from 'react'

import './Badge.css'

export default ({name,href,color,small}) => (
    <span className="badge-container"><a className={"badge"+(small? " small-badge":"")} style={{backgroundColor:color}} href={href}>{name}</a></span>
)
