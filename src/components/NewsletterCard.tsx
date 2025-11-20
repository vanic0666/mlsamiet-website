"use client";
import React from "react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


import { Newspaper } from "lucide-react";
interface NewsletterCardProps {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function NewsletterCards() {
  const items = [

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
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {items.map((item) => (
  <DraggableCardBody key={item.title} className={item.className}>

          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
