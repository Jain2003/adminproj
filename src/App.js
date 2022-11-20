import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cities from "./components/Cities";
import Experiences from "./components/Experiences";
import Users from "./components/Experiences";
import AddCity from "./components/addCity";
import { Route, Routes } from "react-router-dom";
/* import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail"; */
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cities" element={<Cities />} exact />
          <Route path="/addCity" element={<AddCity />} exact />
          <Route path="/experiences" element={<Experiences />} exact />
          <Route path="/users" element={<Users />} exact />
          {/*
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact /> */}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
