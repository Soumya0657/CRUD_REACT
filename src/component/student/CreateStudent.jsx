import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../library/Axios";

const CreateStudent = () =>{
   
//     let [name,setName] = useState(" ");
//     let [std_id,setState] = useState(" ");
//     let [email,setEmail]= useState(" ");
//     let [courses,setCourses]=useState(" ");

//     let handleSubmit = async(e)=>{
//         e.preventDefault();
//         let payload ={name,std_id,email,courses};
//         let data=await Axios.post(" ",payload);
//         console.log(data);

//     };
//   return(
//    <div>
//        <form onSubmit={handleSubmit}>
//         <div>
//             <input type="text" 
//             placeholder="enter a name" 
//             name="name" 
//             id =" " 
//             value ={name} 
//             onChange={(e)=>setName(e.target.value)} />
//         </div>
//         <div>
//             <input type="text" 
//             placeholder="enter a id" 
//             name="id" 
//             id =" " 
//             value ={std_id} 
//             onChange={(e)=>setState(e.target.value)} />
//         </div>
//         <div>
//             <input type="email" 
//             placeholder="enter a email" 
//             name="email" 
//             id =" " 
//             value ={email} 
//             onChange={(e)=>setEmail(e.target.value)} />
//         </div>
//         <div>
//             <select name="" id="" onChange={(e)=>setCourses(e.target.value)}>
//                 <option value="Java">Java</option>
//                 <option value="Javascript">Javascript</option>
//                 <option value="NodeJS">NodeJs</option>

//             </select>
//         </div>
//         <div>
//             <button>Create Student</button>
//         </div>

//        </form>
//    </div>
   

//   );


let navigate = useNavigate();
let [state,setState]=useState({
    name:"",
    std_id:"",
    email:"",
    courses:"",
    loading:false,

});
let {name,std_id,email,courses,loading}=state;
let handleChange=e=>{
    let{name,value}=e.target;
    setState({...state,[name]:value});
}
let handleSubmit=async e =>{
    e.preventDefault();
    try{
        setState({loading:true})
        let data ={name,std_id,email,courses};
        await Axios.post("api/students",data);
        navigate("/")
    }catch(error){
        console.log(error);
    }
    setState({loading:false,name:"",std_id:"",email:"",courses:""})

}
return(
    <section>
        <article>
            <form onSubmit={handleSubmit}>
                <fieldset>
                   <legend>Create Student</legend>
                   <div className="form-Group">
                     <table>
                         <td>
                             <label htmlFor="std_name">Student name:</label>
                         </td>
                         <td>
                             <input type="text"
                             id="std-name"
                             name="name"
                             value={name}
                             required
                             onChange={handleChange} />
                         </td>
                         <tr>
                         <td>
                             <label htmlFor="std_id">Student id:</label>
                         </td>
                         <td>
                             <input type="text"
                             id="std-id"
                             name="std_id"
                             value={std_id}
                             required
                             onChange={handleChange} />
                         </td>
                         </tr>
                         <tr>
                         <td>
                             <label htmlFor="std_email">Student email:</label>
                         </td>
                         <td>
                             <input type="text"
                             id="email"
                             name="email"
                             value={email}
                             required
                             onChange={handleChange} />
                         </td>
                         </tr>
                         <tr> <td>
                             <label htmlFor="courses">Student courses:</label>
                         </td>
                         <select value={courses} onChange={handleChange}  htmlFor="courses" name="courses">
                             <option value="Java">Java</option>
                             <option value="Javascript">Javascript</option>
                             <option value="Python">Python</option>
                         </select></tr>
                         <tr>
                             <td colspan={2}>
                                 <button>
                                     {loading === true?  "loading": "create student"}
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
export default CreateStudent;