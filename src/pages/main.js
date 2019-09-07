import React, { Fragment, useRef, useEffect } from "react";
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
  useEffect(() => {
    console.log(FormRef);
  });
  const FormRef = useRef();
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
          console.log(index);
          return(
            <FormItem
            ref={FormRef}
            key={`Value${index}`}
            // className={styles.hide}
          />
          )
        }
        )}
        {/* <ValueOne />  */}
        {/* <ValueTwo /> */}
        {/* <ValueThree /> */}
        {/* <ValueFour /> */}
        {/* <ValueFive /> */}
        {/* <ValueSix /> */}
        {/* <ValueSeven /> */}
      </div>
      <div className={styles.footer}>
        <div className={styles.middle}>
          <Button type="primary" className={styles.btn1}>
            上一步
          </Button>
          <Button type="primary">下一步</Button>
        </div>
      </div>
      <div className={styles.bgcB}></div>
    </Fragment>
  );
}

export default Main;
