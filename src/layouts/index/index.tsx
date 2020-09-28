/*
 * @LastEditors: 七大大
 * @Date: 2020-09-21
 * @LastEditTime: 2020-09-28
 * @FilePath: \myantdd:\products\react_antd_components\src\layouts\index\index.tsx
 * @Description: 网站页面
 */
import React, { useEffect, useState } from 'react';
import { GET_BING_API } from '../../services/api';
import AAA from '../../Home/index';
import TitleNav from './components/TitleNav';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import PageFive from './components/PageFive';
import FooterNav from './components/FooterNav';
import styles from './index.module.scss';

const DivIndex = () => {
  const [backImage, setBackImage] = useState([]);
  useEffect(() => {
    getBingApi();
  }, []);

  // 获取必应七图
  const getBingApi = async () => {
    const resData = await GET_BING_API();
    setBackImage(resData.data);
  };

  return (
    <div className={styles.div_index}>
      <TitleNav />
      <div className={styles.content}>
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
      </div>
      <FooterNav />
    </div>
  );
};
export default DivIndex;
