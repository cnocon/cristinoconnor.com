import React, { useState } from 'react';
import { StyledLayout, StyledBrand, StyledBrandContainer } from "./StyledLayout";

// Higher order component example for passing shared functionality to children that need it
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function withHover(Component: any) {
  return function (props: any) {
    const [hovering, setHovering] = React.useState(false);

    const mouseOver = () => {
      console.log('mouseover');
      return setHovering(true);
    }
    const mouseOut = () => setHovering(false);

    return (
      <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <Component {...props} hovering={hovering} />
      </div>
    );
  };
}

// Render props version
const Hover = ({ render }: { render: any }) => {
  const [hovering, setHovering] = React.useState(false);

  const mouseOver = () => setHovering(true);
  const mouseOut = () => setHovering(false);

  return (
    <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {render(hovering)}
    </div>
  );
}

const Brand = (props: any) => {
  return (
    <StyledBrandContainer>
      <div className="rounded rounded-circle">
        <StyledBrand className="navbar-brand text-dark" href="/">
          <img src="https://vue.cristin.io/img/square-portrait.d29137a7.png" alt="Cristin O'Connor illustration" className="rounded-circle" />
          Cristin O'Connor
        </StyledBrand>
      </div>
      <p className="badge bg-dark text-light">{props?.hovering ? ` Welcome!` : ``}</p>
    </StyledBrandContainer>
  )
}

const Layout = ({ children }: { children: any }) => {
  return (
    <StyledLayout>
      <div className="header wrapper-outer">
        <header className="wrapper-inner">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Hover render={
                (hovering: boolean) => <Brand hovering={hovering} />
              } />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{display: "flex", justifyContent: "space-around"}}>
                  <li className="nav-item" style={{display: "inline-block", marginRight: '1rem'}}>
                    <a className="nav-link fs-6 p-1 fw-bolder text-uppercase btn btn-secondary text-dark" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fs-6 p-1 fw-bolder text-uppercase btn btn-secondary text-dark" href="/resume">Resume</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="content wrapper-outer">
        <div className="wrapper-inner">
          {children ? children : null}
        </div>
      </div>
      <div className="footer wrapper-outer">
        <footer className="wrapper-inner">
          <p>&copy;2023 Cristin O'Connor</p>
        </footer>
      </div>
    </StyledLayout>
  );
}

// export default withHover(Layout);
export default Layout;
