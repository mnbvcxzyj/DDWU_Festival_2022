import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Components = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  justify-content: center;
  text-align: center;
  margin: 0 auto;

  hr {
    height: 3px;
    margin: -12px -10px -10px -10px;
    background-color: #805e4a;
  }
`;

const TimeImg1 = styled(motion.img)`
  width: 130px;
  margin-right: 3rem;
`;

const TimeImg2 = styled(motion.img)`
  width: 130px;
`;

const TimeImg3 = styled(motion.img)`
  width: 130px;
`;

const IntroImg = styled(motion.img)`
  padding-top: 1rem;
  width: 315px;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const tableVariants = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const First_ddd = () => {
  return (
    <Components>
      <Box variants={boxVariants} initial="start" animate="end">
        <TimeImg1
          variants={tableVariants}
          src={require("../../../img/img_yj/ddd05_1.png")}
        />
        <TimeImg2
          variants={tableVariants}
          src={require("../../../img/img_yj/ddd05_2.png")}
        />
        <hr />
        <TimeImg3
          variants={tableVariants}
          src={require("../../../img/img_yj/ddd05_3.png")}
        />
        <br />
        <IntroImg
          variants={tableVariants}
          src={require("../../../img/img_yj/detailFestival.png")}
        />
      </Box>
    </Components>
  );
};

export default First_ddd;
