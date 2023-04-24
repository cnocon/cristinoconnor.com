import React from "react";
import {Job as StyledJob, JobYear, Location} from "./Job.styled";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { BiTrophy } from "react-icons/bi";
type Honor = {
  name: string,
  date: string
}
export const Job = ({
  title,
  year,
  company,
  location,
  companyUrl,
  description,
  start,
  end,
  honors,
  technologies
}: {
  title: string,
  year?: string,
  company: string,
  location: string,
  companyUrl: string,
  description: string[],
  start: string,
  end: string,
  honors: Honor[],
  technologies: string[]
}) => {
  return (
    <StyledJob className="job">
      <JobYear><b>{year}</b></JobYear>
      <header>
        <h3 key={`job-${company}`}>{title}</h3>
        <h4><a href={companyUrl} target="_blank" rel="nofollow noreferrer">{company}</a> <HiOutlineChevronDoubleRight /> <Location>{location}</Location></h4>
        <h5>{start} – {end}</h5>
      </header>
      <ul>
        {description.map((desc, index) => <li key={`${index}-desc-for-${company}`}>{desc}</li>)}
      </ul>
      <ul>
        {technologies.map((tech, index) => <li key={`${index}-tech-for-${company}`}>{tech}</li>)}
      </ul>
      {honors && (
        <ul>
          {honors.map((honor, index) => <li key={`${index}-tech-for-${company}`}><BiTrophy /> <strong>{honor.name}</strong><span>{honor.date}</span></li>)}
        </ul>
      )}
    </StyledJob>
  )
}




