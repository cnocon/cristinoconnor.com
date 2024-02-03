import React, { useState } from 'react';
import { StyledLayout, StyledBrand, StyledBrandContainer } from "../../layouts/StyledLayout";
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
// Higher order component example for passing shared functionality to children that need it
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function withHover(Component: any) {
  return function (props: any) {
    const [hovering, setHovering] = React.useState(false);

    const mouseOver = () => {
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

const Brand: React.FC<{ hovering: boolean }> = ({ hovering }) => {
  return (
    <StyledBrandContainer>
      <StyledBrand className="navbar-brand" href="/">
        <img src="/images/avatar-white.png" alt="Cristin O'Connor illustration" className="rounded rounded-circle" />
        <h1>Cristin O'Connor</h1>
      </StyledBrand>
      {hovering && <p className="badge bg-dark text-light">Hello!</p>}
    </StyledBrandContainer>
  )
}

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <>
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
                  <nav style={{marginBottom: "2rem"}}>
                    <NavLink
                      to="/"
                      style={{marginRight: "1rem"}}
                      className={({ isActive }) => isActive ? "active btn btn-secondary" : "btn btn-secondary"}
                    >
                      Résumé
                    </NavLink>
                    <NavLink
                      to="/writing-sample"
                      className={({ isActive }) => isActive ? "active btn btn-secondary" : "btn btn-secondary"}
                    >
                      Writing Sample
                    </NavLink>
                  </nav>
                </div>
              </div>
            </nav>
          </header>
        </div>
        <div className="content wrapper-outer">
          <div className="wrapper-inner">
            {children}
          </div>
        </div>
      </StyledLayout>
      <Footer />
    </>
  );
}

export default withHover(Layout);
