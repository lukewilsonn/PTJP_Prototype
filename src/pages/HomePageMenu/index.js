import React from "react";

import { useNavigate } from "react-router-dom";
import { Stack, Column, Row, Img, Text, Input, Button, Line } from "components";

const HomePageMenuPage = () => {
  const navigate = useNavigate();

  function handleNavigate33() {
    navigate("/homepage");
  }
  function handleNavigate34() {
    navigate("/login");
  }
  function handleNavigate35() {
    navigate("/savedsearchlistpage");
  }
  function handleNavigate36() {
    navigate("/account");
  }
  function handleNavigate37() {
    navigate("/blanksearchpage");
  }
  function handleNavigate38() {
    navigate("/homepage");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[1400px] xl:h-[1601px] 2xl:h-[1801px] 3xl:h-[2161px] mx-[auto] w-[100%]">
        <Column
          className="common-pointer absolute items-center top-[0] w-[100%]"
          onClick={handleNavigate33}
        >
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
          <Row className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[66%]">
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
          <Row className="lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] w-[96%]">
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
          <Button
            className="font-semibold lg:mt-[20px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-center tracking-ls1 w-[20%]"
            shape="RoundedBorder10"
            size="md"
            variant="FillBlue900"
          >
            Search
          </Button>
          <div className="bg-blue_900 xl:h-[6px] lg:h-[6px] 2xl:h-[7px] 3xl:h-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"></div>
          <Column className="bg-blue_900_28 items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[10px] rounded-tr-[20px] w-[99%]">
            <Button
              className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] 3xl:text-[55px] text-center tracking-ls1 uppercase w-[47%]"
              shape="RoundedBorder20"
              size="xl"
              variant="FillWhiteA700"
            >
              Western Cape{" "}
            </Button>
            <Img
              src="images/img_mapsiclemap.png"
              className="lg:h-[466px] xl:h-[533px] 2xl:h-[599px] 3xl:h-[719px] 3xl:mb-[10px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] rounded-radius20 w-[100%]"
              alt="MapsicleMap"
            />
          </Column>
          <Text className="font-semibold lg:mt-[26px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
            Popular Routes
          </Text>
          <Row className="bg-blue_900 items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius20 w-[99%]">
            <Text className="font-medium 3xl:ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 tracking-ls1 w-[auto]">
              Cape Town - Woodstock
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="3xl:h-[104px] lg:h-[68px] xl:h-[77px] 2xl:h-[87px] lg:mr-[31px] xl:mr-[35px] 2xl:mr-[40px] 3xl:mr-[48px] mt-[1px] w-[7%]"
              alt="arrowright"
            />
          </Row>
          <footer className="bg-blue_900 lg:mt-[20px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] rounded-radius20 w-[99%]">
            <Row className="justify-between lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mr-[59px] xl:mr-[68px] 2xl:mr-[76px] 3xl:mr-[92px] lg:my-[28px] xl:my-[32px] 2xl:my-[36px] 3xl:my-[43px] w-[92%]">
              <Text className="font-medium lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-gray_100 tracking-ls1 w-[auto]">
                Stellenbosch - Cape Town
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="3xl:h-[104px] lg:h-[68px] xl:h-[77px] 2xl:h-[87px] w-[7%]"
                alt="arrowright One"
              />
            </Row>
          </footer>
        </Column>
        <aside className="absolute items-center left-[0] w-[26%]">
          <Column className="">
            <Column className="bg-white_A700 justify-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-bl-[32px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
              <Text
                className="common-pointer font-normal ml-[3px] 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate38}
              >
                Home
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate37}
              >
                Search
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate36}
              >
                Account
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate35}
              >
                Saved Search Results
              </Text>
              <Line className="bg-indigo_A700 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate34}
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

export default HomePageMenuPage;
