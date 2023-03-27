import React from "react";
import { useLoaderData } from "react-router-dom"
import { Job as JobType } from "../data/types"
import { Job } from "../components/Job/Job";
import Layout from "../Layout"

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
      {data && data?.resume && data.resume?.workHistory?.map((job: JobType) => {
        return <Job key={`${job.company}-job`} {...job} />
      })}
    </Layout>
  )
}