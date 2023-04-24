import styled from "styled-components"

export const Job = styled.article`
  padding: 2rem;
  position: relative;

  h3 {
    font-weight: 500;
    text-transform: uppercase;
    font-family: Oswald,Impact,sans-serif;
    font-size: 1.15rem;
    letter-spacing: 1px;
    margin-bottom: 0;
  }

  h4 {
    font-size: 1.25rem;
  }

  svg {
    display: inline-block;
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px dotted #000;
  }
`
export const Location = styled.span`
  font-weight: 400;
  font-style: italic;
`

export const JobYear = styled.div`
  display: block
  background: #345
  height: 60px
  width: 60px
  border - radius: 50 %
  display: flex
  align - items: center
  justify - content: center;

  b {
    color: #fff
    font - size: 12px
    line - height: 1.25em
  }
`

