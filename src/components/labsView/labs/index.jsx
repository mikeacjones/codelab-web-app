import React from 'react'
import { Wrapper, Grid, Card, Item, Content, Cats, Stats, Title, Summary } from './styles'
import { LabContainer } from 'components/common'
import { Image, Avatar } from '@chakra-ui/react'

const translateTime = time => {
  if (!time) return ''
  if (time === 0) return ''
  if (time < 60) return `${time} minutes`
  return `${time / 60} hours`
}

export const Labs = ({ labs, labCategories }) => {
  return (
    <Wrapper as={LabContainer} id='labs'>
      <Grid>
        {labs.map(lab => (
          <Item key={lab.labConfig.labUrl} as='a' href={`/codelabs/${lab.labConfig.labUrl}/index.html`} target='_blank' rel='noopener noreferrer'>
            <Card>
              <Content>
                <Title>{lab.labConfig.labTitle}</Title>
                <Stats>
                  <span>{translateTime(lab.claat?.env?.codelab?.duration)}</span>
                  <span>Updated {lab.claat.env.lastBuild.substr(0, 10)}</span>
                </Stats>
                <Summary>{lab.labConfig.labSummary}</Summary>
              </Content>
              <Cats>
                {lab.labConfig.labCategories
                  .filter(cat => labCategories[cat])
                  .map(cat => (
                    <div key={cat}>
                      <Image src={`/images/icons/${labCategories[cat]}`} alt='' boxSize='25px' />
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
