import styled from "styled-components"

export const StyledLayout = styled.div`
  .container-fluid {
    width: 100%;
    flex-wrap: wrap;
  }

  .wrapper-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .content {
    padding: 1.5rem;
  }

  .navbar-brand {
    padding: 0;
    margin: 1rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
    font-family: Pacifico, serif;
    font-weight: 800;
    width: 120px;
    border-radius: 50%;

    img {
      max-width: 100%;
      display: block;
    }
  }

  .rounded-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .navbar-collapse {
    flex-basis: 100%;
    justify-content: center;
  }
  .navbar-collapse ul {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 320px;
    margin: 1rem 0;
  }
  .navbar-collapse ul li {
    text-align: center;
  }
`