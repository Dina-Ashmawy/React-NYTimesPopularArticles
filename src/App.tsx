import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./features/header";
import { store } from "./redux/store";
import ListPage from "./pages/listPage";
import DetailsPage from "./pages/detailsPage";

const App: React.FC = () => (
  <Router>
    <Header />
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:articleId" element={<DetailsPage />} />
      </Routes>
    </Provider>
  </Router>
);

export default App;
