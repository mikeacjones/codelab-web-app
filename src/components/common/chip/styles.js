import styled from 'styled-components'

export const ChipLink = styled.div`
  font-size: .8rem;
  background-color: #eddbf4;
  padding: .8rem;
  border-radius: 10px;
  color: #000;
  transition: all 500ms ease;
  margin: 4px;
  z-index: 15;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  display: flex;

  .active {
    background-color: #52307c;
    color: #eddbf4;
  }

  &:hover {
    transform: scale(1.15);
  }

  text-decoration: none;
  color: inherit;
`
