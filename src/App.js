
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './Components/Navbar';
import { About } from './Views/About';
import { HomePage } from './Views/HomePage';
import { MySkills } from './Views/Skills';
import { ContactMe } from './Views/Contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<NavigationBar />}>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<MySkills />} />
          <Route path='contact' element={<ContactMe />}/>
     </Route>
      </Routes>
    </div>
  );
}

export default App;
