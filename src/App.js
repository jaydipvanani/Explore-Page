
import './App.css';
import Banner from './component/Banner';
import Card from './component/Card';
import Header from "./component/Header";
import { data } from "./component/Data";
import Details from './component/Details';
import Footer from './component/Footer';


function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <div className='row'> <Card data={data}/></div>
   <Details/>
   <Footer/>
    

    
    </>
  );
}

export default App;
