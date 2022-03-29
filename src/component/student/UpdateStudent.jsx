import React,{useEffect,useState} from "react";
import { useNavigate,useParams } from "react-router-dom";
import Axios from "../library/Axios";
const UpdateStudent=()=>{
    let{_id}=useParams();
    let[name,setName]=useState();
    let[std_id,setStdId]=useState();
    let[email,setEmail]=useState();
    let[courses,setCourses]=useState();
    let navigate = useNavigate();

    useEffect(()=>{
        const getData=async()=>{
            let payload =await Axios.get(`api/students/${_id}`);
            let finalData=await payload.data.payload;
            let {name,std_id,email}=finalData;
            setName(name);
            setStdId(std_id);
            setEmail(email);
            console.log(finalData);
        };
        getData();
    },[_id]);
    let editData=async e=>{
        e.preventDefault();
        let payload={name,std_id,email,courses};
        await Axios.put(`/api/students/${_id}`,payload);
        navigate("/");
    };
    return(
       <section>
           <article id="create-std">
               <form action="" onSubmit={editData}>
                   <fieldset>
                       <legend>
                           Update Student
                       </legend>
                       <div className="form-Group">
                           <table>
                               <tr>
                                   <td>
                                       <label htmlFor="name">Name:</label>
                                   </td>
                                   <td>
                                       <input type="text"
                                       id="name"
                                       value={name}
                                       onChange={e=>setName(e.target.value)}
                                       required />
                                   </td>
                               </tr>
                               <tr>
                                   <td>
                                       <label htmlFor="std_id">Student Id :&nbsp;</label>
                                   </td>
                                   <td>
                                       <input type="text"
                                       id="std_id"
                                       value={std_id}
                                       onChange={e=>setStdId(e.target.value)}
                                       required />
                                   </td>
                               </tr>
                               <tr>
                                   <td>
                                       <label htmlFor="email">Email:</label>
                                   </td>
                                   <td>
                                       {" "}
                                       <input type="text"
                                       id="email"
                                       value={email}
                                       onChange={e=>setEmail(e.target.value)}
                                       required />
                                   </td>
                               </tr>
                               <tr>
                                   <td>
                                       <label htmlFor="courses">Courses:</label>
                                   </td>
                               
                               <td>
                                   {" "}
                                   <select name="courses" id="courses" onChange={e =>setCourses(e.target.value)}
                                   required>
                                        <option value="">Java</option>
                                        <option value="">Javascript</option>
                                        <option value="">Python</option>
                                   </select>
                               </td>
                               </tr>
                               <tr>
                             <td colspan={2}>
                                 <button>
                                    UPDATE
                                 </button>

                             </td>
                         </tr>
                        
                           </table>
                       </div>
                   </fieldset>
               </form>
           </article>
       </section>

    )
}
export default UpdateStudent;