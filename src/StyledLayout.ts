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
    font-size: 30px;
    font-family: Pacifico, serif;
    font-weight: 800;
    color: transparent;
    position: relative;
    z-index: 10;
    background-color: #345;
    background-clip: text;
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: radial-gradient(ellipse at bottom right,#b698f5 30%,#66d4ff 40%,#5df8eb 50%,#ffec99 60%,#f28c8c 75%);
  }
`