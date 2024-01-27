import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Layout from '../components/layouts/Layout'
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  return <h1>Loading...</h1>
}
const NotFound = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <header style={{textAlign: "center"}}><h1>Page Not Found</h1>
          <button onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}>Go Back</button>
        </header>

      </Suspense>
    </Layout>
  )
}

export default NotFound;

