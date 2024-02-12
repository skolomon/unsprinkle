import React from 'react';
import styled from 'styled-components/macro';

const Hero = () => {
  let src = "/images/hero-img.jpg";
  let j2 = src.replace('.jpg', '@2x.jpg');
  let j3 = src.replace('.jpg', '@3x.jpg');
  let a = src.replace('.jpg', '.avif');
  let a2 = src.replace('.jpg', '@2x.avif');
  let a3 = src.replace('.jpg', '@3x.avif');

  return (
    <Wrapper>
      <picture>
        <source
          type="image/avif"
          srcSet={`${a} 1x, ${a2} 2x, ${a3} 3x`}
        />
        <source
          type="image/jpeg"
          srcSet={`${src} 1x, ${j2} 2x, ${j3} 3x`}
        />
        <HeroImage src={src} alt = "cat logo image"/>
      </picture>
      <Swoop src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
