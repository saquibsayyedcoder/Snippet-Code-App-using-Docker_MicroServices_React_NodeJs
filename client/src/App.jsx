import React from "react";
import Navbar from "./components/Navbar";
import CreateSnipts from "./components/CreateSnipts";
import { Routes, Route } from "react-router-dom";
import SnippetDetails from "./components/SnippetDetails";


const App = () => {
  return (
    <main className="container max-w-4xl mx-auto p-4">
      <Navbar />

      {/* Snippet list / create page */}
      <CreateSnipts />


      {/* ROUTES */}
      <Routes>
        <Route path="/snippets/:id" element={<SnippetDetails />} />
      </Routes>
    </main>
  );
};

export default App;
