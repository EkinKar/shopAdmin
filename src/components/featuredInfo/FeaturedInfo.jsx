import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./featuredInfo.css";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$7,516</span>
          <span className="featuredMoneyRate">
            -151.5 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,516</span>
          <span className="featuredMoneyRate">
            +111.5 <ArrowUpward className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,516</span>
          <span className="featuredMoneyRate">
            +111.5 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
