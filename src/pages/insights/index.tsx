import useNavigation, { routeMap } from "@component/components/customHooks/useNavigation";
import Layout from "@component/components/layouts/layout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/router";
import BlogCard from "@component/components/BlogCard";
import axios from "axios";
import { trackBlogClick } from "@component/lib/gtm";

interface Blog {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
  img: string;
  imgAlt: string;
  date: string;
}

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonUrl: string;
  read: string;
  colImageUrl: string;
  colImageName: string;
  size: "small" | "medium" | "large";
}

const Index: React.FC = () => {


  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.rss2json.com/v1/api.json', {
          params: {
            rss_url: 'https://medium.com/feed/@brewcode',
            api_key: 'zzwyppw74s0zayqrgvogmb6qm3fqwu7kuofye0gw',
            count: 5
          }
        });

        console.log('API Response:', response.data);

        if (response.data.status !== 'ok') {
          throw new Error(response.data.message);
        }

        const blogItems = response.data.items.map((item: any, index: number) => {
          const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
          const imgSrc = imgMatch ? imgMatch[1] : '';

          // Format the date
          const dateObj = new Date(item.pubDate);
          const day = dateObj.getDate().toString().padStart(2, '0');
          const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
          const year = dateObj.getFullYear();
          const hours = dateObj.getHours().toString().padStart(2, '0');
          const minutes = dateObj.getMinutes().toString().padStart(2, '0');
          const formattedDate = `${day}-${month}-${year}, ${hours}:${minutes}`;

          return {
            id: index,
            title: item.title,
            category: "Blogs",
            description: item.description,
            link: item.link,
            img: imgSrc,
            date: formattedDate,
            imgAlt: item.title
          };
        });

        setBlogs(blogItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    if (blogs.length > 0) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "blog_view",
      blogs: blogs.map(({ id, title }) => ({ id, title })),
    });
  }
  }, []);


  const router = useRouter();

  const handleButtonClick = (buttonUrl: string) => {
    router.push(buttonUrl);
  };


  

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Soctor HealthCare Web Application",
      description:
        "Universiti Malaya aimed to enhance its educational offerings by incorporating advanced technologies to create more immersive and interactive learning environments.",
      imageUrl: "/images/svg/soctor.svg",
      buttonText: "#Healthcare",
      read: ". 2 Min Read",
      colImageUrl: "/images/health-care-img.jpeg",
      colImageName: "health care",
      size: "medium",
      buttonUrl: routeMap["soctor"],
    },
    {
      id: 2,
      title: "Digital Transformation of St. Jude India ChildCare Centres",
      description:
        "St. Jude India ChildCare Centres, a premier NGO based in Mumbai, embarked on a critical journey of digital transformation to amplify their online presence and enhance donation facilitation.",
      imageUrl: "/images/svg/st-jude.svg",
      buttonText: "#IT service ",
      buttonUrl: routeMap["st-jude"],
      read: ". 3 Min Read",
      colImageUrl: "/images/st-jude-india-childCare.jpeg",
      colImageName: "st jude india childCare image",
      size: "medium",
    },
    {
      id: 3,
      title: "Dhanika Solutions – Revolutionizing Career Opportunities  ",
      description:
        "Dhanika Solutions, a leading player in the IT services industry, aimed to elevate their digital presence and streamline the career opportunity process.",
      imageUrl: "/images/svg/dhanika.svg",
      buttonText: "#IT service ",
      buttonUrl: routeMap["dhanika-solutions"],
      read: ". 4 Min Read",
      colImageUrl: "/images/dhanika-solutions.jpeg",
      colImageName: "dhanika solutions image",
      size: "medium",
    },
    {
      id: 4,
      title:
        "Brewcode Meet – Setting New Standards in Enterprise Communication",
      description:
        "Brewcode Technologies took on the ambitious project of developing Brewcode Meet...",
      imageUrl: "/images/svg/Brewcode.svg",
      buttonText: "#ITService ",
      buttonUrl: routeMap["brewcode-meet"],
      read: ". 2 Min Read",
      colImageUrl: "/images/who-we-are-img.jpeg",
      colImageName: "who we are image",
      size: "large",
    },
    {
      id: 5,
      title: "Vodafone Italia Collaborate App",
      description:
        "The Vodafone Italia Collaborate App is a sophisticated business messaging application designed to streamline corporate communication.",
      imageUrl: "/images/svg/Vodafone.svg",
      buttonText: "#IT service ",
      buttonUrl: routeMap["vodafone-idea"],
      read: ". 3 Min Read",
      colImageUrl: "/images/vodafone-Italia-img.jpeg",
      colImageName: "vodafone italia collaborate app   image",
      size: "small",
    },
    {
      id: 6,
      title: "AT&T Collaborate App Development  ",
      description:
        "The AT&T Collaborate app is a comprehensive SIP and Team Collaboration client connected to the Internet and AT&T Cloud. It integrates seamlessly with AT&T's server platform, offering a wide range of calling and collaboration features.",
      imageUrl: "/images/svg/AT-T.svg",
      buttonText: "#IT service ",
      buttonUrl: routeMap["at-t"],
      read: ". 4 Min Read",
      colImageUrl: "/images/at-t-collaborate-app-img.jpeg",
      colImageName: "at&t collaborate app development   image",
      size: "medium",
    },
    {
      id: 7,
      title: "VR Application for Universiti Malaya by Brewcode Technologies",
      description:
        "Universiti Malaya aimed to enhance its educational offerings by incorporating advanced technologies to create more immersive and interactive learning environments.",
      imageUrl: "/images/svg/Malaya.svg",
      buttonText: "#Education",
      buttonUrl: routeMap["universiti-malaya"],
      read: ". 4 Min Read",
      colImageUrl: "/images/vr-application-for-universiti-img.jpeg",
      colImageName:
        "ar application for uiversiti malaya by brewcode technologies image",
      size: "medium",
    },
  ];


  return (
    <Layout>
      <Head>
        <title>Insights | Brewcode Technology Private Limited</title>
        <meta name="description" content="Description of your insights page" />
      </Head>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70vh",
        }}
      >
     <div className="cloud-image">
          <img
            alt="Comprehensive application services icon"
            src="/images/insight-hero-image.jpg"
            className="mb-3 hero-cloud"
            loading="lazy"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="hero-section-content">
           
            <h1 className="services-header">Insights</h1>
              <p className="insights-description text-center">
                We Believe The Exchange Of <br />
                Knowledge Fuels Collective Growth
              </p>
            </div>
          </div>
        </div>
      </div>
     
      <div className="dark-container py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="chart-of-heading mb-2">Insights By Interests</h2>
            </div>
          </div>
        
        <div className="row">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onClick={() =>
      trackBlogClick({
        id: blog.id,
        title: blog.title,
        date: blog.date,
        link: blog.link,
      })
    }  />
        ))}
      </div>

          <div className="row my-5">
            <div className="col-12">
              <h3 className="our-section-heading mb-3">Success Stories</h3>
            </div>

            {caseStudies.map((study) => (
              <div key={study.id} className="col-12 col-md-6 col-lg-3 mb-4 ">
                <div className="insight-success-stories-card  position-relative">
                  <div className="card-img-top insight-top-image">
                    <img
                      src={study.colImageUrl}
                      alt={study.title}
                      style={{ width: "100%" }}
                      className="insight-top-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="card-body insight-card-body">
                    <h6 className="insight-card-heading">{study.title}</h6>
                    <p className="insight-card-text mb-4">{study.description}</p>
                  </div>
                  <FaArrowRightLong
                fontSize={18}
                className="fa-arrow-long"
              

              
                onClick={() => handleButtonClick(study.buttonUrl)}


              />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
