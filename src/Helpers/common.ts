export const scrollLeft = (carouselRef : React.RefObject<HTMLDivElement>) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

 export const scrollRight = (carouselRef : React.RefObject<HTMLDivElement>) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };