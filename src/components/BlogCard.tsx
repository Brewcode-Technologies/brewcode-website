
import React from 'react';
import Link from 'next/link';

interface Blog {
  id: number;
  title: string;
  category: string;
  description?: string;
  link: string;
  img: string;
  imgAlt: string;
  date: string;
}

interface BlogCardProps {
  blog: Blog;
  layout?: 'insight-page' | 'home-page'; 
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, layout = 'insight-page' }) => {
  if (layout === 'insight-page') {
    return (
      <a
        href={blog.link}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      >
        <div>
          <hr className="insights-line" />
          <div className="row">
            <div className="col-md-5">
              <img
                src={blog.img}
                alt={blog.imgAlt}
                className="insigts-image mb-2"
              />
            </div>
            <div className="col-md-7 d-flex flex-column justify-content-between" >
             <div className="d-flex flex-column">
             <p className="mb-4 blog-date" >{blog.date}</p>
              <h4 className="mb-5">{blog.title}</h4>
             </div>
              <div className="d-flex flex-column">
                <span>{blog.category.toUpperCase()}</span>
                <span>BY AUTHOR BREWCODE</span>
              </div>
            </div>
          </div>
          {/* <hr className="insights-line" /> */}
        </div>
      </a>
    );
  } else if (layout === 'home-page') {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className=" insight-card">
          <Link href={blog.link} passHref target='_blank' className='blog-link'>
            <div className="insight-card-link">
              <div className="card-body mb-3">
                <p className="insight-card-category">{blog.category}</p>
                {blog.img && (
                  <div className="insight-card-image-container">
                    <img
                      src={blog.img}
                      className="insight-card-img"
                      alt={blog.imgAlt}
                    />
                  </div>
                )}
                <h5 className="insight-card-title pt-1">{blog.title}</h5>
                {/* <p className="insight-card-description">{blog.description}</p> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  } else {
  
    return null;
  }
};

export default BlogCard;
