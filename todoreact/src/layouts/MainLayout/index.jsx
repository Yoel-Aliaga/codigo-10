import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
const history = useNavigate();

// verifica si existe un usuario
const validateIsLogged =()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (!user){history("/Login"); }
}


useEffect(() => {
    validateIsLogged();
  }, []);

  return (
    <div>
      <h1>Main Layout</h1>
      <Outlet />
    </div>
)

};

export default MainLayout;