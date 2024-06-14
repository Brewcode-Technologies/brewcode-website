import axios from 'axios';
import { useEffect } from 'react';

const RSSFetch = () => {
  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const rssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@brewcode';
        const response = await axios.get(rssUrl);
        console.log(response.data); // Log the entire response data
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchRSS();
  }, []);

  return null; // This component doesn't render anything visible
};

export default RSSFetch;
