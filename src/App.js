import './App.css';
import { Route, Routes } from "react-router-dom";
import ResultNnenna from './ResultNnenna';
import ResultAmaka from './ResultAmaka';
import DataForm from './DataForm';
import Navbar from './Navbar';
import Login from './Login';
import Protected from './ProtectedRoute';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
            path="/result-amaka"
            element={
              <Protected>
                <ResultAmaka />
              </Protected>
            }
          />
          <Route
            path="/result-nnenna"
            element={
              <Protected>
                <ResultNnenna />
              </Protected>
            }
          />
          <Route
            path="/form"
            element={
              <Protected>
                <DataForm />
              </Protected>
            }
          />
      </Routes>
    </div>
  );
}

export default App;
