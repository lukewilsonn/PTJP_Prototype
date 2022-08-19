import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Input } from "components";

const AccountPage = () => {
  const navigate = useNavigate();

  function handleNavigate25() {
    navigate("/accountmenu");
  }
  function handleNavigate26() {
    navigate("/editaccount");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pb-[120px] xl:pb-[138px] 2xl:pb-[155px] 3xl:pb-[186px] w-[100%]">
        <Row className="bg-blue_900 items-end lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] w-[100%]">
          <Img
            src="images/img_menu.svg"
            className="common-pointer lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] mb-[1px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[5%]"
            onClick={handleNavigate25}
            alt="menu"
          />
          <Text className="font-normal lg:ml-[41px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[auto]">
            Public Transport Journey Planner{" "}
          </Text>
        </Row>
        <Column className="lg:mt-[58px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] w-[39%]">
          <Row className="justify-between w-[100%]">
            <Text className="font-inter font-normal lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
              My Account
            </Text>
            <Button
              className="common-pointer font-poppins font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 w-[24%]"
              onClick={handleNavigate26}
              shape="RoundedBorder10"
              size="lg"
              variant="FillBlue900"
            >
              Edit Profile
            </Button>
          </Row>
          <Text className="font-medium lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Personal Details
          </Text>
          <Row className="items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] w-[100%]">
            <Input
              className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
              wrapClassName="w-[48%]"
              name="GroupEightySix"
              placeholder="Luke"
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray1001_2"
            ></Input>
            <Input
              className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
              wrapClassName="w-[48%]"
              name="GroupEightyThree"
              placeholder="Wilson"
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray1001_2"
            ></Input>
          </Row>
          <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Email address
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[21px] 3xl:mt-[25px] lg:mt-[16px] w-[100%] xl:mt-[18px]"
            type="email"
            name="GroupEightyFive"
            placeholder="wlsluk003@myuct.ac.za"
            shape="RoundedBorder10"
            size="md"
            variant="FillGray1001_2"
          ></Input>
          <Text className="font-medium lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Password
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] w-[100%] xl:mt-[9px]"
            type="password"
            name="password One"
            placeholder="*************"
            shape="RoundedBorder10"
            size="sm"
            variant="FillGray1001_2"
          ></Input>
        </Column>
      </Column>
    </>
  );
};

export default AccountPage;
