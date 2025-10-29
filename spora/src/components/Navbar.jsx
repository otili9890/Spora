import { Link } from 'react-router-dom';
import Logout from './Logout';
import logo from '../assets/logo.png';
const Navbar = () => {
    return (
        <nav className='flex content-center items-center columns-3 justify-between fixed w-full bg-[#b5b9fc] sticky px-5 py-3'>

                {/* <Link to="/"><span><Logo></Logo></span></Link> */} 
                <div>
                    <img src={logo} alt="logo" className='h-16' />
                </div>
                <div className='flex items-center gap-4 text-black mx-20'>
                    <Link to="/" className=' m-auto py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2x1 hover:bg-slate-700 transition duration-300'>Home</Link>
                    <Link to="/dashboard" className='py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2x1 hover:bg-slate-700 transition duration-300'>Dashboard</Link>
                    <Link to="/explore" className='py-1 px-3 text-lg font-light text-black hover:text-sky-300 rounded-2x1 hover:bg-slate-700 transition duration-300'>Explore</Link>
                </div>
                <Logout />
            
            
            
        </nav>
    );
}
export default Navbar;