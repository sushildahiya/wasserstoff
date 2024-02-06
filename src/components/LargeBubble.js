import styles from '../styles/largebubble.module.css'

export const LargeBubble = ({top, left}) => {
  return (
    <div style={{top: top, left: left}} className={styles.largeBubbleContainer}></div>
  )
}