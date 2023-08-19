import React from "react";
import SearchIcon from "../svgs/SearchIcon";
import RotatedSquare from "../svgs/RotatedSquare";
import UserIcon from "../svgs/UserIcon";
import CartIcon from "../svgs/BucketIcon";
import Row from "./COMMON/Row";
import HeaderButton from "./HEADER/HeaderButton";

const Header = () => {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <div className="w-full px-[10%] h-full">
        <Row className="items-center h-full justify-between">
          <SearchIcon />
          <Row className="items-center">
            <RotatedSquare />
            <h1 className="text-[28px] text-black mx-[10px]">
              FriendsCommerce
            </h1>
            <RotatedSquare />
          </Row>
          <Row>
            <HeaderButton title="Account" Icon={UserIcon} />
            <HeaderButton title="Cart" Icon={CartIcon} />
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default Header;
