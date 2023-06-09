import React from 'react'
import { Wall } from 'phosphor-react'
const Sphera: React.FC = () => {
  return (
    <>
      <Wall color="green" weight="duotone" width="111px" height="111px">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="16s"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="12s"
          from="0 0 0"
          to="360 0 0"
          repeatCount="indefinite"
        ></animateTransform>
      </Wall>
    </>
  )
}

export default Sphera
