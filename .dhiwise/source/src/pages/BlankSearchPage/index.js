import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Input, Button } from "components";

const BlankSearchPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate50() {
    navigate("/resultspage");
  }
  function handleNavigate51() {
    navigate("/blanksearchpagemenu");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] xl:pb-[1006px] 2xl:pb-[1131px] 3xl:pb-[1357px] lg:pb-[879px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Row className="bg-blue_900 items-center lg:p-[35px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] w-[100%]">
            <Img
              src="images/img_menu.svg"
              className="common-pointer lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[5%]"
              onClick={handleNavigate51}
              alt="menu"
            />
            <Text className="font-normal lg:ml-[41px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 w-[auto]">
              Public Transport Journey Planner{" "}
            </Text>
          </Row>
        </Column>
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
        <Column className="items-center lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] w-[100%]">
          <Row className="w-[99%]">
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
        </Column>
        <Column className="items-end lg:mt-[20px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] w-[100%]">
          <Button
            className="common-pointer font-semibold lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-center tracking-ls1 w-[20%]"
            onClick={handleNavigate50}
            shape="RoundedBorder10"
            size="md"
            variant="FillBlue900"
          >
            Search
          </Button>
        </Column>
        <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
          <div className="bg-blue_900 xl:h-[6px] lg:h-[6px] 2xl:h-[7px] 3xl:h-[9px] w-[100%]"></div>
          <Text className="font-medium lg:mt-[138px] xl:mt-[158px] 2xl:mt-[178px] 3xl:mt-[214px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
            No Journey Selected!
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default BlankSearchPagePage;
