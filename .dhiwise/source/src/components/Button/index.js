import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder20: "rounded-radius20",
};
const variants = {
  FillBlue900: "bg-blue_900 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-black_900",
  FillGray100: "bg-gray_100 text-black_900",
};
const sizes = {
  sm: "xl:p-[5px] lg:p-[5px] 2xl:p-[6px] 3xl:p-[8px]",
  md: "3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px]",
  lg: "lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px]",
  xl: "lg:p-[19px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10", "RoundedBorder20"]),
  variant: PropTypes.oneOf(["FillBlue900", "FillWhiteA700", "FillGray100"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
