
//import { AppContext ,useGlobalContext} from './context';
import Books from '../Books/Books';
import Search from '../search/Search';
import Services from '../services/Services';
import Testimonials from '../testimonials/Testimonials';
import ContactPage from '../contact/Contact';
import Header from "../header/Header";
const Home = () => {
  //const name = useContext(AppContext);
  //const name = useGlobalContext(AppContext);
  
  return (
   <>
  <div className="home">
   <Header />
      
      <div className="hero">
        <div className="hero-text">
         <Search />
        </div>
      </div>
    </div>
    <Books />
    <Services />
    <Testimonials />
    <ContactPage />
    </>
  )
}

export default Home