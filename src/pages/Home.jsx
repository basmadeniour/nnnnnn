import React from 'react';
import { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping, faXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; 
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Camera from "../components/Assets/Camera.png";
import Sapp from "../components/Assets/Sapp.png";
import Shoses from "../components/Assets/Shoses.png";
import Cartoy from "../components/Assets/Cartoy.png";
import HandBag from "../components/Assets/HandBag.png";
import Playsation from "../components/Assets/playstation.png"
import Speakers from "../components/Assets/Speakers.png"
import Perfum from "../components/Assets/Perfum.png"
import Hero from '../components/Hero/Hero';
import ProductCard from '../components/Card/ProductCard';
import Slick from '../components/Slick/Slick';
import HandelSlick from '../components/HandelSlick/HandelSlick';
import TimerComponent from '../components/TimerComponent/Timer';
import Viewall from '../components/ViewAllBtn/ViewAllBtn';
import HandelSlickIcon from '../components/HandelSlickIcon/HandelSlickIcon';
import Bestselling from '../components/BestSelling/BestSelling';
import ColoredSlick from '../components/ColoredSlick/ColoredSlick';
import ExploreProducts from '../components/ExploreProducts/ExploreProducts';
import ServicesPart from '../components/ServicesPart/ServicesPart';
import Footer from '../components/Footer/Footer';
import Productdata from "../components/Assets/data"
// import SwiperProductSlider from '../components/SwiperProductSlider/SwiperProductSlider';
// import Arrow from '../components/Arrows/Arrow';
// import Swipericon from '../components/SwiperIcons/Swipericon';


const Home = () => {
  const [isSec1ContentVisible, setSec1ContentVisible] = useState(window.innerWidth > 768); // Start as true on larger screens, false on smaller ones

  useEffect(() => {
    
    const handleResize = () => {
      
      setSec1ContentVisible(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleListIconClick = () => {
    setSec1ContentVisible(!isSec1ContentVisible);
  };

  return (
    <div className="container homecontainer">
      <div className="sec1 row">
        <div className={`col-12 col-md-4 sec1content ${isSec1ContentVisible ? 'd-block' : 'd-none'}`}>
          <p><Link to="/mens" className="custom-link">Mens Faction</Link> <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '65px' }} /></p>
          <p><Link to="/womens" className="custom-link">Womens Faction</Link> <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '40px' }} /></p>
          <p><Link to="/electronics" className="custom-link">Electronics</Link></p>
          <p><Link to="/lifestyle" className="custom-link">Home & Lifestyle</Link></p>
          <p><Link to="/medicine" className="custom-link">Medicine</Link></p>
          <p><Link to="/lifestyle" className="custom-link">Home & Lifestyle</Link></p>
          <p><Link to="/toys" className="custom-link">Babies & Toys</Link></p>
          <p><Link to="/pets" className="custom-link">Groceries & Pets</Link></p>
          <p><Link to="/health" className="custom-link">Health & Beauty</Link></p>
        </div>

        <div className="col-12 col-md-8 homslider">
        <div className="d-flex align-items-center" style={{color:"white" , background:"black" ,paddingLeft:"15px", width:"100%"}}>
              <a href="#" className="text-dark mx-2 listicccon" onClick={handleListIconClick}>
                <FontAwesomeIcon icon={faEllipsisVertical} style={{ fontSize: "20px",color:"white"  }} />
                
              </a>
              <span className="ml-2">Everything you want in one place!</span>
        </div>
          <Carousel>
            <Carousel.Item>
              {/* <img src={C1} alt="Image 1" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} /> */}
              <Hero icon={faApple} name="iphone 14 series" salepersent="7" img={Camera}/>
            </Carousel.Item>
            <Carousel.Item>
              {/* <img src={C2} alt="Image 2" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} /> */}
              <Hero icon={faSoundcloud } name="Sound Sapp series" salepersent="11" img={Sapp}/>
            </Carousel.Item>
            <Carousel.Item>
              {/* <img src={C3} alt="Image 3" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} /> */}
              <Hero icon={faMedal} name="Sport Shoes" salepersent="22" img={Shoses}/>
            </Carousel.Item>
            <Carousel.Item>
              {/* <img src={C4} alt="Image 4" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} /> */}
              <Hero icon={faBabyCarriage} name="iphone 14 series" salepersent="7" img={Cartoy}/>
            </Carousel.Item>
            <Carousel.Item>
              {/* <img src={C5} alt="Image 5" className="d-block w-100" style={{ height: "400px", objectFit: "cover" }} /> */}
              <Hero icon={faBagShopping} name="iphone 14 series" salepersent="7" img={HandBag}/>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

          <div className="sec2">
          <div className="toup">
                  <a className="poopp" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}  >
                    <FontAwesomeIcon icon={faArrowUp} />
                  </a>
           </div>

                <HandelSlick 

                  squarename="Today’s"  
                  squaretitle="Flash Sales" 
                  midcontent={<TimerComponent />} />
                  <Viewall />
                  <hr />
          </div>


      <div className="sec3">
                    <HandelSlickIcon  squarename="Categories"  squaretitle="Browse By Category" />
                    
      </div>
      
      <div className="sec4">
                   <Bestselling squarename="this month"  squaretitle="Best Selling Products"/>
      </div>

      <div className="sec5">
        <div className="row">
          <div className=" col-6 musictext">
            <p className="pmusic">Music</p>
            <h2 className="h2music">Enhence Your Music Experience</h2>
            <div className="divcircles">
              <div className="round">
                <p  className='ptime'>23</p>
                <p  className='ptime'>Hours</p>
              </div>
              <div className="round">
              <p  className='ptime'>05</p>
              <p  className='ptime'>Days</p>
              </div>
              <div className="round">
              <p  className='ptime'>59</p>
              <p  className='ptime'>Mins</p>
              </div>
              <div className="round">
              <p  className='ptime'>35</p>
              <p className='ptime'>Secs</p>
              </div>
            </div>
            <button className="buymusic">Buy Now</button>
          </div>
          <div className=" col-4 musicphoto">
          <img src={Sapp} alt="Description of the image" className='imgsec5' />
          </div>
        </div>
      </div>
     
      <div className="sec6">
      <ExploreProducts squarename="Our Products"  squaretitle="Explore Our Productds" className="ourproductfirst"/>
      <ColoredSlick/>
      <Viewall />
      </div>
       
      <div className="sec7 row">
  {/* Header Section */}
  <div className="sec7head col-12 mb-4">
    <div className="row align-items-center sidddes">
      <div className="col-auto">
        <div className="square"></div>
      </div>
      <div className="coliiii">
        <p className="squarename">Featured</p>
        <h3 className="squaretitlekkk">New Arrivals</h3>
      </div>
    </div>
  </div>

  {/* Left Section */}
  <div className="sec7left col-12 col-md-6 d-flex align-items-center">
    <img src={Playsation} alt="Playstation" className="playsationimg w-100 h-100" />
    <div className="homehero">
              <h2 className='h2vibe'>PlaySation 5</h2>
              <p className='pvibes'>Black and White Version That give you another Vibe</p>
              <a className='arefvibes' href="#">Show More</a>
    </div>
  </div>

  {/* Right Section */}
  <div className="sec7right col-12 col-md-5 d-flex flex-column">
    {/* Upper Photo */}
    <div className="upperphoto row ">
        <div className="col-6 vibestext">
              <h2 className='h2vibe'>Womens ` Collections</h2>
              <p className='pvibes'> Feautred Womens collections That give you another Vibe</p>
              <a className='arefvibes' href="#">Show More</a>
         </div>

          <div className="col-6">
          <img src={Camera} alt="Camera" className="cameraimg w-100 h-100" />
          </div>
         
    </div>

    {/* Lower Row */}
    <div className="row flex-fill lowest">
      <div className="col-6 lowerphoto" >
      <div className="handelimg">
        <img src={Speakers} alt="Speakers" className="playsationimg w-100 h-100" />
        <div className="homehero22">
                  <h2 className='h2vibe22'>PlaySation 5</h2>
                  <p className='pvibes22'>Black and White Version That give you another Vibe</p>
                  <a className='arefvibes' href="#">Show More</a>
            </div>
            </div>
      </div>
      <div className="col-6 lowerphoto">
        <div className="handelimg2">
        <img src={Perfum} alt="Perfume" className="playsationimg  w-100 h-100" />
            <div className="homehero22">
                  <h2 className='h2vibe22'>PlaySation 5</h2>
                  <p className='pvibes22'>Black and White Version That give you another Vibe</p>
                  <a className='arefvibes' href="#">Show More</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

     <div className="sec8">
       <ServicesPart/>
     </div>

    



    </div>
  );
};

export default Home;



