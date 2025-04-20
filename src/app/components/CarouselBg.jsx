// "use client"
// import React from 'react'
// import { useEffect, useState } from "react";




// const CarouselBg = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);
//     return (
//         <div className="absolute inset-0 -z-10">
//             <Carousel>
//                 <CarouselContent>
//                     {carouselImages.map((image, index) => (
//                         <CarouselItem
//                             key={index}
//                             className={index === activeIndex ? "block" : "hidden"}
//                         >
//                             <img
//                                 src={image.src}
//                                 alt={image.alt}
//                                 className="w-full h-screen object-cover"
//                             />
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//                 <CarouselPrevious className="z-20" />
//                 <CarouselNext className="z-20" />
//             </Carousel>
//         </div>
//     )
// }

// export default CarouselBg