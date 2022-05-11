import "./assets/scss/styles.scss";
import { Headers } from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Home} from './pages/Features/index';
import 'antd/dist/antd.css';
function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path='/' element={Home}></Route>
      </Routes>
    </Router>
  );
}

export default App;
