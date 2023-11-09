import React from "react";
import { images } from "../../config/images";
import GoogleIcon from "../../components/Icons/GoogleIcon/GoogleIcon";
import AppleIcon from "../../components/Icons/AppleIcon/AppleIcon";
import { Col, Radio, Row } from "antd";
import "./SignIn.scss";
import TextInput from "../../components/Global/TextInput/TextInput";
import CarouselSlider from "../../components/Global/CarouselSlider/CarouselSlider";
import GlobalButton from "../../components/Global/GlobalButton/GlobalButton";
export default function SignIn() {
  const CarouselContent = () => (
    <>
      <h1>Get better with money</h1>
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
    <div className="SignInStyle">
      <div className="SignInStyle_leftContent">
        <div className="logoWrapper">
          <img src={images?.logo?.default} alt="Logo" />
        </div>
        <div className="singInContentWrapper">
          <div className="singInContent">
            <h1>Sign in to Overpay</h1>
            <span className="subHeading">Send, spend and save smarter</span>
            <div className="singInContent_signInButtons">
              <GlobalButton
                icon={<GoogleIcon />}
                title={"Sign In with Google"}
              />
              <GlobalButton icon={<AppleIcon />} title={"Sign In with Apple"} />
            </div>
            <div className="singInContent_dividerContainer">
              <span />
              <div className="dividerLine">Or with email</div>
              <span />
            </div>
            <Row gutter={[0, 16]} className="singInContent_signInForm">
              <Col span={24}>
                <TextInput placeholder="Username or email" />
              </Col>
              <Col span={24}>
                <TextInput
                  placeholder="Password"
                  isPasswordInput
                  autoComplete="new-password"
                />
              </Col>
              <Col span={12}>
                <Radio>Remember me</Radio>
              </Col>
              <Col span={12} className="forgotPassLabelWrapper">
                <span>Forgot Password?</span>
              </Col>
              <Col span={24} className="signInBtnWrapper">
                <GlobalButton title={"Sign In"} />
              </Col>
              <Col span={24} className="signUpLabelWrapper">
                <span>
                  Don't have an account? <b>Sign Up</b>
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
      <div className="SignInStyle_rightContent">
        <img src={images?.signInImg?.default} alt="" />
        <div className="carouselWrapper">
          <CarouselSlider items={CarouselItem} />
        </div>
      </div>
    </div>
  );
}
