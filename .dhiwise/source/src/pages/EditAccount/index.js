import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Input, Button } from "components";

const EditAccountPage = () => {
  const navigate = useNavigate();

  function handleNavigate52() {
    navigate("/account");
  }
  function handleNavigate53() {
    navigate("/account");
  }
  function handleNavigate54() {
    navigate("/editaccountmenu");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pb-[116px] xl:pb-[133px] 2xl:pb-[149px] 3xl:pb-[179px] w-[100%]">
        <Row className="bg-blue_900 items-end lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] w-[100%]">
          <Img
            src="images/img_menu.svg"
            className="common-pointer lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] mb-[4px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[5%]"
            onClick={handleNavigate54}
            alt="menu"
          />
          <Text className="font-normal mb-[3px] lg:ml-[41px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[auto]">
            Public Transport Journey Planner{" "}
          </Text>
        </Row>
        <Column className="lg:mt-[60px] xl:mt-[69px] 2xl:mt-[77px] 3xl:mt-[93px] w-[39%]">
          <Text className="font-inter font-normal lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
            My Accout
          </Text>
          <Text className="font-medium font-poppins lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[64px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Personal Details
          </Text>
          <Row className="font-poppins items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] w-[100%]">
            <Input
              className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
              wrapClassName="w-[48%]"
              name="GroupFortyOne"
              placeholder="Luke"
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray1001_2"
            ></Input>
            <Input
              className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
              wrapClassName="w-[48%]"
              name="GroupThirtySeven"
              placeholder="Wilson"
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray1001_2"
            ></Input>
          </Row>
          <Text className="font-medium font-poppins lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Email address
          </Text>
          <Input
            className="font-medium font-poppins p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[21px] 3xl:mt-[25px] lg:mt-[16px] w-[100%] xl:mt-[18px]"
            type="email"
            name="GroupForty"
            placeholder="wlsluk003@myuct.ac.za"
            shape="RoundedBorder10"
            size="md"
            variant="FillGray1001_2"
          ></Input>
          <Text className="font-medium font-poppins lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            New password
          </Text>
          <Input
            className="font-medium font-poppins p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[7px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[6px]"
            type="password"
            name="password"
            placeholder="*************"
            shape="RoundedBorder10"
            size="sm"
            variant="FillGray1001_2"
          ></Input>
          <Text className="font-medium font-poppins lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Re-enter Password
          </Text>
          <Input
            className="font-medium font-poppins p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%] xl:mt-[10px]"
            type="password"
            name="password One"
            placeholder="*************"
            shape="RoundedBorder10"
            size="sm"
            variant="FillGray1001_2"
          ></Input>
          <Row className="font-poppins items-center justify-between lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[100%]">
            <Button
              className="common-pointer font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 w-[24%]"
              onClick={handleNavigate53}
              shape="RoundedBorder10"
              size="lg"
              variant="FillBlue900"
            >
              Back
            </Button>
            <Button
              className="common-pointer font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 w-[24%]"
              onClick={handleNavigate52}
              shape="RoundedBorder10"
              size="lg"
              variant="FillBlue900"
            >
              Save
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default EditAccountPage;
