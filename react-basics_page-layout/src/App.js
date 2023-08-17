import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { MainContent } from "./component/Main";

function App() {
  // Render components within App
  return (
    <div className="app-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
