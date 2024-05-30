import { Link21, Location } from 'iconsax-react'
import { useRef } from 'react';
import avatar from './assets/avatar.jpg'
import cover from './assets/cover.jpg'
function App() {

  const boundingRef = useRef<DOMRect | null>(null);


  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center [perspective:800px]">
      <div
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(ev) => {
          boundingRef.current = ev.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return;
          const x = ev.clientX - boundingRef.current.left;
          const y = ev.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = -1 * (xPercentage - 0.5) * 20;
          const yRotation = -1 * (0.5 - yPercentage) * 20;

          ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
          ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
          ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
          ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
        }}
        className='relative group w-[400px] p-2 bg-white bg-opacity-10 overflow-hidden rounded-2xl shadow-xl transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.08)]'>
        <div className='px-4 py-8 bg-white border border-gray-100 rounded-2xl'>
          <div
            style={{
              backgroundImage: `url(${cover})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            className="h-[160px] w-full bg-gray-900 rounded-xl mb-14">
            <div
              style={{
                backgroundImage: `url(${avatar})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              className="w-[120px] h-[120px] bg-gray-900 border-4 border-white absolute rounded-full mb-4 top-[120px] left-[40px]"></div>
          </div>
          <h1 className='text-2xl font-semibold'>Shahzada Fahad Ashraf</h1>
          <p className='pb-4'>Principal Software Consultant at Whizzbridge</p>
          <p className='text-sm text-gray-500 pb-4'>With 9+ years of experience, I've overseen 7+ successful mid-to-large scale projects. Leading diverse teams, including developers, QA, and UI/UX designers to deliver projects spanning across diverse domains from web to IoT solutions.</p>
          {/* <div className="flex items-start justify-start py-4">
            <div className="flex items-start justify-start pr-4">
              <h1 className='pr-2 font-bold'>238</h1>
              <h1>Following</h1>
            </div>
            <div className="flex items-start justify-start">
              <h1 className='pr-2 font-bold'>238</h1>
              <h1>Following</h1>
            </div>
          </div> */}
          <div className="flex items-center justify-start pb-1">
            <Link21 size="16" />
            <a href='https://linkedin.com/in/fahadachaudhry' className='text-sm text-gray-500 pl-4 hover:underline'>@fahadachaudhry</a>
          </div>
          <div className="flex items-center justify-start">
            <Location size="16" />
            <h1 className='text-sm text-gray-500 pl-4'>Lahore, Pakistan</h1>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.1)_20%,transparent_80%)]" />
      </div>
    </div>
  )
}

export default App
