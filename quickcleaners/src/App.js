//import logo from './logo.svg';
import './App.css';
import QuickCleanersMap from './styles/quickcleanersmap.png'
import Logo from './styles/Logo1.png'
import DistinctiveCare from './styles/DistinctiveCare.png'
import Movie from './styles/movie1.mp4'

function App() {
  return (
    <div className="main">
      <header className="header">
        <div className="header-text-container">
        <img src={Logo} alt='logo' className="qc-header"/>
          <div className="header-navagation">
            <nav className="home-button">Home</nav>
            <nav className="services-button">Our Services</nav>
            <nav className="customers-button"> Our Customers</nav>
          </div>
          </div>
      </header>

<video loop autoPlay='' muted>
    <source src={Movie} type="video/mp4"/>
</video>
    


      <div className="middle-section">
        <div className='family-owned'>
            <h2>Family Owned and Operated Since 1997</h2>
            <h3> Welcome to Quick Cleaners Dry Cleaning and Laundry, your local experts in fabric care and meticulous garment treatment. For over 20 years, our family-run establishment has been the cornerstone of the neighborhood, dedicated to delivering unparalled dry cleaning, laundry and precise alteration services. We treasure the community we serve and understand that every piece of clothing you bring to us is more than just fabric- its a part of your lifes moments and memories. From luxurious silk blouses and cashmere sweaters to bespoke suits and ornate wedding dresses, our skilled professionals handle each item with the care it deserves. Let us take the hassle out of laundry day and give you the peace of mind that your wardrome is in the best hands.</h3>
            <button className='our-services-button'> Our Services</button>
        </div>
    </div>
      

    

      <div className="bottom-section">
        <div className="bottom-container">
          <img src={QuickCleanersMap} alt='map'className="home-bottom-map-image"/>
          <div className="bottom-section-text-container">
            <h2>Hours</h2>
            <h3>Monday - Friday: 7am - 6pm</h3>
            <h3>Saturday: 8am - 7pm</h3>
            <h3>Closed Sundays</h3>
            <h2>2177 D Silvernail Road</h2>
            <h2>Pewaukee, Wisconsin</h2>
          </div>

        </div>
      </div>



    </div>
  );
}

export default App;
