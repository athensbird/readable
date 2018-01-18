import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MdArrowBack from 'react-icons/lib/md/arrow-back'
import { Button } from 'react-bootstrap';

function ErrorPage() {
  return (
    <div>
      <Jumbotron>
        <p>Ah-oh, we couldn&#39;t find the page you&#39;re looking for.</p>
        <p>Click on the left arrow button to navigate back to the home page</p>
        <Link to={"/"}><Button className="back-button"><MdArrowBack /></Button></Link>
      </Jumbotron>
    </div>
  );
}

export default ErrorPage;
