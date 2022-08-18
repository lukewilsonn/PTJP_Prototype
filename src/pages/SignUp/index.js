import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Text, Row, Input, Button } from "components";

const SignUpPage = () => {
  const navigate = useNavigate();

  function handleNavigate65() {
    navigate("/homepage");
  }
  function handleNavigate66() {
    navigate("/login");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pb-[52px] xl:pb-[59px] 2xl:pb-[67px] 3xl:pb-[80px] w-[100%]">
        <Column className="bg-blue_900 items-center justify-end lg:p-[40px] xl:p-[46px] 2xl:p-[51px] 3xl:p-[62px] w-[100%]">
          <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-gray_100 tracking-ls1 w-[auto]">
            Public Transport Journey Planner{" "}
          </Text>
        </Column>
        <Column className="lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] w-[39%]">
          <Text className="font-inter font-normal lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
            Sign Up
          </Text>
          <Text className="font-medium font-poppins lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Enter you full name
          </Text>
          <Row className="font-poppins items-center justify-between lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
            <Input
              className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
              wrapClassName="w-[48%]"
              type="text"
              name="GroupTwentyThree"
              placeholder="Name"
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray1001_2"
            ></Input>
            <Input
              className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
              wrapClassName="w-[48%]"
              type="text"
              name="GroupTwenty"
              placeholder="Surname"
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray1001_2"
            ></Input>
          </Row>
          <Text className="font-medium font-poppins lg:mt-[20px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Enter you email address
          </Text>
          <Input
            className="font-medium font-poppins p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[22px] 3xl:mt-[26px] lg:mt-[17px] w-[100%] xl:mt-[19px]"
            type="email"
            name="GroupTwentyTwo"
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
          <Row className="font-poppins items-center justify-center lg:ml-[112px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[172px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[47%]">
            <Text className="font-normal not-italic lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 tracking-ls1 w-[auto]">
              Already have a profile?{" "}
            </Text>
            <Text
              className="common-pointer font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] mt-[1px] not-italic lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-indigo_A700 tracking-ls1 underline w-[auto]"
              onClick={handleNavigate66}
            >
              Log in
            </Text>
          </Row>
          <Column className="bg-blue_900 font-poppins items-center xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[97px] lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] rounded-radius10 w-[56%]">
            <Button
              className="common-pointer font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 w-[100%]"
              onClick={handleNavigate65}
              shape="RoundedBorder10"
              size="lg"
              variant="FillBlue900"
            >
              Create Account
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignUpPage;
