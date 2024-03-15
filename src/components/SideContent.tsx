import React from 'react'

const SideContent = (props: {page: "home" | "design" | "av" | "contact"}) => {

    let content = null;

    if (props.page==="home") {
        content = (
            <div id="home-side-content">
                <img src="src/assets/profile-picture.jpeg" alt="James LeVoir Profile Picture" />
            </div>
        )
    }

  return content
}

export default SideContent