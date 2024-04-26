import React from "react";

const InsightsComponent = () => {
  const blogs = [
    {
      id: 1,
      title:
        "The cube interview series: Driving enhanced security and higher value in Financial services generative Ai",
      category: "Blog",
    },
    {
      id: 2,
      title:
        "The cube interview series: Driving enhanced security and higher value in Financial services generative Ai",
      category: "Blog",
    },
    {
      id: 3,
      title:
        "The cube interview series: Driving enhanced security and higher value in Financial services generative Ai",
      category: "Blog",
    },
    {
      id: 4,
      title:
        "The cube interview series: Driving enhanced security and higher value in Financial services generative Ai",
      category: "Blog",
    },
  ];

  return (
    <section className="insights-bg py-5">
      <div className="container">
        <div className="row">
          <h1 className="section-heading industries-we-serve-heading">
            Insights
          </h1>
          <p className="insights-description mb-5 mt-4">
            Design and deliver new digital experiences, revenue streams and
            business models to <br /> meet rising customer expectations and
            accelerate your growth
          </p>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <div className="blog-card">
                <p className="blog-sub-heading">{blog.category}</p>
                <p className="blog-text pt-2">{blog.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsComponent;
