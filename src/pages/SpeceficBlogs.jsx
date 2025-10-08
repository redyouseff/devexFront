
import { Link } from 'react-router-dom';
import Navbar2 from "../components/Navbar2";
import SEO from "../components/SEO";




const SpeceficBlogs = () => {
  
  const blogPostStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Explore the Latest Digital Trends",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "url": "https://devext.io/blogs/1",
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "author": {
      "@type": "Organization",
      "name": "Devext"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Devext",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devext.io/images/navbar/Logo_Devext-removebg-preview 1.png"
      }
    },
    "image": "https://devext.io/images/blogs/39fe9b9d1d42d713a96f4061d8de02a0c59fabde.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://devext.io/blogs/1"
    }
  };

  return (
    <>
      <SEO 
        title="Explore the Latest Digital Trends - Devext Blog"
        description="Discover the latest digital and technical trends in the world of development and programming. A comprehensive article about the latest technologies and trends"
        keywords="digital trends, modern technologies, development, programming, new technologies, tech trends, innovations"
        canonical="/blogs/1"
        structuredData={blogPostStructuredData}
      />
      <div className="min-h-screen bg-[#FEF9D0]">
        <Navbar2 />   

      <main className="container mx-auto max-w-[90rem]  px-4 sm:px-6 py-8">
        {/* Title */}

        <div className="flex items-center justify-between  mt-[10rem] mb-6"> 
            <div>
            <h1 className="text-5xl sm:text-3xl font-semibold text-[#2F5B44]">Explore the Latest Digital Trends</h1>     
       
            </div>
            <div className="shrink-0 flex items-center gap-2 mr-[2rem]">                                                              
            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050824/Group_1_lgh8oa.svg" alt="Published icon" className="w-4 h-4" />
            <span className="hidden sm:inline text-[#2F5B44] font-bold">Published on</span>
            <span className="text-[rem] text-[#2F5B44]" >18 Sep. 2025</span>       
          </div>
        </div>
      
       
        {/* Meta */}
        <div className="flex items-center justify-between mt-2 text-[#2F5B44] text-sm mb-[2rem]">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
          </p>
         
        </div>

        {/* Hero image with author pill */}
        <div className="mt-4 rounded-xl overflow-hidden relative">
          <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg" alt="Blog cover" className="w-full h-auto object-cover" />
          <span className="ml-[2rem] mb-[2rem] absolute bottom-3 left-3 inline-flex items-center gap-2 text-white text-lg">
            Written By
            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050825/Ellipse_9_kvhzov.svg" alt="DEVEXT logo" className="w-12 h-12" />
          </span>
        </div>

        {/* Paragraphs */}                       
        <section className="mt-6 space-y-6 text-[#2F5B44] leading-relaxed">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
 
        </section>

                {/* Two-column section */}
        <section className="mt-8">
          {/* Images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl overflow-hidden">
              <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg" alt="Analytics dashboard" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050847/1cc2cadd3aac660d21d6e6394f98d416cda2ffda_a3irmh.jpg" alt="Reports and charts" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Text content below images */}
          <div className="space-y-6 text-[#2F5B44] leading-relaxed">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
            Stay ahead of the curve with our curated insights into today’s fast-moving digital world. From innovative technologies to creative design strategies and market shifts, we bring you the latest digital trends shaping industries and inspiring fresh ideas. 
            </p>


            

          </div>
        </section>

        {/* Right aligned back button */}
        <div className="mt-6 flex justify-end">    
          <Link
            to="/blogs"
            className="border-2 border-[#2F5B44] text-[#2F5B44] px-10 py-5 rounded-full hover:bg-[#2F5B44] hover:text-[#FEF9D0] transition-all duration-200 flex items-center group font-semibold text-xl"
          >
            Back To Blogs
            <span className="relative w-4 h-4 ml-2 inline-block">
              <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050828/Vector4_gerqlb.svg" alt="arrow" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
              <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052693/Vector_uzjrho.svg" alt="arrow hover" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
            </span>
          </Link>
        </div>


      </main>
      </div>
    </>
  );
};

export default SpeceficBlogs;  