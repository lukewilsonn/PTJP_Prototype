import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Stack, Row, Img, Text, Button, List, Line } from "components";

const MapSearchPageMenuPage = () => {
  const navigate = useNavigate();

  function handleNavigate19() {
    navigate("/mapsearchpageone");
  }
  function handleNavigate20() {
    navigate("/login");
  }
  function handleNavigate21() {
    navigate("/savedsearchlistpage");
  }
  function handleNavigate22() {
    navigate("/account");
  }
  function handleNavigate23() {
    navigate("/blanksearchpage");
  }
  function handleNavigate24() {
    navigate("/homepage");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-end mx-[auto] w-[100%]">
        <Stack className="lg:h-[1400px] xl:h-[1601px] 2xl:h-[1801px] 3xl:h-[2161px] w-[100%]">
          <Column
            className="common-pointer absolute items-center top-[0] w-[100%]"
            onClick={handleNavigate19}
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
            <Row className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] w-[66%]">
              <Text className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                Start
              </Text>
              <Column className="bg-gray_100 items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[9px] xl:px-[11px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius10 w-[35%]">
                <Text className="font-semibold lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 tracking-ls1 w-[auto]">
                  Cape Town
                </Text>
              </Column>
              <Text className="font-medium lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                End
              </Text>
              <Button
                className="font-semibold lg:ml-[44px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[68px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-center tracking-ls1 w-[35%]"
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray100"
              >
                Woodstock
              </Button>
            </Row>
            <Row className="lg:mt-[45px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] w-[96%]">
              <Text className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                I would like to
              </Text>
              <Column className="bg-gray_100 items-center justify-end lg:ml-[26px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[40px] mt-[1px] p-[1px] rounded-radius10 w-[16%]">
                <Text className="font-normal lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                  -
                </Text>
              </Column>
              <Text className="font-medium lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                by
              </Text>
              <Button
                className="font-normal lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[64px] mt-[1px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-center tracking-ls1 w-[24%]"
                shape="RoundedBorder10"
                size="sm"
                variant="FillGray100"
              >
                -
              </Button>
              <Text className="font-medium lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                on
              </Text>
              <Text className="bg-gray_100 font-normal lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] mt-[1px] not-italic pb-[1px] 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] lg:px-[26px] xl:px-[29px] 2xl:px-[33px] 3xl:px-[40px] rounded-radius10 lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[334px]">
                -
              </Text>
            </Row>
            <Img
              src="images/img_rectangle14_1.png"
              className="xl:h-[6px] lg:h-[6px] 2xl:h-[7px] 3xl:h-[9px] 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] 2xl:mt-[94px] w-[100%]"
              alt="RectangleFourteen"
            />
            <List
              className="gap-[0] min-h-[auto] 2xl:mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] w-[99%]"
              orientation="vertical"
            >
              <Stack className="lg:h-[614px] xl:h-[702px] 2xl:h-[789px] 3xl:h-[947px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[100%]">
                <Stack className="absolute bg-bluegray_100 lg:h-[611px] xl:h-[699px] 2xl:h-[786px] 3xl:h-[943px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[10px] rounded-tr-[20px] top-[0] w-[100%]">
                  <Img
                    src="images/img_mapsiclemap.png"
                    className="absolute bottom-[0] lg:h-[466px] xl:h-[533px] 2xl:h-[599px] 3xl:h-[719px] inset-x-[0] mx-[auto] rounded-radius20 w-[98%]"
                    alt="MapsicleMap"
                  />
                </Stack>
                <Column className="absolute bg-bluegray_100 items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 top-[0] w-[100%]">
                  <Row className="bg-white_A700 items-center justify-end mt-[1px] p-[4px] rounded-radius10 w-[100%]">
                    <Column className="items-center w-[3%]">
                      <Stack className="bg-lime_900 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] px-[1px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                        <Img
                          src="images/img_train.png"
                          className="absolute lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] inset-x-[0] mx-[auto] top-[4%] w-[92%]"
                          alt="Train"
                        />
                      </Stack>
                      <Line className="bg-lime_900 3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] mt-[1px] w-[4px]" />
                    </Column>
                    <Column className="w-[46%]">
                      <Row className="w-[75%]">
                        <Text className="font-semibold mb-[2px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 tracking-ls1 w-[auto]">
                          15:00
                        </Text>
                        <Img
                          src="images/img_location.svg"
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] w-[4%]"
                          alt="location"
                        />
                        <Text className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] mt-[1px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
                          Get onto the train at Cape Town station{" "}
                        </Text>
                      </Row>
                      <Row className="ml-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[72%]">
                        <Text className="font-semibold mb-[4px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 tracking-ls1 w-[auto]">
                          15:03
                        </Text>
                        <Img
                          src="images/img_location.svg"
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[2px] w-[4%]"
                          alt="location One"
                        />
                        <Text className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] mt-[3px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
                          Get off the train at Cape Town station{" "}
                        </Text>
                      </Row>
                    </Column>
                    <Text className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                      ETA
                    </Text>
                    <Text className="font-medium 2xl:ml-[108px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                      17 Aug 15:03
                    </Text>
                    <Column className="bg-blue_900 items-center 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[99px] mr-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[14%]">
                      <Text className="font-semibold mt-[1px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 tracking-ls1 w-[auto]">
                        TRAIN LEAVING IN
                      </Text>
                      <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 tracking-ls1 w-[auto]">
                        9
                      </Text>
                      <Text className="font-semibold lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 tracking-ls1 w-[auto]">
                        MINUTES
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Stack>
              <Column className="bg-bluegray_100 items-center justify-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                <Row className="bg-white_A700 items-center justify-end mt-[1px] p-[4px] rounded-radius10 w-[100%]">
                  <Column className="items-center w-[3%]">
                    <Stack className="bg-lime_900 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] px-[1px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                      <Img
                        src="images/img_train.png"
                        className="absolute lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] inset-x-[0] mx-[auto] top-[4%] w-[92%]"
                        alt="Train One"
                      />
                    </Stack>
                    <Line className="bg-lime_900 3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] mt-[1px] w-[4px]" />
                  </Column>
                  <Column className="w-[46%]">
                    <Row className="w-[75%]">
                      <Text className="font-semibold mb-[2px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 tracking-ls1 w-[auto]">
                        15:00
                      </Text>
                      <Img
                        src="images/img_location.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] w-[4%]"
                        alt="location One"
                      />
                      <Text className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] mt-[1px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
                        Get onto the train at Cape Town station{" "}
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[72%]">
                      <Text className="font-semibold mb-[4px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 tracking-ls1 w-[auto]">
                        15:03
                      </Text>
                      <Img
                        src="images/img_location.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[3px] w-[4%]"
                        alt="location One One"
                      />
                      <Text className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] mt-[3px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
                        Get off the train at Cape Town station{" "}
                      </Text>
                    </Row>
                  </Column>
                  <Text className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                    ETA
                  </Text>
                  <Text className="font-medium 2xl:ml-[108px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                    17 Aug 15:03
                  </Text>
                  <Column className="bg-blue_900 items-center 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[99px] mr-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[14%]">
                    <Text className="font-semibold mt-[1px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 tracking-ls1 w-[auto]">
                      TRAIN LEAVING IN
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 tracking-ls1 w-[auto]">
                      9
                    </Text>
                    <Text className="font-semibold lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 tracking-ls1 w-[auto]">
                      MINUTES
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-bluegray_100 items-center justify-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
                <Row className="bg-white_A700 items-center justify-end mt-[1px] p-[4px] rounded-radius10 w-[100%]">
                  <Column className="items-center w-[3%]">
                    <Stack className="bg-lime_900 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] px-[1px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                      <Img
                        src="images/img_train.png"
                        className="absolute lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] inset-x-[0] mx-[auto] top-[4%] w-[92%]"
                        alt="Train Two"
                      />
                    </Stack>
                    <Line className="bg-lime_900 3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] mt-[1px] w-[4px]" />
                  </Column>
                  <Column className="w-[46%]">
                    <Row className="w-[75%]">
                      <Text className="font-semibold mb-[2px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 tracking-ls1 w-[auto]">
                        15:00
                      </Text>
                      <Img
                        src="images/img_location.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] w-[4%]"
                        alt="location Two"
                      />
                      <Text className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] mt-[1px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
                        Get onto the train at Cape Town station{" "}
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[72%]">
                      <Text className="font-semibold mb-[4px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 tracking-ls1 w-[auto]">
                        15:03
                      </Text>
                      <Img
                        src="images/img_location.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[4px] w-[4%]"
                        alt="location One Two"
                      />
                      <Text className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] mt-[3px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
                        Get off the train at Cape Town station{" "}
                      </Text>
                    </Row>
                  </Column>
                  <Text className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                    ETA
                  </Text>
                  <Text className="font-medium 2xl:ml-[108px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                    17 Aug 15:03
                  </Text>
                  <Column className="bg-blue_900 items-center 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[99px] mr-[4px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[14%]">
                    <Text className="font-semibold mt-[1px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 tracking-ls1 w-[auto]">
                      TRAIN LEAVING IN
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 tracking-ls1 w-[auto]">
                      9
                    </Text>
                    <Text className="font-semibold lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 tracking-ls1 w-[auto]">
                      MINUTES
                    </Text>
                  </Column>
                </Row>
              </Column>
            </List>
          </Column>
          <Button
            className="absolute font-semibold left-[1%] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-center top-[27%] tracking-ls1 w-[20%]"
            shape="RoundedBorder10"
            size="md"
            variant="FillBlue900"
          >
            SAVE RESULTS
          </Button>
          <Button
            className="absolute font-semibold right-[1%] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-center top-[21%] tracking-ls1 w-[20%]"
            shape="RoundedBorder10"
            size="md"
            variant="FillBlue900"
          >
            Search
          </Button>
          <Text className="absolute bottom-[2%] font-semibold inset-x-[0] mx-[auto] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 tracking-ls1 w-[max-content]">
            End of Results
          </Text>
          <aside className="absolute items-center left-[0] w-[27%]">
            <Column className="">
              <Column className="bg-white_A700 justify-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-bl-[32px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
                <Text
                  className="common-pointer font-normal ml-[3px] 3xl:mt-[106px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                  onClick={handleNavigate24}
                >
                  Home
                </Text>
                <Line className="bg-indigo_A700 h-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                <Text
                  className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                  onClick={handleNavigate23}
                >
                  Search
                </Text>
                <Line className="bg-indigo_A700 h-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                <Text
                  className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                  onClick={handleNavigate22}
                >
                  Account
                </Text>
                <Line className="bg-indigo_A700 h-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]" />
                <Text
                  className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                  onClick={handleNavigate21}
                >
                  Saved Search Results
                </Text>
                <Line className="bg-indigo_A700 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
                <Text
                  className="common-pointer font-normal ml-[3px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                  onClick={handleNavigate20}
                >
                  Sign out
                </Text>
                <Line className="bg-indigo_A700 h-[1px] lg:mb-[1093px] xl:mb-[1251px] 2xl:mb-[1407px] 3xl:mb-[1688px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
              </Column>
            </Column>
          </aside>
        </Stack>
        <footer className="bg-bluegray_100 lg:mt-[100px] xl:mt-[114px] 2xl:mt-[128px] 3xl:mt-[154px] rounded-radius20 w-[99%]">
          <Row className="bg-white_A700 justify-end mx-[auto] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] p-[4px] rounded-radius10 w-[97%]">
            <Column className="items-center w-[2%]">
              <Stack className="bg-lime_900 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] px-[1px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]">
                <Img
                  src="images/img_train.png"
                  className="absolute lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] inset-x-[0] mx-[auto] top-[4%] w-[92%]"
                  alt="Train Three"
                />
              </Stack>
              <Line className="bg-lime_900 3xl:h-[116px] lg:h-[75px] xl:h-[86px] 2xl:h-[97px] mt-[1px] w-[4px]" />
            </Column>
            <Column className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] mt-[2px] w-[59%]">
              <Row className="w-[65%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 tracking-ls1 w-[auto]">
                  15:00
                </Text>
                <Img
                  src="images/img_location.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] ml-[1px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[3%]"
                  alt="location Three"
                />
                <Text className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] mt-[4px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
                  Get onto the train at Cape Town station{" "}
                </Text>
              </Row>
              <Row className="items-end mt-[2px] w-[89%]">
                <Text className="font-semibold lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 tracking-ls1 w-[auto]">
                  15:03
                </Text>
                <Img
                  src="images/img_location.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] ml-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[2%]"
                  alt="location Four"
                />
                <Text className="font-medium mb-[1px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[32px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
                  Get off the train at Cape Town station{" "}
                </Text>
                <Text className="font-medium lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] xl:ml-[109px] 2xl:ml-[122px] 3xl:ml-[147px] lg:ml-[95px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
                  ETA
                </Text>
              </Row>
            </Column>
            <Text className="font-medium 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
              17 Aug 15:03
            </Text>
            <Column className="bg-blue_900 items-center justify-end 3xl:ml-[106px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] mr-[4px] mt-[4px] lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] rounded-radius10 w-[14%]">
              <Text className="font-semibold mt-[2px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 tracking-ls1 w-[auto]">
                TRAIN LEAVING IN
              </Text>
              <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-white_A700 tracking-ls1 w-[auto]">
                9
              </Text>
              <Text className="font-semibold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-white_A700 tracking-ls1 w-[auto]">
                MINUTES
              </Text>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default MapSearchPageMenuPage;
