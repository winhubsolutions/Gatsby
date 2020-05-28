import React from "react"
import { Link } from "gatsby"
import FluidImage from "../components/FluidImage"
import { blogURI } from "../../globals"

const PostEntry = ({ post }) => {

  const { uri, title, featuredImage, excerpt,date } = post

  return (
 

<div className="blog_list_item blog_list_item_two">
                  
    
<div className="blog_content">
  <div className="post_date">
  
      
<h2><span>{date}</span></h2>
    
  </div>


  <FluidImage className="img-fluid" image={featuredImage} style={{ margin: 0 }}/>



  <div className="blog_content">
  <Link to={`${blogURI}/${uri}/`}>
      <h5 className="blog_title">{title}</h5>
    </Link>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    <div className="post-info-bottom">
    <Link to={`${blogURI}/${uri}/`} className="learn_btn_two">
        Read More <i className="arrow_right" />
      </Link>
      
    </div>

  </div>
</div>
</div>

    
  )
}

export default PostEntry