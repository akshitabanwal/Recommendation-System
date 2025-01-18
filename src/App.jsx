
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Error from './Components/Error.jsx';
import SingleBook from './Components/singleBook/SingleBook.jsx';
import "./App.css"
import Services from './Components/services/Services.jsx';


function App() {
 

  return (
    <>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books/:id" element={<SingleBook />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
