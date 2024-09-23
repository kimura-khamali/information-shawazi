// "use client";

// import React, { useState } from 'react';
// import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// const testimonialsData = [
//   {
//     text: "This platform revolutionized how I bought land. The process was smooth, secure, and transparent.",
//     author: "Nakato Musana",
//     role: "Land Buyer",
//     image: "/images/nakato.png"
//   },
//   {
//     text: "The service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful.",
//     author: "Valentine Nkatha",
//     role: "Home owner",
//     image: "/images/valentine.jpg"
//   },

//   {
//     text: "The Shawazi platform made my property search so much easier! The support team was quick to assist, and I had a seamless experience throughout..",
//     author: "Brenda Khamali",
//     role: "Home owner",
//     image: "/images/brenda.jpg"
//   },

//   {
//     text: "Shawazi service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful. It was easier and fast and I highly recommend it.",
//     author: "Maureen Gatweri",
//     role: "Land seller",
//     image: "/images/maureen.png"
//   },

// ];

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="px-4 sm:px-12 md:px-24 lg:px-60 mx-auto p-4 font-jost mt-10">
//       <div className="mb-8">
//         <div className="flex items-center justify-center mb-4">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
//             <Star key={star} className="w-6 h-6 text-secondary" fill={star % 2 !== 0 ? 'currentColor' : 'none'} />
//           ))}
//         </div>

//         <div className="flex items-center justify-center mb-4">
//           <ChevronLeft className="w-8 h-8 m:w-10 sm:h-10 md:w-12 text-black border border-gray-400 rounded-lg flex items-center justify-center" style={{ borderRadius: '5px' }} onClick={handlePrev} />

//           <p className="text-[16px] sm:text-[20px] text-black mx-4"> 
//             {testimonialsData[currentIndex].text}
//           </p>

//           <ChevronRight className="w-8 h-8 m:w-10 sm:h-10 md:w-12 text-black border border-gray-400 rounded-lg flex items-center justify-center" style={{ borderRadius: '5px' }} onClick={handleNext} />
//         </div>

//         <div className="flex flex-col items-center justify-center">
//           <div className="flex items-center">
//             <img src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].author} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4" />
//             <div className='text-[16px] sm:text-[20px]'>
//               <p className="font-semibold">{testimonialsData[currentIndex].author}</p>
//               <p className="text-black">{testimonialsData[currentIndex].role}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;




// "use client";

// import React, { useState } from 'react';
// import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// const testimonialsData = [
//   {
//     text: "This platform revolutionized how I bought land. The process was smooth, secure, and transparent.",
//     author: "Nakato Musana",
//     role: "Land Buyer",
//     image: "/images/nakato.png"
//   },
//   {
//     text: "The service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful.",
//     author: "Valentine Nkatha",
//     role: "Home owner",
//     image: "/images/valentine.jpg"
//   },
//   {
//     text: "The Shawazi platform made my property search so much easier! The support team was quick to assist, and I had a seamless experience throughout.",
//     author: "Brenda Khamali",
//     role: "Home owner",
//     image: "/images/brenda.jpg"
//   },
//   {
//     text: "Shawazi service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful. It was easier and fast and I highly recommend it.",
//     author: "Maureen Gatweri",
//     role: "Land seller",
//     image: "/images/maureen.png"
//   },
// ];

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="w-full px-4 sm:px-12 lg:px-60 py-10 p-4 font-jost">
//       <div className="mb-8">
//         <div className="flex items-center justify-center mb-8">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
//             <Star key={star} className="w-6 h-6 text-secondary" fill={star % 2 !== 0 ? 'currentColor' : 'none'} />
//           ))}
//         </div>

//         <div className="flex items-center justify-center mb-4">
//           <button 
//             className="w-12 h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center mr-4"
//             onClick={handlePrev}
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <p className="text-[16px] sm:text-[20px] text-black mx-4 flex-1 text-center"> 
//             {testimonialsData[currentIndex].text}
//           </p>

