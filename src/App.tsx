import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RbTest from "./tests/RbTest";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bs' element={<RbTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
