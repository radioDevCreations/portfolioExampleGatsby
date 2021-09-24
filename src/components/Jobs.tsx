import React, { FC } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Jobs: FC = () => {

  const data = useStaticQuery(query);
  const {
    allStrapiJob: {
      nodes: jobs
    }
  } = data;
  const {company, position, date, description} = jobs[0];
  return <section className="section jobs">
    <Title title="experience"/>
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((item: any, index: any) => {
          return (
            <button key={index} className="job-btn">
              {item.company}
            </button>
          );
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">
          {date}
        </p>
        {description.map((item: any) => {
          return <div key={item.id} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{item.name}</p>
          </div>
        })}
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

const query = graphql`
{
  allStrapiJob {
    nodes {
      company
      date
      description {
        id
        name
      }
      position
    }
  }
}`;

export default Jobs;
