import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Component.module.css";
const Navbar = () => {
  return (
    <section id ={Styles.navBlock}>
        <article className={Styles.navArticle}>
            <div className="logoBlock">
                <a href="#">SOUMYA STUDENT APP</a>

            </div>
            <div className="menuBlock">
                <ul>
                    <li>
                    <Link to="/">Student</Link>
                    </li>
                    <li>
                    <Link to="/create-student">Create Student</Link>

                    </li>
                    <li>
                    <Link to="/edit-student">Edit Student</Link>

                    </li>
                    <li>
                    <Link to="/update-student/:id">Update Student</Link>

                    </li>
                </ul>

            </div>
        </article>
    </section>
  )
}

export default Navbar