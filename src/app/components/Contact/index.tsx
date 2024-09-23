import React from 'react';
import { Check, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 py-10 w-screen p-4 font-jost"> 
      <h1 className="font-bold text-center text-primary mb-4 text-[20px] sm:text-[25px]">Transparent Land Registration Made Easy</h1>
      <p className="text-center mb-8 text-[16px] sm:text-[20px]">Streamline Your Land Transactions with Our Secure and Efficient System</p>

      <div className="w-full flex flex-col md:flex-row bg-secondary-light rounded-lg overflow-hidden">
        <div className="flex-grow p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              'User Friendly Interface',
              'Secure Transactions',
              'Smart Contracts',
              'Chat Rooms',
              'Legal Support',
              'Transparency',
              'Data Integrity'
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-white border border-custom-green flex items-center justify-center mr-2">
                  <Check className="w-4 h-4 text-custom-green" />
                </div>
                <span className="text-[16px] sm:text-[20px]">{feature}</span> 
              </div>
            ))}
          </div>
        </div>
        <div className="bg-secondary p-4 sm:p-6 md:w-1/3">
          <h2 className="font-bold mb-4 text-primary text-[16px] sm:text-[20px]">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center text-[16px] sm:text-[20px]"> 
              <Mail className="w-5 h-5 mr-2" />
              <span className='text-10'>Email Address: shawazi5@gmail.com</span>
            </p>
            <p className="flex items-center text-[10px] sm:text-[20px]"> 
              <Phone className="w-5 h-5 mr-2" />
              <span>Phone Number: +254 704264110</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;






























// import React from 'react';
// import { Check, Mail, Phone } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div className="px-4 sm:px-12 lg:px-24 py-10 w-screen p-4 font-jost"> 
//       <h1 className="font-bold text-center text-primary mb-4 text-[20px] sm:text-[25px]">Transparent Land Registration Made Easy</h1>
//       <p className="text-center mb-8 text-[16px] sm:text-[20px]">Streamline Your Land Transactions with Our Secure and Efficient System</p>

//       <div className="w-full flex flex-col md:flex-row bg-secondary-light rounded-lg overflow-hidden">
//         <div className="flex-grow p-4 sm:p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//             {[
//               'User Friendly Interface',
//               'Secure Transactions',
//               'Smart Contracts',
//               'Chat Rooms',
//               'Legal Support',
//               'Transparency',
//               'Data Integrity'
//             ].map((feature, index) => (
//               <div key={index} className="flex items-center">
//                 <div className="w-6 h-6 rounded-full bg-white border border-custom-green flex items-center justify-center mr-2">
//                   <Check className="w-4 h-4 text-custom-green" />
//                 </div>
//                 <span className="text-[16px] sm:text-[20px]">{feature}</span> 
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="bg-secondary p-4 sm:p-6 md:w-1/3">
//           <h2 className="font-bold mb-4 text-primary text-[20px] sm:text-[25px]">Contact Information</h2>
//           <div className="space-y-4">
//             <p className="flex items-center text-[16px] sm:text-[20px]"> 
//               <Mail className="w-5 h-5 mr-2" />
//               <span>Email Address: shawazi5@gmail.com</span>
//             </p>
//             <p className="flex items-center text-[16px] sm:text-[20px]"> 
//               <Phone className="w-5 h-5 mr-2" />
//               <span>Phone Number: +254 704264110</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
