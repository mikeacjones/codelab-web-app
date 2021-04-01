import styled from 'styled-components'

export const ChipWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1080px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`
