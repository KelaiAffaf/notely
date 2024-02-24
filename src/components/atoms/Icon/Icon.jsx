import React from 'react'
import Icons from '../../../assets/icons.svg'

const Icon = ({name,width,height,color }) => {
    let widthPx = width ? `${width}px` : "20px";
    let heightPx = height ? `${height}px` : "20px";
    let viewBox= width && height ? `0 0 ${width} ${height}` :null
  return (
    <svg className={`icon icon-${name}`} fill={color} width={widthPx} height={heightPx} viewBox={viewBox}>
        <use xlinkHref={`${Icons}#icon-${name}`}/>
    </svg>
  )
}

export default Icon


