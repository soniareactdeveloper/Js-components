import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <nav className='p-4 bg-[#83B4FF]'>
      <div className="container">
        <div className="menu_row flex justify-between items-center">
          <div className="logo_col text-[35px] font-bold font-roboto text-black">Logo</div>
           <div className="menu">
            <ul className='flex gap-5 text-xl font-roboto font-semibold text-black'>
              <li className="hover:text-orange-800" ><Link to="/">Home</Link></li>
              <li className="hover:text-orange-800" ><Link to="/about">About</Link></li>
              <li className="hover:text-orange-800" ><Link to="/contact">Contact</Link></li>
              <li className="hover:text-orange-800" ><Link to="/help">Help</Link></li>
              <li className="hover:text-orange-800" ><Link to="/blog">Blog</Link></li>
            </ul>
           </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar