import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const logo ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542464/logo_eksebu.svg"
const image="https://res.cloudinary.com/daop3bufa/image/upload/v1770629886/egyFlag_ilkajs.png"
const image2="https://res.cloudinary.com/daop3bufa/image/upload/v1770542424/image2_xawbgm.png"
const whatsIcon="https://res.cloudinary.com/daop3bufa/image/upload/v1770542383/whatsIcon_cfyn4k.svg"
const yellowWhatsIcon="https://res.cloudinary.com/daop3bufa/image/upload/v1770542382/yellowWhatsIcon_jkeucw.svg"
const offer ="https://res.cloudinary.com/daop3bufa/image/upload/v1770481638/offer_qztntp.svg"

const icon1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770630647/logo5_jyyq0f.svg"
const icon2 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770630641/logo2_ivhawu.svg"
const icon3 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770630632/logo3_nfwiey.svg"
const icon4 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770630607/logo4_rjzzpt.svg"
const icon5 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770630647/logo5_jyyq0f.svg"
const icon6 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770630648/logo6_qxxtrj.svg"
const icon7 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770630657/logo7_fvtdxg.svg"
const icon8 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542336/icon8_kirjpk.svg"
const icon9 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542347/icon9_t18l6m.png"
const icon10 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542288/icon10_vv0mpf.png"
const icon11 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542289/icon11_j2chsd.png"
const arrowIcon="https://res.cloudinary.com/daop3bufa/image/upload/v1770542287/arrowIcon_s1c9mx.svg"
const li="https://res.cloudinary.com/daop3bufa/image/upload/v1770481621/li_tr30cu.svg"
const laptop="https://res.cloudinary.com/daop3bufa/image/upload/v1770542477/laptop_nkh9jl.png"
const flag="https://res.cloudinary.com/daop3bufa/image/upload/v1770629915/egyFlag2_skriff.png"

const vector1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542357/Vector_tw2hkg.svg"
const vector2 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542361/Vector2_rakemt.svg"
const vector3 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542374/Vector3_qvxsaa.svg"
const vector4 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542364/Vector4_kf4wy1.svg"

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
}

