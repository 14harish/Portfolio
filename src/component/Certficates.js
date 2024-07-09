import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'; // Import the CSS for pure-react-carousel
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";
import sql from '../assets/Certficates/sql.jpg'
import java from '../assets/Certficates/java.jpg'
import python from '../assets/Certficates/python.jpg'
import react from '../assets/Certficates/React.jpg'



function Certficates() {
    const certificates = [
        {
            title: "React JS- Complete Guide for Frontend Web Development certificate from Udemy",
            link: react
        },
        {
            title: "I have successfully completed a certificate in Java basics from HackerRank and earned a 5-star rating in Java.",
            link: java
        },
        {
            title: "I've completed a My SQL basics course through Great Learning, gaining proficiency in database querying and management.",
            link: sql
        },
        {
            title: "Successfully Completed Python Course from Guvi, Gaining Proficiency in Python Programming",
            link: python
        },
        // Add other certificate objects here...
    ];
    const certificateSlides = certificates.map((certificate, index) => (
        <Slide index={index} key={index}>
            <div className="flex flex-col items-center justify-center">
                <img src={certificate.link} alt={certificate.title} className="w-full h-full object-contain" />
                <h3 className="text-center mt-4">{certificate.title}</h3>
            </div>
        </Slide>
    ));

    return (
        <div className="dark:bg-[#111111] bg-white dark:text-[white] text-[#616262] flex items-center justify-center h-full pt-36">
            <div className="w-full max-w-lg p-4">
                <h1 className="font-semibold text-2xl mb-20 text-center">MY CERTIFICATES</h1>
                <CarouselProvider
                    naturalSlideWidth={400}
                    naturalSlideHeight={380}
                    totalSlides={certificates.length}
                    infinite={true}
                    visibleSlides={1}
                    interval={3000}
                    isPlaying={true}
                    playDirection="forward"
                >
                    <Slider className="certificateslides">
                        {certificateSlides}
                    </Slider>
                    <div className="flex items- justify-around mt-4 ">
                        <ButtonBack className="navigationbtnleft navigationbtn"><FaArrowAltCircleLeft size={32}/></ButtonBack>
                        <ButtonNext className="navigationbtnright navigationbtn"><FaArrowAltCircleRight size={32}/> </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}

export default Certficates;
