"use client";

import { useState } from "react";
import Link from "next/link";
import { categoriesList } from "./itemsData";
import Image from "next/image";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleScroll = (direction) => {
    const step = 1; // Number of elements to scroll per click
    const newStartIndex =
      direction === "left"
        ? Math.max(startIndex - step, 0)
        : Math.min(startIndex + step, categoriesList.length - 3); // Display 3 elements at a time

    setStartIndex(newStartIndex);
  };

  return (
    <div className="carousel-container categories">
      <ChevronLeftIcon
        className="chevron-icon"
        style={{ position: "relative", left: "10%" }}
        onClick={() => handleScroll("left")}
      />

      <div className="categories-carousel categories">
        {categoriesList
          .slice(startIndex, startIndex + 3)
          .map((category, index) => (
            <Link
              href={`/category/${category.name.toLowerCase()}`}
              key={index + startIndex}
            >
              <div className="image-wrapper">
                <Image src={category.src} alt={category.name} />
                <h4 className="categories-carousel--caption">
                  {category.name}
                </h4>
              </div>
            </Link>
          ))}
      </div>
      <ChevronRightIcon
        className="chevron-icon"
        style={{ position: "relative", right: "10%" }}
        onClick={() => handleScroll("right")}
      />
    </div>
  );
};

export default Carousel;
