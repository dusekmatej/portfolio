import { Link } from '@tanstack/react-router';

const Navigation = () => {
    return (
        <div className="flex gap-10 justify-center text-2xl pt-5">
            
            <div className="relative glow-group move-effect">
                <Link to="/">Home</Link>
                <div className="circle-glow"></div>
            </div>

            <div className="relative glow-group move-effect">
                <Link to="/projects">Projects</Link>
                <div className="circle-glow"></div>
            </div>
            
            <div className="relative glow-group move-effect">
                <Link to="/articles">Articles</Link>
                <div className="circle-glow"></div>
            </div>
        
        </div>
    )
}

export default Navigation;
