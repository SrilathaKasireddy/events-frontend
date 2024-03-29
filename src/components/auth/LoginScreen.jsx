import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import useForm from "../../hooks/useForm";
import { startLogin } from "../../actions/auth";
import Alert from "../ui/Alert";
import { removeError, setError } from "../../actions/ui";


const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) dispatch(startLogin(email, password));
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.trim().length === 0) {
      dispatch(setError("Password is required"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div style={{textAlign: "center"}}>
      
    <section className="card">
      <div className="card__row card__row--right">
        <div className="card__body">
          <h1 className="card__title">Login</h1>
          <form className="form" onSubmit={handleLogin}>
            {msgError && <Alert type="error" description={msgError} />}
            <div className="form__field">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                className="form__input"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form__field">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                className="form__input"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-primary" 
            type="submit">
              Login
            </button>
            

            
         
          </form>
        </div>
      </div>
      <div className="card__body">
        
          <h2 className="card__subtitle" style={{width:200}}>Don't have an account?</h2>
          
          <Link className="" 
          to={"/auth/register"}>
            Register
          </Link>

          
          


          
        </div>
        
    </section>
    <h4 style={{marginTop:"10%"}}>Made With ❤️ By Srilatha Kasireddy
      </h4>
    
    
    </div>
  );
};
export default LoginScreen;
