import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGoA9zD2MdE_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713715345446?e=1754524800&v=beta&t=NAeVb6DqELxIRucxVnKx_dxaFeqo67W_UnpCls9lyEg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/JacekwPL" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jacekwojc/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1 style = {{fontSize: "70px"}}>Jacek Wojciechowski</h1>
          <p>.Net SQL developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/JacekwPL" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jacekwojc/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;