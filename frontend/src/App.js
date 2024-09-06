import './App.css'
import Test from './components/Test';
import { HashRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      hello
      <HashRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/services" element={<div>services</div>} />
          <Route path="/projects" element={<div>projects</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="*" element={<div>404 not found</div> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
