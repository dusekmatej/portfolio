import '../App.css'

const Navigation = ( { isDarkMode, setIsDarkMode}) => {
    return (
        <nav >
            <ul className='text-[25px] gap-12 flex dark:bg-[#050505] dark:text-white p-4 justify-center transition delay-150 duration-300 ease-in-out light:bg-white'> 
                    <li className="hover:shadow-[0_0_135px_50px_rgba(0,34,120,1)] hover:bg-[#031542] transition delay-150 duration-300 ease-in-out"><a href="#home">Home</a></li>
                    <li className="hover:shadow-[0_0_135px_50px_rgba(0,34,120,1)] hover:bg-[#031542] transition delay-150 duration-300 ease-in-out"><a href="#home">Projects</a></li>
                    <li className="hover:shadow-[0_0_135px_50px_rgba(0,34,120,1)] hover:bg-[#031542] transition delay-150 duration-300 ease-in-out"><a href="#home">Articles</a></li>
                    <li className='hover:bg-[#031542]'><button className="hover:shadow-[0_0_135px_50px_rgba(0,34,120,1)]  cursor-pointer" onClick={() => setIsDarkMode(prev => !prev)}><i className="fa-solid fa-moon"></i></button></li>
            </ul>
        </nav>
    )
}

export default Navigation