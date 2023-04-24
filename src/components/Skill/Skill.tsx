import React from "react";
import { Skill as SkillType} from "../../data/types"
import styled from "styled-components";

const Label = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 0.25rem;
  font-weight: 500;
  font-family: Oswald, Impact, sans-serif;
  text-transform: uppercase;

  svg {
    margin-right: 0.5rem;
  }
`

const ProgressBar = styled.div`
  height: 10px;
  background-image: linear-gradient(-240deg,#bca2f6,#cdb9f8 5%,#b3e9ff 17%,#b3e9ff 25%,#bffcf7 35%,#ffe366 60%,#fad1d1 85%);
`

const Progress = styled.div`
  height: 10px;
`

export const Skill = (props: SkillType) => {
  const { label, percentage, icon } = props;
  return (
    <>
    <Label className="text-dark">{icon({className: "text-secondary"})} {label}</Label>
    <Progress
      className="progress"
      role="progressbar"
      aria-label={label}
      style={{height: "10px"}}
    >
      <ProgressBar
        className="progress-bar"
        style={{width: `${percentage}%`}}
      >
        {percentage}%
      </ProgressBar>
  </Progress>
  </>
  )
}

