import "../app/projects.css";
import Image from "next/image";
import logo from "../assets/PourDecisionsLogo.png";
import { useState } from 'react';
import calendar from "../assets/calendarCoffeeShop.png";
import newProduct from "../assets/newProduct.png";
import meetLeo from "../assets/meetLeo.png";
import customers from"../assets/customers.png";

function Projects(){
    const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

 return(
    <section className = "projects-section" id = "projects">
        <h1 className = "title-projects">PROJECTS</h1>
        <div className={`logo1-container ${showCard ? 'card-open' : ''}`}>
            
            <Image src={logo} alt="Click me" width={300} height={300} className="logo" onClick={toggleCard} />
            {showCard && (
                <div className="card-overlay">
                    <div className="card-content">
                        <button className="close-btn" onClick={toggleCard}>×</button>
                        <div className="scrollable-content">
                            <Image src={logo} alt="display" width={80} height={80} className="logodisplay"/>
                        <h3 className = "centerthis1">Pour Decisions Coffee</h3>
                        <p className = "centerthis2">Social Media Brand Strategy </p>
                        <br></br>

                         <p className="description1">Complete management system for coffee shops with calendar scheduling and social media automation.</p>
                         <br></br>
                         <p className = "centerthis2">Calendar Scheduling</p>
                        <Image src={calendar} alt="calendar" width={1500} height={100} className="calendar"/>
                        <br></br>
                        <p className="centerthis2">Creative Frames</p>

                            <div className="side-by-side-container">
                                <div className="img-card">
                                    <div className="face front">
                                    <Image src={newProduct} alt="newProduct" width={300} height={300} className="product"/>
                                    </div>
                                    <div className="face back">
                                    <h3>New Product Launch</h3>
                                    <p>Automated social media posts to announce new product launches, complete with engaging visuals and compelling captions.</p>
                                    </div>
                                </div>
                                
                                <div className="img-card">
                                    <div className="face front">
                                    <Image src={meetLeo} alt="meetLeo" width={300} height={300} className="meetLeo"/>
                                    </div>
                                    <div className="face back">
                                    <h3>Meet The Barista</h3>
                                    <p>Introduce your team with engaging profiles that showcase their personality and expertise.</p>
                                    </div>
                                </div>
                                
                                <div className="img-card">
                                    <div className="face front">
                                    <Image src={customers} alt="customers" width={300} height={300} className="customers"/>
                                    </div>
                                    <div className="face back">
                                    <h3>Customer Spotlight</h3>
                                    <p>Feature loyal customers and create community engagement through user-generated content.</p>
                                    </div>
                                </div>
                                </div>
                        
                        
                        </div>
                    </div>
                </div>
            )}
        </div>
    </section>
 );
}

export default Projects;
