import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const challengesData = [
  {
    id: 1,
    title: "Perishability of Products",
    description:
      "Managing the supply chain for perishable dairy products required maintaining strict timelines and conditions.",
  },
  {
    id: 2,
    title: "Logistical Inefficiencies",
    description:
      "High logistics costs and delays due to suboptimal transportation routes.",
  },
  {
    id: 3,
    title: "Demand Fluctuations",
    description:
      "Variability in demand for different dairy products across various regions.",
  },
  {
    id: 4,
    title: "Inventory Management",
    description:
      "Maintaining optimal inventory levels to avoid both shortages and excess stock, especially for perishable items.",
  },
];

const ObjectivesData = [
  {
    id: 1,
    goal: "Reduce Lead Times",
    description:
      "Decrease the time taken from milk collection to product delivery.",
  },
  {
    id: 2,
    goal: "Minimize Costs",
    description: "Lower logistics and inventory holding costs.",
  },
  {
    id: 3,
    goal: "Improve Forecast Accuracy",
    description:
      "Enhance demand forecasting to align production with consumer demand.",
  },
  {
    id: 4,
    goal: "Enhance Supplier Collaboration",
    description: "Improve coordination with milk suppliers.",
  },
  {
    id: 5,
    goal: "Increase Transparency",
    description:
      "Achieve greater visibility and traceability within the supply chain.",
  },
];

const data = [
  {
    step: 1,
    title: "Lead Time Reduction",
    description:
      "Reduced the time from milk collection to product delivery by 20%, ensuring fresher products for consumers.",
  },
  {
    step: 2,
    title: "Cost Savings",
    description:
      "Achieved a 15% reduction in logistics and inventory holding costs through better route optimization and inventory management.",
  },
  {
    step: 3,
    title: "Forecast Accuracy",
    description:
      "Improved demand forecasting accuracy by 25%, leading to more efficient production planning and reduced waste.",
  },
  {
    step: 4,
    title: "Supplier Collaboration",
    description:
      "Enhanced collaboration with milk suppliers, resulting in more consistent supply and better quality control.",
  },
  {
    step: 5,
    title: "Sustainability Goals",
    description:
      "Successfully integrated sustainable practices, reducing carbon emissions by 10% and improving Amul's environmental footprint.",
  },
];

const solutions = [
  {
    step: 1,
    title: "Demand Forecasting",
    description: [
      "Implemented advanced analytics tools to analyze historical sales data and market trends.",
      "Used predictive analytics to improve demand forecasting and adjust production schedules.",
    ],
  },
  {
    step: 2,
    title: "Cold Chain Management",
    description: [
      "Invested in modern cold chain infrastructure, including refrigerated trucks and storage facilities, to maintain product quality.",
      "Monitored temperature and humidity levels throughout the supply chain using IoT sensors.",
    ],
  },
  {
    step: 3,
    title: "Integrated Logistics Management",
    description: [
      "Adopted a centralized logistics management system to optimize transportation routes and schedules.",
      "Used GPS tracking to monitor the movement of delivery vehicles in real time.",
    ],
  },
  {
    step: 4,
    title: "Supplier Collaboration Platforms",
    description: [
      "Developed an online platform to improve communication with milk suppliers.",
      "Shared real-time data on milk collection schedules and quality standards to ensure timely and consistent supply.",
    ],
  },
  {
    step: 5,
    title: "Sustainable Practices",
    description: [
      "Implemented sustainable packaging solutions to reduce waste.",
      "Optimized transportation routes to reduce fuel consumption and emissions.",
    ],
  },
];

