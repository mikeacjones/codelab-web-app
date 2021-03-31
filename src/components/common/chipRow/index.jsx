import React from 'react'
import { ChipWrapper } from './styles'
import { Chip } from 'components/common'

export const ChipRow = ({ labCategories, categories, slugs }) => {
  console.log(labCategories)
  return (
    <div>
      <h3>categories:</h3>
      <ChipWrapper>
        <Chip path='/' name='All Categories' />
        {labCategories.map(({ name, image }, index) => (
          <Chip path={slugs[name]} name={name} image={image} active={categories.includes(name)} key={index} />
        ))}
      </ChipWrapper>
    </div>
  )
}
