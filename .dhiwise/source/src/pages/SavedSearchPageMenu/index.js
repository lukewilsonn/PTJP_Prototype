import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  Input,
  Button,
  Line,
  List,
} from "components";

const SavedSearchPageMenuPage = () => {
  const navigate = useNavigate();

  function handleNavigate42() {
    navigate("/savedsearchpage");
  }
  function handleNavigate43() {
    navigate("/login");
  }
  function handleNavigate44() {
    navigate("/savedsearchlistpage");
  }
  function handleNavigate45() {
    navigate("/account");
  }
  function handleNavigate46() {
    navigate("/blanksearchpage");
  }
  function handleNavigate47() {
    navigate("/homepage");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[1400px] xl:h-[1601px] 2xl:h-[1801px] 3xl:h-[2161px] mx-[auto] w-[100%]">
        <Column
          className="common-pointer absolute items-center top-[0] w-[100%]"
          onClick={handleNavigate42}
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
          <Text className="font-medium lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
            Select a date range:
          </Text>
          <Row className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[66%]">
            <Text className="font-medium lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 tracking-ls1 w-[auto]">
              Start
            </Text>
            <Input
              className="rounded-radius10 w-[100%]"
              wrapClassName="2xl:h-[46px] 2xl:ml-[36px] 3xl:h-[55px] 3xl:ml-[43px] flex lg:h-[36px] lg:ml-[28px] w-[35%] xl:h-[41px] xl:ml-[32px]"
              name="RectangleTwentyTwo"
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
              name="RectangleTwentyThree"
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
          <div className="bg-blue_900 xl:h-[6px] lg:h-[6px] 2xl:h-[7px] 3xl:h-[9px] lg:mt-[32px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]"></div>
          <Column className="bg-bluegray_100 items-center justify-end lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[99%]">
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
                    src="images/img_vector.svg"
                    className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[1px]"
                    alt="Vector"
                  />
                  <Column className="ml-[1px] mt-[1px] w-[9%]">
                    <Img
                      src="images/img_vector.svg"
                      className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] xl:ml-[5px] lg:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[1px]"
                      alt="Vector One"
                    />
                    <Stack className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] w-[36%]">
                      <Stack className="absolute lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] left-[0] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[16px]">
                        <Img
                          src="images/img_vector_black_900.svg"
                          className="absolute lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] inset-[0] justify-center m-[auto] lg:w-[3px] 2xl:w-[4px] xl:w-[4px] 3xl:w-[5px]"
                          alt="Vector Two"
                        />
                        <Img
                          src="images/img_refresh.svg"
                          className="absolute lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[16px]"
                          alt="refresh"
                        />
                      </Stack>
                      <Img
                        src="images/img_vector.svg"
                        className="absolute bottom-[43%] 2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] right-[0] w-[1px]"
                        alt="Vector Three"
                      />
                    </Stack>
                    <Img
                      src="images/img_vector.svg"
                      className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] xl:ml-[5px] lg:ml-[5px] 2xl:ml-[6px] 3xl:ml-[8px] w-[1px]"
                      alt="Vector Four"
                    />
                  </Column>
                  <Text className="font-medium ml-[1px] mt-[1px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
                    Get onto the train at Cape Town station{" "}
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] w-[72%]">
                  <Text className="font-semibold mb-[4px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_900 tracking-ls1 w-[auto]">
                    15:03
                  </Text>
                  <Text className="font-medium lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] mt-[3px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-lime_901 tracking-ls1 w-[auto]">
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
          <List
            className="gap-[0] min-h-[auto] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[99%]"
            orientation="vertical"
          >
            <Stack className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] lg:my-[4px] 2xl:my-[5px] xl:my-[5px] 3xl:my-[6px] w-[100%]">
              <Img
                src="images/img_location.svg"
                className="absolute lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] left-[10%] top-[32%] w-[1%]"
                alt="location"
              />
              <Column className="absolute bg-bluegray_100 items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]">
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
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] w-[4%]"
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
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[2px] w-[4%]"
                        alt="location Two"
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
            <footer className="bg-bluegray_100 lg:my-[4px] 2xl:my-[5px] xl:my-[5px] 3xl:my-[6px] rounded-radius20 w-[100%]">
              <Row className="bg-white_A700 items-center justify-end p-[4px] rounded-radius10 w-[97%]">
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
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] w-[4%]"
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
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[2px] w-[4%]"
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
            </footer>
          </List>
          <Text className="font-semibold lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 tracking-ls1 w-[auto]">
            End of Results
          </Text>
        </Column>
        <aside className="absolute items-center left-[0] w-[26%]">
          <Column className="">
            <Column className="bg-white_A700 justify-center 3xl:p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-bl-[32px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
              <Text
                className="common-pointer font-normal ml-[3px] 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate47}
              >
                Home
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate46}
              >
                Search
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate45}
              >
                Account
              </Text>
              <Line className="bg-indigo_A700 h-[1px] ml-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate44}
              >
                Saved Search Results
              </Text>
              <Line className="bg-indigo_A700 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[98%]" />
              <Text
                className="common-pointer font-normal ml-[3px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[29px] text-black_900 tracking-ls1 w-[auto]"
                onClick={handleNavigate43}
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

export default SavedSearchPageMenuPage;
