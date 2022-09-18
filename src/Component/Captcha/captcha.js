import React, { useState, useCallback } from "react";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";
import { useDispatch, useSelector } from "react-redux";
import { setCaptcha } from './slices';

const Captcha = () => {
  const dispatch = useDispatch();
  const captcha = useSelector((state) => state.captcha);
  const refreshCaptcha = useSelector((state) => state.refreshCaptcha);


  const onVerify = useCallback((captcha) => {
    dispatch(setCaptcha(captcha));
    console.log(captcha);
  });


  return (
    <GoogleReCaptcha
       onVerify={onVerify}
       refreshReCaptcha={refreshCaptcha}
     />
  );
};

export default Captcha;
