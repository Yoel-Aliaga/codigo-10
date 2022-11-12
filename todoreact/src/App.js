import { AuthProvider } from "./context/AuthContext";
import Router from "./routes";

function App() {
  return (
    // <div className="container my-5">
      <AuthProvider>
        <Router />
        
      </AuthProvider>

    // </div>
  );
}

export default App;
