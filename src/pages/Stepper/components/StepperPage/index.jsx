import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import clearFormData from "../../services/clearFormData";
import FirstStep from "../FirstStep";
import SecondStep from "../SecondStep";
import ThirdStep from "../ThirdStep";
import useStyles from "./styles";

const TABS = [
  {
    component: FirstStep,
    title: "First Step",
  },
  {
    component: SecondStep,
    title: "Second Step",
  },
  {
    component: ThirdStep,
    title: "Review",
  },
];

const StepperPage = () => {
  const { state = { activeStep: 0 } } = useLocation();
  const styles = useStyles();

  const tab = TABS[state.activeStep];

  useEffect(() => {
    return () => {
      clearFormData();
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Stepper</h1>
      <Stepper activeStep={state.activeStep}>
        {TABS.map(({ title }) => {
          return (
            <Step key={title}>
              <StepLabel>{title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {tab && <tab.component title={tab.title} />}
    </div>
  );
};

export default StepperPage;
