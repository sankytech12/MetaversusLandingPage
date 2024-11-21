import styles from "../styles";

const StartSteps = ({number,text}) => {

  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
        <p className="text-white text-[20px] font-bold">0{number}</p>
      </div>
      <p className="font-normal flex-1 ml-[30px] text-[18px] text-[#B0B0B0] leading-[32px] ">{text}</p>
    </div>
  );
}

export default StartSteps;
