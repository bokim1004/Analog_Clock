import { useState, useEffect } from "react";
import styled from "styled-components";

const MainPage = () => {
  const timeArray = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [time, setTime] = useState(new Date());
  const [showToolTip, setShowToolTip] = useState(false);

  const refreshClock = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timeId = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(timeId);
    };
  }, []);

  return (
    <Wrapper>
      <ClockCircle
        onMouseEnter={() => setShowToolTip(true)}
        onMouseLeave={() => setShowToolTip(false)}
      >
        {timeArray.map((time, key) => {
          return <TimeNumber key={key}>{time}</TimeNumber>;
        })}
        <Circle />
        <HourLine time={time} />
        <MinuteLine time={time} />
        <SecondLine time={time} />
        {showToolTip && <ToolTip>{time}</ToolTip>}
      </ClockCircle>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ClockCircle = styled.div`
  position: relative;
  margin: 200px auto;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.48);
`;

const TimeNumber = styled.div`
  font-weight: 800;
  font-size: 20px;

  &:first-child {
    position: absolute;
    top: 10px;
    left: 46%;
  }

  &:nth-child(2) {
    position: absolute;
    top: 10%;
    right: 25%;
  }

  &:nth-child(3) {
    position: absolute;
    top: 25%;
    right: 10%;
  }

  &:nth-child(4) {
    position: absolute;
    top: 46%;
    right: 5%;
  }

  &:nth-child(5) {
    position: absolute;
    top: 65%;
    right: 10%;
  }

  &:nth-child(6) {
    position: absolute;
    top: 82%;
    right: 23%;
  }
  &:nth-child(7) {
    position: absolute;
    left: 50%;
    bottom: 10px;
  }

  &:nth-child(8) {
    position: absolute;
    left: 23%;
    top: 82%;
  }

  &:nth-child(9) {
    position: absolute;
    top: 67%;
    left: 10%;
  }

  &:nth-child(10) {
    position: absolute;
    top: 48%;
    left: 5%;
  }

  &:nth-child(11) {
    position: absolute;
    top: 25%;
    left: 10%;
  }

  &:nth-child(12) {
    position: absolute;
    top: 10%;
    left: 25%;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: orange;
  left: 50%;
  top: 50%;
  z-index: 10;
`;

const HourLine = styled.div`
  position: absolute;
  width: 8px;
  height: 60px;
  background-color: black;
  transform-origin: bottom;
  top: 40%;
  left: 50%;
  transform: rotateZ(${(props) => props.time?.getHours() * 30}deg);
`;

const MinuteLine = styled.div`
  position: absolute;
  width: 7px;
  height: 100px;
  background-color: black;
  transform-origin: bottom;
  bottom: 50%;
  left: 50%;
  transform: rotateZ(${(props) => props.time?.getMinutes() * 6}deg);
`;

const SecondLine = styled.div`
  position: absolute;
  width: 2px;
  height: 37%;
  z-index: 2;
  background-color: #87e4eb;
  left: 50%;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotateZ(${(props) => props.time?.getSeconds() * 6}deg);
`;

const ToolTip = styled.div`
  position: absolute;
  width: 50px;
  height: 100px;
`;
