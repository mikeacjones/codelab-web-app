import React from 'react'
import { Wrapper, Grid, Card, Item, Content, Cats, Stats, Title, Summary } from './styles'
import { LabContainer } from 'components/common'

const translateTime = time => {
  if (time === 0) return ''
  if (time < 60) return `${time} minutes`
  return `${time / 60} hours`
}

export const Labs = ({ labs, labCategories }) => {
  console.log(labCategories)
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
                    <div>
                      <img src={`https://dasn553e683dp.cloudfront.net/images/icons/${labCategories[cat]}`}/>
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
