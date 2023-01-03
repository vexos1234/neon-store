import { Link } from "react-router-dom"

export default function Navbar() {
return <nav className="nav">
      <Link to="/" className="site-title">Neon Store</Link>
      <ul>
          <li>
           <Link to="/pricing">Pricing</Link>
         </li>
         <li>
           <Link to="/about">about</Link>
          </li>
     </ul>
  </nav>

}