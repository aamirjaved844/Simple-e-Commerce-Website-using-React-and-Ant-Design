import {} from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppFooter from "./Components/Footer";
import AppHeader from "./Components/Header";
import PageContent from "./Components/PageContent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}
export default App;
