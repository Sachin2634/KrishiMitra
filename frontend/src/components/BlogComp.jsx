import React from 'react';
import Blog from './Blog'; // make sure the path is correct

const BlogComp = () => {
  const blogs = [
    {
      img: 'https://images.indianexpress.com/2025/04/agriculture.jpg?w=640',
      source: 'The Indian Express',
      uploadDate: 'April 20, 2025',
      title: 'A good monsoon: Despite a dwindling share, agriculture could buttress India’s growth projections amid rising global risks',
      content: 'Agriculture, which accounts for around 16 per cent share in the Gross Domestic Product (GDP) of the country and supports over 46 per cent of the population, has shown resilience over the last few years, especially in the post-Covid phase...',
      link: 'https://indianexpress.com/article/business/monsoon-agriculture-indias-growth-projections-rising-global-risks-9954591/'
    },
    {
      img: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1DcVy2.img?w=768&h=432&m=6',
      source: 'The Statesman',
      uploadDate: 'April 22, 2025',
      title: 'Monsoon Bounty',
      content: 'As the government forecasts a second consecutive year of above-average monsoon rainfall, the implications for India’s economy ~ and particularly its rural heartland ~ are profound. In a country where nearly 50 per cent of farmland lacks irrigation, a good monsoon is not just a meteorological event; it is a socio-economic catalyst. The monsoon’s significance lies in its sheer impact. Spanning from June to September, it delivers around 70 per cent of the nation’s annual rainfall....',
      link: 'https://www.msn.com/en-in/news/opinion/monsoon-bounty/ar-AA1DcI5m?ocid=BingNewsSerp'
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {blogs.map((blog, idx) => (
        <Blog key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default BlogComp;
