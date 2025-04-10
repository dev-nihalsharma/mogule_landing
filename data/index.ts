import { link } from 'fs';

export const navItems = [
  { name: 'Home', link: '#hero' },
  { name: 'Services', link: '#services' },
  { name: 'Portfolio', link: '#portfolio' },
  { name: 'Testimonials', link: '#testimonials' },
];

export const gridItems1 = [
  {
    id: 1,
    title: 'We prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/meeting.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "We're very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'Versatile',
    description: 'Our Team is ',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
];

export const gridItems2 = [
  {
    id: 4,
    title: 'Launch your brand',
    description: ' Brandkit',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'So you dont have to worry about it',
    description: 'We Do it All',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0  md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start text-sm  lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want your business to stand out?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const shopfiyProjects = [
  {
    id: 1,
    title: 'Mudrit - Premium Stationery & Lifestyle Products',
    des: 'Mudrit is a beautifully crafted eCommerce platform designed to showcase and sell high-quality Indian stationery, planners, and lifestyle accessories',
    img: '/mudrit.png',
    iconLists: ['/shopify.svg', '/shiprocket.png', '/js.png'],
    link: '/mudrit.in',
  },
  {
    id: 2,
    title: 'Amilwa - Fashion & Lifestyle Store',
    des: 'Amilwa is a premium eCommerce store that offers a curated selection of fashion and lifestyle products, designed to elevate your style and enhance your everyday life.',
    img: '/amilwa.png',
    iconLists: ['/shopify.svg', '/shiprocket.png', '/js.png'],
    link: '/amilwa.com',
  },
  {
    id: 3,
    title: 'Drapper - Trendy Drip & Fashion Store',
    des: 'An eCommerce store that offers a curated selection of drip and fashion products, designed to elevate your style and enhance your everyday life.',
    img: '/drapper.png',
    iconLists: ['/shopify.svg', '/shiprocket.png', '/js.png'],
    link: '/drapper.in',
  },
  {
    id: 4,
    title: 'HVNLY - Luxe Perfume for Men & Women',
    des: 'A Luxe eCommerce store that offers a curated selection of premium perfume products, designed to elevate your style and enhance your everyday life.',
    img: '/hvnly.png',
    iconLists: ['/shopify.svg', '/shiprocket.png', '/js.png'],
    link: '/hvnlyonline.com',
  },
  {
    id: 5,
    title: 'CafeSwasthya - Organic & Healthy Food Store',
    des: 'A beautifully crafted eCommerce platform designed to showcase and sell high-quality organic and healthy food products.',
    img: '/cafeswasthya.png',
    iconLists: ['/shopify.svg', '/shiprocket.png', '/js.png'],
    link: '/cafeswasthya.in',
  },
  {
    id: 6,
    title: 'OkGoodness - Skincare & Wellness Store',
    des: 'OkGoodness is a Premium skincare and wellness brand, offering a range of high-quality, dermatologist-approved products.',
    img: '/okgoodness.png',
    iconLists: ['/shopify.svg', '/shiprocket.png', '/js.png'],
    link: '/okgoodness.com',
  },
];
export const webAppDevProjects = [
  {
    id: 1,
    title: 'Zimyo - HR & Payroll Management ',
    des: ' Revolutionizes HR and payroll management for businesses of all sizes. The website features a clean, modern design with intuitive navigation and robust automation',
    img: '/zimyo.png',
    iconLists: ['/re.svg', '/tail.svg', 'ts.svg', '/node.png', 'mongodb.svg'],
    link: '/zimyo.com',
  },
  {
    id: 2,
    title: 'Canvas Cultures - Global Art & Heritage',
    des: 'An Innovative store to that brings together a diverse collection of high-quality canvas prints inspired by global cultures and artistic traditions',
    img: '/canvascultures.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/django.svg', 'postgres.svg'],
    link: '/canvascultures.com',
  },
  {
    id: 3,
    title: 'Teez.in Mobile App ',
    des: 'Teez.in is lifestyle and shopping app offering a diverse collection of trendy and stylish t-shirts for men and women',
    img: '/teez.png',
    iconLists: ['/flutter.svg', 'dart.png', 'django.svg', 'postgres.svg'],
    link: '/teez.in',
  },
  {
    id: 4,
    title: 'Vanaura organics Mobile App',
    des: 'Vanaura Organics app offers a seamless platform to explore and purchase premium, eco-friendly skincare and wellness products',
    img: '/vanaura.png',
    iconLists: ['/flutter.svg', 'dart.png', 'node.png', 'mongodb.svg'],
    link: '/vanauraorganics.com/',
  },
  {
    id: 5,
    title: 'Shanthi’s SafeBuy Mobile App',
    des: 'The SafeBuy mobile app is a comprehensive platform designed to ensure safe and reliable online shopping experiences',
    img: '/shanthis.png',
    iconLists: ['/flutter.svg', 'dart.png', 'django.svg', 'postgres.svg'],
    link: '/vanauraorganics.com/',
  },
  {
    id: 6,
    title: 'MSorted',
    des: 'A Fintech Solution that offers a comprehensive platform for managing and optimizing personal finances and expenses',
    img: '/msorted.png',
    iconLists: ['/flutter.svg', 'dart.png', 'django.svg', 'postgres.svg'],
    link: '/mogul-e.com',
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Mogul-e Media was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mogul-e Media's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mogul-e Media is the ideal partner.",
    name: 'Aditya Raj',
    title: 'Founder of Zimyo',
  },
  {
    quote:
      "Collaborating with Mogul-e Media was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mogul-e Media's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mogul-e Media is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Mogul-e Media was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mogul-e Media's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mogul-e Media is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Mogul-e Media was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mogul-e Media's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mogul-e Media is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Mogul-e Media was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mogul-e Media's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mogul-e Media is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

export const companies = [
  {
    id: 1,
    name: 'shopify',
    img: '/shopify.svg',
    nameImg: '/shopifyName.png',
  },
  {
    id: 2,
    name: 'cashfree',
    img: '/cashfreeName.png',
    // nameImg: '/appName.svg',
  },
];

export const services = [
  {
    id: 1,
    title: 'Web Development 👨🏻‍💻',
    desc: 'Transform your ideas into high-performing web applications with our expert Web Development Service. We build scalable, secure, and responsive websites tailored to your business needs. From sleek front-end designs to robust back-end systems, our team leverages modern technologies to deliver seamless user experiences.',
    className: 'md:col-span-2',
    thumbnail: '/service1.svg',
  },
  {
    id: 2,
    title: 'Paid Advertising 📢',
    desc: 'Maximize your brands reach and ROI with our expert paid advertising services. We create high-converting ad campaigns on Facebook, Google, TikTok, and LinkedIn, tailored to your business goals. From precise audience targeting to performance tracking and optimization, we ensure your ads generate quality leads, sales, and engagement.',
    className: 'md:col-span-2',
    thumbnail: '/service2.svg',
  },
  {
    id: 3,
    title: 'Android & iOS Development 📱',
    desc: 'We craft high-performance, scalable, and user-friendly mobile applications for Android and iOS. Our team specializes in building native and cross-platform apps that align with your business goals, ensuring seamless functionality, intuitive UI/UX, and optimal performance. From concept to deployment, we leverage the latest technologies to deliver cutting-edge mobile solutions tailored to your needs.',
    className: 'md:col-span-2',
    thumbnail: '/service3.svg',
  },
  // {
  //   id: 4,
  //   title: 'Search Engine Optimization 🚀',
  //   desc: 'Boost your online visibility and drive organic traffic with our expert SEO services. We optimize your website for search engines using advanced keyword research, on-page and off-page strategies, technical SEO, and high-quality content. Our goal is to improve rankings, increase engagement, and help your business grow sustainably. Stay ahead of the competition with our data-driven SEO solutions.',
  //   className: 'md:col-span-2',
  //   thumbnail: '/service4.svg',
  // },
  {
    id: 5,
    title: 'Shopify Store Development 🛒',
    desc: 'Launch and grow your online business with our expert Shopify store development services. We create high-converting, visually stunning, and fully optimized Shopify stores tailored to your brand. From seamless design and user-friendly navigation to custom features and third-party integrations, we ensure your store is ready to attract and convert customers. Whether your starting fresh or upgrading an existing store, our team delivers a fast, scalable, and sales-driven eCommerce experience.',
    className: 'md:col-span-2',
    thumbnail: '/service5.svg',
  },
  // {
  //   id: 6,
  //   title: 'Email Marketing Automation 🚀',
  //   desc: 'Boost your online visibility and drive organic traffic with our expert SEO services. We optimize your website for search engines using advanced keyword research, on-page and off-page strategies, technical SEO, and high-quality content. Our goal is to improve rankings, increase engagement, and help your business grow sustainably. Stay ahead of the competition with our data-driven SEO solutions!',
  //   className: 'md:col-span-2',
  //   thumbnail: '/service6.svg',
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: '/insta.svg',
    link: 'https://www.instagram.com/mogulemedia',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https://www.linkedin.com/company/mogulemedia',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/company/mogulemedia',
  },
];

export const servicesList = [
  'Web Development',
  'Android & iOS Dev',
  'Premium Shopify Stores',
  'Google Ads',
  'Facebook Ads',
  '6x ROAS Campaigns',
  'SEO Solutions',
  'Email Marketing',
];

export const emails = {
  moguleGmail: 'mogulemedia@gmail.com',
  mogulePrivateMale: 'contact@mogul-e.com',
  nihalGmail: 'itsnihal.sharma@gmail.com',
  nikhilGmail: 'marketingwithnikhil@gmail.com',
};

export const emailTemplate = '<p></p>';
