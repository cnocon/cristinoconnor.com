import React from "react";
import dayjs from "dayjs";
import {Honors, Descriptions, Timespan, Technologies, Job as StyledJob, /*JobYear,*/ Location } from "./Job.styled";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { BsTrophy } from "react-icons/bs";

type Honor = {
  name: string,
  date: string
}
export const Job = ({
  title,
  // year,
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
  const endDate = end === "Present" ? "Present" : dayjs(end).format("MMM YYYY");
  const startDate = dayjs(start).format("MMM YYYY")

  return (
    <StyledJob className="job border border-3 rounded">
      <header>
        {/* <JobYear>{year}</JobYear> */}
        <h3 key={`job-${company}`}>{title}</h3>
        <h4><a href={companyUrl} target="_blank" rel="nofollow noreferrer">{company}</a> <HiOutlineChevronDoubleRight /> <Location>{location}</Location></h4>
        <Timespan>{startDate} – {endDate}</Timespan>
      </header>
      <Descriptions>
        {description.map((desc, index) => <li key={`${index}-desc-for-${company}`}>{desc}</li>)}
      </Descriptions>
      {honors && (
        <Honors>
          {honors.map((honor, index) => <li key={`${index}-tech-for-${company}`}><BsTrophy /> <div><b>{honor.name}</b><span>{honor.date}</span></div></li>)}
        </Honors>
      )}
      <Technologies>
        {technologies.map((tech, index) => <li key={`${index}-tech-for-${company}`}><span className="badge bg-dark text-light">{tech}</span></li>)}
      </Technologies>
    </StyledJob>
  )
}




