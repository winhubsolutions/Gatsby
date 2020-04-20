import React from "react"
import { Link } from "gatsby"


const Breadcrumb = () => (
   
   <section className="breadcrumb_area_two">
    <ul className="list-unstyled bubble">
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
    <img
      className="breadcrumb_shap"
      src=""
      alt="Gym / Fitness Club Management"
    />
    <div className="container">
      <div className="breadcrumb_content_two text-center">
        <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">
          {" "}School Management System {" "}
        </h1>
        <ol className="breadcrumb">
          <li>
            <Link href="/"> Home </Link>
          </li>
          <li className="active">School Management System </li>
        </ol>
      </div>
    </div>
  </section>
)
export default Breadcrumb