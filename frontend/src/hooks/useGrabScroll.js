import { useRef } from "react";

const useGrabScroll = () => {
  const scrollContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
    container.style.cursor = "grabbing";

  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    container.isDown = false;
    container.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    container.isDown = false;
    container.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    const container = scrollContainerRef.current;
    console.log(container);
    if (!container.isDown) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2; // Adjust the multiplier for scroll speed
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  const bindScrollEvents = () => {
    const container = scrollContainerRef.current;
    container.style.cursor = "grab";

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemouse", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemouse", handleMouseMove);
    };
  };

  return { scrollContainerRef, bindScrollEvents };
};

export default useGrabScroll;
