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

const componentMap = [
  ValueOne,
  ValueTwo,
  ValueThree,
  ValueFour,
  ValueFive,
  ValueSix,
  ValueSeven
];

function Main() {
  const [stepIndex, setStepIndex] = useState(0);
  const validateRef0 = useRef(null);
  const validateRef1 = useRef(null);
  const validateRef2 = useRef(null);
  const validateRef3 = useRef(null);
  const validateRef4 = useRef(null);
  const validateRef5 = useRef(null);
  const validateRef6 = useRef(null);
  const validateRef7 = useRef(null);
  const handleBack = () => {
    console.log("回退功能，目前还没开发");
  };

  useEffect(() => {
    // console.log(validateRef0.current);
  });
  const goNext = () => {
    if (stepIndex === 0) {
      let [error, value] = validateRef0.current.validate1();
      if (!error) {
        console.log(value);
        setStepIndex(c => c + 1);
      } else {
        console.log("您的信息填写不完整");
      }
    } else if (stepIndex === 1) {
      let [error, value] = validateRef1.current.validate2();
      if (!error) {
        console.log(value);
        setStepIndex(c => c + 1);
      }
    } else {
      setStepIndex(c => c + 1);
    }
  };
  const goPrev = () => {
    setStepIndex(c => c - 1);
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
          switch (index) {
            case 0:
              return (
                <FormItem
                  key={`Value${index}`}
                  class={stepIndex === index ? "" : "hide"}
                  wrappedComponentRef={validateRef0}
                />
              );
            case 1:
              return (
                <FormItem
                  key={`Value${index}`}
                  class={stepIndex === index ? "" : "hide"}
                  wrappedComponentRef={validateRef1}
                />
              );
            case 2:
              return (
                <FormItem
                  key={`Value${index}`}
                  class={stepIndex === index ? "" : "hide"}
                  wrappedComponentRef={validateRef2}
                />
              );
            case 3:
              return (
                <FormItem
                  key={`Value${index}`}
                  class={stepIndex === index ? "" : "hide"}
                  wrappedComponentRef={validateRef3}
                />
              );
            case 4:
              return (
                <FormItem
                  key={`Value${index}`}
                  class={stepIndex === index ? "" : "hide"}
                  wrappedComponentRef={validateRef4}
                />
              );
            case 5:
              return (
                <FormItem
                  key={`Value${index}`}
                  class={stepIndex === index ? "" : "hide"}
                  wrappedComponentRef={validateRef5}
                />
              );
            case 6:
              return (
                <FormItem
                  key={`Value${index}`}
                  class={stepIndex === index ? "" : "hide"}
                  wrappedComponentRef={validateRef6}
                />
              );
            case 7:
              return (
                <FormItem
                  key={`Value${index}`}
                  class={stepIndex === index ? "" : "hide"}
                  wrappedComponentRef={validateRef7}
                />
              );
          }
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
            <Button type="primary" className={styles.btn2}>
              开始估值
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Main;
