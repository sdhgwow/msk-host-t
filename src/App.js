
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TabNav from './components/tabNav';
import Purchase from './components/purchases';
import Services from './components/services';

const App = () => {
  return (
      <Router>
        <div className="app">
          <TabNav />
          <div className="tab-content">
            <Routes>
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
};

export default App;