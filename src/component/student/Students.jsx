import React,{useState,useEffect} from 'react';
import Axios from '../library/Axios';


const Students = () => {
  let [std,setStd]=useState([]);
  let [loading,setLoading]=useState(false);
  useEffect(()=>{
    let fetchStud = async() =>{
      try{
        let body= await Axios.get("api/students");
        setStd(body.data.payload);
        setLoading(true);
      }catch(error){
        console.log(error)
      }
      setLoading(false);
    };
    fetchStud();

  },[]);
  return (
    <section id ="Students">
      <article>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Std_id</th>
                <th>Email</th>
                <th>Courses</th>
              </tr>
            </thead>
            <tbody>
              {loading?true
              :std.map(std=>{
                console.log(std)
                return(
                  <tr key ={std.std_id}>
                    <td>{std.name}</td>
                    <td>{std.std_id}</td>
                    <td>{std.email}</td>
                    <td>{std.courses}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}

export default Students