import React from "react";
import Layout from "../../components/layout/Layout";
import Button from "../../components/inputs/Button";
import ResumeUpload from "../../components/inputs/ResumeUpload";
import { categories } from "../../data/categories";

const CareerItem = () => {
  return (
    <Layout categories={categories}>
      <div className="mb-20 md:mb-36 mt-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-coolBlack font-bold text-center mb-10">
          Job Details
        </h1>

        <div>
          <p className="text-[16px] text-coolBlack font-semibold border-b border-coolBlack pb-6">
            Title
          </p>
          <h2 className="text-xl md:text-[26px] text-coolBlack font-bold mt-6">
            SEO Specialist
          </h2>
        </div>
        {/* ABOUT */}
        <div className="mt-10">
          <p className="font-semibold border-b text-coolBlack border-coolBlack pb-6">
            About
          </p>
          <p className="text-sm mt-6 leading-relaxed text-coolBlack">
            Use advanced analytics to derive audience insights, initiate
            personalized customer experiences, while being mindful of privacy
            considerations for patient customers, and support the web product
            team in the continuous evolution of the lovieaurora.com web
            experience. Works closely with the Marketing & Engineering teams to
            ensure the analytics infrastructure, permissions and access are in
            place to support their work on developing unified marketing
            analytics and provide deeper web analysis support when needed.
            Responsible for SEO and SEM and that we are optimizing our exposure
            on search platforms such as Google and Bing. Manage our SEM vendor
            on our overall SEM strategy and campaigns that works with our SEO on
            key priorities for Lovie Aurora. Partners closely with departmental
            stakeholders both within & outside of marketing and needs to
            understand specific business priorities and KPIs for those project
            teams as well as supporting data driven development with the Web
            Product, Web Content and IT development teams. Works with IT teams
            to implement and maintain the marketing analytics infrastructure,
            and with Growth Marketing to define requirements for the analytics
            and business intelligence tools.
          </p>
          <h3 className="my-6 font-semibold">What you will do</h3>
          <p className="text-sm mt-2 leading-relaxed text-coolBLack">
            The job duties listed are typical examples of work performed by
            positions in this job classification, and are not designed to
            contain or be interpreted as a comprehensive inventory of all
            duties, tasks, and responsibilities. Specific duties and
            responsibilities may vary depending on department or program needs
            without changing the general nature and scope of the job or level of
            responsibility. Employees may also perform other duties as assigned.
          </p>
          <h3 className="my-6 font-semibold">
            Deliver data-driven, actionable insights, specifically:
          </h3>
          <p className="text-sm mt-2 leading-relaxed text-coolBLack">
            • Manages, mines and analyzes a variety of quantitative (i.e Segment
            Analytics, log files) and qualitative data sources (i.e.
            FitAnalytics) to produce insights needed to identify opportunities
            for web customer experience enhancement/new feature roadmap working
            closely with Web Product team
          </p>
          <p className="text-sm mt-2 leading-relaxed text-coolBLack">
            • Leverages advanced analytics and statistical tools to explore and
            analyze data from multiple sources, and elevate the conversation
            with clients
          </p>
          <p className="text-sm mt-2 leading-relaxed text-coolBLack">
            • Provides oversight of A/B testing (using Segment) recommendations
            & insights, collaborating with Web Product team as needed
          </p>
          <p className="text-sm mt-2 leading-relaxed text-coolBLack">
            • Responsible for documentation of web analytics requirements for
            new components and marketing campaigns, such as event tracking,
            short URLs creation, custom tracking etc.and ensure tracking is in
            place at go live
          </p>
        </div>

        <form className="max-w-[40rem] mx-auto mt-24 text-center">
          <h3 className="uppercase text-coolBlack mt-10 text-center font-semibold mb-6 text-3xl font-cool">
            Apply for this job
          </h3>
          <div className="flex w-full gap-4">
            <div className="flex flex-col items-start w-full mt-4">
              <label className="text-sm mb-1 text-coolBlack">First name</label>
              <input
                className="border w-full border-coolBlack rounded-md p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start w-full mt-4">
              <label className="text-sm mb-1 text-coolBlack">Surname</label>
              <input
                className="border w-full border-coolBlack rounded-md p-2"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 text-coolBlack">Email Address</label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="email"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 text-coolBlack">LinkedIn</label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <div className="flex items-center gap-10">
              <label className="text-sm mb-1 text-coolBlack">
                Resume (Mandatory)
              </label>
              <label className="text-sm mb-1 text-coolBlack">
                Cover Letter (Optional)
              </label>
            </div>

            <ResumeUpload />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 text-coolBlack">
              What is your expectation of salary and other benefits?
            </label>
            <textarea
              className="border w-full border-coolBlack rounded-md p-2"
              type="text"
              rows="10"
            />
          </div>
          <Button
            type="submit"
            text="Submit Application"
            color="bg-coolDarkGreen"
            margin="mt-8"
            padding="py-1.5 px-4"
          />
        </form>
      </div>
    </Layout>
  );
};

export default CareerItem;
// export async function getStaticProps() {
//   return {
//     props: { categories: categories },
//   };
// }
