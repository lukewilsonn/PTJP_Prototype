import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Text, Input, Row, Button } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate55() {
    navigate("/homepage");
  }
  function handleNavigate56() {
    navigate("/signup");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pb-[123px] xl:pb-[141px] 2xl:pb-[159px] 3xl:pb-[191px] w-[100%]">
        <Column className="bg-blue_900 items-center justify-end lg:p-[40px] xl:p-[46px] 2xl:p-[51px] 3xl:p-[62px] w-[100%]">
          <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-gray_100 tracking-ls1 w-[auto]">
            Public Transport Journey Planner{" "}
          </Text>
        </Column>
        <Column className="3xl:mt-[110px] lg:mt-[71px] xl:mt-[81px] 2xl:mt-[92px] w-[39%]">
          <Text className="font-inter font-normal lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
            Login
          </Text>
          <Text className="font-medium font-poppins lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Enter you email address
          </Text>
          <Input
            className="font-medium font-poppins p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[22px] 3xl:mt-[26px] lg:mt-[17px] w-[100%] xl:mt-[19px]"
            type="email"
            name="GroupThirtyFour"
            placeholder="sihchr001@myuct.ac.za"
            shape="RoundedBorder10"
            size="md"
            variant="FillGray1001_2"
          ></Input>
          <Text className="font-medium font-poppins lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Enter your password
          </Text>
          <Input
            className="font-medium font-poppins p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[7px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[6px]"
            type="password"
            name="password"
            placeholder="*************"
            shape="RoundedBorder10"
            size="sm"
            variant="FillGray1001_2"
          ></Input>
          <Row className="font-poppins justify-center lg:ml-[105px] xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] w-[51%]">
            <Text className="font-normal not-italic lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 tracking-ls1 w-[auto]">
              Don’t have an account?
            </Text>
            <Text
              className="common-pointer font-normal 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[1px] not-italic lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-indigo_A700 tracking-ls1 underline w-[auto]"
              onClick={handleNavigate56}
            >
              Sign up
            </Text>
          </Row>
          <Column className="bg-blue_900 font-poppins items-center xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[97px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] rounded-radius10 w-[56%]">
            <Button
              className="common-pointer font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 w-[100%]"
              onClick={handleNavigate55}
              shape="RoundedBorder10"
              size="lg"
              variant="FillBlue900"
            >
              Login
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LoginPage;
