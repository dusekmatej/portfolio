import readmeBox from '../assets/readmeBox.png';
import DisplayText from './DisplayText';

const ReadmeBox = () => {
  return (
    <>
    
    <div className="relative flex items-center justify-center">
      <img src={readmeBox} className="z-50 mask-origin-padding"/>
      {/* Smaller box made for glow */ }
      <div className="transform transition delay-1000 duration-500 ease-in-out custom-glow absolute top-3/5 rounded-3xl left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[80%] flex" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-[31%] ml-10">    
          <DisplayText text="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum" interval={1} />
      </div>
    </div>
    </>
  );
}

export default ReadmeBox