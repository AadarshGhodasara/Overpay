import React from "react";
import { images } from "../../config/images";
import { Button, Carousel, Col, Input, Radio, Row } from "antd";
import GoogleIcon from "../../components/Icons/GoogleIcon/GoogleIcon";
import AppleIcon from "../../components/Icons/AppleIcon/AppleIcon";
import "./SignUp.scss";
import OverpayLogo from "../../components/Icons/OverpayLogo/OverpayLogo";
export default function SignUp() {
  return (
    <div className="SignUpStyle">
      <div className="SignUpStyle_leftContent">
        <div className="logoWrapper">
          <OverpayLogo />
        </div>
        <img src={images?.SignUpImgContent?.default} alt="" />
        <div className="carouselWrapper">
          <Carousel>
            <div>
              {" "}
              <h1>Speady, Easy and Fast</h1>
              <p>
                Overpay help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus when you receive qualifying direct
                deposits
              </p>
            </div>
            <div>
              {" "}
              <h1>Speady, Easy and Fast</h1>
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
      <div className="SignUpStyle_rightContent">
        <div className="singInContentWrapper">
          <div className="singInContent">
            <h1>Sign up for an account</h1>
            <span className="subHeading">Send, spend and save smarter</span>

            <div className="singInContent_signInButtons">
              <Button>
                <GoogleIcon />
                <span>Sign Up with Google</span>
              </Button>
              <Button>
                <AppleIcon />
                <span>Sign Up with Apple</span>
              </Button>
            </div>
            <div className="singInContent_dividerContainer">
              <span />
              <div className="dividerLine">Or with email</div>
              <span />
            </div>
            <Row gutter={[0, 16]} className="singInContent_signInForm">
              <Col span={24}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Input placeholder="First name" />
                  </Col>
                  <Col span={12}>
                    <Input placeholder="Last name" />
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Input placeholder="Email" />
              </Col>
              <Col span={24}>
                <Input placeholder="Password" />
              </Col>
              <Col span={24}>
                <p className="policyLabel">
                  By creating an account, you agreeing to our{" "}
                  <span>Privacy Policy</span>, and{" "}
                  <span>Electronics Communication Policy</span>.
                </p>
              </Col>
              {/* <Col span={12}>
                <Radio>Remember me</Radio>
              </Col>
              <Col span={12} className="forgotPassLabelWrapper">
                <span>Forgot Password?</span>
              </Col> */}
              <Col span={24} className="signInBtnWrapper">
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
