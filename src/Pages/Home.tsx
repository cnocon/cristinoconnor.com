import React from "react";
import Layout from "../components/layouts/Layout";

export const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <ul>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/writing-sample">Writing Sample</a></li>
        <li><a href="https://github.com/cnocon" rel="noopener noreferrer" target="_blank">GitHub</a></li>
        <li><a href="https://codepen.io/cnocon" rel="noopener noreferrer" target="_blank">Codepen</a></li>
        <li><a href="https://www.linkedin.com/in/cristinoconnor/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
      </ul>
    </Layout>
  )
}