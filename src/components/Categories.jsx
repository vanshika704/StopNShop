// "use client";
// import PropTypes from 'prop-types';
// import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
// import { GlowingEffect } from './glowingeffect';

// export function GlowingEffectDemoSecond() {
//   return (
//     <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
//       <GridItem
//         area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
//         icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="Women’s Clothing"
//         description="Explore a wide range of stylish clothing for women."
//         image="src/assets/pexels-godisable-jacob-226636-914668.jpg" />
//       <GridItem
//         area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
//         icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="Men’s Fashion"
//         description="Discover the latest trends in men’s fashion."
//         image="https://images.unsplash.com/photo-1568706812-ec91b7c2ff67" />
//       <GridItem
//         area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
//         icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="Kids’ Clothing"
//         description="Find comfortable and trendy clothes for kids."
//         image="https://images.unsplash.com/photo-1527454024638-3452044de31d" />
//       <GridItem
//         area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
//         icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="Seasonal Offers"
//         description="Check out seasonal offers on fashion items."
//         image="https://images.unsplash.com/photo-1529421615772-d01c6ab5402c" />
//       <GridItem
//         area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
//         icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
//         title="Shop the Look"
//         description="Complete your outfit with the perfect accessories."
//         image="https://images.unsplash.com/photo-1593653254289-9c07d7f568d6" />
//     </ul>
//   );
// }

// const GridItem = ({
//   area,
//   icon,
//   title,
//   description,
//   image
// }) => {
//   return (
//     <li className={`min-h-[14rem] list-none ${area}`}>
//       <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
//         <GlowingEffect
//           blur={0}
//           borderWidth={3}
//           spread={80}
//           glow={true}
//           disabled={false}
//           proximity={64}
//           inactiveZone={0.01}
//         />
//         <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
//           <div className="relative flex flex-1 flex-col  justify-between gap-3">
//             <div className="w-fit rounded-lg border border-gray-600 p-2 ">
//               {icon}
//             </div>
//             <div className="space-y-3">
//               <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
//                 {title}
//               </h3>
//               <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
//                 {description}
//               </h2>
//             </div>
//             <div className="mt-4">
//               <img src={image} alt={title} className="rounded-lg w-full h-auto" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// };

// GridItem.propTypes = {
//   area: PropTypes.string.isRequired,
//   icon: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired
// };
"use client";
import PropTypes from 'prop-types';
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from './glowingeffect';

export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Women’s Clothing"
        description="Explore a wide range of stylish clothing for women."
        image="src/assets/pexels-aizhana-aldanova-364644-983569.jpg" />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Men’s Fashion"
        description="Discover the latest trends in men’s fashion."
        image="src/assets/pexels-marleneleppanen-1183266.jpg" />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Kids’ Clothing"
        description="Find comfortable and trendy clothes for kids."
        image="src/assets/pexels-jonas-mohamadi-1416736.jpg" />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Seasonal Offers"
        description="Check out seasonal offers on fashion items."
        image="src/assets/pexels-alexander-dummer-37646-1919030.jpg" />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Shop the Look"
        description="Complete your outfit with the perfect accessories."
        image="src/assets/pexels-frendsmans-1926769.jpg" />
    </ul>
  );
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  image
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}>
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
            <div className="mt-4">
              {/* Image removed from here as it's now background */}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

GridItem.propTypes = {
  area: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