// Animated Section Component
const AnimatedSection = ({ children, className, variants = fadeInUp, delay = 0 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const EgyptionLandingPage=()=>{
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.company || !formData.email || !formData.phone) {
            alert('يرجى ملء جميع الحقول المطلوبة');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'a17daa5b-725c-4354-913d-e7cd75d01bc2',
                    to: 'marketing@devext.io',
                    subject: 'طلب استشارة جديد من الموقع',
                    from_name: formData.name,
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    phone: formData.phone,
                    message: `
                        الاسم: ${formData.name}
                        اسم الشركة: ${formData.company}
                        البريد الإلكتروني: ${formData.email}
                        رقم الجوال: ${formData.phone}
                    `
                })
            });

            const result = await response.json();
            
            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', company: '', email: '', phone: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <>
        <div className="min-h-full bg-[#FEF9D0] bg-no-repeat bg-right-top bg-contain md:bg-right-top overflow-hidden"
        style={{ backgroundImage: `url(${image}) ` }}>
        

           <div className="flex flex-col gap-[8rem] md:gap-[15rem] lg:gap-[23rem]">
          
           {/* Logo Animation */}
           <motion.div 
               initial={{ opacity: 0, x: -100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="w-full md:w-[40%] px-4 md:px-0 md:ml-10 cursor-pointer"
           >
               <Link to="/">
                   <motion.img 
                       src={logo} 
                       className="w-40 md:w-64 h-12 md:h-16 mt-10 md:mt-20"
                       whileHover={{ scale: 1.05 }}
                       transition={{ duration: 0.2 }}
                   />
               </Link>
           </motion.div>

           {/* Hero Section */}
           <div className="mt-2 grid grid-cols-12 gap-4 md:gap-6 container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
               <motion.div 
                   className="col-span-12 md:col-span-6 order-2 md:order-1"
                   initial="hidden"
                   animate="visible"
                   variants={fadeInLeft}
                   transition={{ delay: 0.3 }}
               >
                   <motion.img 
                       src={image2} 
                       className="w-full max-w-md mx-auto md:max-w-none"
                       whileHover={{ scale: 1.02 }}
                       transition={{ duration: 0.3 }}
                   />
               </motion.div>
               <motion.div 
                   className="col-span-12 md:col-span-6 order-1 md:order-2"
                   initial="hidden"
                   animate="visible"
                   variants={staggerContainer}
               >
                   <motion.h1 
                       variants={staggerItem}
                       className="text-center md:text-right font-semibold uppercase text-[#2F5B44] text-2xl sm:text-3xl lg:text-4xl font-changa mb-2 md:mb-4"
                   >
                       ERP حوّل أعمالك في مصر بنظام
                   </motion.h1>
                   <motion.h1 
                       variants={staggerItem}
                       className="text-center md:text-right font-semibold uppercase text-[#2F5B44] text-2xl sm:text-3xl lg:text-4xl font-changa"
                   >
                       ذكي ينمو معك
                   </motion.h1>
                   <motion.p 
                       variants={staggerItem}
                       className="text-right font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa mt-4 md:mt-7"
                   >
                       Odoo ERP ننفّذ ونخصّص
                   </motion.p>
                   <motion.p 
                       variants={staggerItem}
                       className="text-right font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa"
                   >
                       (UX/UI) لربط المبيعات والمحاسبة والمخزون والعمليات في منصة واحدة، مع تطوير موقع أو تطبيق احترافي وتجربة مستخدم
                   </motion.p>
                   <motion.p 
                       variants={staggerItem}
                       className="text-right font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa"
                   >
                       . رفع الكفاءة وتسرّع النمو — من التخطيط إلى الإطلاق والدعم المستمر
                   </motion.p>

                   <motion.a 
                       href="https://wa.me/201200064762" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="mx-auto md:ml-auto md:mr-0 rounded-full border-2 border-[#2F5B44] px-6 md:px-10 py-3 md:py-4 flex items-center justify-center gap-2 mt-6 md:mt-10"
                       variants={staggerItem}
                       whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(47, 91, 68, 0.3)" }}
                       whileTap={{ scale: 0.95 }}
                   >
                       <img src={whatsIcon} className="w-5 h-5 md:w-6 md:h-6" />
                       <span className="text-center md:text-right font-medium uppercase text-[#2F5B44] text-base md:text-xl font-changa">احصل علي خطة مخصصة الان</span>
                   </motion.a>
               </motion.div>
           </div>
           </div>

           {/* Section Two - Trust & Form */}
           <div className="mt-[3rem] md:mt-[8rem] grid grid-cols-12 gap-6 md:gap-10 container mx-auto max-w-7xl mb-10 h-full px-4 md:px-6 lg:px-8">
               <AnimatedSection 
                   className="col-span-12 lg:col-span-5 order-2 lg:order-1"
                   variants={fadeInLeft}
               >
                   {/* Consultation Form */}
                   <motion.div 
                       className="rounded-2xl h-full bg-[#2F5B44] overflow-hidden shadow-lg"
                       whileHover={{ boxShadow: "0 25px 50px rgba(47, 91, 68, 0.4)" }}
                       transition={{ duration: 0.3 }}
                   >
                       <div className="bg-[#2F5B44] py-4 md:py-6 px-4">
                           <h2 className="text-right text-[#FEF9D0] text-xl md:text-2xl font-changa font-semibold mt-1">
                               احجز استشارة مجانية
                           </h2>
                       </div>
                       
                       <form onSubmit={handleSubmit} className="px-2 md:px-3 mt-4 shadow-lg rounded-2xl mb-5">
                           <motion.div 
                               className="p-4 md:p-6 space-y-4 md:space-y-5 bg-[#FEF9D0] shadow-lg rounded-2xl"
                               initial="hidden"
                               animate="visible"
                               variants={staggerContainer}
                           >
                               {submitStatus === 'success' && (
                                   <motion.div 
                                       initial={{ opacity: 0, scale: 0.9 }}
                                       animate={{ opacity: 1, scale: 1 }}
                                       className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-right font-changa"
                                   >
                                       تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
                                   </motion.div>
                               )}
                               
                               {submitStatus === 'error' && (
                                   <motion.div 
                                       initial={{ opacity: 0, scale: 0.9 }}
                                       animate={{ opacity: 1, scale: 1 }}
                                       className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-right font-changa"
                                   >
                                       حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.
                                   </motion.div>
                               )}

                               {/* Form Fields with stagger animation */}
                               {[
                                   { name: 'name', label: 'الاسم*', type: 'text', icon: vector1 },
                                   { name: 'company', label: 'اسم الشركة*', type: 'text', icon: vector2 },
                                   { name: 'email', label: 'البريد الإلكتروني*', type: 'email', icon: vector3 },
                                   { name: 'phone', label: 'رقم الجوال*', type: 'tel', icon: vector4 }
                               ].map((field) => (
                                   <motion.div 
                                       key={field.name}
                                       className="relative"
                                       variants={staggerItem}
                                   >
                                       <div className="flex items-center justify-end gap-3 mb-2">
                                           <label className="text-[#2F5B44] text-sm font-medium font-changa">{field.label}</label>
                                           <img src={field.icon} className="w-5 h-5" />
                                       </div>
                                       <motion.input
                                           type={field.type}
                                           required
                                           name={field.name}
                                           value={formData[field.name]}
                                           onChange={handleInputChange}
                                           className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60 text-right"
                                           placeholder=""
                                           whileFocus={{ scale: 1.02 }}
                                       />
                                   </motion.div>
                               ))}

                               <motion.div className="pt-4" variants={staggerItem}>
                                   <motion.button 
                                       type="submit"
                                       disabled={isSubmitting}
                                       className="bg-[#FEF9D0] rounded-3xl border-2 border-[#2F5B44] px-6 md:px-8 py-2 font-changa text-base md:text-lg flex items-center gap-2 hover:bg-[#243f33]/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                       whileHover={{ scale: 1.05 }}
                                       whileTap={{ scale: 0.95 }}
                                   >
                                       {isSubmitting ? (
                                           <span className="text-[#2F5B44]">جاري الإرسال...</span>
                                       ) : (
                                           <>
                                               <motion.img 
                                                   src={arrowIcon} 
                                                   className="w-3 h-3"
                                                   animate={{ x: [0, -5, 0] }}
                                                   transition={{ repeat: Infinity, duration: 1.5 }}
                                               />
                                               <span className="text-[#2F5B44]">أحجز الان</span>
                                           </>
                                       )}
                                   </motion.button>
                               </motion.div>
                           </motion.div>
                       </form>
                   </motion.div>
               </AnimatedSection>

               <AnimatedSection 
                   className="col-span-12 lg:col-span-7 order-1 lg:order-2"
                   variants={fadeInRight}
               >
                   <motion.h1 
                       className="text-center font-semibold uppercase text-[#2F5B44] text-2xl sm:text-3xl lg:text-4xl font-changa mb-5"
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6 }}
                   >
                       شركات مصرية تثق بنا لتنفيذ أنظمتها الرقمية
                   </motion.h1>
                   <motion.div
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6, delay: 0.2 }}
                   >
                       <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa mt-4 md:mt-7">Devext انضم إلى قائمة عملائنا في المملكة الذين اختاروا</p>
                       <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa"><span className="lowercase">Odoo</span> ERP لتنفيذ وتخصيص</p>
                       <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa"> وحلول رقمية متكاملة ساعدتهم على تنظيم أعمالهم، تحسين الأداء، والتوسّع بثقة داخل السوق السعودي</p>
                   </motion.div>
                   
                   <motion.div 
                       className="mt-6 md:mt-10 grid grid-cols-12 gap-4 md:gap-6"
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       variants={staggerContainer}
                   >
                       {[
                           { icon: icon1, cols: "col-span-6 sm:col-span-4" },
                           { icon: icon2, cols: "col-span-6 sm:col-span-4" },
                           { icon: icon3, cols: "col-span-6 sm:col-span-4" },
                           { icon: icon4, cols: "col-span-6 sm:col-span-4" },
                           { icon: icon5, cols: "col-span-4 sm:col-span-2" },
                           { icon: icon6, cols: "col-span-4 sm:col-span-3" },
                           { icon: icon7, cols: "col-span-4 sm:col-span-3" },
                           { icon: icon8, cols: "col-span-12" }
                       ].map((item, index) => (
                           <motion.div 
                               key={index}
                               className={`${item.cols} flex items-center justify-center`}
                               variants={staggerItem}
                               whileHover={{ scale: 1.1, y: -5 }}
                               transition={{ duration: 0.2 }}
                           >
                               <img src={item.icon} className="w-32 md:w-48 h-14 md:h-20 object-contain" />
                           </motion.div>
                       ))}
                   </motion.div>
               </AnimatedSection>
           </div>

           {/* Packages Section */}
           <AnimatedSection className="mt-[3rem] md:mt-[5rem] container mx-auto max-w-7xl mb-5 px-4 md:px-6 lg:px-8">
               <motion.h1 
                   className="text-center font-semibold uppercase text-[#2F5B44] text-2xl sm:text-3xl lg:text-4xl font-changa mb-5"
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6 }}
               >
                   باقات مرنة تناسب حجم عملك ومرحلة نموك!
               </motion.h1>
               <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: 0.2 }}
               >
                   <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa"><span className="lowercase">Odoo</span> ERP اختر الباقة التي تناسب احتياجات شركتك الحالية، سواء كنت في مرحلة البداية أو التوسّع. جميع باقاتنا مبنية على</p>
                   <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa">وقابلة للتطوير، مع تنفيذ احترافي ودعم مستمر يضمن لك أفضل عائد من استثمارك</p>
               </motion.div>

               <motion.div 
                   className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center" 
                   dir="rtl"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={staggerContainer}
               >
                   {/* Package Cards */}
                   {[
                       {
                           title: "باقة المؤسسات",
                           subtitle: "الأفضل للوكالات الكبيرة",
                           description: "شركات ذات عمليات معقدة أو احتياجات خاصة وتحتاج حلول مخصصة بالكامل",
                           features: [
                               "(BUSINESS FLOW) تحليل مفصّل للعمليات",
                               "إعداد 0000 مع تخصيصات متوسطة",
                               "(WORKFLOWS) تخصيص النماذج، التقارير، وسير العمل",
                               "ربط الأقسام المختلفة داخل النظام",
                               "تهيئة التقارير ولوحات التحكم",
                               "تدريب شامل للفريق",
                               "دعم فني موسّع بعد الإطلاق"
                           ],
                           isHighlighted: false,
                           order: "order-3 md:order-1"
                       },
                       {
                           title: "الباقة الاحترافية",
                           subtitle: "الأفضل للوكالات في مرحلة النمو",
                           description: "شركات لديها عمليات أو أقسام متعددة وتحتاج تخصيص وتحكم أكبر",
                           features: [
                               "(BUSINESS FLOW) تحليل مفصّل للعمليات",
                               "إعداد 0000 مع تخصيصات متوسطة",
                               "(WORKFLOWS) تخصيص النماذج، التقارير، وسير العمل",
                               "ربط الأقسام المختلفة داخل النظام",
                               "تهيئة التقارير ولوحات التحكم",
                               "تدريب شامل للفريق",
                               "دعم فني موسّع بعد الإطلاق"
                           ],
                           isHighlighted: true,
                           order: "order-2 md:order-2"
                       },
                       {
                           title: "باقة البداية",
                           subtitle: "الأفضل للوكالات الصغيرة",
                           description: "مناسبة للشركات الصغيرة ورواد الأعمال",
                           features: [
                               "تحليل أساسي لاحتياجات العمل",
                               "0000 وتشغيل الموديولات المطلوبة",
                               "(SETUP) تهيئة النظام بالإعدادات القياسية (STANDARD)",
                               "إعداد المستخدمين والصلاحيات",
                               "(SAMPLE / OPENING DATA) إدخال بيانات أولية",
                               "تدريب أساسي للفريق",
                               "دعم فني بعد الإطلاق"
                           ],
                           isHighlighted: false,
                           order: "order-1 md:order-3"
                       }
                   ].map((pkg, index) => (
                       <motion.div 
                           key={index}
                           className={`rounded-3xl ${pkg.isHighlighted ? 'bg-[#2F5B44]/70 border-[#2F5B44]/70' : 'bg-[#2F5B44] border-[#2F5B44]'} border-2 overflow-hidden shadow-lg flex flex-col ${pkg.isHighlighted ? 'relative' : ''} ${pkg.order}`}
                           variants={staggerItem}
                           whileHover={{ 
                               y: -10, 
                               boxShadow: "0 30px 60px rgba(47, 91, 68, 0.4)",
                               transition: { duration: 0.3 }
                           }}
                       >
                           {pkg.isHighlighted && (
                               <motion.img 
                                   src={offer} 
                                   className="absolute top-[-6%] left-0 w-24 h-24"
                                   animate={{ rotate: [0, 5, -5, 0] }}
                                   transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                               />
                           )}
                           
                           <div className="relative">
                               <div className={`${pkg.isHighlighted ? '' : 'bg-[#2F5B44]'} mt-10 text-center font-semibold uppercase text-custom-cream text-3xl font-changa`}>
                                   {pkg.title}
                               </div>
                           </div>

                           <div>
                               <p className="text-center font-medium uppercase text-custom-cream text-lg font-changa mt-5 mb-5">{pkg.subtitle}</p>
                           </div>
                           
                           <div className="py-3 px-3 h-full">
                               <div className={`p-5 flex-grow ${pkg.isHighlighted ? 'bg-[#FEF9D0]/90' : 'bg-[#FEF9D0]'} rounded-3xl`}>
                                   <h1 className="text-center font-medium uppercase text-custom-green text-lg font-changa mt-3">{pkg.description}</h1>
                                   <h4 className="text-[#2F5B44] text-right font-medium uppercase text-lg font-changa mt-10 mb-7">: تشمل الباقة</h4>
                                   <ul className="space-y-2 text-right text-[#2F5B44] font-normal uppercase text-base font-changa">
                                       {pkg.features.map((feature, fIndex) => (
                                           <motion.li 
                                               key={fIndex}
                                               className="flex items-start gap-2 justify-end"
                                               initial={{ opacity: 0, x: 20 }}
                                               whileInView={{ opacity: 1, x: 0 }}
                                               viewport={{ once: true }}
                                               transition={{ delay: fIndex * 0.1 }}
                                           >
                                               <span>{feature}</span>
                                               <span className="text-[#2F5B44]">•</span>
                                           </motion.li>
                                       ))}
                                   </ul>

                                   <div className="p-4 pt-0 mt-10">
                                       <motion.a 
                                           href="https://wa.me/201200064762" 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           className={`w-full rounded-full border-2 ${pkg.isHighlighted ? 'bg-[#2F5B44]/80 border-[#2F5B44]' : 'border-[#2F5B44]'} py-3 flex items-center justify-center gap-2 transition-colors group`}
                                           whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(47, 91, 68, 0.3)" }}
                                           whileTap={{ scale: 0.95 }}
                                       >
                                           <img src={pkg.isHighlighted ? yellowWhatsIcon : whatsIcon} className="w-5 h-5" />
                                           <span className={`${pkg.isHighlighted ? 'text-[#FEF9D0]' : 'text-[#2F5B44]'} font-changa font-medium`}>احصل علي عرض سعر</span>
                                       </motion.a>
                                   </div>
                               </div>
                           </div>
                       </motion.div>
                   ))}
               </motion.div>
           </AnimatedSection>

           {/* Benefits Cards Section */}
           <AnimatedSection className="mt-[3rem] md:mt-[5rem] container mx-auto max-w-7xl mb-10 px-4 md:px-6 lg:px-8">
               <motion.div 
                   className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10"
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={staggerContainer}
               >
                   {[
                       { icon: icon9, lines: ["تنفيذ احترافي مع", "تدريب كامل لفريقك"] },
                       { icon: icon10, lines: ["خطط دفع مرنة تناسب", "ميزانية عملك"] },
                       { icon: icon11, lines: ["دعم فني مجاني لمدة", "شهرين بعد الإطلاق"] }
                   ].map((benefit, index) => (
                       <motion.div 
                           key={index}
                           className="rounded-3xl bg-[#2F5B44]/70 p-6 md:p-10 flex w-full md:w-72 px-6 pt-8 md:pt-12 pb-10 md:pb-16 justify-center items-center gap-4"
                           variants={staggerItem}
                           whileHover={{ 
                               y: -10, 
                               scale: 1.05,
                               boxShadow: "0 20px 40px rgba(47, 91, 68, 0.3)",
                               transition: { duration: 0.3 }
                           }}
                       >
                           <div className="flex flex-col gap-3">
                               {benefit.lines.map((line, lIndex) => (
                                   <p key={lIndex} className="text-right font-medium uppercase text-custom-cream text-base md:text-lg font-changa whitespace-nowrap">{line}</p>
                               ))}
                           </div>
                           <motion.img 
                               src={benefit.icon} 
                               className="w-12 h-12 md:w-16 md:h-16"
                               animate={{ rotate: [0, 5, -5, 0] }}
                               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: index * 0.3 }}
                           />
                       </motion.div>
                   ))}
               </motion.div>
           </AnimatedSection>

           {/* Last Section - ERP Benefits */}
           <div className="grid grid-cols-12 gap-4 md:gap-6 mt-[3rem] md:mt-[8rem] px-4 md:px-0 relative pb-[6rem] sm:pb-[8rem] md:pb-0">
               <motion.img 
                   src={laptop} 
                   className="absolute w-[60%] sm:w-[50%] md:w-[40%] lg:w-auto -bottom-[4rem] sm:-bottom-[5rem] md:-bottom-[8rem] left-[5%] sm:left-[8%] md:left-[10%] z-10"
                   initial={{ opacity: 0, y: 100 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
               />

               <AnimatedSection 
                   className="col-span-12 md:col-span-6 order-2 md:order-1 bg-[#FEF9D0] p-4 md:p-10 pb-[4rem] sm:pb-[5rem] md:pb-10"
                   variants={fadeInLeft}
               >
                   <motion.ul 
                       className="mt-6 md:mt-20 space-y-6 md:space-y-10 text-right font-medium uppercase text-[#2F5B44] text-base md:text-xl font-changa"
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       variants={staggerContainer}
                   >
                       {[
                           "منصة واحدة تدير كل أعمالك بذكاء : اربط المبيعات، المحاسبة، المخزون والعمليات اليومية في نظام متكامل وسهل الاستخدام",
                           "قرارات أسرع مبنية على بيانات دقيقة : لوحات تحكم وتقارير لحظية تساعدك على متابعة الأداء واتخاذ القرار في الوقت الصحيح",
                           "تشغيل أكثر كفاءة وتكلفة أقل : أتمتة العمليات وتقليل الأخطاء يوفر عليك الوقت والجهد ويخفض التكاليف التشغيلية."
                       ].map((text, index) => (
                           <motion.li 
                               key={index}
                               className="flex items-start gap-2 justify-end"
                               variants={staggerItem}
                           >
                               <span className="text-right font-medium uppercase text-custom-green text-base md:text-xl font-changa">{text}</span>
                               <span className="text-[#FEF9D0]">
                                   <img src={li} className="w-4 h-4 md:w-5 md:h-5" />
                               </span>
                           </motion.li>
                       ))}
                   </motion.ul>
               </AnimatedSection>

               <AnimatedSection 
                   className="col-span-12 md:col-span-6 order-1 md:order-2 bg-[#2F5B44] p-4 md:p-10 rounded-2xl md:rounded-none md:rounded-l-3xl"
                   variants={fadeInRight}
               >
                   <motion.p 
                       className="text-center md:text-right font-semibold uppercase text-custom-cream text-2xl md:text-4xl font-changa mt-4 md:mt-10"
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6 }}
                   >
                       كيف يساعدك نظام Odoo ERP على نمو أعمالك؟
                   </motion.p>

                   <motion.ul 
                       className="mt-8 md:mt-20 space-y-6 md:space-y-10 text-right font-medium uppercase text-custom-cream text-base md:text-xl font-changa"
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       variants={staggerContainer}
                   >
                       {[
                           "منصة واحدة تدير كل أعمالك بذكاء : اربط المبيعات، المحاسبة، المخزون والعمليات اليومية في نظام متكامل وسهل الاستخدام",
                           "قرارات أسرع مبنية على بيانات دقيقة : لوحات تحكم وتقارير لحظية تساعدك على متابعة الأداء واتخاذ القرار في الوقت الصحيح",
                           "تشغيل أكثر كفاءة وتكلفة أقل : أتمتة العمليات وتقليل الأخطاء يوفر عليك الوقت والجهد ويخفض التكاليف التشغيلية."
                       ].map((text, index) => (
                           <motion.li 
                               key={index}
                               className="flex items-start gap-2 justify-end"
                               variants={staggerItem}
                           >
                               <span>{text}</span>
                               <span className="text-[#FEF9D0]">•</span>
                           </motion.li>
                       ))}
                   </motion.ul>

                   <motion.div 
                       className="p-2 md:p-4 pt-0 mt-6 md:mt-10 flex justify-center md:justify-end"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.5 }}
                   >
                       <motion.a 
                           href="https://wa.me/201200064762" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="px-6 md:px-10 bg-[#2F5B44]/80 py-3 flex items-center justify-center gap-2 hover:bg-[#2F5B44] group rounded-full border-2 border-custom-cream"
                           whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(254, 249, 208, 0.3)" }}
                           whileTap={{ scale: 0.95 }}
                       >
                           <img src={yellowWhatsIcon} className="w-5 h-5" />
                           <span className="text-[#FEF9D0] font-changa font-medium text-sm md:text-base">احصل علي عرض سعر</span>
                       </motion.a>
                   </motion.div>
               </AnimatedSection>
           </div>

           {/* Flag Image */}
           <motion.div 
               className="mt-[2rem] sm:mt-[3rem] md:mt-20"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
           >
               <img src={flag} className="w-full object-cover" />
           </motion.div>

           {/* Footer */}
           <motion.div 
               className="mt-6 md:mt-[8rem] container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 border-t border-[#2F5B44] py-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-0"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
           >
               <p className="font-medium uppercase text-custom-green text-xs md:text-base font-inter">©2025 devext. allrights reserved</p>
               <motion.p 
                   className="font-medium uppercase text-custom-green text-xs md:text-base font-inter cursor-pointer"
                   whileHover={{ scale: 1.05 }}
               >
                   Privacy policy
               </motion.p>
               <motion.p 
                   className="font-medium uppercase text-custom-green text-xs md:text-base font-inter cursor-pointer"
                   whileHover={{ scale: 1.05 }}
               >
                   Accessibility
               </motion.p>
               <motion.p 
                   className="font-medium uppercase text-custom-green text-xs md:text-base font-inter"
                   whileHover={{ scale: 1.05 }}
               >
                   Call us : 01200064762
               </motion.p>
           </motion.div>
            
        </div>
        </>
    )
}