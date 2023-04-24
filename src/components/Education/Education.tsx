import React from "react";
import { Honor } from "../Job/Job.styled"
import { EducationType, HonorType } from "../../data/types"

export const Education = ({ school, title, schoolUrl, location, honors, start, end }: EducationType) => {
  return <div className="card">
    <div className="card-header">
      <h3>{title}</h3>
      <h4><a href={schoolUrl} target="_blank" rel="noreferrer">{school}</a></h4>
      <h5>{start} &mdash; {end}</h5>
      {honors && honors.map((honor: HonorType) => <Honor key={honor.name} {...honor}/>)}
    </div>
  </div>
}