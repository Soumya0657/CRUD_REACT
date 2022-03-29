import React ,{useState, useEffect}from 'react';
import Axios from '../library/Axios';
import { Link } from 'react-router-dom';


const Student=()=>{
  let[std,setStd] = useState([]);
  let[loading,setLoading]=useState(false);
  let removeEmp =async _id =>{
    await Axios.delete(`api/students/${_id}`);
    window.location.assign("/");
  };
  useEffect(()=>{
    let fetchstud = async()=>{
    try{
      let body = await Axios.get("api/students");
      setStd(body.data.payload);
      setLoading(true);
    }catch(error){
      console.log(error);
    }
    setLoading(false);
  };
  fetchstud();
  return ()=>{
    setLoading(false);
  };
  
  
  

},[]);

  return(
   <section id ="Students">
      <article>
          <div>
           <table>
          <thead>
               <tr>
                  <td>Name</td>
                  <td>std_id</td>
                   <td>Email</td>
                    <td>Courses</td>
                     <td>Edit</td>
                     <td>Delete</td>
                 </tr>
          </thead>
             <tbody>
                  {loading ? true 
                  : std.map(std =>{
                       console.log(std);
                             return(
                                   <tr key ={std._id}>
                                         <td>{std.name}</td>
                                         <td>{std.std_id}</td>
                                         <td>{std.email}</td>
                                         <td>{std.courses}</td>
                                             <td>
                                              <Link to={`/update-student/${std._id}`}>
                                               <span>Edit</span>
                                                </Link>
  
                                             </td>
                                             <td 
                                             onClick={()=> removeEmp(std._id)}
                                             style={{color:"red"}}
                                                   >Delete
                                           </td>
                                    </tr>
                                );
                              })           
                          }
                   </tbody>
                  </table>
                  </div>
                 </article>
                 </section>
     );
};

export default Student;