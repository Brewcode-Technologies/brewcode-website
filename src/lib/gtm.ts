
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
}
export const trackFooterClick = (section: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "footer_click",
    section: section,
  });
};

export const trackBlogClick = ({
  id,
  title,
  date,
  link,
}: {
  id: number;
  title: string;
  date: string;
  link: string;
}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "blog_click",
    blog_id: id,
    blog_title: title,
    blog_date: date,
    blog_link: link,
  });
};
