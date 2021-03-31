import React from 'react'
import { Container, ChipRow } from 'components/common'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import dev from 'images/dev.svg'

export const Intro = ({ pageContext, labCategories }) => (
  <Wrapper>
    <IntroWrapper as={Container}>
      <Details>
        <h1>MuleSoft Code Labs</h1>
        <h4>A collection of guided labs, demonstrating various MuleSoft integrations.</h4>
      </Details>
      <Thumbnail>
        <img src={dev} alt='MuleSoft' />
      </Thumbnail>
      <ChipRow labCategories={labCategories} categories={pageContext.categories} slugs={pageContext.catSlugs} />
    </IntroWrapper>
  </Wrapper>
)
