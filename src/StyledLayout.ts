import styled from "styled-components"

export const StyledLayout = styled.div`

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
    margin: 0;
    display: flex;
    font-size: 30px;
    font-family: Pacifico, serif;
    font-weight: 800;
    width: 120px;
    height: 120px;
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
`