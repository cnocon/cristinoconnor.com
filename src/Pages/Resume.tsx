import React from "react";
import { useLoaderData } from "react-router-dom"
import { Job as JobType } from "../data/types"
import { Job } from "../components/Job/Job";
import Layout from "../Layout"
import { Skill as SkillType } from "../data/types";
import { Skill } from "../components/Skill/Skill";

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
        <div className="col col-6">
          {data && data?.resume && data.resume?.workHistory?.map((job: JobType) => {
            return <Job key={`${job.company}-job`} {...job} />
          })}
        </div>
        <div className="col col-6">
          <div className="job card py-2 text-bg-light mb-3 pb-4">
            <div className="card-body">
          {data && data?.resume && data.resume?.technicalSkills?.map((skill: SkillType) => {
            return <Skill key={`${skill.label}-job`} {...skill} />
          })}
          </div>
          {/* <div className="card text-bg-dark mb-3" style={{maxWidth: `18rem`}}>
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div> */}
        </div>
        </div>
      </div>
    </Layout>
  )
}