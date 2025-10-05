import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { setFormType } from '../redux/slices/formTypeSlice';
import OutstationForm from '../components/OutstationForm';
import LocalForm from '../components/LocalForm';
import AirportForm from '../components/AirportForm';
import Link from 'next/link';

const HomePage = () => {
    const dispatch = useDispatch();
    const activeForm = useSelector((state) => state.formType.activeForm);

    const renderForm = () => {
        switch (activeForm) {
            case 'outstation':
                return <OutstationForm />;
            case 'local':
                return <LocalForm />;
            case 'airport':
                return <AirportForm />;
            default:
                return <OutstationForm />;
        }
    };

    return (
        <div className="main-container">
            <Head>
                <title>Yatri Cabs - India&apos;s Leading Intercity & Local Cab Service</title>
                <meta name="description" content="India's leading one-way intercity cab service provider. Reliable and premium taxi services with over a decade of experience." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
            </Head>
            
            <header className="main-header">
                
                <Link href="/">
                    <div className="logo-container">
                        <Image src="/logo.svg" alt="Yatri Cabs Logo" layout="fill" objectFit="contain" />
                    </div>
                </Link>
                
                <div className="contact-info">
                    <div className="contact-logo-container">
                        <Image src="/24by7 logo.svg" alt="24x7 Support" layout="fill" objectFit="contain"/>
                    </div>
                </div>
                <div className="header-actions">
                    <div className="header-action-icon">
                        <Image src="/nav_download_img.svg" alt="Download App" layout="fill" objectFit="contain"/>
                    </div>
                    <div className="header-action-icon">
                        <Image src="/nav_hi_rahul.png" alt="User Profile" layout="fill" objectFit="contain"/>
                    </div>
                </div>
            </header>

            
            <main>
                <section className="hero-section">
                    <div className="hero-content-wrapper">
                        <div className="hero-text">
                            <h2>INDIA&apos;S <strong>LEADING</strong></h2>
                            <h2><strong>ONE WAY INTERCITY</strong></h2>
                            <h2>CAB SERVICE PROVIDER</h2>
                        </div>
                        <div className="form-card">
                            <div className="form-selector">
                                <button className={`form-selector-btn ${activeForm === 'outstation' ? 'active' : ''}`} onClick={() => dispatch(setFormType('outstation'))}>Outstation</button>
                                <button className={`form-selector-btn ${activeForm === 'local' ? 'active' : ''}`} onClick={() => dispatch(setFormType('local'))}>Local</button>
                                <button className={`form-selector-btn ${activeForm === 'airport' ? 'active' : ''}`} onClick={() => dispatch(setFormType('airport'))}>Airport</button>
                            </div>
                            <div className="form-container-wrapper">{renderForm()}</div>
                        </div>
                    </div>
                    <div className="hero-bottom-banner">
                        <div className="info-box"><h4>Transparent Billing</h4><p>GPS Based Billing | No Km Tampering</p></div>
                        <div className="info-box download-box">
                            <div className="app-buttons-container">
                                <Image src="/First_frame_download_now.png" layout="fill" objectFit="contain" alt="Download on Google Play and App Store" />
                            </div>
                        </div>
                        <div className="info-box"><h4>No return fare</h4><p>Oneway Cab Fare | No Hidden Charges</p></div>
                    </div>
                </section>

                <section className="info-grid-section">
                    <div className="info-grid-card">
                        <div className="info-grid-icon-container">
                            <Image src="/second_frame_1.svg" layout="fill" objectFit="contain" alt="Return Fare Icon" />
                        </div>
                        <h3>RETURN FARE, NOT FAIR!</h3>
                        <p>Why Pay For Return Journey When You Are Travelling Oneway? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel.</p>
                    </div>
                    <div className="info-grid-card">
                        <div className="info-grid-icon-container">
                           <Image src="/second_frame_2.svg" layout="fill" objectFit="contain" alt="GPS Billing Icon" />
                        </div>
                        <h3>GPS BASED BILLING SYSTEM</h3>
                        <p>Since The GPS Data Captures The Actual Distance And Time Travelled, It Reduces The Chance Of Kilometer Tampering Or Discrepancies in Billing.</p>
                    </div>
                    <div className="info-grid-card">
                        <div className="info-grid-icon-container">
                           <Image src="/second_frame_3.svg" layout="fill" objectFit="contain" alt="Routes Icon" />
                        </div>
                        <h3>NOW AVAILABLE ROUTES ARE!</h3>
                        <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly</p>
                    </div>
                </section>

                <section className="content-section text-center">
                    <h2>INDIA&apos;S PREMIER INTERCITY AND LOCAL TAXI SERVICES</h2>
                    <p className="section-paragraph">At Yatri Cabs, We Pride Ourselves On Being A Top-Tier Online Oneway Cab Booking Service, Delivering Reliable And Premium Intercity And Local Taxi Services. With Over A Decade Of Experience, Instead Of Self-Drive Car Rental, We Have Become The Leading Driver-Driven One Way Car Rental Company In India, Renowned For Our Extensive Coverage Across The Country.</p>
                </section>
                
                <section className="content-section why-yatri-section">
                    <div className="why-yatri-image">
                        <Image src="/third_frame_img.png" layout="responsive" width={550} height={350} alt="Yatri Cab"/>
                    </div>
                    <div className="why-yatri-features">
                        <h2>WHY <strong>YATRI</strong>?</h2>
                        <div className="feature-item">
                            <div className="why-yatri-icon-container">
                                <Image src="/why_yatri_1.svg" layout="fill" objectFit="contain" alt="Routes Icon"/>
                            </div>
                            <div><h4><strong>FAST RESPONSE TIME</strong></h4><p>Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly.</p></div>
                        </div>
                        <div className="feature-item">
                            <div className="why-yatri-icon-container">
                                <Image src="/why_yatri_2.png" layout="fill" objectFit="contain" alt="Routes Icon"/>
                            </div>
                            <div><h4><strong>VAST FLEET</strong></h4><p>We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Car Hire Needs.</p></div>
                        </div>
                        <div className="feature-item">
                            <div className="why-yatri-icon-container">
                                <Image src="/why_yatri_3.svg" layout="fill" objectFit="contain" alt="Routes Icon"/>
                            </div>
                            <div><h4><strong>EASY TO ORDER</strong></h4><p>Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team.</p></div>
                        </div>
                        <div className="feature-item">
                            <div className="why-yatri-icon-container">
                                <Image src="/why_yatri_4.svg" layout="fill" objectFit="contain" alt="Routes Icon"/>
                            </div>
                            <div><h4><strong>GREAT TARIFFS</strong></h4><p>Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental.</p></div>
                        </div>
                    </div>
                </section>
                
                <section className="car-types-section">
                    <div className="table-container">
                        <table>
                            <thead><tr><th>CAR TYPE</th><th>MODEL INCLUDES</th><th>PASSENGERS</th><th>IDEAL FOR</th><th>FARE</th></tr></thead>
                            <tbody>
                                <tr><td>AC Sedans</td><td>Etios, Amaze, Dzire etc.</td><td>4 Pax</td><td>Comfortable trips with small families</td><td>Rs.11/KM</td></tr>
                                <tr><td>AC Hatchbacks</td><td>Wagon R, Celerio, Micra etc.</td><td>4 Pax</td><td>Budget trips over short distances</td><td>Rs.11/KM</td></tr>
                                <tr><td>AC SUV</td><td>Ertiga, Xylo etc.</td><td>6-7 Pax</td><td>Premium trips with large families</td><td>Rs.13/KM</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="content-section why-ac-section">
                    <div className="why-ac-text">
                        <h2>WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <strong>ONE-WAY JOURNEY?</strong></h2>
                        <p>Our Oneway Car Rental Service is Cheaper Than AC Bus And 2-Tier AC Train Ticket Fares. It Reduces Your Travel Time, And You Travel In Your Own Private Space, Allowing You To Fully Enjoy Your Journey. Our One Way Taxi Will Come To Your Doorstep And Take You To Your Desired Destination. So, Book Your Cheapest One Way Cab From Lucknow To Gorakhpur Or Varanasi To Ayodhya With Our Reliable Oneway Car Rental Service With Driver. Experience The Convenience Of Our Taxi Service, Where You Can Rent A Car Effortlessly And Enjoy Seamless Cab Booking. Choose Our Car Hire Option For A Hassle-Free And Comfortable Travel Experience. We Offer Outstation Cab And Intercity Travel Services, Ensuring A Smooth And Enjoyable Luxury Ride Wherever You Need To Go.</p>
                    </div>
                    <div className="why-ac-image">
                        <Image src="/fourth_frame_img.png" layout="responsive" width={500} height={400} alt="Mobile Booking Illustration" />
                    </div>
                </section>

                <section className="promo-banner-dark">
                    <h3>CAR RENTAL IN INDIA - BOOK RELIABLE VEHICLES FOR ALL YOUR NEEDS</h3>
                </section>

                <section className="content-section points-section">
                    <div className="points-card">
                        <p>Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:</p>
                        <ol>
                            <li><strong>Skilled Chauffeurs:</strong> Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India&apos;s roads for a seamless travel experience.</li>
                            <li><strong>Dedicated Oneway Cab Service:</strong> We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel. This makes intercity trips with Yatri Car Rental both cost-effective and convenient.</li>
                            <li><strong>Well-Maintained Car Rental Fleet:</strong> Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride, whether you opt for a car hire, taxi service, or outstation car rental.</li>
                            <li><strong>Transparent Pricing for Car Hire:</strong> Our GPS-based billing system ensures fair pricing by eliminating any chances of kilometer tampering by the driver with real-time distance measurement and live location tracking, you get transparency and peace of mind when using our car rental services.</li>
                            <li><strong>24/7 Customer Support for Car Rentals:</strong> Our customer care team is available round the clock to assist with any inquiries or concerns regarding your car hire, taxi service, or outstation car rental, ensuring a smooth and enjoyable experience throughout your journey in India.</li>
                        </ol>
                    </div>
                </section>

                <section className="content-section why-oneway-section">
                    <h1><strong>WHY CHOOSE ONE WAY CAB?</strong></h1>
                    <div className="why-oneway-content">
                        <ul>
                            <li>Instant Booking & Confirmation</li>
                            <li>Confirmed Booking Immediately</li>
                            <li>No Return Fare For One-Way Trip</li>
                            <li>Clean & Professional Cab Services</li>
                            <li>Transparent Billing With GPS Based Billing System</li>
                        </ul>
                        <div className="why-oneway-image">
                            <Image src="/sixth_frame_image.png" layout="responsive" width={370} height={220} alt="Red Car Illustration" />
                        </div>
                        <ul>
                            <li>Pick-Up From Your House</li>
                            <li>Dedicated Cab Just For You</li>
                            <li>Drop To Your Desired Destination</li>
                            <li>Completed More Than 20,000+ Oneway Trips</li>
                            <li>Multiple Payment Option Including Credit Card.</li>
                        </ul>
                    </div>
                    <p className="section-paragraph promo-text">DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <strong>INTERCITY CAR RENTAL</strong> IN INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!</p>
                </section>

                <section className="promo-banner-dark">
                    <h3>EXPLORING INDIA&apos;S AMAZING LANDSCAPES, FROM THE MOUNTAINS TO THE BEACHES, ONE MEMORABLE ROAD TRIP AT A TIME</h3>
                </section>
                
                <section className="content-section points-section">
                    <div className="points-card">
                        <ul>
                            <li>Experience The Thrill Of Road Travel With Our Reliable Car Rental And Taxi Service As We Explore The Diverse Landscapes Of India Together. We&apos;re Passionate About Making Car Hire Accessible And Enjoyable For Everyone.</li>
                            <li>Instead Of Worrying About The Road, Relax In Our Chauffeur-Driven Cabs On Your Next Vacation. With A Presence In Over 2000 Cities Across India, We&apos;re Here To Take You Wherever Your Heart Desires With Our Luxury Car Rental Services.</li>
                            <li>We Cherish The Freedom To Stop, Breathe In The Fresh Air, Immerse In Local Cultures, And Savor Regional Cuisines Along The Way. These Moments Of Discovery Enrich Your Travels And Create Lasting Memories Through Our Rent A Car Service.</li>
                            <li>No Destination Is Too Far Or Too Close; We Encourage You To Explore The Beauty Around You With Our Car Hire Options. Pack Your Bags, Set Out On Weekend Adventures, And Uncover The Gems In Your Vicinity With Our Taxi Service.</li>
                            <li>Planning Your Trip Is A Breeze With Our User-Friendly Website, Or You Can Chat With Our Travel Experts At <strong>7860663399</strong> For Personalized Guidance On Car Rental. Our Cab Booking App Simplifies The Process, Ensuring A Hassle-Free Experience When You Rent A Car.</li>
                            <li>Our Experienced Drivers Are Your Companions On The Road, Guiding You Through India&apos;s Best Experiences With Our Car Rental And Taxi Service. From Booking To Your Safe Return Home, We&apos;re Dedicated To Ensuring You Have An Exceptional Road Trip.</li>
                        </ul>
                    </div>
                </section>

                <section className="info-grid-section budget-grid">
                    <div className="info-grid-card">
                        <div className="info-grid-icon-container large-icon">
                            <Image src="/eight_frame_1.png" layout="fill" objectFit="contain" alt="For any budget" />
                        </div>
                        <h3>For Any Budget</h3>
                        <p>Choose From Hatchbacks, Sedans, Mini SUVs, Prime SUVs, And Mini Buses Like Tempo Travellers 12-Seater To 25-Seater To Find A Ride Within Your Budget And At Your Convenience With Our Car Rental And Cab Service Options.</p>
                    </div>
                    <div className="info-grid-card">
                        <div className="info-grid-icon-container large-icon">
                           <Image src="/eight_frame_2.png" layout="fill" objectFit="contain" alt="For any distance" />
                        </div>
                        <h3>For Any Distance</h3>
                        <p>Book Daily Rides With Multiple Stops Within The City Or Travel To Your Favourite Destinations Across The Country With Our Oneway Or Round Trip Outstation Cab Service. Enjoy Seamless Cab Booking For All Your Travel Needs.</p>
                    </div>
                    <div className="info-grid-card">
                        <div className="info-grid-icon-container large-icon">
                           <Image src="/eight_frame_3.png" layout="fill" objectFit="contain" alt="For any duration" />
                        </div>
                        <h3>For Any Duration</h3>
                        <p>Plan A Day Out With Our Hourly-Based Packages For Local City Tours Or Book Our Car Rental Services With A Driver For Long Or Multiple-Day Trips. Our Taxi Service Ensures Reliable Transportation Tailored To Your Car Hire Needs.</p>
                    </div>
                </section>

                <section className="promo-banner-dark">
                    <h3>WHY CHOOSE YATRI CAR RENTAL?</h3>
                </section>
                
                <section className="content-section points-section">
                    <div className="points-card">
                        <ul>
                            <li>Yatri Car Rental Has Been A Trusted Digital Platform For Booking Local And Outstation Car Rental And Taxi Services Since 2014. Our Primary Goal Is To Offer Our Clients An Exceptional Car Rental And Cab Booking Experience, And We Take Great Pride In Our Commitment To Safety, Reliability, And Experienced Drivers. These Qualities Are Evident Across All Our Car Rental Services, Making Us The Preferred Choice For Those Seeking Rental Cars And Taxi Services In INDIA.</li>
                            <li><strong>Service You Can Trust</strong> - At Yatri Car Rental, We Are Dedicated To Providing Dependable Services In INDIA. We Guarantee That We Won&apos;t Cancel Any Bookings Without Advance Notification, And Our Rental Cars Are Meticulously Maintained To Ensure A Seamless And Stress-Free Journey For Our Clients.</li>
                            <li><strong>Safety Is Our Priority</strong> - Safety And Comfort Are Paramount At Yatri Car Rental In INDIA. We Exclusively Hire Experienced And Skilled Drivers Who Possess In-Depth Knowledge Of The City&apos;s Roads And Traffic Regulations. Our Drivers Are Committed To Delivering Excellent Customer Service And Ensuring A Comfortable And Stress-Free Travel Experience For Passengers.</li>
                            <li><strong>Expert Chauffeurs At Your Service</strong> - Yatri Car Rental Takes Pride In Selecting Only The Most Skilled, Knowledgeable, And Courteous Drivers To Enhance The Convenience And Satisfaction Of Our Clients.</li>
                            <li><strong>Extensive Industry Experience</strong> - With Over 10 Years Of Industry Expertise, Yatri Car Rental Is Your Go-To Choice For Premium Car Hire Services.</li>
                            <li><strong>Proven Track Record</strong> - We Place A Strong Emphasis On Transparency In Our Billing System And Consistently Strive To Provide A Seamless And Satisfactory Experience For Our Customers. Our Commitment To Customer Comfort And Satisfaction Is Evident In Our Outstanding Google Ratings, Where We Consistently Receive Ratings Of 4.8 Stars Or Higher.</li>
                        </ul>
                    </div>
                </section>

                <section className="testimonials-section">
                    <h2>Customer Testimonials</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>&quot;I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved! The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional. Highly recommend!&quot;</p>
                            <h4>Vikram Kulkarni</h4>
                            <span>Kalyan, Maharashtra</span>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>&quot;The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs, everything was transparent and real-time. It gave me complete peace of mind. Excellent service for my trip to Ayodhya!&quot;</p>
                            <h4>Rajesh Kumawat</h4>
                            <span>Kanpur, Uttar Pradesh</span>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>&quot;Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made our pilgrimage hassle-free and enjoyable.&quot;</p>
                            <h4>Anjali Mishra</h4>
                            <span>Gorakhpur, Uttar Pradesh</span>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>&quot;As a frequent business traveler, finding a reliable one-way cab service that doesn&apos;t charge for a return journey is crucial. Yatri Cabs delivers exactly that. Their 24/7 support and easy booking process through the app make my life so much simpler. They&apos;re my go-to for intercity travel now.&quot;</p>
                            <h4>Siddharth Vaidya</h4>
                            <span>Rohini, Delhi</span>
                        </div>
                    </div>
                </section>
                
            </main>

            <footer className="main-footer">
                <div className="footer-top">
                    <div className="footer-promo-card app-promo">
                        <div className="app-promo-images">
                            <div className="app-promo-img-container">
                                <Image src="/eleventh_frame_1.png" layout="fill" objectFit="contain" alt="App Screen 1" />
                            </div>
                        </div>
                        <div className="app-promo-text">
                            <h2>GET YOUR <strong>YATRI CABS</strong> APP NOW!</h2>
                            <p>USE CODE <strong>WELCOMEYATRI</strong> AND GET <strong>FLAT 05%</strong> OFF* ON YOUR FIRST INTERCITY RIDE</p>
                            <div className="app-buttons-container footer-app-buttons">
                                <Image src="/First_frame_download_now.png" layout="fill" objectFit="contain" alt="Download on Google Play and App Store" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-promo-card driver-promo">
                        <h2>BECOME A <strong>DRIVER PARTNER</strong></h2>
                        <p>Join <strong>Yatri Car Rental</strong> And Attach Your Car To Our Platform. Earn More By Serving Our Passengers And Benefit From Our Extensive Customer Base.</p>
                        <button className="download-app-btn">DOWNLOAD THE APP</button>
                    </div>
                </div>
                <div className="operational-cities">
                    <p>
                        <strong>Operational Cities:</strong>
                        <span>Lucknow</span>
                        <span>Ayodhya</span>
                        <span>Gorakhpur</span>
                        <span>Varanasi</span>
                        <span>Allahabad (Prayagraj)</span>
                        <span>Kanpur</span>
                    </p>
                </div>
                <div className="footer-bottom">
                    <div className="footer-logo">
                            <div className="footer-logo-container">
                                <Image src="/logo.svg" alt="Yatri Cabs Footer Logo" layout="fill" objectFit="contain" />
                            </div>
                    </div>
                    <nav className="footer-nav">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Career</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Condition</a>
                    </nav>
                    <p className="copyright">All Copyrights are reserved by YATRI CABS</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;

