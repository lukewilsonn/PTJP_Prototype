import React from "react";

import { useNavigate } from "react-router-dom";
import { Stack, Column, Row, Img, Text, Input, Button, Line } from "components";

const SavedSearchListPageMenuPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/savedsearchlistpage");
  }
  function handleNavigate8() {
    navigate("/login");
  }
  function handleNavigate9() {
    navigate("/savedsearchlistpage");
  }
  function handleNavigate10() {
    navigate("/account");
  }
  function handleNavigate11() {
    navigate("/blanksearchpage");
  }
  function handleNavigate12() {
    navigate("/homepage");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[1400px] xl:h-[1601px] 2xl:h-[1801px] 3xl:h-[2161px] mx-[auto] w-[100%]">
        <Column
          className="common-pointer absolute items-center top-[0] w-[100%]"
          onClick={handleNavigate7}
        >
          <Row className="bg-blue_900 items-end justify-end lg:p-[19px] xl:p-[22px] 2xl:p-[24px] 3xl:p-[29px] w-[100%]">
            <Img
              src="images/img_menu.svg"
              className="lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] lg:mb-[17px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] w-[5%]"
              alt="menu"
            />
            <Text className="font-normal lg:mb-[17px] xl:mb-[19px] 2xl:mb-[22px] 3xl:mb-[26px] lg:ml-[41px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[auto]">
              Public Transport Journey Planner{" "}
            </Text>
            <Img
              src="images/img_testaccount.png"
              className="3xl:h-[104px] lg:h-[68px] xl:h-[77px] 2xl:h-[87px] lg:ml-[467px] xl:ml-[534px] 2xl:ml-[601px] 3xl:ml-[721px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] 3xl:w-[103px] lg:w-[67px] xl:w-[76px] 2xl:w-[86px]"
              alt="TestAccount"
            />
          </Row>
          <Text className="font-medium lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
            Select a date range:
          </Text>
          <Row className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[66%]">
            <Text className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
              Start
            </Text>
            <Input
              className="rounded-radius10 w-[100%]"
              wrapClassName="2xl:h-[46px] 2xl:ml-[36px] 3xl:h-[55px] 3xl:ml-[43px] flex lg:h-[36px] lg:ml-[28px] w-[35%] xl:h-[41px] xl:ml-[32px]"
              name="RectangleFive"
              placeholder=""
              shape="RoundedBorder10"
              variant="FillGray100"
            ></Input>
            <Text className="font-medium lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
              End
            </Text>
            <Input
              className="rounded-radius10 w-[100%]"
              wrapClassName="2xl:h-[46px] 2xl:ml-[56px] 3xl:h-[55px] 3xl:ml-[68px] flex lg:h-[36px] lg:ml-[44px] w-[35%] xl:h-[41px] xl:ml-[50px]"
              name="RectangleEight"
              placeholder=""
              shape="RoundedBorder10"
              variant="FillGray100"
            ></Input>
          </Row>
          <Button
            className="font-semibold lg:mt-[25px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-center tracking-ls1 w-[20%]"
            shape="RoundedBorder10"
            size="md"
            variant="FillBlue900"
          >
            Search
          </Button>
          <div className="bg-blue_900 xl:h-[6px] lg:h-[6px] 2xl:h-[7px] 3xl:h-[9px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] w-[100%]"></div>
          <Row className="bg-bluegray_100 items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius20 w-[99%]">
            <Text className="font-medium lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
              Wednesday the 17 August, 2022
            </Text>
            <Img
              src="images/img_arrowright_90X92.svg"
              className="3xl:h-[104px] lg:h-[68px] xl:h-[77px] 2xl:h-[87px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[79px] 3xl:mr-[95px] mt-[1px] w-[7%]"
              alt="arrowright"
            />
          </Row>
          <Row className="bg-bluegray_100 items-center justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius20 w-[99%]">
            <Text className="font-medium lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
              Tuesday the 16 August, 2022
            </Text>
            <Img
              src="images/img_arrowright_90X92.svg"
              className="3xl:h-[104px] lg:h-[68px] xl:h-[77px] 2xl:h-[87px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[79px] 3xl:mr-[95px] mt-[1px] w-[7%]"
              alt="arrowright One"
            />
          </Row>
          <footer className="bg-bluegray_100 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius20 w-[99%]">
            <Row className="items-center justify-between lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] xl:mr-[103px] 2xl:mr-[116px] 3xl:mr-[139px] lg:mr-[90px] lg:my-[28px] xl:my-[32px] 2xl:my-[36px] 3xl:my-[43px] w-[87%]">
              <Text className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                Monday the 15 August, 2022
              </Text>
              <Img
                src="images/img_arrowright_90X92.svg"
                className="3xl:h-[104px] lg:h-[68px] xl:h-[77px] 2xl:h-[87px] w-[7%]"
                alt="arrowright Two"
              />
            </Row>
          </footer>
        </Column>
        <aside className="absolute items-center left-[0] w-[27%]">
          <Column className="">
            <Column className="bg-white_A700 justify-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-bl-[32px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
              <Text
                className="common-pointer font-normal ml-[4px] 3xl:mt-[106px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate12}
              >
                Home
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[2px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
              <Text
                className="common-pointer font-normal ml-[4px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate11}
              >
                Search
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[2px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[99%]" />
              <Text
                className="common-pointer font-normal ml-[4px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate10}
              >
                Account
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[2px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]" />
              <Text
                className="common-pointer font-normal ml-[4px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate9}
              >
                Saved Search Results
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]" />
              <Text
                className="common-pointer font-normal ml-[4px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate8}
              >
                Sign out
              </Text>
              <Line className="bg-indigo_A700 h-[1px] lg:mb-[1093px] xl:mb-[1251px] 2xl:mb-[1407px] 3xl:mb-[1688px] ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[99%]" />
            </Column>
          </Column>
        </aside>
      </Stack>
    </>
  );
};

export default SavedSearchListPageMenuPage;
