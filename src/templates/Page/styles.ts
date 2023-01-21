import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: centr;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-botton: var(--large);
`
export const Body = styled.div`
  //serve para varios estilos do body
  //p, a, ul, li, blockquote

  p,
  a {
    font-size: var(--medium);
    line-height: var(--medium);
    color: var(--highlight);
  }
`
