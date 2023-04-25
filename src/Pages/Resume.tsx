import React from "react";
import { useLoaderData } from "react-router-dom"
import { Job as JobType } from "../data/types"
import { Job } from "../components/Job/Job";
import Layout from "../Layout"
import { Skill as SkillType } from "../data/types";
import { Skill } from "../components/Skill/Skill";
import { Education } from "../components/Education/Education"
import { EducationType } from "../data/types";
export const Resume = () => {
  const loaderData: any = useLoaderData();
  const [data, setData] = React.useState(loaderData);

  React.useEffect(() => {
    if (loaderData) {
      setData(loaderData)
    }
  }, [loaderData])

  return (
    <Layout>
      <div className="row">
        <div className="col col-lg-6">
          {data && data?.resume && data.resume?.workHistory?.map((job: JobType) => {
            return <Job key={`${job.company}-job`} {...job} />
          })}
        </div>
        <div className="col col-lg-6">
          <div className="card mb-4">
            <div className="card-body">
              {data && data?.resume && data.resume?.technicalSkills?.map((skill: SkillType) => {
                return <Skill key={`${skill.label}-job`} {...skill} />
              })}
            </div>
          </div>
          <div className="card my-4">
            <div className="card-body">
              {data && data?.resume && data.resume?.education?.map((edu: EducationType) => <Education key={edu.school} {...edu} />)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}