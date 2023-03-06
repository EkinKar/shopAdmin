import { Visibility } from "@mui/icons-material";
import React from "react";
import "./smallwidget.css";
const SmallWidget = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Marc Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Marc Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Marc Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Marc Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Marc Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SmallWidget;
