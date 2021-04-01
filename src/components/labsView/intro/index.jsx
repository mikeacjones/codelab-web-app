import React from 'react'
import { Container, ChipRow } from 'components/common'
import { Wrapper, IntroWrapper, Details } from './styles'
import dev from 'images/dev.svg'

export const Intro = ({ pageContext }) => (
  <Wrapper>
    <IntroWrapper as={Container}>
      <Details>
        <img src={dev} alt='MuleSoft' width='200px' />
        <h1>MuleSoft Code Labs</h1>
        <span>A collection of guided labs, demonstrating various MuleSoft integrations.</span>
      </Details>
    </IntroWrapper>
    <ChipRow as={Container} labCategories={pageContext.labCategories} categories={pageContext.categories} slugs={pageContext.catSlugs} />
  </Wrapper>
)
