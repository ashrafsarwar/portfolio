import { useEffect, useState } from "react";

const useVisibility = (rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin, // Use the rootMargin passed as a parameter
      }
    );

    const element = document.getElementById("testimonials"); // Ensure this matches your element's ID
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [rootMargin]);

  return isVisible;
};

export default useVisibility;
