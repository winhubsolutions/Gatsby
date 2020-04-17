import React from 'react'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          
          <script src="http://droitthemes.com/html/saasland/vendors/owl-carousel/assets/owl.carousel.min.css"></script> 
          
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/js/bootstrap-select.min.js "></script>      
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js "></script>  
   
        </body>
      </html>
    )
  }
}