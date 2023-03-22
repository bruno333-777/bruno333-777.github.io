import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1 ,HeroBtnWrapper, HeroP,
ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type ='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>South Florida Painting</HeroH1>
            <HeroP>
                Get a free estimate today!
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary = 'true'
                dark = 'true'
                
                >
                    Get an Estimate {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection