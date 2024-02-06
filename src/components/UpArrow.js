import styles from '../styles/arrow.module.css';

export const UpArrow = ({color}) => {
  return (
    <div style={{borderBottom: `8px solid ${color}`}} className={styles.uparrow}></div>
  )
}
