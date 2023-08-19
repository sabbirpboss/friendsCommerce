import React from "react";
import Row from "../COMMON/Row";

const HeaderButton = ({title, Icon}) => {
    
  return (
    <Row className="ml-[5px]">
    <Icon />
      <p className="text-[#1e2832] text-[18px] hover:text-slate-400 ml-[2px] hover:cursor-pointer">
        {title}
      </p>
    </Row>
  );
};

export default HeaderButton;
