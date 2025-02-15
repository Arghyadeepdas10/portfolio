import React from 'react'
import 'swiper/css'

const Portfolio = () => {
  return (
    <>  
    <header className="s-header">
            <div className="header-mobile">
                <span className="mobile-home-link"><a href="index.html">ADAS.</a></span>
                <a className="mobile-menu-toggle" href="#0"><span>Menu</span></a>
            </div>

            <div className="row wide main-nav-wrap">
                <nav className="column lg-12 main-nav">
                    <ul>
                    <li><a href="index.html" className="home-link">ADas.</a></li>
                        <li className="current"><a href="#intro" >Intro</a></li>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#works" >Works</a></li>
                        <li><a href="#contact" >Say Hello</a></li>
                    </ul>
                </nav>
            </div>
    </header>

        <main className="s-content">
            <section id="intro" className="s-intro target-section">
                <div className="row intro-content wide">
                    <div className="column">
                        <div className="text-pretitle with-line">
                            Hello World
                        </div>
                        <h1 className="text-huge-title">
                            I am Arghyadeep, <br/>
                            a frontend <br/> 
                            developer based <br/>
                            in Somewhere.
                        </h1>
                    </div>

                    <ul className="intro-social">
                        <li><a href="https://github.com/Arghyadeepdas10" target='blank'>Github</a></li>
                        <li><a href="https://www.linkedin.com/in/arghyadeep-das-7b7203182" target='blank'>LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/" target='blank'>Instagram</a></li>
                    </ul>

                </div> 

                <a href="#about">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
                </a>
            </section> 

            <section id="about" className="s-about target-section">
                <div className="row about-info wide" data-animate-block>
                    <div className="column lg-6 md-12 about-info__pic-block">
                        <img src="images/myself2.0.jpg" 
                             srcSet="images/myself2.0.jpg 1x, images/myself2.0.jpg 2x" alt="" className="about-info__pic" />
                    </div>
                    <div className="column lg-6 md-12">
                        <div className="about-info__text" >
                            <h2 className="text-pretitle with-line" >
                                About
                            </h2>
                            <p className="attention-getter" >
                            Strong in design and integration with intuitive problem-solving skills.
                            Proficient in HTML,CSS, JavaScript. Passionate about implementing and launching new projects. 
                            Ability to translate business requirements into technical solutions.
                            Ability to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
                            </p>
                            {/* <a href="#0" className="btn btn--medium u-fullwidth" >Download CV</a> */}
                        </div>
                    </div>
                </div> 

                <div className="row about-expertise" >
                    <div className="column lg-12">
                        <h2 className="text-pretitle" >Expertise</h2>
                        <ul className="skills-list h1" >
                            <li>Visual Design</li>
                            <li>UI Design</li>
                            <li>HTML, CSS, Bootstrap, React (React-native + MaterialUI + Tailwind CSS)</li>
                        </ul>
                    </div>
                </div> 

                <div className="row about-timelines" data-animate-block>
                    <div className="column lg-6 tab-12">
                        <h2 className="text-pretitle" >
                            Experience
                        </h2>
                        <div className="timeline" >
                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title">Innova Solutions</h4>
                                    <h5 className="timeline__meta">US IT Recruiter</h5>
                                    <p className="timeline__timeframe">May 2022 - Feb 2024</p>
                                </div>
                                <div className="timeline__desc">
                                    <ul>
                                    <li>Identifying potential IT candidates through various channels like job boards such as Monster, Dice, Career Builder etc., social media, professional networks, and referrals.</li>
                                    <li>Building and maintaining a network of potential candidates for future opportunities.</li>
                                    <li>Reviewing resumes and applications to assess candidates' qualifications and compatibility with job requirements.</li>  
                                    <li>Conducting initial phone screens or interviews to evaluate candidates' technical skills, experience, and cultural fit with the organization.</li>           
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title">Microsoft</h4>
                                    <h5 className="timeline__meta">Frontend Developer</h5>
                                    <p className="timeline__timeframe">August 2016 - July 2019</p>
                                </div>
                                <div className="timeline__desc">
                                    <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                                </div>
                            </div> */}
                        </div> 
                    </div> 

                    <div className="column lg-6 tab-12">
                        <h2 className="text-pretitle" >
                            Education
                        </h2>
                        <div className="timeline" >
                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title">Asansol Engineering College, Asansol</h4>
                                    <h5 className="timeline__meta">Bachelor of Technology, Electronics and Communications Engineering</h5>
                                    <p className="timeline__timeframe">June 2022</p>
                                </div>
                                <div className="timeline__desc">
                                    <p>Currently pursuing job-oriented traning from Webskitters Academy on the REACTJS Course</p>
                                </div>
                            </div>
                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title">LICENSES & CERTIFICATIONS:</h4>
                                </div>
                                <div className="timeline__desc">
                                    <p>Introduction to Cybersecurity - Cisco <br />
                                        Cybersecurity Essentials Cisco<br />
                                        The Python Pro Boot Camp—Udemy<br />
                                        Introduction to Chat-GPT- The Ultimate Guide-- Udemy</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </section> 


            <section id="works" className="s-works target-section">
                <div className="row works-portfolio">
                    <div className="column lg-12" data-animate-block>
                        <h2 className="text-pretitle" >
                            Recent Works
                        </h2>
                        <p className="h1" >
                            Here are some of my favorite projects I have done lately. Feel free to check them out.
                        </p>
                        <ul className="folio-list row block-lg-one-half block-stack-on-1000">
                            <li className="folio-list__item column" >
                                <a className="folio-list__item-link" href="https://shopifyme.netlify.app" target='blank'>
                                    <div className="folio-list__item-pic">
                                        <img src="https://img.freepik.com/premium-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg"
                                             alt=""/>
                                    </div>
                                    
                                    <div className="folio-list__item-text">
                                        <div className="folio-list__item-cat">
                                        
                                        </div>
                                        <div className="folio-list__item-title">
                                            Shopify Shopping
                                        </div><br />
                                        <p className='text-xl'>Developed an e-commerce website using ReactJS, Redux frameworks and Tailwind/MUI for styling. This site helps to buy products based on different category and filter the prices as per your choice and you can check the particular product details as well as you can add the product to the cart. </p>
                                    </div>
                                </a>
                                <a className="folio-list__proj-link" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                </a>
                            </li> 
                            <li className="folio-list__item column" >
                                <a className="folio-list__item-link" href="https://myvidplayer.netlify.app/" target='blank'>
                                    <div className="folio-list__item-pic">
                                        <img src="https://store-images.s-microsoft.com/image/apps.11406.14133151861432913.feaef18e-e8e5-446f-9921-474dedf2d4eb.ea88b440-0339-4c99-a84b-d0ebc75d3183?h=253" 
                                             alt=""/>
                                    </div>   
                                    <div className="folio-list__item-text">
                                        <div className="folio-list__item-cat"></div>
                                        <div className="folio-list__item-title">
                                            Video Player
                                        </div><br />
                                        <p>Developed a Video player using ReactJS and Tailwind CSS for Styling. It features an intuitive drag-and-drop interface, file validation to ensure only video files are accepted, and a sleek design that provides users with both table and grid views of uploaded videos.</p>
                                    </div>
                                </a>
                                <a className="folio-list__proj-link" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                </a>
                            </li>
                            <li className="folio-list__item column" >
                                <a className="folio-list__item-link" href="https://musicsplay.netlify.app/" target='blank'>
                                    <div className="folio-list__item-pic">
                                        <img src="https://cdn.mos.cms.futurecdn.net/7jrsWbmCQtdWtbyGCjvJ2W-1200-80.jpg"  alt=""/>
                                    </div>
                                    
                                    <div className="folio-list__item-text">
                                        <div className="folio-list__item-cat">
                                        </div>
                                        <div className="folio-list__item-title">
                                            Music Player
                                        </div><br />
                                        <p>Developed a Music player using ReactJS and Tailwind CSS for Styling. It features an intuitive drag-and-drop interface, file validation to ensure only audio files are accepted, and a sleek design that provides users with both table and grid views of uploaded audios. </p>
                                    </div>
                                </a>
                                <a className="folio-list__proj-link" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                </a>
                            </li> 
                            <li className="folio-list__item column" >
                                <a className="folio-list__item-link" href="https://gcalender.netlify.app/" target='blank'>
                                    <div className="folio-list__item-pic">
                                        <img src="https://images.zoomin.com/calendar_6x6/2.1.0/product_images/web/cover.jpg" alt=""/>
                                    </div>
                                
                                    <div className="folio-list__item-text">
                                        <div className="folio-list__item-cat"></div>
                                        <div className="folio-list__item-title">
                                            Calender
                                        </div><br />
                                        <p>Developed a clone of a google Calendar using ReactJS and used Tailwind CSS for Styling. In this project you can add, edit and delete an event and also you can add or modify the events as per the color. Also, you can toggle the table as well as calendar view of event details.</p>
                                    </div>
                                </a>
                                <a className="folio-list__proj-link" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                </a>
                            </li> 
                            <li className="folio-list__item column" >
                                <a className="folio-list__item-link" href="https://crypto990.netlify.app/" target='blank'>
                                    <div className="folio-list__item-pic">
                                        <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/open_graph_image/10190470/og_image/optimized/Untitled-f7d57b911c0ea0d188e7db697c0fc7f8.png" alt=""/>
                                    </div>
                                    
                                    <div className="folio-list__item-text">
                                        <div className="folio-list__item-cat"> </div>
                                        <div className="folio-list__item-title">
                                            Crypto Currency
                                        </div><br />
                                        <p>Developed a crypto currency project using ReactJS and it features a list of currencies which is listed in a table format based on their rank, price, supply and others. Here we can search the currency as per the id and view the particular details of a Currency.</p>
                                    </div>
                                </a>
                                <a className="folio-list__proj-link" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                </a>
                            </li> 

                            {/* <li className="folio-list__item column" >
                                <a className="folio-list__item-link" href="#modal-06">
                                    <div className="folio-list__item-pic">
                                        <img src="images/portfolio/minimalismo.jpg" 
                                             srcSet="images/portfolio/minimalismo.jpg 1x, images/portfolio/minimalismo@2x.jpg 2x" alt=""/>
                                    </div>
                                    
                                    <div className="folio-list__item-text">
                                        <div className="folio-list__item-cat">
                                            Branding
                                        </div>
                                        <div className="folio-list__item-title">
                                            Minimalismo.
                                        </div>
                                    </div>
                                </a>
                                <a className="folio-list__proj-link" href="#" title="project link">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                </a>
                            </li>  */}
                        </ul> 
                    </div> 
                    {/* <div id="modal-01" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-fuji.jpg" alt=""/>
                
                            <div className="modal-popup__desc">
                                <h5>Retro Camera</h5>
                                <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                                <ul className="modal-popup__cat">
                                    <li>Branding</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                
                            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                        </div>
                    </div> 

                    <div id="modal-02" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-lamp.jpg" alt=""/>
                
                            <div className="modal-popup__desc">
                                <h5>The White Lamp</h5>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                <ul className="modal-popup__cat">
                                    <li>Branding</li>
                                </ul>
                            </div>
                
                            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                        </div>
                    </div> 

                    <div id="modal-03" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-rucksack.jpg" alt=""/>
                
                            <div className="modal-popup__desc">
                                <h5>Rucksuck</h5>
                                <p>Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.</p>
                                <ul className="modal-popup__cat">
                                    <li>Product Design</li>
                                </ul>
                            </div>
                
                            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                        </div>
                    </div> 
                    <div id="modal-04" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-skaterboy.jpg" alt=""/>
                
                            <div className="modal-popup__desc">
                                <h5>Since Day One</h5>
                                <p>Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.</p>
                                <ul className="modal-popup__cat">
                                    <li>Website</li>
                                </ul>
                            </div>
                
                            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                        </div>
                    </div> 

                    <div id="modal-05" hidden>
                        <div className="modal-popup">

                            <img src="images/portfolio/gallery/g-sanddunes.jpg" alt=""/>
                
                            <div className="modal-popup__desc">
                                <h5>Sand Dunes</h5>
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                <ul className="modal-popup__cat">
                                    <li>Illustration</li>
                                </ul>
                            </div>
                
                            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                        </div>
                    </div> 

                    <div id="modal-06" hidden>
                        <div className="modal-popup">
                            <img src="images/portfolio/gallery/g-minimalismo.jpg" alt=""/>
                
                            <div className="modal-popup__desc">
                                <h5>Minimalismo</h5>
                                <p>Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                <ul className="modal-popup__cat">
                                    <li>Branding</li>
                                    <li>Product Design</li>
                                </ul>
                            </div>
                
                            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                        </div>
                    </div>  */}

                </div> 
                <div className="row testimonials">
                    <div className="column lg-12">
                        <div className="swiper-container testimonial-slider" >
                            <div className="swiper-wrapper">
                                <div className="testimonial-slider__slide swiper-slide">
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-02.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                        <cite className="testimonial-slider__cite">
                                            <strong>Tim Cook</strong>
                                            <span>CEO, Apple</span>
                                        </cite>
                                    </div>
                                    <p>
                                    Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                                    Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                                    Laudantium quia consequatur molestias delectus culpa.
                                    </p>
                                </div> 
                
                                <div className="testimonial-slider__slide swiper-slide">
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-03.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                        <cite className="testimonial-slider__cite">
                                            <strong>Sundar Pichai</strong>
                                            <span>CEO, Google</span>
                                        </cite>
                                    </div>
                                    <p>
                                    Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                                    Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                                    Quasi voluptas eius distinctio. Atque eos maxime.
                                    </p>
                                </div> 
                
                                <div className="testimonial-slider__slide swiper-slide">
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-01.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                        <cite className="testimonial-slider__cite">
                                            <strong>Satya Nadella</strong>
                                            <span>CEO, Microsoft</span>
                                        </cite>
                                    </div>
                                    <p>
                                    Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                                    Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                                    Voluptatem dignissimos ut.
                                    </p>
                                </div> 
        
                                <div className="testimonial-slider__slide swiper-slide">
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-06.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                        <cite className="testimonial-slider__cite">
                                            <strong>Jeff Bezos</strong>
                                            <span>CEO, Amazon</span>
                                        </cite>
                                    </div>
                                    <p>
                                    Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                                    quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                                    Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                                    </p>
                                </div> 
                            </div> 
                            <div className="swiper-pagination"></div>
                        </div> 
                    </div> 
                </div> 
            </section> 


            <section id="contact" className="s-contact target-section">
                <div className="row contact-top">
                    <div className="column lg-12">
                        <h2 className="text-pretitle">
                            Get In Touch
                        </h2>
                        <p className="h1">
                            I love to hear from you.
                            Whether you have a question or just 
                            want to chat about design, tech & art — shoot me a message.
                        </p>
                    </div>
                </div> 

                <div className="row contact-bottom">
                    <div className="column lg-3 md-5 tab-6 stack-on-550 contact-block">
                        <h3 className="text-pretitle">Reach me at</h3>
                        <p className="contact-links">
                            <a href="mailto:sayhello@luther.com" className="mailtoui">arghyadeepdas10@gmail.com</a> <br/>
                            <a href="tel:+1975432345">+91 8436 451 525</a>
                        </p>
                    </div>
                    <div className="column lg-4 md-5 tab-6 stack-on-550 contact-block">
                        <h3 className="text-pretitle">Social</h3>
                        <ul className="contact-social">
                            <li><a href="https://www.linkedin.com/in/arghyadeep-das-7b7203182" target='blank'>Linkedin</a></li><br />
                            <li><a href="https://github.com/Arghyadeepdas10" target='blank'>Github</a></li>
                        </ul>
                    </div>
                    <div className="column lg-4 md-12 contact-block">
                        <a href="mailto:sayhello@luther.com" className="mailtoui btn btn--medium u-fullwidth contact-btn">Say Hello.</a>
                    </div>
                </div> 
            </section> 
        </main>

        <footer className="s-footer">
            <div className="row">
                <div className="column ss-copyright">
                    <span>Design by <a href="https://www.styleshout.com/" target='blank'>StyleShout</a> Distribution By <a href="https://themewagon.com" target='blank'>Themewagon</a></span>
                </div>

                <div className="ss-go-top">
                    <a className="smoothscroll" title="Back to Top" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
                    </a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Portfolio

