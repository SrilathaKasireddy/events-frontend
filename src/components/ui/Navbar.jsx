import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./ui.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <div className="navbar__item">
        <sub><AccountCircleIcon/></sub> 
         <p  className="navbar__text"> 
         {name}</p>
        </div>
        <div className="navbar__item">
          <span className="logout"  onClick={handleLogout}>Logout
         
          </span>
          
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
