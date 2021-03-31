import styled from 'styled-components'

export const Card = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
`

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  overflow: hidden;
  word-wrap: no-wrap;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

export const Summary = styled.div`
  font-weight: 300;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Item = styled.div`
  border: 1px solid #aaa;
  border-radius: 5px;

  padding: 1rem;
  background: #fff;
  position: relative;
  color: rgb(32, 33, 36);
  display: flex;
  flex-direction: row;
`

export const Content = styled.div`
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Stats = styled.div`
  margin: 1rem;
  color: #999;
  font-weight: 300;
  font-size: .8rem;
  display: flex;
  justify-content: space-between;
`

export const Cats = styled.div`
  display: flex;
  flex: 0 0 25px;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
      max-width: 25px;
      height: auto;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`
