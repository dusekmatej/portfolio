import readmeBox from '../assets/readmeBox.png';
import DisplayText from './DisplayText';

const ReadmeBox = () => {
  return (
    <>
    
    <div className="relative flex items-center justify-center">
      <img src={readmeBox} className="z-50 mask-origin-padding "/>
      {/* Smaller box made for glow */ }
      <div className="transform transition delay-1000 duration-500 ease-in-out custom-glow absolute top-3/5 rounded-3xl left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[80%] flex overflow-visible"/>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-[31%] ml-10 ">    
          <DisplayText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." interval={1} />
      </div>
    </div>
    </>
  );
}

export default ReadmeBox