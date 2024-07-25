// import './App.css';
import { LoginProvider } from "./Components/Context/LoginContextapi";
import Mainlayout from "./Page/Layout";

function App() {
  return (
    <LoginProvider>
      <Mainlayout />
    </LoginProvider>
  );
}

export default App;
