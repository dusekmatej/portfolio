import '../App.css'

const Navigation = ( { isDarkMode, setIsDarkMode}) => {
    return (
        <nav >
            <ul className='text-[25px] flex w-full dark:bg-[#201f22] dark:text-white p-4 justify-between'> 
                    <li className="hover:shadow-[0_0_135px_50px_rgba(0,34,120,1)] hover:bg-[#00227872]"><a className="" href="#home">Home</a></li>
                    <li className="hover:shadow-[0_0_135px_50px_rgba(0,34,120,1)] hover:bg-[#00227872]"><a href="#home">Projects</a></li>
                    <li className="hover:shadow-[0_0_135px_50px_rgba(0,34,120,1)] hover:bg-[#00227872]"><a href="#home">Articles</a></li>
                    <li><button className="hover:shadow-[0_0_135px_50px_rgba(0,34,120,1)] hover:bg-[#00227872] cursor-pointer" onClick={() => setIsDarkMode(prev => !prev)}>Toggle {isDarkMode ? 'Light' : 'Dark'} Mode</button></li>
            </ul>
        </nav>
    )
}

export default Navigation