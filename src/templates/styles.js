import styled from 'styled-components'

export const PaginationLinks = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 2rem;
`

export const PaginationLink = styled.div`
  margin: 1rem;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 1rem;
  width: 80px;
  transition: all .2s;
  cursor: not-allowed;
`

export const ActivePaginationLink = styled.div`
  margin: 1rem;
  border: 1px solid #aaa;
  border-radius: 5px;
  padding: 1rem;
  width: 80px;
  transition: all .2s;

  &:hover {
    background-color: #00A0DF;
    color: #fff;
  }
`