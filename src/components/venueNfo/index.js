import React from "react";
import location_icon from "../../resources/images/icons/location.png";

import calendar_icon from "../../resources/images/icons/calendar.png";
import Zoom from "react-reveal/Zoom";
const VenueNfo = () => {
  return (
    <Zoom duration={500} delay={500}>
      <div className="bck_black">
        <div className="center_wrapper">
          <div className="vn_wrapper">
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{ background: `url(${calendar_icon})` }}
                  />
                  <div className="vn_title">Event date and time</div>
                  <div className="vn_desc"> 7 August 2017 @10:00pm</div>
                </div>
              </div>
            </div>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div
                    className="vn_icon"
                    style={{ background: `url(${location_icon})` }}
                  />
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc"> JLN,Delhi,New Delhi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default VenueNfo;
