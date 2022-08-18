import React from "react";

import { useNavigate } from "react-router-dom";
import { Stack, Column, Row, Img, Text, Input, Button, Line } from "components";

const BlankSearchPageMenuPage = () => {
  const navigate = useNavigate();

  function handleNavigate27() {
    navigate("/blanksearchpage");
  }
  function handleNavigate28() {
    navigate("/login");
  }
  function handleNavigate29() {
    navigate("/savedsearchlistpage");
  }
  function handleNavigate30() {
    navigate("/account");
  }
  function handleNavigate31() {
    navigate("/blanksearchpage");
  }
  function handleNavigate32() {
    navigate("/homepage");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-white_A700 font-poppins lg:h-[1400px] xl:h-[1601px] 2xl:h-[1801px] 3xl:h-[2161px] mx-[auto] w-[100%]"
        onClick={handleNavigate27}
      >
        <Column className="absolute top-[0] w-[100%]">
          <Row className="bg-blue_900 items-center lg:p-[35px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] w-[100%]">
            <Img
              src="images/img_menu.svg"
              className="lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[5%]"
              alt="menu"
            />
            <Text className="font-normal lg:ml-[41px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[auto]">
              Public Transport Journey Planner{" "}
            </Text>
          </Row>
          <Row className="items-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[66%]">
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
          <Row className="lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] w-[96%]">
            <Text className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
              I would like to
            </Text>
            <Input
              className="rounded-radius10 w-[100%]"
              wrapClassName="2xl:h-[42px] 2xl:ml-[33px] 3xl:h-[50px] 3xl:ml-[40px] flex lg:h-[33px] lg:ml-[26px] mt-[1px] w-[16%] xl:h-[37px] xl:ml-[29px]"
              name="RectangleNine"
              placeholder=""
              shape="RoundedBorder10"
              variant="FillGray100"
            ></Input>
            <Text className="font-medium lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
              by
            </Text>
            <Input
              className="rounded-radius10 w-[100%]"
              wrapClassName="2xl:h-[46px] 2xl:ml-[53px] 3xl:h-[55px] 3xl:ml-[64px] flex lg:h-[36px] lg:ml-[41px] mt-[1px] w-[24%] xl:h-[41px] xl:ml-[47px]"
              name="RectangleTen"
              placeholder=""
              shape="RoundedBorder10"
              variant="FillGray100"
            ></Input>
            <Text className="font-medium lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
              on
            </Text>
            <Input
              className="rounded-radius10 w-[100%]"
              wrapClassName="2xl:h-[46px] 2xl:ml-[44px] 3xl:h-[55px] 3xl:ml-[53px] flex lg:h-[36px] lg:ml-[34px] mt-[1px] w-[23%] xl:h-[41px] xl:ml-[39px]"
              name="RectangleEleven"
              placeholder=""
              shape="RoundedBorder10"
              variant="FillGray100"
            ></Input>
          </Row>
          <div className="bg-blue_900 xl:h-[6px] lg:h-[6px] 2xl:h-[7px] 3xl:h-[9px] 3xl:mt-[114px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[95px] w-[100%]"></div>
        </Column>
        <Button
          className="absolute font-semibold right-[1%] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-center top-[21%] tracking-ls1 w-[20%]"
          shape="RoundedBorder10"
          size="md"
          variant="FillBlue900"
        >
          Search
        </Button>
        <Text className="absolute font-medium inset-x-[0] mx-[auto] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 top-[35%] tracking-ls1 w-[max-content]">
          No Journey Selected!
        </Text>
        <aside className="absolute items-center left-[0] w-[26%]">
          <Column className="">
            <Column className="bg-white_A700 justify-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-bl-[32px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
              <Text
                className="common-pointer font-normal ml-[3px] 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate32}
              >
                Home
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate31}
              >
                Search
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate30}
              >
                Account
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate29}
              >
                Saved Search Results
              </Text>
              <Line className="bg-indigo_A700 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate28}
              >
                Sign out
              </Text>
              <Line className="bg-indigo_A700 h-[1px] lg:mb-[1099px] xl:mb-[1257px] 2xl:mb-[1415px] 3xl:mb-[1697px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[98%]" />
            </Column>
          </Column>
        </aside>
      </Stack>
    </>
  );
};

export default BlankSearchPageMenuPage;
