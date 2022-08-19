import React from "react";

import { useNavigate } from "react-router-dom";
import { Stack, Row, Img, Text, Column, Button, Input, Line } from "components";

const AccountMenuPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/accountmenu");
  }
  function handleNavigate14() {
    navigate("/homepage");
  }
  function handleNavigate13() {
    navigate("/blanksearchpage");
  }
  function handleNavigate12() {
    navigate("/account");
  }
  function handleNavigate11() {
    navigate("/savedsearchlistpage");
  }
  function handleNavigate10() {
    navigate("/login");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-white_A700 font-poppins lg:h-[612px] xl:h-[700px] 2xl:h-[787px] 3xl:h-[945px] mx-[auto] w-[100%]"
        
      >
        <Row className="absolute bg-blue_900 items-end lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] top-[0] w-[100%]">
          <Img
            src="images/img_menu.svg"
            className="lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] mb-[1px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[5%]"
            alt="menu"
            onClick={handleNavigate9}
          />
          <Text className="font-normal lg:ml-[41px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[auto]">
            Public Transport Journey Planner{" "}
          </Text>
        </Row>
        <Column className="absolute bottom-[20%] inset-x-[0] mx-[auto] w-[39%]">
          <Row className="justify-between w-[100%]">
            <Text className="font-inter font-normal lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
              My Account
            </Text>
            <Button
              className="font-poppins font-semibold lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 w-[24%]"
              shape="RoundedBorder10"
              size="md"
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
              name="Group751"
              placeholder="Luke"
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray100"
            ></Input>
            <Input
              className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
              wrapClassName="w-[48%]"
              name="Group748"
              placeholder="Wilson"
              shape="RoundedBorder10"
              size="sm"
              variant="FillGray100"
            ></Input>
          </Row>
          <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-bluegray_900 tracking-ls1 w-[auto]">
            Email address
          </Text>
          <Input
            className="font-medium p-[0] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] placeholder:text-gray_400_b2 text-gray_400_b2 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mt-[21px] 3xl:mt-[25px] lg:mt-[16px] w-[100%] xl:mt-[18px]"
            type="email"
            name="Group750"
            placeholder="wlsluk003@myuct.ac.za"
            shape="RoundedBorder10"
            size="md"
            variant="FillGray100"
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
            variant="FillGray100"
          ></Input>
        </Column>
        <aside className="absolute items-center left-[0] w-[26%]">
          <Column className="">
            <Column className="bg-white_A700 justify-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-bl-[32px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
              <Text
                className="common-pointer font-normal ml-[3px] 3xl:mt-[119px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate14}
              >
                Home
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate13}
              >
                Search
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[97%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate12}
              >
                Account
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[97%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate11}
              >
                Saved Search Results
              </Text>
              <Line className="bg-indigo_A700 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[97%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate10}
              >
                Sign out
              </Text>
              <Line className="bg-indigo_A700 h-[1px] lg:mb-[315px] xl:mb-[360px] 2xl:mb-[405px] 3xl:mb-[486px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[97%]" />
            </Column>
          </Column>
        </aside>
      </Stack>
    </>
  );
};

export default AccountMenuPage;
