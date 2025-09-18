import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='flex items-center justify-around fixed top-0 left-0 w-full bg-blue-100 sticky'>
            {/* <Link to="/"><span><Logo></Logo></span></Link> */} 
            <div className='flex items-center gap-4 text-black'>
                <Link to="/" className='py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2x1 hover:bg-slate-700 transition duration-300'>Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/explore">Explore</Link>
            </div>
            
        </nav>
    );
}
export default Navbar;