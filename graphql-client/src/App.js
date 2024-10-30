import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CompanyList from './components/CompanyList';
import CompanyDetail from './components/CompanyDetail';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:id" element={<CompanyDetail />} />
        <Route path="/employees/:id" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
