import React, { ReactNode } from 'react';
import "./Layout.scss"
const Layout = ({ children }: {children: ReactNode}): React.ReactElement => {
  return (
    <div>
      <div className="header wrapper-outer">
        <header className="wrapper-inner">
          <nav className="navbar navbar-expand-lg bg-body-secondary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Cristin O'Connor</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/resume">Resume</a>
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
    </div>
  );
}

export default Layout;
