import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function ErrorPage() {
  return (
    <div>
      <Jumbotron>
        <p>Ah-oh, we couldn&#39;t find the page you&#39;re looking for.</p>
        <p>Click on the left arrow button to navigate back to the home page</p>
      </Jumbotron>
    </div>
  );
}

export default ErrorPage;