const Index: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>
          Amul's Supply Chain Optimization with Efficient Logistics | Brewcode
          Technology Private Limited
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-black py-5">
        <div className="container py-5">
          <div className="soctor-logo mb-2 col-5">
            <Image
               width={100}
               height={100}
               loading="lazy"
              src="/images/ammul-logo.png"
              alt="ammul Logo"
              className="case-study-image"
            />
          </div>
          <div className="row my-4 d-flex justify-content-between">
            <div className="col-md-6 col-md-4 mb-5">
              <div className="healthcare-text-container">
                <div className=" mb-5 ">
                  <h2 className="stroke-text text-white amul-heading">Amul’s Supply Chain Optimization in Partnership with Efficient Logistics India</h2>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="socoter-img">
                <img
                  src="/images/amul-image.jpg"
                  alt="health care image"
                  className="health-care-img"
                />
              </div>
            </div>
          </div>

          <div className="soctor-about-section">
            <div className="about-introduction">Introduction</div>
            <div className="col-md-8">
              <div className="about-content">
                <h2>About Project</h2>
                <p>
                  Amul, a renowned dairy cooperative in India, partnered with
                  Efficient Logistics India, a specialist in supply chain and
                  logistics management, to optimize its supply chain. This
                  collaboration aimed to improve efficiency, reduce costs, and
                  ensure timely delivery of fresh dairy products to consumers.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="soctor-about-section">
                <div className="section-about-introduction">Challenge</div>

                <div className="d-flex flex-column">
                  <h2 className="section-title mb-3">
                    <img
                      src="/images/problem-statement.svg"
                      className="problem-statemt-icon"
                      alt=""
                    />
                    Problem Statement
                  </h2>
                  <p className="section-description">
                    Amul, a leading dairy cooperative in India, faced challenges
                    in optimizing its vast supply chain network. With growing
                    demand for their products, delays in delivery and
                    inefficiencies in logistics management began to impact the
                    business. The manual tracking of deliveries resulted in
                    inaccurate data and an inability to predict delays or stock
                    shortages. This led to customer dissatisfaction, operational
                    bottlenecks, and increased costs. Additionally, Amul
                    struggled with coordinating multiple logistics partners,
                    causing inconsistencies in transportation and storage. The
                    lack of real-time visibility into the supply chain further
                    hindered their ability to make informed decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="soctor-about-section">
                <div className="d-flex flex-column">
                  <h2 className="section-title mb-3">
                    <img
                      src="/images/business-goal.svg"
                      className="business-goal-icon"
                      alt=""
                    />
                    Business Goal
                  </h2>
                  <p className="section-description">
                    Amul's primary business goal was to streamline its supply
                    chain operations to ensure timely delivery of fresh dairy
                    products across the country. They aimed to reduce logistics
                    costs by optimizing routes and improving coordination with
                    their logistics partners. Another goal was to integrate a
                    digital solution that would provide real-time visibility
                    into the supply chain, enabling proactive management of
                    inventory and deliveries. By leveraging advanced logistics
                    technologies, Amul sought to enhance customer satisfaction,
                    reduce operational inefficiencies, and maintain product
                    freshness throughout the supply chain journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="soctor-about-section">
            <div className="col-12">
              <div className="about-content">
                <h2 className=" text-center">Challenges</h2>

                <p className="text-center mb-5">
                FabIndia and Reliable Logistics India faced several supply chain challenges.
                </p>
              </div>
              {challengesData.map((challenge) => (
                <div className="row mb-4" key={challenge.id}>
                  <div className="col-md-3">
                    <strong className="audience-list-heading genarl-padding">
                      {challenge.title}
                    </strong>
                  </div>
                  <div className="col-md-9">
                    <li className="target-audience-item">
                      <div className="d-flex flex-column">
                        <div className="d-flex">
                          <img
                            src="/images/list-page-arrow.svg"
                            alt=""
                            className="list-page-arrow-icon mt-2"
                          />
                          <p>{challenge.description}</p>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="soctor-about-section">
            <div className="col-12">
              <div className="about-content">
                <h2 className=" text-center">Objectives</h2>

                <p className="text-center mb-5">
                The collaboration aimed to achieve the following through supply chain optimization
                </p>
              </div>
              {ObjectivesData.map((challenge) => (
                <div className="row mb-4" key={challenge.id}>
                  <div className="col-md-3">
                    <strong className="audience-list-heading genarl-padding">
                      {challenge.goal}
                    </strong>
                  </div>
                  <div className="col-md-9">
                    <li className="target-audience-item">
                      <div className="d-flex flex-column">
                        <div className="d-flex">
                          <img
                            src="/images/list-page-arrow.svg"
                            alt=""
                            className="list-page-arrow-icon mt-2"
                          />
                          <p>{challenge.description}</p>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="discover-bg">
        <div className="container">
          <div className="soctor-about-section">
            <div className="col-12">
              <div className="about-content">
                <div className="text-center">
                  <img
                    src="/images/discover.svg "
                    className="business-goal-icon text-center"
                    alt=""
                  />
                </div>
                <h2 className="text-center">Results Achieved</h2>

                <p className="text-center">
                  Through the partnership with Efficient Logistics India, Amul
                  achieved significant
                  <br />
                  improvements in its supply chain performance
                </p>
                <div>
                  <hr className="col-md-4 mx-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="row gap-that-container">
            <div className="d-flex col-md-5 flex-column">
              {data.slice(0, 3).map((item) => (
                <div className="d-flex p-4" key={item.step}>
                  <p>
                    <span className="step-number">{item.step}</span>
                  </p>
                  <div>
                    <h5>{item.title}</h5>
                    <p className="gap-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex col-md-5 flex-column">
              {data.slice(3).map((item) => (
                <div className="d-flex p-4" key={item.step}>
                  <p>
                    <span className="step-number">{item.step}</span>
                  </p>
                  <div>
                    <h5>{item.title}</h5>
                    <p className="gap-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="discover-bg">
        <div className="container">
          <div className="soctor-about-section">
            <div className="col-12">
              <div className="about-content">
                <div className="text-center">
                  <img
                    src="/images/discover.svg"
                    className="business-goal-icon text-center"
                    alt=""
                  />
                </div>
                <h2 className="text-center">Solutions Implemented</h2>

                <p className="text-center">
                  Amul and Efficient Logistics India adopted several strategies
                  and technologies to optimize their supply chain:
                </p>
                <div>
                  <hr className="col-md-4 mx-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="row gap-that-container">
            <div className="d-flex col-md-5 flex-column">
              {solutions.slice(0, 3).map((item) => (
                <div className="d-flex p-4" key={item.step}>
                  <p>
                    <span className="step-number">{item.step}</span>
                  </p>
                  <div>
                    <h5>{item.title}</h5>
                    {item.description.map((desc, index) => (
                      <p className="gap-description" key={index}>
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex col-md-5 flex-column">
              {solutions.slice(3).map((item) => (
                <div className="d-flex p-4" key={item.step}>
                  <p>
                    <span className="step-number">{item.step}</span>
                  </p>
                  <div>
                    <h5>{item.title}</h5>
                    {item.description.map((desc, index) => (
                      <p className="gap-description" key={index}>
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
