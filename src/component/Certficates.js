import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'; // Import the CSS for pure-react-carousel

function Certficates() {
    const certificates = [
        {
            title: "Participated in Online Webinar or Online Training Module Programme on 'STUDENT ENTREPRENEURSHIP AWARENESS PROGRAMME' conducted by Entrepreneurship Development and Innovation Institute",
            link: "https://i.ibb.co/87vD0Pb/studententrepreneurshipprogram.jpg"
        },
        {
            title: "Attended online session on 'Building your first Python project - Personal Chat Assistant' conducted by Techlearn.",
            link: "https://i.ibb.co/bPmMwML/pythonproject.jpg"
        },
        // Add other certificate objects here...
    ];
    const certificateSlides = certificates.map((certificate, index) => (
        <Slide index={index} key={index}>
            <div>
                <h3>{certificate.title}</h3>
                <img src={certificate.link} alt={certificate.title} className="w-full h-auto" />
            </div>
        </Slide>
    ));
    
  return (
    <div className="" data-aos="fade-up">
    <h3 className="">Certificate</h3>
    <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={certificates.length}
        infinite={true}
        className=""
        visibleSlides={1}
        interval={3000}
        isPlaying={true}
        playDirection="forward"
    >
        <Slider className="certifcateslides">
            {certificateSlides}
        </Slider>
        <ButtonBack className="navigationbtnleft navigationbtn">&#8678;</ButtonBack>
        <ButtonNext className="navigationbtnright navigationbtn">&#8680;</ButtonNext>
    </CarouselProvider>
</div>
  )
}

export default Certficates