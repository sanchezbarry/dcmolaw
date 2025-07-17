import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsView() {
  const testimonials = [
    {
      quote:
        "ACQ5 Annual Award Programs recognise organisations and individuals that have achieved outstanding commercial success in designated areas of expertise. Since 2003, ACQ5 has been celebrating achievement, innovation and brilliance in their annual award programs. ACQ5 can boast a legitimately independent nomination process and most importantly, all award winners are chosen by the industry itself.",
      name: "ACQ5 2018",
      designation: "ACQ5 Annual Award Programs",
      src: "/acq5-global-awards-3.jpg",
    },
    {
      quote:
        "The Corporate Excellence Awards continue to showcase the companies and individuals that are committed to innovation, business growth, and providing the very best products and services to clients across a wide range of industries. The CV Magazine team focuses on a range of sectors from across the business landscape in order to provide a fair and accurate representation of the best in business. There are no limits when it comes to company size or geographical location, they only look to identify recipients based on merit and celebrate those who have worked tirelessly to reach where they are today.",
      name: "The Corporate Excellence Awards",
      designation: "CV Magazine",
      src: "/cvmagazine2019.png",
    },
    {
      quote:
        "The ThreeBest Rated review team either approved DCMO’s business listing using their 50-Point Inspection which includes everything from checking reputation, history, complaints, ratings, nearness, satisfaction, trust and cost to the general excellence. Three Best Rated® was created with a simple goal to find the top 3 local businesses, professionals, restaurants and health care providers in the region. They display only businesses that are verified by their employees since customers deserve only the best. ",
      name: "Best Business of 2018",
      designation: "Three Best Rated",
      src: "/ThreeBestRated-Logo.png",
    },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "https://images.unsplash.com/photo-1663599388073-c0fd88b414ff?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Ong",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1591941801516-9900a01f7d6b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
