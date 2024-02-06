import React from "react";
import TextedBubble from "./TextedBubble";
import styles from "../styles/bubblecontainer.module.css";
import { SmallBubble } from "./SmallBubble";
import { MediumBubble } from "./MediumBubble";
import { LargeBubble } from "./LargeBubble";
import { LargestBubble } from "./LargestBubble";

/**
 * Functional component representing the Bubble Container.
 * Displays various bubbles with associated data and positions.
 * @param {Object} data - Object containing data for different bubbles.
 * @param {string} time - Current time value.
 * @returns {JSX.Element} - Rendered Bubble Container component.
 */
function BubbleContainer({ data, time }) {
  return (
    <>
      <div className={styles.bubbles}>
        <div className={styles.outerBubble}>
          <div className={styles.innerBubble}>
            <div className={styles.investmentContainer}>
              <TextedBubble
                text={"Investment"}
                data={data.investment_price}
                time={time}
                showTime={true}
              />
            </div>
            <div className={styles.developmentContainer}>
              <TextedBubble
                text={"Development"}
                data={data.development_price}
                time={time}
                showTime={false}
              />
            </div>
            <div className={styles.financeContainer}>
              <TextedBubble
                text={"Finance"}
                data={data.finance}
                time={time}
                showTime={false}
              />
            </div>
            <div className={styles.designContainer}>
              <TextedBubble
                text={"Design"}
                data={data.design}
                time={time}
                showTime={false}
              />
            </div>
            <div className={styles.businessContainer}>
              <TextedBubble
                text={"Business"}
                data={data.business_price}
                time={time}
                showTime={false}
              />
            </div>
            <div className={styles.pinkBubbles}>
              <SmallBubble top={"-220%"} left={"162%"} />
              <SmallBubble top={"-300%"} left={"-192%"} />
              <SmallBubble top={"-28%"} left={"103%"} />
              <SmallBubble top={"-10%"} left={"-375px"} />
              <MediumBubble top={"-128%"} left={"-205%"} />
              <MediumBubble top={"-228%"} left={"100%"} />
            </div>
            <div className={styles.yellowBubble}></div>
          </div>
        </div>

        {/* Additional bubbles with various sizes and positions */}
        <LargestBubble top={"15%"} left={"95%"} />
        <LargestBubble top={"50%"} left={"82%"} />
        <LargestBubble top={"68%"} left={"72%"} />
        <LargestBubble top={"20%"} left={"40%"} />
        <MediumBubble top={"90%"} left={"13%"} />
        <MediumBubble top={"90%"} left={"13%"} />
        <MediumBubble top={"20%"} left={"13%"} />
        <LargeBubble top={"37%"} left={"17%"} />
        <LargeBubble top={"46%"} left={"11%"} />
        <LargeBubble top={"88%"} left={"88%"} />
      </div>
    </>
  );
}

export default BubbleContainer;
