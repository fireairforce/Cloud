import React, { Fragment, useRef, useEffect, useState } from "react";
// 组件
import ValueOne from "./value/value1";
import ValueTwo from "./value/value2";
import ValueThree from "./value/value3";
import ValueFour from "./value/value4";
import ValueFive from "./value/value5";
import ValueSix from "./value/value6";
import ValueSeven from "./value/value7";
// 头部和底部
import back from "assets/color.png";
import { Button } from "antd";
import styles from "./value/style/main.module.less";
// 请求函数
import * as req from "api/api.js";
// mock数据测试
import { newValue } from "../../mock";
const componentMap = [
  ValueOne,
  ValueTwo,
  ValueThree,
  ValueFour,
  ValueFive,
  ValueSix,
  ValueSeven,
];

function getToken() {
  return window.location.search.split("=")[1];
}

const ValueContent = [];

function Main() {
  const [stepIndex, setStepIndex] = useState(0);
  const validateRef0 = useRef(null);
  const validateRef1 = useRef(null);
  const validateRef2 = useRef(null);
  const validateRef3 = useRef(null);
  const validateRef4 = useRef(null);
  const validateRef5 = useRef(null);
  const validateRef6 = useRef(null);
  useEffect(() => {
    if (getToken()) {
      localStorage.setItem("token", getToken());
    }
  }, []);
  const handleBack = () => {
    console.log("回退功能，目前还没开发");
  };

  const goNext = () => {
    if (stepIndex === 0) {
      let [error, value] = validateRef0.current.validate1();
      if (!error) {
        value.type = 1;
        ValueContent.push(value);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 1) {
      let [err, values] = validateRef1.current.validate2();
      if (!err) {
        values.type = 2;
        ValueContent.push(values);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 2) {
      let [err, values] = validateRef2.current.validate3();
      if (!err) {
        values.type = 3;
        ValueContent.push(values);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 3) {
      let [err, values] = validateRef3.current.validate4();
      if (!err) {
        values.type = 4;
        ValueContent.push(values);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 4) {
      let [err, values] = validateRef4.current.validate5();
      if (!err) {
        values.type = 5;
        ValueContent.push(values);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 5) {
      let [err, values] = validateRef5.current.validate6();
      if (!err) {
        values.type = 6;
        ValueContent.push(values);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 6) {
      let [err, values] = validateRef6.current.validate7();
      if (!err) {
        values.type = 7;
        ValueContent.push(values);
        setStepIndex((c) => c + 1);
      }
    }
  };
  const goPrev = () => {
    setStepIndex((c) => c - 1);
  };
  const startValue = () => {
    // req.startValue();
  };
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles.back} onClick={handleBack}>
          <img src={back} alt="back" />
        </div>
        <span className={styles.title}>填写信息</span>
      </div>
      <div className={styles.content}>
        <div className={styles.bgc}></div>
        {componentMap.map((FormItem, index) => {
          return (
            /* eslint-disable no-alert, no-eval */
            <FormItem
              key={`Value${index}`}
              class={stepIndex === index ? "" : "hide"}
              wrappedComponentRef={eval(`validateRef${index}`)}
              stepIndex={stepIndex === index ? index + 1 : ""}
            />
            /* eslint-disable no-alert, no-eval */
          );
        })}
      </div>
      <div className={styles.footer}>
        {stepIndex === 0 ? (
          <div className={styles.first}>
            <Button type="primary" onClick={goNext}>
              下一步
            </Button>
          </div>
        ) : stepIndex !== 6 ? (
          <div className={styles.middle}>
            <Button type="primary" className={styles.btn1} onClick={goPrev}>
              上一步
            </Button>
            <Button type="primary" className={styles.btn2} onClick={goNext}>
              下一步
            </Button>
          </div>
        ) : (
          <div className={styles.end}>
            <Button type="primary" className={styles.btn1} onClick={goPrev}>
              上一步
            </Button>
            <Button type="primary" className={styles.btn2} onClick={startValue}>
              开始估值
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Main;
