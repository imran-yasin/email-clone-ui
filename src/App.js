import React from "react";
import { Routes, Route } from "react-router-dom";
import Completed from "./components/Completed";
import CssLable from "./components/CssLable";
import Dashboard from "./components/Dashboard";
import Deleted from "./components/Deleted";
import HtmlLable from "./components/HtmlLable";
import JQueryLable from "./components/JQueryLable";
import NodeJsLable from "./components/NodeJsLable";
import Priority from "./components/Priority";
import Scheduled from "./components/Scheduled";
import Sidebar from "./components/Sidebar";
import Starred from "./components/Starred";
import Today from "./components/Today";

function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/completed" element={<Completed />} />
        <Route path="/css" element={<CssLable />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/deleted" element={<Deleted />} />
        <Route path="/html" element={<HtmlLable />} />
        <Route path="/jqurey" element={<JQueryLable />} />
        <Route path="/nodejs" element={<NodeJsLable />} />
        <Route path="/priority" element={<Priority />} />
        <Route path="/scheduled" element={<Scheduled />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="today" element={<Today />} />
      </Routes>
    </div>
  );
}

export default App;
