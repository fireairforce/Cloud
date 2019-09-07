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
  const handleBack = () => {
    console.log("test");
  };
  const [stepIndex, setStepIndex] = useState(0);
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
        {componentMap.map((FormItem, index) => (
          <FormItem
            key={`Value${index}`}
            className={styles.hideIt}
          />
        ))}
      </div>
      <div className={styles.footer}>
        {stepIndex === 0 ? (
          <div className={styles.first}>
            <Button type="primary">下一步</Button>
          </div>
        ) : stepIndex !== 6 ? (
          <div className={styles.middle}>
            <Button type="primary" className={styles.btn1}>
              上一步
            </Button>
            <Button type="primary" className={styles.btn2}>
              下一步
            </Button>
          </div>
        ) : (
          <div className={styles.end}>
            <Button type="primary" className={styles.btn1}>
              上一步
            </Button>
            <Button type="primary" className={styles.btn2}>
              开始估值
            </Button>
          </div>
        )}
      </div>
      <div className={styles.bgcB}></div>
    </Fragment>
  );
}

export default Main;
