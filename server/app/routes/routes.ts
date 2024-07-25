import { Router } from "express";
import  {registerUser}  from "../controllers/contextAutenticate/registerUser";
import { loginUser } from "../controllers/contextAutenticate/loginUser";
import { deleteUser } from "../controllers/contextAutenticate/deleteUser"
import { getUsersAll} from "../controllers/contextAutenticate/getUserAll"
import { getUserById } from "../controllers/contextAutenticate/getUserById";
import { logoutUser } from "../controllers/contextAutenticate/logoutUser";
import { updateUser } from "../controllers/contextAutenticate/updateUser";
import auth  from "../middleware/auth";
import  user  from "../middleware/user"
import  me  from "../controllers/contextAutenticate/me"

const routes = Router();

//Rotas de Autenticação 
routes.post("/auth/register",registerUser);
routes.post("/auth/login",loginUser);
routes.get("/auth/me", me)
routes.get("/auth/logout", logoutUser);

routes.put("/users/profile/:id_user",user, auth, updateUser);
// routes.put("/users/profile/",user, auth, updateUser);
routes.get("/users/profile/:id_user", user, auth, getUserById );
routes.get("/users", user, auth, getUsersAll);
routes.delete("/users/:id_user",user, auth, deleteUser);

routes.get('/',me,(_,res)=> res.send('Hello World'))
export default routes;