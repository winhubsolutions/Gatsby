import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"


const GYM = () => (
  <Layout>
    <SEO title="Contact Us" />
   

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
        {" "}
        School Management System{" "}
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
<section>
<div className="container">
<p>winhub school suites to almost every school or educational institution from student admission to student leaving, from fees collection to exam results. It includes 20+ modules</p> 
<div className="elementor-text-editor elementor-clearfix">
  <div>&nbsp;</div>
  <ul>
    <li style={{ listStyleType: "none" }}>
      <ul>
        <li>
          Whole new examination module with&nbsp;
          <span
            style={{ fontWeight: "bold" }}
            title="different|totally different|completely different"
          >
            totally different
          </span>
          &nbsp;patterns of exams
        </li>
        <li>Different passing system</li>
        <li>Subject selection of exams</li>
        <li>Generate consolidated marksheet</li>
        <li>Print professional marksheet</li>
        <li>Print examination admit card</li>
        <li>Import exam marks</li>
        <li>Online examination</li>
        <li>Custom fields for student and staff</li>
        <li>Biometric device support for automated attendance</li>
        <li>Audit trail</li>
        <li>Student online admission form</li>
        <li>Period wise attendance</li>
        <li>Flexible timetable schedule repeated subjects in a same day</li>
        <li>Teachers Timetable</li>
        <li>Add students in multiple class-sections</li>
        <li>Auto generated admission number in pre define sequence</li>
        <li>Multiple fees collection at same time</li>
        <li>Fees Fine after due date</li>
        <li>Discount and Fine in %</li>
        <li>Staff import</li>
        <li>Library book import</li>
        <li>Active multiple languages at same time</li>
        <li>Apply leave for student</li>
        <li>3 new front site themes</li>
        <li>1 New admin panel theme</li>
        <li>And many new features are under development…</li>
      </ul>
    </li>
  </ul>
</div>

</div>
</section>

  
  </Layout>
)

export default GYM
