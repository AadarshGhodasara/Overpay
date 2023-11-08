import React from "react";
import { images } from "../../config/images";
import GoogleIcon from "../../components/Icons/GoogleIcon/GoogleIcon";
import AppleIcon from "../../components/Icons/AppleIcon/AppleIcon";
import { Button, Carousel, Col, Input, Radio, Row } from "antd";
import "./SignIn.scss";
export default function SignIn() {
  return (
    <div className="SignInStyle">
      {/* <Row gutter={0}> */}
      <div className="SignInStyle_leftContent">
        <div className="logoWrapper">
          <img src={images?.logo?.default} alt="Logo" />
        </div>
        <div className="singInContentWrapper">
          <div className="singInContent">
            <h1>Sign in to Overpay</h1>
            <span className="subHeading">Send, spend and save smarter</span>
            {/* <div className="singInContent_header">
              </div> */}
            <div className="singInContent_signInButtons">
              <Button>
                <GoogleIcon />
                <span>Sign In with Google</span>
              </Button>
              <Button>
                <AppleIcon />
                <span>Sign In with Apple</span>
              </Button>
            </div>
            <div className="singInContent_dividerContainer">
              <span />
              <div className="dividerLine">Or with email</div>
              <span />
            </div>
            <Row gutter={[0, 16]} className="singInContent_signInForm">
              <Col span={24}>
                <Input placeholder="Username or email" />
              </Col>
              <Col span={24}>
                <Input placeholder="Password" />
              </Col>
              <Col span={12}>
                <Radio>Remember me</Radio>
              </Col>
              <Col span={12} className="forgotPassLabelWrapper">
                <span>Forgot Password?</span>
              </Col>
              <Col span={24} className="signInBtnWrapper">
                <Button>Sign In</Button>
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
          <Carousel>
            <div>
              {" "}
              <h1>Get better with money</h1>
              <p>
                Overpay help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus when you receive qualifying direct
                deposits
              </p>
            </div>
            <div>
              {" "}
              <h1>Get better with money</h1>
              <p>
                Overpay help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus when you receive qualifying direct
                deposits
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