//           <button 
//             className="w-12 h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center ml-4"
//             onClick={handleNext}
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         <div className="flex flex-col items-center justify-center mt-8">
//           <div className="flex items-center">
//             <img src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].author} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4" />
//             <div className='text-[16px] sm:text-[20px]'>
//               <p className="font-semibold">{testimonialsData[currentIndex].author}</p>
//               <p className="text-black">{testimonialsData[currentIndex].role}</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center mt-8">
//           <button 
//             className="w-12 h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center mr-4"
//             onClick={handlePrev}
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button 
//             className="w-12 h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center ml-4"
//             onClick={handleNext}
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;



// "use client";

// import React, { useState } from 'react';
// import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// const testimonialsData = [
//   {
//     text: "This platform revolutionized how I bought land. The process was smooth, secure, and transparent.",
//     author: "Nakato Musana",
//     role: "Land Buyer",
//     image: "/images/nakato.png"
//   },
//   {
//     text: "The service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful.",
//     author: "Valentine Nkatha",
//     role: "Home owner",
//     image: "/images/valentine.jpg"
//   },
//   {
//     text: "The Shawazi platform made my property search so much easier! The support team was quick to assist, and I had a seamless experience throughout.",
//     author: "Brenda Khamali",
//     role: "Home owner",
//     image: "/images/brenda.jpg"
//   },
//   {
//     text: "Shawazi service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful. It was easier and fast and I highly recommend it.",
//     author: "Maureen Gatweri",
//     role: "Land seller",
//     image: "/images/maureen.png"
//   },
// ];

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="w-full px-4 sm:px-12 lg:px-60 py-10 p-4 font-jost">
//       <div className="mb-8">
//         <div className="flex items-center justify-center mb-8">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
//             <Star key={star} className="w-6 h-6 text-secondary" fill={star % 2 !== 0 ? 'currentColor' : 'none'} />
//           ))}
//         </div>

//         <div className="flex items-center justify-center mb-4">
//           <button 
//             className="w-12 h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center mr-4"
//             onClick={handlePrev}
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>

//           <p className="text-[16px] sm:text-[20px] text-black mx-4 flex-1 text-center"> 
//             {testimonialsData[currentIndex].text}
//           </p>

//           <button 
//             className="w-12 h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center ml-4"
//             onClick={handleNext}
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         <div className="flex flex-col items-center justify-center mt-8">
//           <div className="flex items-center">
//             <img src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].author} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4" />
//             <div className='text-[16px] sm:text-[20px]'>
//               <p className="font-semibold">{testimonialsData[currentIndex].author}</p>
//               <p className="text-black">{testimonialsData[currentIndex].role}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;




"use client";


import React, { useState } from 'react';  
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'; 

const ratingsData = [
  {
    text: "This land registration system revolutionized my property transaction experience. From searching for land details to finalizing the contract, the process was transparent and efficient. The integration of Google Cloud Vision for payment verification assured me of the system's reliability.",
    author: "Nyaga Gloria",
    role: "Real Estate Investor",
    image: "/images/gloria.jpg"
  },
  {
    text: "The service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful.",
    author: "Valentine Nkatha",
    role: "Home owner",
    image: "/images/valentine.jpg"
  },
  {
    text: "The Shawazi platform made my property search so much easier! The support team was quick to assist, and I had a seamless experience throughout.",
    author: "Brenda Khamali",
    role: "Home owner",
    image: "/images/brenda.jpg"
  },
  {
    text: "Shawazi service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful. It was easier and fast and I highly recommend it.",
    author: "Maureen Gatweri",
    role: "Land seller",
    image: "/images/maureen.png"
  },
];

