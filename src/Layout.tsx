import React, { ReactNode } from 'react';
import { StyledLayout } from "./StyledLayout";

 const Layout = ({ children }: {children: ReactNode}): React.ReactElement => {
  return (
    <StyledLayout>
      <div className="header wrapper-outer">
        <header className="wrapper-inner">
          <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand text-dark" href="/"><img src="https://vue.cristin.io/img/square-portrait.d29137a7.png" alt="Cristin O'Connor illustration"/>Cristin O'Connor</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav" style={{display: "flex", justifyContent: "space-around"}}>
                <li className="nav-item" style={{display: "inline-block", marginRight: '1rem'}}>
                  <a className="nav-link fs-6 p-1 rounded fw-bolder text-uppercase bg-dark text-light" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fs-6 p-1 rounded fw-bolder text-uppercase bg-dark text-light" href="/resume">Resume</a>
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

export default Layout;
