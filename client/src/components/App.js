import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;
const PostComment = () => <h2>PostComment</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/character" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
