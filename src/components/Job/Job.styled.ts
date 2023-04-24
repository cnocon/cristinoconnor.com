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
    font-family: Lato, Verdana, sans-serif;
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
  font-family: Lato, Verdana, sans-serif;
`

export const JobYear = styled.div`
  display: block;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Lato, Verdana, sans-serif;
  background-color: $primary-bg-subtle;

  b {
    font - size: 12px
    line - height: 1.25em
  }
}
`

export const Technologies = styled.ul`
  padding: 0;
  margin: 1.5rem 0 1rem;

  li {
    display: inline-block;
    margin-right: 0.5rem;
    font-family: Lato, Verdana, sans-serif;
  }
`

export const Timespan = styled.h5`
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  font-family: Lato, Verdana, sans-serif;
`

export const Descriptions = styled.ul`
  font-size: 15px;
  font-weight: 500;
  font-family: Lato, Verdana, sans-serif;
  margin: 1rem 0;
  padding: 0 0 0 2rem;

  li {
    margin-bottom: 0.25rem;
  }

  li:last-child {
    margin-bottom: 0;
  }
`

export const Honors = styled.ul`
  list-style-type: none;
  padding-left: 0;

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 1.25em;
    padding: 0 0 1rem;
    font-size: 12px;
  }

  svg {
    color: #ffc107;
    font-size: 24px;
    margin-right: 0.5rem;
    font-weight: 400;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }

  div b,
  div span {
    flex-basis: 90%;
  }


`