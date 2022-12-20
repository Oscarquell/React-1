import logo from './logo.svg';
import './App.css';  // все стили для всех компонентов прописаны в данном CSS файле
import Header from "./components/header/header";
import MainMenu from "./components/main/main"
import Footer from "./components/footer/footer";

function App() {
  return (
      <div>
          <Header/>
          <MainMenu/>
          <Footer/>
      </div>

  );
}

export default App;

