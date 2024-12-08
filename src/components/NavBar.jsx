import { Link } from "react-router-dom"
import nav from "../data/nav"

const NavBar = () => {
  return (
    
      <div className="flex py-4 justify-center w-full bg-white">
        {
          nav.map((navItem) => (
            <Link 
              key={navItem.id} 
              to={navItem.page}
              className="p-3 max-w-[800px] transition-all ease-in-out hover:text-[#404da0]"
            >{navItem.text}</Link>
          ))
        }
      </div>
    
  )
}

export default NavBar