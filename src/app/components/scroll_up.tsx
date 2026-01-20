"use client";
import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ArrowUp from '../components/svg/ArrowUp.svg';


const Up = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  right: 2rem;
  bottom: 1rem;
  z-index: 10;
  width: 40px;
  height: 40px;
  cursor: pointer;
  @media screen and (max-width: 48em) {
    display: none;
  }
  img {
    width: 2rem;
    height: 2rem;
    border: 2px solid var(--white);
    border-radius: 50%;
    background-color: var(--white);
    transition: transform 0.3s;
    display: none;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const ScrollToTop: FC = () => {
  const ref = useRef<HTMLImageElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = () => {
    const element = document.getElementById('Home');
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  useEffect(() => {
    const element = ref.current;
    gsap.to(element, {
      display: 'block',
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        scrub: true,
      },
    });
  }, []);

  return (
    <Up onClick={scrollUp}>
      <Image ref={ref} src={ArrowUp} alt="to top" />
    </Up>
  );
};

export default ScrollToTop;
