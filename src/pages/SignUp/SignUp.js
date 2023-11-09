import React from "react";
import { images } from "../../config/images";
import { Button, Col, Row } from "antd";
import GoogleIcon from "../../components/Icons/GoogleIcon/GoogleIcon";
import AppleIcon from "../../components/Icons/AppleIcon/AppleIcon";
import "./SignUp.scss";
import OverpayLogo from "../../components/Icons/OverpayLogo/OverpayLogo";
import TextInput from "../../components/Global/TextInput/TextInput";
import CarouselSlider from "../../components/Global/CarouselSlider/CarouselSlider";
import GlobalButton from "../../components/Global/GlobalButton/GlobalButton";
export default function SignUp() {
  const CarouselContent = () => (
    <>
      <h1>Speady, Easy and Fast</h1>
      <p>
        Overpay help you set saving goals, earn cash back offers, Go to
        disclaimer for more details and get paychecks up to two days early. Get
        a $20 bonus when you receive qualifying direct deposits
      </p>
    </>
  );

  const CarouselItem = [
    { content: <CarouselContent /> },
    { content: <CarouselContent /> },
  ];
  return (
    <div className="SignUpStyle">
      <div className="SignUpStyle_leftContent">
        <div className="logoWrapper">
          <OverpayLogo />
        </div>
        <img src={images?.SignUpImgContent?.default} alt="" />
        <div className="carouselWrapper">
          <CarouselSlider items={CarouselItem} />
        </div>
      </div>
      <div className="SignUpStyle_rightContent">
        <div className="singUpContentWrapper">
          <div className="singUpContent">
            <h1>Sign up for an account</h1>
            <span className="subHeading">Send, spend and save smarter</span>

            <div className="singUpContent_signUpButtons">
              <GlobalButton
                icon={<GoogleIcon />}
                title={"Sign Up with Google"}
              />
              <GlobalButton icon={<AppleIcon />} title={"Sign Up with Apple"} />
            </div>
            <div className="singUpContent_dividerContainer">
              <span />
              <div className="dividerLine">Or with email</div>
              <span />
            </div>
            <Row gutter={[0, 16]} className="singUpContent_signInForm">
              <Col span={24}>
                <Row gutter={16}>
                  <Col span={12}>
                    <TextInput placeholder="First name" />
                  </Col>
                  <Col span={12}>
                    <TextInput placeholder="Last name" />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <TextInput placeholder="Email" />
              </Col>
              <Col span={24}>
                <TextInput
                  placeholder="Password"
                  isPasswordInput
                  autoComplete="new-password"
                />
              </Col>
              <Col span={24}>
                <p className="policyLabel">
                  By creating an account, you agreeing to our{" "}
                  <span>Privacy Policy</span>, and{" "}
                  <span>Electronics Communication Policy</span>.
                </p>
              </Col>
              <Col span={24} className="signUpBtnWrapper">
                <Button>Sign Up</Button>
              </Col>
              <Col span={24} className="signUpLabelWrapper">
                <span>
                  Don't have an account? <b>Sign In</b>
                </span>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer">
          <span className="leftLabel">Privacy Policy</span>
          <span className="rightLabel">Copyright 2022</span>
        </div>
      </div>
    </div>
  );
}
