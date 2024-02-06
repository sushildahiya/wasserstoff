// Overview.js
import React, { useState } from "react";
import styles from "../styles/overview.module.css";
import { salesData } from "../data/overview";
import Chart from "../components/Chart";
import HexaMap from "../components/HexaMap";
import BubbleChartModal from "../components/BubbleChartModal";
import Modal from '../components/Modal';

function Overview() {
  // State to manage the modal's open/close status
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.overviewContainer}>
        <div>
          {/* Sales Overview Section */}
          <div className={styles.salesOverview}>
            <h2>WSTF-FRONT-END-HAKATHON</h2>
            
            {/* User Count Section */}
            <div className={styles.userCount}>
              <div>
                <h5>All users</h5>
                <div className={styles.detailContainter}>
                  <p>DETAIL</p>
                  <svg
                    width="5.66"
                    height="8.49"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.17202 4.99984L0.343018 2.17184L1.75702 0.756836L6.00002 4.99984L1.75702 9.24284L0.343018 7.82784L3.17202 4.99984Z"
                      fill="#383874"
                    />
                  </svg>
                </div>
              </div>
              <h1>{salesData.all_users}</h1>
            </div>
            
            {/* Sales Details Section */}
            <div className={styles.salesDetails}>
              <div className={styles.totalEarningContainer}>
                <div className={styles.totalEarning}>
                  <span className="material-symbols-outlined">whatshot</span>
                </div>
                <div>
                  <p>Total earning</p>
                  <h6>{salesData.total_earning}</h6>
                </div>
              </div>
              <div>
                <div className={styles.sales}>
                  <span className="material-symbols-outlined">
                    real_estate_agent
                  </span>
                </div>
                <div>
                  <p>Sales</p>
                  <h6>{salesData.sales}</h6>
                </div>
              </div>
              <div>
                <div className={styles.purchase}>
                  <span className="material-symbols-outlined">equalizer</span>
                </div>
                <div>
                  <p>Purchase</p>
                  <h6>{salesData.purchases}</h6>
                </div>
              </div>
            </div>
            
            {/* Users Data Section */}
            <div className={styles.usersData}>
              <div className={styles.activeUsers}>
                <div>
                  <svg>
                    <circle
                      r="33"
                      cx="40"
                      cy="40"
                      className={styles.activeBar}
                    ></circle>
                    <circle
                      r="33"
                      cx="40"
                      cy="40"
                      className={styles.activeProgress}
                    ></circle>
                  </svg>
                  <h5 className={styles.percent}>
                    {salesData.active_user_per}
                  </h5>
                </div>
                <div>
                  <h6>{salesData.active_users}</h6>
                  <p>Active users</p>
                </div>
              </div>
              <div className={styles.newUsers}>
                <div>
                  <svg>
                    <circle
                      r="33"
                      cx="40"
                      cy="40"
                      className={styles.newUsersBar}
                    ></circle>
                    <circle
                      r="33"
                      cx="40"
                      cy="40"
                      className={styles.newUsersProgress}
                    ></circle>
                  </svg>
                  <h5 className={styles.percent}>{salesData.new_user_per}</h5>
                </div>
                <div>
                  <h6>{salesData.new_users}</h6>
                  <p>New users</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Overview Map Section */}
          <div className={styles.overview_map}>
            <HexaMap />
            
            {/* Chicago Container */}
            <div className={styles.chiagoContainer}>
              <div className={styles.city}>
                <div>
                  <span class="material-symbols-outlined">account_balance</span>{" "}
                </div>
                <div>
                  <p>{salesData.chicago.name}</p>
                  <h6>{salesData.chicago.count}</h6>
                </div>
                <div className={styles.downArrow}></div>
              </div>
            </div>
            
            {/* Giza Container */}
            <div className={styles.gizaContainer}>
              <div className={styles.city}>
                <div>
                  <span class="material-symbols-outlined">domain</span>{" "}
                </div>
                <div>
                  <p>{salesData.giza.name}</p>
                  <h6>{salesData.giza.count}</h6>
                </div>
                <div className={styles.downArrow}></div>
              </div>
            </div>
            
            {/* Manaus Container */}
            <div className={styles.manausContainer}>
              <div className={styles.city}>
                <div>
                  <span class="material-symbols-outlined">location_city</span>{" "}
                </div>
                <div>
                  <p>{salesData.manaus.name}</p>
                  <h6>{salesData.manaus.count}</h6>
                </div>
                <div className={styles.downArrow}></div>
              </div>
            </div>
            
            {/* Berlin Container */}
            <div className={styles.berlinContainer}>
              <div className={styles.city}>
                <div>
                  <span class="material-symbols-outlined">home_work</span>{" "}
                </div>
                <div>
                  <p>{salesData.berlin.name}</p>
                  <h6>{salesData.berlin.count}</h6>
                </div>
                <div className={styles.downArrow}></div>
              </div>
            </div>
            
            {/* Shanghai Container */}
            <div className={styles.shangaiContainer}>
              <div className={styles.city}>
                <div>
                  <span class="material-symbols-outlined">cottage</span>{" "}
                </div>
                <div>
                  <p>{salesData.shanghai.name}</p>
                  <h6>{salesData.shanghai.count}</h6>
                </div>
                <div className={styles.downArrow}></div>
              </div>
            </div>
            
            {/* Queensland Container */}
            <div className={styles.queenslandContainer}>
              <div className={styles.city}>
                <div>
                  <span class="material-symbols-outlined">cottage</span>{" "}
                </div>
                <div>
                  <p>{salesData.queensland.name}</p>
                  <h6>{salesData.queensland.count}</h6>
                </div>
                <div className={styles.downArrow}></div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      
      {/* Sales Figure Section */}
      <div className={styles.salesFigure} onClick={() => openModal()}>
        <div>
          <p>Sales Figures</p>
          <h5>{salesData.sales_figure}</h5>
        </div>
        
        {/* Chart Container */}
        <div className={styles.chartContainer}>
          <div className={styles.chartDiv}>
            <Chart />
          </div>
          <svg
            width="1593"
            height="6"
            viewBox="0 0 1593 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1105" height="6" rx="3" fill="#8676FF" />
            <rect width="580" height="6" rx="3" fill="#FF708B" />
            <rect width="200" height="6" rx="3" fill="#FFA63F" />
          </svg>
        </div>
        
        {/* Modal Section */}
        { isModalOpen && <Modal closeModal={closeModal}>
          <div class={styles.bubbleChart}>
            <BubbleChartModal />
          </div>
        </Modal>}
      </div>
    </div>
  );
}

export default Overview;
