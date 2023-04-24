import React from "react";
import { Honor, Honors } from "../Job/Job.styled"
import { EducationType, HonorType } from "../../data/types"
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { FaAward } from "react-icons/fa"

export const Education = ({ school, title, schoolUrl, location, honors, start, end }: EducationType) => {
  return <div className="card">
    <div className="card-header">
      <h3>{title}</h3>
      <h4><a href={schoolUrl} target="_blank" rel="noreferrer">{school}</a></h4>
      <h5>{start} &mdash; {end} <HiOutlineChevronDoubleRight /> {location}</h5>
      <Honors>
        {!!honors?.length && honors.map((honor: HonorType) => <Honor key={honor.name} {...honor}><FaAward /> <div><b>{honor.name}</b><span>{honor?.detail}</span></div></Honor>)}
      </Honors>
    </div>
  </div>
}