const Ratings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ratingsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ratingsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-10 font-jost"> 
      <div className="mb-8">
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
            <Star key={star} className="w-6 h-6 text-secondary" fill={star % 2 !== 0 ? 'currentColor' : 'none'} />
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <button 
            className="w-10 h-10 sm:w-12 sm:h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <p className="text-[16px] sm:text-[20px] text-black mx-4 sm:mx-8 md:mx-12 lg:mx-16 text-center flex-1"> 
            {ratingsData[currentIndex].text}
          </p>

          <button 
            className="w-10 h-10 sm:w-12 sm:h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          <div className="flex items-center">
            <img src={ratingsData[currentIndex].image} alt={ratingsData[currentIndex].author} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4" />
            <div className='text-[16px] sm:text-[20px]'>
              <p className="font-semibold">{ratingsData[currentIndex].author}</p>
              <p className="text-black">{ratingsData[currentIndex].role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;

// import React, { useState } from 'react';  
// import { Star, ChevronLeft, ChevronRight } from 'lucide-react'; 

// const ratingsData = [
//   {
//     text: "This land registration system revolutionized my property transaction experience. From searching for land details to finalizing the contract, the process was transparent and efficient. The integration of Google Cloud Vision for payment verification assured me of the system's reliability.",
//     author: "Nyaga Gloria",
//     role: "Real Estate Investor",
//     image: "/images/gloria.jpg"
//   },
//   {
//     text: "The service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful.",
//     author: "Valentine Nkatha",
//     role: "Home owner",
//     image: "/images/valentine.jpg"
//   },
//   {
//     text: "The Shawazi platform made my property search so much easier! The support team was quick to assist, and I had a seamless experience throughout.",
//     author: "Brenda Khamali",
//     role: "Home owner",
//     image: "/images/brenda.jpg"
//   },
//   {
//     text: "Shawazi service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful. It was easier and fast and I highly recommend it.",
//     author: "Maureen Gatweri",
//     role: "Land seller",
//     image: "/images/maureen.png"
//   },
// ];

// const Ratings = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? ratingsData.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === ratingsData.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="w-full px-4 sm:px-8 lg:px-16 py-10 lg:text-2xl zxl:text-4xl font-jost"> 
//       <div className="mb-8">
//         <div className="flex items-center justify-center mb-8">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
//             <Star key={star} className="w-6 h-6 text-secondary" fill={star % 2 !== 0 ? 'currentColor' : 'none'} />
//           ))}
//         </div>

//         <div className="flex items-center justify-between mb-4">
//           <button 
//             className="w-10 h-10 sm:w-12 sm:h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center cursor-pointer"
//             onClick={handlePrev}
//           >
//             <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
//           </button>

//           <p className="text-[16px] text-black mx-4 sm:mx-8 md:mx-12 lg:mx-16 text-center flex-1"> 
//             {ratingsData[currentIndex].text}
//           </p>

//           <button 
//             className="w-10 h-10 sm:w-12 sm:h-12 text-black border border-gray-400 rounded-lg flex items-center justify-center cursor-pointer"
//             onClick={handleNext}
//           >
//             <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
//           </button>
//         </div>

//         {/* <div className="flex flex-col items-center justify-center mt-8">
//           <div className="flex items-center">
//             <img src={ratingsData[currentIndex].image} alt={ratingsData[currentIndex].author} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4" />
//             <div className='text-[14px] sm:text-[16px] md:text-[18px]'>
//               <p className="font-semibold">{ratingsData[currentIndex].author}</p>
//               <p className="text-black">{ratingsData[currentIndex].role}</p>
//             </div> */}
//             <div className="flex flex-col items-center justify-center mt-8">
//           <div className="flex items-center">
//             <img src={ratingsData[currentIndex].image} alt={ratingsData[currentIndex].author} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4" />
//             <div className='text-[14px] sm:text-[16px] md:text-[18px]'>
//               <p className="font-semibold">{ratingsData[currentIndex].author}</p>
//               <p className="text-black">{ratingsData[currentIndex].role}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ratings;