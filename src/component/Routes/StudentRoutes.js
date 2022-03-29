import { useRoutes } from "react-router-dom";
import CreateStudent from "../student/CreateStudent";
import EditStudent from "../student/EditStudent";
import DeleteStudent from "../student/DeleteStudent";
import UpdateStudent from "../student/UpdateStudent";
import Students from "../student/Students";
import Student from "../student/Student";





const StudentRoutes = () => {
 let StudentPaths=useRoutes([
  {
      path:"/",
      element:<Students/>,


  },
  {
      path : "/create-student",
      element:<CreateStudent/>,

  },
  {
    path : "/edit-student",
    element:<EditStudent/>,

},
{
    path : "/update-student/:_id",
    element:<UpdateStudent/>,

},
{
    path : "/student/:id",
    element:<CreateStudent/>,

},
  {
      path:"*",

  },




 ]);
 
    return StudentPaths;
  
};

export default StudentRoutes