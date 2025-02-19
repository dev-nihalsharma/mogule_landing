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
    description: 'Our Team Does it All',
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
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
  {
    id: 5,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 6,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
];
export const webDsppDProjects = [
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
  },
  {
    id: 2,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 3,
    title: 'AI Image SaaS - Canva Application',
    des: 'A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: '/ui.aiimg.com',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
  {
    id: 5,
    title: 'Yoom - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
  {
    id: 6,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
  },
];

export const testimonials = [
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
  {
    id: 4,
    title: 'Search Engine Optimization 🚀',
    desc: 'Boost your online visibility and drive organic traffic with our expert SEO services. We optimize your website for search engines using advanced keyword research, on-page and off-page strategies, technical SEO, and high-quality content. Our goal is to improve rankings, increase engagement, and help your business grow sustainably. Stay ahead of the competition with our data-driven SEO solutions.',
    className: 'md:col-span-2',
    thumbnail: '/service4.svg',
  },
  {
    id: 5,
    title: 'Shopify Store Development 🛒',
    desc: 'Launch and grow your online business with our expert Shopify store development services. We create high-converting, visually stunning, and fully optimized Shopify stores tailored to your brand. From seamless design and user-friendly navigation to custom features and third-party integrations, we ensure your store is ready to attract and convert customers. Whether your starting fresh or upgrading an existing store, our team delivers a fast, scalable, and sales-driven eCommerce experience.',
    className: 'md:col-span-2',
    thumbnail: '/service5.svg',
  },
  {
    id: 6,
    title: 'Email Marketing Automation 🚀',
    desc: 'Boost your online visibility and drive organic traffic with our expert SEO services. We optimize your website for search engines using advanced keyword research, on-page and off-page strategies, technical SEO, and high-quality content. Our goal is to improve rankings, increase engagement, and help your business grow sustainably. Stay ahead of the competition with our data-driven SEO solutions!',
    className: 'md:col-span-2',
    thumbnail: '/service6.svg',
  },
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
