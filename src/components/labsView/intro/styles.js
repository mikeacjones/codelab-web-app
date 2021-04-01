import styled from 'styled-components'
import overlayIllustration from 'images/overlay.svg'

export const Wrapper = styled.div`
  background-image: url(${overlayIllustration});
  background-size: 400px;
  background-position: right top;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
`

export const IntroWrapper = styled.div`
  padding: 3rem 0;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`
