import styled from "styled-components"

export const Job = styled.article`
  padding: 2rem;
  margin: 2rem 0;
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
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
    font-family: Lato, Verdana, sans-serif;
  }

  h4 a {
    font-weight: 500;
  }

  svg {
    display: inline-block;
    margin-bottom: 0.275rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
export const Location = styled.span`
  font-weight: 300;
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
  opacity: 0.25;
  position: absolute;
  top: 0;
  left: 1rem;

  b {
    font-size: 13px;
    line-height: 1.25em;
    color: #fff;
  }
}
`

export const Technologies = styled.ul`
  padding: 0;
  margin: 1.5rem 0 1.5rem;

  li {
    display: inline-block;
    margin-right: 0.5rem;
    font-family: Lato, Verdana, sans-serif;
  }
`

export const Timespan = styled.h5`
  font-weight: 500;
  margin-top: 0;
  font-size: 1em;
`

export const Descriptions = styled.ul`
  font-size: 15px;
  font-weight: 500;
  font-family: Lato, Verdana, sans-serif;
  margin: 1rem 0 2rem;
  padding: 0 0 0 1rem;
  list-style-type: disc;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.25em;
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
    align-items: flex-start;
    line-height: 1.25em;
    padding: 0 0 1rem;
    font-size: 13px;
    text-transform: uppercase;
  }

  svg {
    color: #ffc107;
    font-size: 16px;
    margin: 0.25rem 0.5rem 0 0;
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