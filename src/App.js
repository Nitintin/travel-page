import './App.css';
import Header from './Components/Logic/Header'
import NavigationView from './Components/View/NavigationView'
import WelcomeView from './Components/View/WelcomeView'
import Weather from './Components/Logic/Weather'
import Feature from './Components/Logic/Feature'
import PromoView from './Components/View/PromoView'
import Quote from './Components/Logic/Quote'
import FooterView from './Components/View/FooterView'

function App() {
  return (
    <div className="App">
      <Header/>
      <NavigationView/>
      <WelcomeView/>
      <Weather/>
      <Feature/>
      <PromoView/>
      <Quote/>
      <FooterView/>
    </div>
  );
}

export default App;
