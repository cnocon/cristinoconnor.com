import { IconType } from "react-icons";

export type Skill = {
  label: string,
  percentage: number,
  icon: IconType
}

export type Honor = {
  name: string,
  date: string
}

export type Job = {
  year?: string,
  title: string,
  location: string,
  company: string,
  companyUrl: string,
  start: string,
  end: string,
  description: string[],
  technologies: string[],
  honors: Honor[]
}

export type ResumeData = {
  softSkills: string[],
  workHistory: Job[],
  technicalSkills: Skill[],
}

export type Data = {
  resume: ResumeData
}