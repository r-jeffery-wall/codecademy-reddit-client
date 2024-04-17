import React from "react";
import { Header } from "./features/header/Header";
import "./App.scss";
import { PostsList } from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <Header />
      <PostsList />
    </div>
  );
}

export default App;
