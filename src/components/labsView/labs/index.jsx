import React from 'react'
import { Wrapper, Grid, Card, Item, Content, Cats, Stats, Title, Summary } from './styles'
import { LabContainer } from 'components/common'
import { Image } from "@chakra-ui/react"

const translateTime = time => {
  if (time === 0) return ''
  if (time < 60) return `${time} minutes`
  return `${time / 60} hours`
}

export const Labs = ({ labs, labCategories }) => {
  return (
    <Wrapper as={LabContainer} id='labs'>
      <Grid>
        {labs.map(lab => (
          <Item key={lab.url} as='a' href={`/codelabs/${lab.url}/index.html`} target='_blank' rel='noopener noreferrer'>
            <Card>
              <Content>
                <Title>{lab.title}</Title>
                <Stats>
                  <span>{translateTime(lab.duration)}</span>
                  <span>Updated {lab.updated.substr(0, 10)}</span>
                </Stats>
                <Summary>{lab.summary}</Summary>
              </Content>
              <Cats>
                {lab.category
                  .filter(cat => labCategories[cat])
                  .map(cat => (
                    <div key={cat}>
                      <Image src={`/images/icons/${labCategories[cat]}`} alt={cat} boxSize='25px' />
                    </div>
                  ))}
              </Cats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}