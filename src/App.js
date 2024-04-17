import React from "react";
import { Header } from "./features/header/Header";
import { Container } from 'react-bootstrap';
import "./App.scss";
import { PostsList } from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <Header />
      <PostsList />
      <Container fluid className="bg-body-tertiary sticky-bottom border-secondary-subtle border text-center">Developed by <a href="https://rowanjefferywall.com" target="_blank">Rowan Jeffery-Wall</a> as part of a <a href="https://www.codecademy.com/" target="_blank">Codecademy</a> portfolio project.</Container>
    </div>
  );
}

export default App;
