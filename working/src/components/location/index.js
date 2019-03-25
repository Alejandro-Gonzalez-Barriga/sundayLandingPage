import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
                src="https://www.google.com/maps/place/Parroquia+de+San+Diego+de+Alcal%C3%A1/@19.663793,-101.525361,17z/data=!3m1!4b1!4m5!3m4!1s0x842da3531eea9f67:0xce4cc13a896a4b3b!8m2!3d19.663793!4d-101.5231723" 
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
