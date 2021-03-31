import React from 'react'
import { Link } from 'gatsby'
import { ChipLink } from './styles'

export const Chip = ({ name, image, path, active }) => {
  return (
    <ChipLink as={Link} to={path} className={active ? 'active' : ''}>
      {image && <img src={`https://dasn553e683dp.cloudfront.net/images/icons/${image}`} width='25px' /> }{name}
    </ChipLink>
  )
}

Chip.defaultProps = {
  active: false,
}