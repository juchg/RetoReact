import React from 'react';
import './Home.css'

class Home extends React.Component{
    
    render() {
        return (
          <div id="home">
            <div className="full-width">
              <h1>Chevez</h1>
            </div>
            <div>
              <img src="https://img.gruporeforma.com/imagenes/960x640/5/971/4970991.jpg" alt=""/>
            </div>
            <div className="two-four">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi tempore fugit, asperiores inventore eveniet suscipit doloremque, enim illum non consequatur eaque ea, voluptate ipsum earum quisquam mollitia exercitationem totam quasi!
            </div>
          </div>
        )
    }
}

export default Home;