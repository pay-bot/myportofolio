import Carousel from "react-multi-carousel";
import CarouselCard from "./CarouselCard";

export default function CarouselProfile(props) {
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
    <>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 2"
        transitionDuration={5000}
        containerClassName="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={props.deviceType}
        dotListClassName="custom-dot-list-style"
      // itemClassName="carousel-item-padding-40-px"
      >
        <CarouselCard
          image="/images/js.png"
          judul="Javascript"
        />
        <CarouselCard
          image="/images/css.png"
          judul="css"
        />
        <CarouselCard
          image="/images/next.svg"
          judul="nextJS"
        />
        <CarouselCard
          image="/images/nodeJS.svg"
          judul="nodejs"
        />
        <CarouselCard
          image="/images/react.png"
          judul="reactjs"
        />
        <CarouselCard
          image="/images/tailwind.svg"
          judul="tailwind"
        />
      </Carousel>
    </>
  )
}