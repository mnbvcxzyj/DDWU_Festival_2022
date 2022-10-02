import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Components = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  text-align: center;
  display: flex;
  /* margin: 0 auto; */
  flex-direction: column;
  width: 350px;

  hr {
    height: 3px;
    margin: -12px -10px -10px -10px;
    background-color: #805e4a;
    position: relative;
    z-index: -1;
  }
`;

const TimeImg1 = styled(motion.img)`
  width: 130px;
  padding-right: 2rem;
`;

const TimeImg2 = styled(motion.img)`
  width: 130px;
`;

const TimeImg3 = styled(motion.img)`
  width: 130px;
`;

const TimeImg4 = styled(motion.img)`
  width: 130px;
  padding-left: 2rem;
`;

const Div1 = styled.div`
  align-self: flex-start;
`;

const Div2 = styled.div`
  align-self: flex-end;
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

const First_ds = () => {
  return (
    <Components>
      <Box variants={boxVariants} initial="start" animate="end">
        <Div1>
          <TimeImg1
            variants={tableVariants}
            src={require("../../../img/img_yj/ds_1_1.png")}
          />
          <TimeImg2
            variants={tableVariants}
            src={require("../../../img/img_yj/ds_1_2.png")}
          />
        </Div1>

        <hr />
        <Div2>
          <TimeImg3
            variants={tableVariants}
            src={require("../../../img/img_yj/ds_1_3.png")}
          />
          <TimeImg4
            variants={tableVariants}
            src={require("../../../img/img_yj/ds_1_4.png")}
          />
        </Div2>
      </Box>
    </Components>
  );
};

export default First_ds;
