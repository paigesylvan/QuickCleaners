import logo from './logo.svg';
import './App.css';
import QuickCleanersMap from './styles/quickcleanersmap.png'
import QCLogo from './styles/QCLogo.png'
import DistinctiveCare from './styles/DistinctiveCare.png'

function App() {
  return (
    <div className="main">
      <header className="header">
        <div className="header-text-container">
        <img src={QCLogo} alt='logo' className="qc-header"/>
          <div className="header-navagation">
            <nav className="home-button">Home</nav>
            <nav className="services-button">Our Services</nav>
            <nav className="customers-button"> Our Customers</nav>
          </div>
          </div>
      </header>

      <div className="middle-section">
        <img src={DistinctiveCare} className='distinctiveCare' alt='distinctive care for all that you wear'/>

      <div className='sameDay'>
          <h3> Same Day Service, bring your laundry and dry cleaning in by 9am and it will be ready the same day</h3>
          <h3>All cleaning is done on premise</h3>
          <h3>We honor ALL competitor coupons</h3>
          <h3>Spend more than $250 and you are automatically apart of our Loyality Program! 20% off all dry cleaning & 10% off all laundry</h3>
        </div>

        <div className='family-owned'>
            <h2>Family Owned and Operated Since 1997</h2>
            <h3> Welcome to Quick Cleaners Dry Cleaning and Laundry, your local experts in fabric care and meticulous garment treatment. For over 20 years, our family-run establishment has been the cornerstone of the neighborhood, dedicated to delivering unparalled dry cleaning, laundry and precise alteration services. We treasure the community we serve and understand that every piece of clothing you bring to us is more than just fabric- its a part of your lifes moments and memories. From luxurious silk blouses and cashmere sweaters to bespoke suits and ornate wedding dresses, our skilled professionals handle each item with the care it deserves. Let us take the hassle out of laundry day and give you the peace of mind that your wardrome is in the best hands.</h3>

            <button className='our-services-button'> Our Services</button>
        </div>

        
      </div>

      



      <div className="bottom-section">
        <div className="bottom-container">
          <img src={QuickCleanersMap} className="home-bottom-map-image"/>
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
