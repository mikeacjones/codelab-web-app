import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`
