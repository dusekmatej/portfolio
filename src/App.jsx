import { useEffect, useState } from 'react'
import ReadmeBox from './Components/ReadmeBox'
import Navigation from './Components/Navigation';
import './App.css'


{/* Switching dark/white-mode*/}
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <>

      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      
      <div className="min-h-screen flex items-center justify-center dark:bg-[#26252a] light:bg-white">
      <ReadmeBox />
    </div>
    </>
  )
}

export default App
