"use client";
import React from "react";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { TextAnimate } from "./magicui/text-animate";
import { HiArrowSmallRight } from "react-icons/hi2";

interface NewsletterCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}


function SingleCard({ title, description, link, icon }: NewsletterCardProps) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:w-80 h-auto md:h-96">
      <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg h-full flex flex-col items-center justify-center space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow">
        {/* Icon */}
        <div className="text-secondary w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
          {icon}
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-black text-center primary">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-black text-center secondary px-1 sm:px-2">
          {description}
        </p>

        {/* Button */}
        <Link href={link} className="w-full flex justify-center mt-2">
          <button className="flex items-center justify-center gap-2 bg-[#203A61] text-white font-bold py-2 px-4 sm:px-6 rounded-[5px] shadow-lg transition-all duration-300 transform hover:scale-105 secondary w-full sm:w-auto">
            Know More
            <HiArrowSmallRight className="text-lg" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SingleCard;


export function NewsletterCards() {
  const newsletters = [
    {
      title: "October '25",
      description: "Explore key updates and exciting accomplishments from October 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/14th-edition-of-mlsa-miet-chronicles-october-2025-78a5f2cd-c4dc-4d48-acb7-b3c0281537fe",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "September '25",
      description: "Explore key updates and exciting accomplishments from September 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/13th-edition-of-mlsa-miet-chronicles-september-2025",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "August '25",
      description: "Explore key updates and exciting accomplishments from August 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/12th-edition-of-mlsa-miet-chronicles",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "July '25",
      description: "Explore key updates and exciting accomplishments from July 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/11th-edition-of-mlsa-miet-chronicles-july-2025",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "June '25",
      description: "Explore key updates and exciting accomplishments from June 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/10th-edition-of-mlsa-miet-chronicles-june-2025",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "May '25",
      description: "Explore key updates and exciting accomplishments from May 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/9th-edition-of-mlsa-miet-chronicles-may-2025",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "April '25",
      description: "Explore key updates and exciting accomplishments from April 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/8th-edition-of-mlsa-miet-chronicles",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "March '25",
      description: "Explore key updates and exciting accomplishments from March 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/7th-edition-of-mlsa-miet-newsletters",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "February '25",
      description: "Explore key updates and exciting accomplishments from February 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/6th-edition-of-mlsa-miet-newsletters",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "January '25",
      description: "Explore key updates and exciting accomplishments from the start of 2025.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/mlsa-miet-chronicles-a-thrilling-start-to-2025-with-mlsa",
      icon: <Newspaper className="w-full h-full" />,
    },
    {
      title: "December '24",
      description: "Discover insights from our December content and technical achievements.",
      link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/from-us-to-you-a-heartwarming-look-back-at-2024",
      icon: <Newspaper className="w-full h-full" />,
    },
    // {
    //   title: "November '24 ",
    //   description: "Check out the events and activities that defined November.",
    //   link: "https://www.commudle.com/communities/microsoft-learn-student-ambassadors-meerut-institute-of-engineering-and-technology/newsletters/3rd-edition-of-mlsa-miet",
    //   icon: <Newspaper className="w-full h-full" />,
    // },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-primary text-center m-4">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl primary"
        >
          HIGHLIGHTS
        </TextAnimate>
      </div>

      <div className="bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className=" grid grid-rows-4 grid-cols-3 gap-2 items-center justify-center gap-8">
            {newsletters.map((newsletter, index) => (
              <SingleCard key={index} {...newsletter} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
