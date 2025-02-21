

// import { GlowingEffectDemoSecond } from "../components/Categories";
// import Footers from "../components/footer";
// import Carousel from "../components/infinitemoving";
// import Navbar from "../components/navbar";
// import { NewArrivals } from "../components/New";
// import Stats from "../components/stats";

// function Page1() {
//   return (
//     <>
//       <Navbar />
//       <div
//         className="relative h-screen w-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 overflow-hidden transition-all duration-300
//           bg-cover bg-center bg-neutral-200
//           xs:bg-[url('src/assets/be2f2c44c55bae4cea3b2c2557a908fe.jpg')]  
//           sm:bg-[url('src/assets/be2f2c44c55bae4cea3b2c2557a908fe.jpg')]  
//           md:bg-[url('src/assets/be2f2c44c55bae4cea3b2c2557a908fe.jpg')]  
//           lg:bg-none" // For larger screens, background image removed
//       >
//         {/* Left Content (Text, Button, Stats) */}
//         <div className="lg:w-1/2 flex flex-col items-center sm:pt-20 md:pt-20 lg:items-start text-center lg:text-left space-y-6 pt-12 lg:pt-20">
//           {/* Heading */}
//           <div
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold transition-all duration-300 xs:text-white sm:text-white md:text-white lg:text-neutral-900"
//             style={{ fontFamily: "Poppins" }}
//           >
//             FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
//           </div>

//           {/* Description */}
//           <div
//             className="text-lg sm:text-xl font-light transition-all duration-300 xs:text-white sm:text-white md:text-white lg:text-neutral-900"
//             style={{ fontFamily: "Poppins" }}
//           >
//             Browse through our collection of stylish clothes and find the perfect outfit that suits your taste and style.
//           </div>

//           {/* Button */}
//           <button className="h-12 rounded-full w-40 sm:w-48 bg-black text-white text-sm sm:text-base">
//             Shop Now
//           </button>

//           {/* Stats Component */}
//           <Stats />
//         </div>

//         {/* Right Content (Images) - Show Only on Large Screens (>=1024px) */}
//         <div className="hidden lg:flex lg:w-1/2 mt-10 lg:mt-0 justify-end pr-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-black lg:w-3/4">
//             {/* Image 1 */}
//             <img
//               src="src/assets/242965ed29f6d45228ece0cb5628fb70.jpg"
//               className="w-full h-80 object-cover rounded-t-full shadow-lg"
//               alt="Fashion Item 1"
//             />
//             {/* Image 2 */}
//             <img
//               src="src/assets/download.jpg"
//               className="w-full h-full object-contain rounded-lg shadow-lg"
//               alt="Fashion Item 2"
//             />
//             {/* Image 3 */}
//             <img
//               src="src/assets/be2f2c44c55bae4cea3b2c2557a908fe.jpg"
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//               alt="Fashion Item 3"
//             />
//             {/* Image 4 */}
//             <img
//               src="src/assets/a285062c9b9f447499ea77c0997d2d37~tplv-tej9nj120t-origin.webp"
//               className="w-full h-80 object-cover rounded-b-full shadow-lg"
//               alt="Fashion Item 4"
//             />
//           </div>
//         </div>
        
//       </div>
//       <Carousel/>
//       <NewArrivals/>
//       <div className="h-full w-screen rounded-t-2xl bg-black mt-10 p-10"><GlowingEffectDemoSecond/></div>
//       <Footers/>
//     </>
//   );
// }

// export default Page1;
import { GlowingEffectDemoSecond } from "../components/Categories";
import Footers from "../components/footer";
import Carousel from "../components/infinitemoving";
import Navbar from "../components/navbar";
import { NewArrivals } from "../components/New";
import Stats from "../components/stats";



function Page1() {
  return (
    <>
      <Navbar />
      <div
        className="relative h-screen w-screen flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16 overflow-hidden transition-all duration-300
          bg-cover bg-center bg-neutral-200
          xs:bg-[url('../assets/be2f2c44c55bae4cea3b2c2557a908fe.jpg')]   // Apply on small screens only
          sm:bg-[url('../assets/be2f2c44c55bae4cea3b2c2557a908fe.jpg')]   // Apply on small screens only
          md:bg-none lg:bg-none" // For larger screens, background image removed
      >
        {/* Left Content (Text, Button, Stats) */}
        <div className="lg:w-1/2 flex flex-col items-center sm:pt-20 md:pt-20 lg:items-start text-center lg:text-left space-y-6 pt-12 lg:pt-20">
          {/* Heading */}
          <div
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold transition-all duration-300 xs:text-white sm:text-white md:text-white lg:text-neutral-900"
            style={{ fontFamily: "Poppins" }}
          >
            FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
          </div>

          {/* Description */}
          <div
            className="text-lg sm:text-xl font-light transition-all duration-300 xs:text-white sm:text-white md:text-white lg:text-neutral-900"
            style={{ fontFamily: "Poppins" }}
          >
            Browse through our collection of stylish clothes and find the perfect outfit that suits your taste and style.
          </div>

          {/* Button */}
          <button className="h-12 rounded-full w-40 sm:w-48 bg-black text-white text-sm sm:text-base">
            Shop Now
          </button>

          {/* Stats Component */}
          <Stats />
        </div>

        {/* Right Content (Images) - Show Only on Large Screens (>=1024px) */}
        <div className="hidden lg:flex lg:w-1/2 mt-10 lg:mt-0 justify-end pr-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-black lg:w-3/4">
            {/* Image 1 */}
            <img
              src="src/assets/242965ed29f6d45228ece0cb5628fb70.jpg"
              className="w-full h-80 object-cover rounded-t-full shadow-lg"
              alt="Fashion Item 1"
            />
            {/* Image 2 */}
            <img
              src="src/assets/download.jpg"
              className="w-full h-full object-contain rounded-lg shadow-lg"
              alt="Fashion Item 2"
            />
            {/* Image 3 */}
            <img
              src="src/assets/be2f2c44c55bae4cea3b2c2557a908fe.jpg"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              alt="Fashion Item 3"
            />
            {/* Image 4 */}
            <img
              src="src/assets/a285062c9b9f447499ea77c0997d2d37~tplv-tej9nj120t-origin.webp"
              className="w-full h-80 object-cover rounded-b-full shadow-lg"
              alt="Fashion Item 4"
            />
          </div>
        </div>
        
      </div>
      <Carousel />
      <NewArrivals />
      <div className="h-full w-screen rounded-t-2xl bg-black mt-10 p-10">
        <GlowingEffectDemoSecond />
      </div>
      <Footers />
    </>
  );
}

export default Page1;
