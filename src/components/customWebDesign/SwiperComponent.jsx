
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




// import image1 from "/images/CustomWebDesignServices/Mask group Icon 1.svg";
// import Vector1 from "/images/CustomWebDesignServices/Vector1.svg";
// import Vector2 from "/images/CustomWebDesignServices/Vector2.svg";
// import Vector3 from "/images/CustomWebDesignServices/Vector3.svg";
// import Vector4 from "/images/CustomWebDesignServices/Vector4.svg";
// import Vector5 from "/images/CustomWebDesignServices/Vector5.svg";
// import Vector6 from "/images/CustomWebDesignServices/Vector6.svg";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

const SwiperComponent =()=>{

  const swiperData=[{
    id:1,
    image:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050962/Mask_group_Icon_1_qaeogo.svg",
    title:"Web Strategy",
    description:"We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.",
    listTitle:"In this phase, we:",
    list:[
      "Identify your target audiences",
      "Analyze user pain-points & define your UVPs",
      "Define key performance indicators (KPIs)",
      "Create a roadmap to growing your brand online",
    ],
    vector:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050962/Vector1_gqia2s.svg",
  },
  {
    id:2,
    image:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050962/Mask_group_Icon_1_qaeogo.svg",
    title:"Planning & Information Architecture",
    description:"We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, we ensure seamless user journeys to key conversion points.",
    listTitle:"Here’s how our team does it:",
    list:[
      "We develop a base-level user flow & sitemap",
      "We utilize wireframing to create a seamless conversion funnel",
      "We add on-brand, consistent messaging to your structure",
      
    ],
    vector:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050968/Vector2_moahus.svg",
  },
  {
    id:3,
    image:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050962/Mask_group_Icon_1_qaeogo.svg",
    title:"Creative Design",
    description:"This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design in Middle East.",
    listTitle:"With just 50 milliseconds to make a good first impression, your website needs to stand out. To achieve this, we:",
    list:[
      "Thoughtfully place design features to guide to the user journey",
      "Utilize interactive videos & animations",
      "Create custom, branded illustrations",
      "Ensure accessibility & search engine optimization",
    ],
    vector:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050969/Vector3_rbksbi.svg",
  },
  {
    id:4,
    image:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050962/Mask_group_Icon_1_qaeogo.svg",
    title:"Responsive Development",
    description:"A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.",
    listTitle:"To ensure your website reaches and satisfies every user, we:",
    list:[
      "Gather touchpoint & user-channel insights",
      "Transform your wireframes into a flexible UI",
      "Test across devices before approval & launch",
      
    ],
    vector:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050970/Vector4_rjvvwh.svg",
  }   ,
  {
    id:5,
    image:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050962/Mask_group_Icon_1_qaeogo.svg",
    title:"Quality Assurance (QA)",
    description:"At Digital Silk, we pride ourselves on delivering measurable results and professional outcomes. By following a strict quality assurance (QA) protocol, we guarantee a high-quality digital experience for your brand.",
    listTitle:"To achieve this, we:",
    list:[
      "Actively involve our clients throughout every project",
      "Meticulously test all designs to catch errors",
      "Use tried-and-tested tools to secure before launch",
      
    ],
    vector:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050970/Vector5_h8jqyq.svg",
  },
  {
    id:6,
    image:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050962/Mask_group_Icon_1_qaeogo.svg",
    title:"Launch & Optimization",
    description:"Our end-to-end website design services in New York cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
    listTitle:"Our design specialists make this happen by:",
    list:[
      "Following a strict protocol for every website launch",
      "Offering post-launch maintenance & optimization",
      "Creating & implementing a digital marketing plan to drive awareness across touchpoints",
      
    ],
    vector:"https://res.cloudinary.com/daop3bufa/image/upload/v1759050971/Vector6_samyre.svg",
  },
  
]
    
  

  




    return(
        <>

<Swiper
      
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        speed={600}
        slidesPerGroup={1}
        mousewheel={{
          releaseOnEdges: true,
          sensitivity: 0.35,
          thresholdDelta: 40,
          thresholdTime: 300,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper min-h-[100vh]"
        onSwiper={(swiper)=>{
          // initialize progress on mount
          const setProgress=(s)=>{
            try{
              const paginationEl = s?.pagination?.el;
              const bullets = s?.pagination?.bullets || [];
              if(!paginationEl || bullets.length === 0){ return; }
              const total = bullets.length - 1;
              const idx = Math.min(Math.max(s.activeIndex || 0, 0), total);
              const percent = total <= 0 ? 0 : (idx / total) * 100;
              paginationEl.style.setProperty('--progress', `${percent}%`);
              // mark completed bullets up to active
              bullets.forEach((b, i)=>{
                if(i <= idx){ b.classList.add('is-complete'); }
                else { b.classList.remove('is-complete'); }
              });
            }catch{ /* no-op */ }
          };
          setProgress(swiper);
          swiper.on('slideChange', ()=> setProgress(swiper));
          swiper.on('update', ()=> setProgress(swiper));
          swiper.on('resize', ()=> setProgress(swiper));
          swiper.on('breakpoint', ()=> setProgress(swiper));
        }}
      >
        {
          swiperData.map((item)=>{
            return(
              <SwiperSlide key={item} className="bg-[#2F5B44] opacity-50% h-[100vh] flex relative cursor-pointer text-[#FEF9D0]" >
              <div className='flex flex-col justify-between h-full gap-4 mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
    
                <img src={item.image} alt="image1" className='w-[100px] h-[100px]' />
                <div className='  lg:max-h-[66vh]  lg:min-h-[26rem] md:min-h-[63vh]'>
                <h1 className=" font-inter text-[36px] not-italic font-medium leading-normal uppercase">{item.title}</h1>
                <p>{item.description}</p>
                <div >
                  <h1 className=" font-inter text-[20px] not-italic font-normal leading-normal">{item.listTitle}</h1>

                </div>
              
                   <ul className="list-disc list-inside ml-7">

                    {
                      item.list.map((list)=>{
                        return(
                          <li className='font-inter text-[15px] not-italic font-normal leading-normal'>{list}</li>
                        )
                      })
                    }
           

                   </ul>
                  

                </div>

                {
                  item.id==2? (<img src={item.vector} alt="Vector1" className={`w-[100px] h-[100px]  md:mt-[.9rem] transform translate-y-4 md:translate-y-6`} /> )
                  :(<img src={item.vector} alt="Vector1" className={`w-[100px] h-[100px] mt-4 transform  translate-y-4 md:translate-y-6`} /> )
                }
                
    
              </div>
    
              
            </SwiperSlide>

            )
          })
        }


       
      
      </Swiper>
        </>
    )
    



}
export default SwiperComponent;
