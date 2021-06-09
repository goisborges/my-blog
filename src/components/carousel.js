import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import * as carouselStyle from "../components/carousel.module.css"

    const HomeCarousel = () => {
        const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
        return (
            <Carousel className={carouselStyle.carousel}
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoplay={true}
  autoPlaySpeed={500}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div><StaticImage
      src="../images/gatsby-astronaut2.png"
      width={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    /></div>
  <div><StaticImage
      src="../images/gatsby-icon.png"
      width={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    /></div>
  <div><StaticImage
      src="../images/strapi.png"
      width={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    /></div>
  <div><StaticImage
      src="../images/heroku-logo.jpg"
      width={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    /></div>
    <div><StaticImage
      src="../images/netlify.jpg"
      width={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    /></div>
    <div><StaticImage
      src="../images/react-logo.png"
      width={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="tracedSVG"
    /></div>
</Carousel>
        )
    }

    export default HomeCarousel

    //let's try the carousel