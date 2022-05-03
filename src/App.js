
// import 'swiper/swiper.min.css';
// import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import  Footer from './components/Footer/Footer'
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';


import Routes from './config/Routes';
import Home from './Pages/Home';
import HeroSlide from './components/HeroSlide/HeroSlide';

function App() {
    return (
        <Router>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    {/* <Home/> */}
                    <Routes/>
                    <Footer/>
                   
                </>
            )}/>
        </Router>
    );
}

export default App;