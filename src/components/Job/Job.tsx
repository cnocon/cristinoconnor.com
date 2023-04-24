import React from "react";
import dayjs from "dayjs";
import {Company, Honor, Honors, Description, Descriptions, Timespan, Technologies, Technology, Job as StyledJob, /*JobYear,*/ Location, JobTitle } from "./Job.styled";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
// import { BsTrophy } from "react-icons/bs";
import { FaAward } from "react-icons/fa";

type HonorType = {
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
  honors: HonorType[],
  technologies: string[]
}) => {
  const endDate = end === "Present" ? "Present" : dayjs(end).format("MMM YYYY");
  const startDate = dayjs(start).format("MMM YYYY")

  return (
    <StyledJob className="job card py-2 text-bg-dark mb-3">
      <div className="card-header">
        <header>
          <JobTitle key={`job-${company}`}>{title}</JobTitle>
          <Company>
            <a href={companyUrl} target="_blank" rel="nofollow noreferrer">{company}</a> <HiOutlineChevronDoubleRight /> <Location>{location}</Location>
          </Company>
          <Timespan>{startDate} &mdash; {endDate}</Timespan>
        </header>
      </div>
      <div className="card-body">
        <Descriptions>
          {description.map((desc, index) => <Description key={`${index}-desc-for-${company}`}>{desc}</Description>)}
        </Descriptions>
        {!!honors?.length && (
          <Honors>
            {honors.map((honor, index) => <Honor key={`${index}-tech-for-${company}`}><FaAward /> <div><b>{honor.name}</b><span>{honor.date}</span></div></Honor>)}
          </Honors>
        )}
        <Technologies>
          {technologies.map((tech, index) => <Technology key={`${index}-tech-for-${company}`}><span className="badge  text-light"><span className="hashtag">#</span>{tech}</span></Technology>)}
        </Technologies>
      </div>
    </StyledJob>
  )
}




