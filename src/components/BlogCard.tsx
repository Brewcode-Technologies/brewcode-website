import React from 'react';
import Link from 'next/link';

interface Blog {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  img: string;
  imgAlt: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="insight-card ">
          <Link href={blog.link} passHref target='_balnk' className='blog-link'>
            <div className="insight-card-link">
              <div className="card-body mb-3">
                <p className="insight-card-category">{blog.category}</p>
                <div className="insight-card-image-container">
                  <img
                    src={blog.img}
                    className="insight-card-img"
                    alt={blog.imgAlt}
                  />
                </div>
                <h5 className="insight-card-title pt-1">{blog.title}</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  };
  
  export default BlogCard;