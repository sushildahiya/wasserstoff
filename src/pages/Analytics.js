// Analytics.js
import React, { useEffect, useState } from 'react';
import styles from '../styles/analytics.module.css';
import Target from '../components/Target';
import { CirclesWithBar } from 'react-loader-spinner';
import { UpArrow } from '../components/UpArrow';
import { Curves } from '../components/Curves';
import DownArrow from '../components/DownArrow';
import BubbleChart from '../components/BubbleChart';
import { analysisData } from '../data/analyatics-data';

function Analytics() {
  // State to manage data, time, loading status, and zoom
  const [data, setData] = useState({});
  const [time, setTime] = useState('3months');
  const [isLoading, setIsLoading] = useState(false);
  const [zoom, setZoom] = useState(0);

  // Fetch data based on the selected time period
  useEffect(() => {
    setIsLoading(true);
    setData(analysisData[time]);
    setIsLoading(false);
  }, [time]);

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#8484A0"
            barColor="#8484A0"
            ariaLabel="circles-with-bar-loading"
            visible={true}
          />
        </div>
      )}
      {!isLoading && (
        <div className={styles.analyticsContainer}>
          <div>
            <div className={styles.asideContainer}>
              <h1>Design faster</h1>
              <div className={styles.targetContainer}>
                <div className={styles.target}>
                  <Target />
                </div>
                <h3>Total earning</h3>
                <div className={styles.totalEarning}>
                  <h4>${data.total_earning}</h4>
                  <div>
                    <UpArrow color={'#00B929'} />
                    <p>{`${data.hike}%`}</p>
                  </div>
                </div>
                <p className={styles.compared}>Compare to ${data.last_year_earning} last year</p>
                <div className={styles.curveContent}>
                  <Curves data={data.presentation} head={'Presentation'} color={"#8676FF"} />
                  <Curves data={data.development} head={'Development'} color={'#FF708B'} />
                  <Curves data={data.research} head={'Research'} color={'#FFBA69'} />
                </div>
              </div>
              <div className={styles.totalEarningContainer}>
                <div>
                  <h4>Total earning</h4>
                  <div>
                    <h3>${data.total_earning}</h3>
                    <div>
                      <UpArrow color={'#38F261'} />
                      <p className={styles.percentage}>{data.earning_hike}%</p>
                    </div>
                  </div>
                  <p>Compared to ${data.last_year_earning} last year</p>
                </div>
                <hr />
                <div>
                  <h4>Sales</h4>
                  <div>
                    <h3>${data.sales}</h3>
                    <div>
                      <UpArrow color={'#38F261'} />
                      <p className={styles.percentage}>{data.sales_hike}%</p>
                    </div>
                  </div>
                  <p>Compared to ${data.last_year_earning} last year</p>
                </div>
              </div>
              <div className={styles.travelContainer}>
                <div>
                  <h6>Travel</h6>
                  <p>760</p>
                  <p>2,540</p>
                  <UpArrow color={'#00B929'} />
                </div>
                <div>
                  <h6>Presentation</h6>
                  <p>650</p>
                  <p>2,304</p>
                  <DownArrow />
                </div>
                <div>
                  <h6>Business</h6>
                  <p>612</p>
                  <p>2,140</p>
                  <UpArrow color={'#00B929'} />
                </div>
              </div>
            </div>
            <div className={styles.bubbleChart}>
              <BubbleChart time={time} setTime={setTime} data={data} zoom={zoom} setZoom={setZoom} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Analytics;
