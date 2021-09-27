import React, { useState, useContext } from 'react';
import { Card, Form, Divider, message } from 'antd';
import {
  CommonText,
  SmallerText,
  CustomButton,
  CustomTextArea,
} from '../UIElements';
import { RateBox, RateValue, FeedbackForm, RateWrapper } from './style';
import VerifyOTPModal from '../VerifyOTPModal';
import { DataContext } from '../../context/dataProvider';

const Feedback = ({ data }) => {

  const { brandDataState } = useContext(DataContext);

  const {brandData: { company_name ='' ,other: {other_details: {primary_color ='', secondary_font_color =''} ={}} ={}} ={}} = brandDataState;


  const feedbackScale = {
    1: '#EB5950',
    2: '#EB5950',
    3: '#EB5950',
    4: '#EB5950',
    5: '#EB5950',
    6: '#FFC93D',
    7: '#FFC93D',
    8: '#FFC93D',
    9: '#65BF73',
    10: '#65BF73',
  };
  const feedbackScaleBG = {
    1: '#f3e7ea',
    2: '#f3e7ea',
    3: '#f3e7ea',
    4: '#f3e7ea',
    5: '#f3e7ea',
    6: '#f6edd5',
    7: '#f6edd5',
    8: '#f6edd5',
    9: '#e6f1ee',
    10: '#e6f1ee',
  };
  const [form] = Form.useForm();
  const [rating, setRating] = useState(null);
  const [type, setType] = useState(null);
  const [companyFeedback, setCompanyFeedback] = useState(null);
  const [courierFeedback, setCourierFeedback] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [companySubmitLoading, setCompanySubmitLoading] = useState(false);
  const [courierSubmitLoading, setCourierSubmitLoading] = useState(false);

  const ratingClicked = (value) => {
    setRating(value);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    if (errorFields.length) {
      message.error('Only 150 characters are allowed');
    }
  };

  const handleCompanySubmit = async () => {
    if (!rating || !companyFeedback) {
      return message.warning('Please fill both the fields');
    }
    setCompanySubmitLoading(true);
    await sendOTP('company');
    setCompanySubmitLoading(false);
  };

  const finalCompanySubmit = async (otp) => {
    const postData = {
      tracking_id: data.tracking_id,
      req_type: 'verify_otp_post_data',
      otp,
      feedback_dict: {
        customer_rating: rating,
        feedback: companyFeedback,
      },
    };
    setModalLoading(true);
    const response = await fetch(
      'https://pickrr.com/api/pickrr-tracking-feedback-sms-push-verify-api/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      }
    );
    const json = await response.json();
    if (!json.err) {
      message.success('Feedback submitted successfully!');
      setIsModalVisible(false);
      setRating(null);
      setCompanyFeedback(null);
      setType(null);
    } else {
      message.error(json.err);
    }
    setModalLoading(false);
  };

  const handleCourierSubmit = async () => {
    if (!courierFeedback) {
      return message.warning('Please enter feedback');
    }
    setCourierSubmitLoading(true);
    await sendOTP('courier');
    setCourierSubmitLoading(false);
  };

  const finalCourierSubmit = async (otp) => {
    const postData = {
      tracking_id: data.tracking_id,
      req_type: 'verify_otp_post_data',
      otp,
      feedback_dict: {
        is_courier: 'true',
        feedback: courierFeedback,
      },
    };
    setModalLoading(true);
    const response = await fetch(
      'https://pickrr.com/api/pickrr-tracking-feedback-sms-push-verify-api/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      }
    );
    const json = await response.json();
    if (!json.err) {
      message.success('Feedback submitted successfully!');
      setIsModalVisible(false);
      setCourierFeedback(null);
      setType(null);
    } else {
      message.error(json.err);
    }
    setModalLoading(false);
  };

  const sendOTP = async (type) => {
    const postData = {
      tracking_id: data.tracking_id,
      req_type: 'push_otp',
    };
    const response = await fetch(
      'https://pickrr.com/api/pickrr-tracking-feedback-sms-push-verify-api/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      }
    );
    const json = await response.json();
    if (!json.err) {
      message.success('OTP sent successfully!');
      setPhoneNumber(json.last_digits_number);
      setType(type);
      setIsModalVisible(true);
    } else {
      message.error(json.err);
    }
  };

  return (
    <>
      <Card style={{ backgroundColor: '#fcfcfc' }} bordered={false}>
        {
          data && data?.show_details && (
          <>
            <CommonText>Seller Feedback</CommonText>
            {data && (
              <SmallerText style={{ marginTop: '3px' }} size={2}>
                Based on your recent interaction with{' '}
                {company_name}, how likely are you to recommend{' '}
                {company_name} to friends & family?
              </SmallerText>
            )}

            <RateWrapper>
              {Object.entries(feedbackScaleBG).map(([key, value]) => {
                return (
                  <RateBox
                    style={{ backgroundColor: value }}
                    key={key}
                    onClick={() => ratingClicked(key)}
                    active={key === rating ? true : false}
                  >
                    <RateValue style={{ color: feedbackScale[key] }}>
                      {key}
                    </RateValue>
                  </RateBox>
                );
              })}
            </RateWrapper>
            <FeedbackForm
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ marginTop: '24px' }}
              form={form}
            >
              <Form.Item
                label="Additional Comments"
                rules={[
                  {
                    max: 150,
                    message: 'Max 150 characters allowed.',
                  },
                ]}
                name="feedback"
              >
                <CustomTextArea
                  rows={4}
                  placeholder="Please submit your feedback (150 characters, max)"
                  onChange={(e) => setCompanyFeedback(e.target.value)}
                  value={companyFeedback}
                />
              </Form.Item>
              <Form.Item>
                <CustomButton
                  htmlType="submit"
                  style={{ backgroundColor: `${primary_color ? primary_color : '#000'}`, color: `${secondary_font_color ? secondary_font_color : '#fff'}` }}
                  onClick={handleCompanySubmit}
                  loading={companySubmitLoading}
                  buttonColor={primary_color}
                >
                  Submit{' '}
                  {/* <img
                    src="https://res.cloudinary.com/drlluzgke/image/upload/v1610719779/Pickrr/right-arrow_rwab8s.svg"
                    alt="arrow"
                    style={{ marginLeft: '10px' }}
                  /> */}
                </CustomButton>
              </Form.Item>
            </FeedbackForm>
            <Divider />
          </>
          )
        }

        <CommonText>Courier Feedback</CommonText>
        <FeedbackForm
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: '12px' }}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label={`Do you have any feedback for ${data?.courier_used} (courier)?`}
            rules={[
              {
                max: 150,
                message: 'Max 150 characters allowed.',
              },
            ]}
            name="courier_feedback"
          >
            <CustomTextArea
              rows={4}
              placeholder="Please submit your feedback (150 characters, max)"
              onChange={(e) => setCourierFeedback(e.target.value)}
              value={courierFeedback}
            />
          </Form.Item>
          <Form.Item>
            <CustomButton
              htmlType="submit"
              style={{ backgroundColor: `${primary_color ? primary_color : '#000'}`, color: `${secondary_font_color ? secondary_font_color : '#fff'}` }}
              loading={courierSubmitLoading}
              onClick={handleCourierSubmit}
              buttonColor={primary_color}
            >
              Submit{' '}
              {/* <img
                src="https://res.cloudinary.com/drlluzgke/image/upload/v1610719779/Pickrr/right-arrow_rwab8s.svg"
                alt="arrow"
                style={{ marginLeft: '10px' }}
              /> */}
            </CustomButton>
          </Form.Item>
        </FeedbackForm>
      </Card>
      <VerifyOTPModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        finalCompanySubmit={finalCompanySubmit}
        finalCourierSubmit={finalCourierSubmit}
        type={type}
        sendOTP={sendOTP}
        phoneNumber={phoneNumber}
        modalLoading={modalLoading}
      />
    </>
  );
};
export default Feedback;
