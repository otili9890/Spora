import { Link } from 'react-router-dom';
import Logout from './Logout';
const Navbar = () => {
    return (
        <nav className='flex items-center justify-around fixed top-0 left-0 w-full bg-blue-100 sticky'>
            <div className='content-center columns-3'>
                {/* <Link to="/"><span><Logo></Logo></span></Link> */} 
                <div>
                    {/* <Image src={logo} alt="logo"></Image> */}
                </div>
                <div className='flex items-center gap-4 text-black'>
                    <Link to="/" className='py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2x1 hover:bg-slate-700 transition duration-300'>Home</Link>
                    <Link to="/dashboard" className='py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2x1 hover:bg-slate-700 transition duration-300'>Dashboard</Link>
                    <Link to="/explore" className='py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2x1 hover:bg-slate-700 transition duration-300'>Explore</Link>
                </div>
                <Logout />
            </div>
            
            
        </nav>
    );
}
export default Navbar;