import React, { Fragment, useRef, useEffect, useState } from "react";
// 组件
import ValueOne from "components/value/value1";
import ValueTwo from "components/value/value2";
import ValueThree from "components/value/value3";
import ValueFour from "components/value/value4";
import ValueFive from "components/value/value5";
import ValueSix from "components/value/value6";
import ValueSeven from "components/value/value7";
// 头部和底部
import back from "assets/color.png";
import { Button } from "antd";
import styles from "components/value/style/main.module.less";
// 请求函数
import * as req from "api/api.js";
// mock数据测试
import { newValue } from "api/mock";
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

function Main() {
  const [stepIndex, setStepIndex] = useState(0);
  const [valueContent, setValueContent] = useState([]);
  const [selectData, setSelectData] = useState([]);
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
  useEffect(() => {
    req.getAllcategories().then((res) => {
      if (res.code === 0) {
        if (res.data) {
          setSelectData(res.data);
        }
      } else {
        throw new Error("接口出了大问题");
      }
    });
  }, []);
  const handleBack = () => {
    console.log("回退功能，目前还没开发");
  };

  const goNext = () => {
    if (stepIndex === 0) {
      let [error, value] = validateRef0.current.validate1();
      if (!error) {
        setValueContent([...valueContent, value]);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 1) {
      let [err, values] = validateRef1.current.validate2();
      if (!err) {
        setValueContent([...valueContent, values]);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 2) {
      let [err, values] = validateRef2.current.validate3();
      if (!err) {
        setValueContent([...valueContent, values]);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 3) {
      let [err, values] = validateRef3.current.validate4();
      if (!err) {
        setValueContent([...valueContent, values]);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 4) {
      let [err, values] = validateRef4.current.validate5();
      if (!err) {
        setValueContent([...valueContent, values]);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 5) {
      let [err, values] = validateRef5.current.validate6();
      if (!err) {
        setValueContent([...valueContent, values]);
        setStepIndex((c) => c + 1);
      }
    } else if (stepIndex === 6) {
      let [err, values] = validateRef6.current.validate7();
      if (!err) {
        setValueContent([...valueContent, values]);
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

  const judgeHeight = () => {
    if (stepIndex === 1) {
      return {
        height: "100%",
      };
    } else {
      return {
        height: "auto",
      };
    }
  };
  return (
    <div className={styles.bigBack} style={judgeHeight()}>
      <div className={styles.header}>
        <div className={styles.back} onClick={judgeHeight}>
          <img src={back} alt="back" />
        </div>
        <span className={styles.title}>填写信息</span>
      </div>
      <div className={styles.bgc} />
      <div className={styles.content}>
        {/*<ValueOne/>*/}
        {/*<ValueTwo/>*/}
        {/*<ValueThree/>*/}
        {/*<ValueFour/>*/}
        {/*<ValueFive/>*/}
        {/*<ValueSix/>*/}
        {/*<ValueSeven/>*/}
        {componentMap.map((FormItem, index) => {
          return (
            /* eslint-disable no-alert, no-eval */
            <FormItem
              key={`Value${index}`}
              classStep={stepIndex === index ? "" : "hide"}
              wrappedComponentRef={eval(`validateRef${index}`)}
              stepIndex={stepIndex === index ? index + 1 : ""}
              selectdata={selectData}
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
    </div>
  );
}

export default Main;
