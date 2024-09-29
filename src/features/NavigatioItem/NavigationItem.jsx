import styles from './ui/NavigationItem.module.css';

const NavigationItem = ({ logo, text }) => {
  return (
    <>
      <img src={logo} alt={logo} className={styles.imgColor} />
      <span className={styles.text}>{text}</span>
    </>
  );
};

export default NavigationItem;
