import { Link } from "react-router-dom"
import { useState } from "react"

const logo ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542464/logo_eksebu.svg"
const image="https://res.cloudinary.com/daop3bufa/image/upload/v1770542668/image1_ap3jn0.svg"
const image2="https://res.cloudinary.com/daop3bufa/image/upload/v1770542424/image2_xawbgm.png"
const whatsIcon="https://res.cloudinary.com/daop3bufa/image/upload/v1770542383/whatsIcon_cfyn4k.svg"
const yellowWhatsIcon="https://res.cloudinary.com/daop3bufa/image/upload/v1770542382/yellowWhatsIcon_jkeucw.svg"
const offer ="https://res.cloudinary.com/daop3bufa/image/upload/v1770481638/offer_qztntp.svg"

const icon1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542288/icon1_i2s5n8.svg"
const icon2 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542291/icon2_njwvyj.svg"
const icon3 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542346/icon3_dpnc1m.svg"
const icon4 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542310/icon4_raqae7.svg"
const icon5 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542358/icon5_r8i3tr.svg"
const icon6 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542346/icon6_ehgxa8.svg"
const icon7 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542344/icon7_japduy.svg"
const icon8 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542336/icon8_kirjpk.svg"
const icon9 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542347/icon9_t18l6m.png"
const icon10 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542288/icon10_vv0mpf.png"
const icon11 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542289/icon11_j2chsd.png"
const arrowIcon="https://res.cloudinary.com/daop3bufa/image/upload/v1770542287/arrowIcon_s1c9mx.svg"
const li="https://res.cloudinary.com/daop3bufa/image/upload/v1770481621/li_tr30cu.svg"
const laptop="https://res.cloudinary.com/daop3bufa/image/upload/v1770542477/laptop_nkh9jl.png"
const flag="https://res.cloudinary.com/daop3bufa/image/upload/v1770542343/flag_bkfe59.png"

const vector1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542357/Vector_tw2hkg.svg"
const vector2 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542361/Vector2_rakemt.svg"
const vector3 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542374/Vector3_qvxsaa.svg"
const vector4 ="https://res.cloudinary.com/daop3bufa/image/upload/v1770542364/Vector4_kf4wy1.svg"
 
  


export const LandingPage =()=>{
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate all fields
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
                    access_key: 'a17daa5b-725c-4354-913d-e7cd75d01bc2', // Replace with actual key from web3forms.com
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
        <div className="min-h-full bg-[#FEF9D0] bg-no-repeat bg-right bg-contain bg-top md:bg-right-top"
        style={{ backgroundImage: `url(${image}) ` }}>
        

           <div className="flex flex-col gap-[8rem] md:gap-[15rem] lg:gap-[23rem]">
          
           <div className="w-full md:w-[40%] px-4 md:px-0 md:ml-10 cursor-pointer">
           <Link to="/">
           <img src={logo} className="w-40 md:w-64 h-12 md:h-16 mt-10 md:mt-20" />
           </Link>
           </div>

           {/* first section */}
           <div className="mt-2 grid grid-cols-12 gap-4 md:gap-6 container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                <img src={image2} className="w-full max-w-md mx-auto md:max-w-none" />
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2">
                <h1 className="text-center md:text-right font-semibold uppercase text-[#2F5B44] text-2xl sm:text-3xl lg:text-4xl font-changa mb-2 md:mb-4">ERP حوّل أعمالك في السعودية بنظام</h1>
                <h1 className="text-center md:text-right font-semibold uppercase text-[#2F5B44] text-2xl sm:text-3xl lg:text-4xl font-changa">ذكي ينمو معك</h1>
                <p className="text-right font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa mt-4 md:mt-7">Odoo ERP ننفّذ ونخصّص</p>
                <p className="text-right font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa">(UX/UI) لربط المبيعات والمحاسبة والمخزون والعمليات في منصة واحدة، مع تطوير موقع أو تطبيق احترافي وتجربة مستخدم</p>
                <p className="text-right font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa"> . رفع الكفاءة وتسرّع النمو — من التخطيط إلى الإطلاق والدعم المستمر</p>


                <a href="https://wa.me/201200064762" target="_blank" rel="noopener noreferrer" className="mx-auto md:ml-auto md:mr-0 rounded-full border-2 border-[#2F5B44] px-6 md:px-10 py-3 md:py-4 flex items-center justify-center gap-2 mt-6 md:mt-10">
                    <img src={whatsIcon} className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-center md:text-right font-medium uppercase text-[#2F5B44] text-base md:text-xl font-changa">احصل علي خطة مخصصة الان</span>
                </a>

            </div>

            

           </div>
         
          
           
        


           
          

           </div>

            



           {/* section two  */}

           <div className="mt-[3rem] md:mt-[8rem] grid grid-cols-12 gap-6 md:gap-10 container mx-auto max-w-7xl mb-10 h-full px-4 md:px-6 lg:px-8">
           <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                {/* Consultation Form */}
                <div className="rounded-2xl h-full bg-[#2F5B44] overflow-hidden shadow-lg">
                    {/* Form Header */}
                    <div className="bg-[#2F5B44] py-4 md:py-6 px-4">
                        <h2 className="text-right text-[#FEF9D0] text-xl md:text-2xl font-changa font-semibold mt-1">
                            احجز استشارة مجانية
                        </h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="px-2 md:px-3 mt-4 shadow-lg rounded-2xl mb-5">
                        {/* Form Body */}
                        <div className="p-4 md:p-6 space-y-4 md:space-y-5 bg-[#FEF9D0] shadow-lg rounded-2xl">
                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-right font-changa">
                                    تم إرسال طلبك بنجاح! سنتواصل معك قريباً.
                                </div>
                            )}
                            
                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-right font-changa">
                                    حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.
                                </div>
                            )}

                            {/* Name Field */}
                            <div className="relative">
                                <div className="flex items-center justify-end gap-3 mb-2">
                                    <label className="text-[#2F5B44] text-sm font-medium font-changa">الاسم*</label>
                                    <img src={vector1} className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60 text-right"
                                    placeholder=""
                                />
                            </div>

                            {/* Company Name Field */}
                            <div className="relative">
                                <div className="flex items-center justify-end gap-3 mb-2">
                                    <label className="text-[#2F5B44] text-sm font-medium font-changa">اسم الشركة*</label>
                                    <img src={vector2} className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60 text-right"
                                    placeholder=""
                                />
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <div className="flex items-center justify-end gap-3 mb-2">
                                    <label className="text-[#2F5B44] text-sm font-medium font-changa">البريد الإلكتروني*</label>
                                    <img src={vector3} className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60 text-right"
                                    placeholder=""
                                />
                            </div>

                            {/* Phone Field */}
                            <div className="relative">
                                <div className="flex items-center justify-end gap-3 mb-2">
                                    <label className="text-[#2F5B44] text-sm font-medium font-changa">رقم الجوال*</label>
                                    <img src={vector4} className="w-5 h-5" />
                                </div>
                                <input
                                    type="tel"
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60 text-right"
                                    placeholder=""
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#FEF9D0] rounded-3xl border-2 border-[#2F5B44] px-6 md:px-8 py-2 font-changa text-base md:text-lg flex items-center gap-2 hover:bg-[#243f33]/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="text-[#2F5B44]">جاري الإرسال...</span>
                                    ) : (
                                        <>
                                            <img src={arrowIcon} className="w-3 h-3" />
                                            <span className="text-[#2F5B44]">أحجز الان</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
                <h1 className="text-center font-semibold uppercase text-[#2F5B44] text-2xl sm:text-3xl lg:text-4xl font-changa mb-5">شركات سعودية تثق بنا لتنفيذ أنظمتها الرقمية</h1>
                <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa mt-4 md:mt-7">Devext انضم إلى قائمة عملائنا في المملكة الذين اختاروا</p>
                <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa"><span className="lowercase">Odoo</span> ERP لتنفيذ وتخصيص</p>
                <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa"> وحلول رقمية متكاملة ساعدتهم على تنظيم أعمالهم، تحسين الأداء، والتوسّع بثقة داخل السوق السعودي</p>
                <div className="mt-6 md:mt-10 grid grid-cols-12 gap-4 md:gap-6">
                    <div className="col-span-6 sm:col-span-4 flex items-center justify-center">
                        <img src={icon1} className="w-32 md:w-48 h-14 md:h-20 object-contain" />
                    </div>
                    <div className="col-span-6 sm:col-span-4 flex items-center justify-center">
                        <img src={icon2} className="w-32 md:w-48 h-14 md:h-20 object-contain" />
                    </div>
                    <div className="col-span-6 sm:col-span-4 flex items-center justify-center">
                        <img src={icon3} className="w-32 md:w-48 h-14 md:h-20 object-contain" />
                    </div>


                    <div className="col-span-6 sm:col-span-4 flex items-center justify-center">
                        <img src={icon4} className="w-32 md:w-48 h-14 md:h-20 object-contain" />
                    </div>
                   
                    <div className="col-span-4 sm:col-span-2 flex items-center justify-center">
                        <img src={icon5} className="w-24 md:w-48 h-14 md:h-20 object-contain" />
                    </div>
                    <div className="col-span-4 sm:col-span-3 flex items-center justify-center">
                        <img src={icon6} className="w-24 md:w-48 h-14 md:h-20 object-contain" />
                    </div>
                    <div className="col-span-4 sm:col-span-3 flex items-center justify-center">
                        <img src={icon7} className="w-24 md:w-48 h-14 md:h-20 object-contain" />
                    </div>

                    <div className="col-span-12 flex items-center justify-center">
                        <img src={icon8} className="w-32 md:w-48 h-14 md:h-20 object-contain" />
                    </div>


                </div>

            </div>

           </div>


           <div className="mt-[3rem] md:mt-[5rem] container mx-auto max-w-7xl mb-5 px-4 md:px-6 lg:px-8">
            <h1 className="text-center font-semibold uppercase text-[#2F5B44] text-2xl sm:text-3xl lg:text-4xl font-changa mb-5">باقات مرنة تناسب حجم عملك ومرحلة نموك!</h1>
            <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa"><span className="lowercase">Odoo</span> ERP اختر الباقة التي تناسب احتياجات شركتك الحالية، سواء كنت في مرحلة البداية أو التوسّع. جميع باقاتنا مبنية على</p>
            <p className="text-center font-medium uppercase text-[#2F5B44] text-base lg:text-lg font-changa">وقابلة للتطوير، مع تنفيذ احترافي ودعم مستمر يضمن لك أفضل عائد من استثمارك</p>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center" dir="rtl">
                
                {/* باقة المؤسسات - Enterprise Package */}
                <div className="rounded-3xl bg-[#2F5B44] border-2 border-[#2F5B44] overflow-hidden shadow-lg flex flex-col order-3 md:order-1">
                    {/* Ribbon */}
                    <div className="relative">
                        <div className="bg-[#2F5B44] mt-10 text-center font-semibold uppercase text-custom-cream text-3xl font-changa">
                        باقة المؤسسات 
                        </div>
                        
                    </div>

                    <div>
                        <p className="text-center font-medium uppercase text-custom-cream text-lg font-changa mt-5 mb-5">الأفضل للوكالات الكبيرة</p>
                    </div>
                    
                   
                    
                    
                    
                    <div className="py-3 px-3 h-full">
                        {/* Features Section */}
                    <div className="p-5 flex-grow bg-[#FEF9D0] rounded-3xl  ">
                        <h1 className="text-center font-medium uppercase text-custom-green text-lg font-changa mt-3">شركات ذات عمليات معقدة أو احتياجات خاصة وتحتاج حلول مخصصة بالكامل</h1>
                        <h4 className="text-[#2F5B44] text-right font-medium uppercase text-custom-green text-lg font-changa  mt-10 mb-7">: تشمل الباقة   </h4>
                        <ul className="space-y-2 text-right text-[#2F5B44] text-right font-normal uppercase text-custom-green text-base font-changa">
                            <li className="flex items-start gap-2 justify-end">
                                <span>(BUSINESS FLOW) تحليل مفصّل للعمليات</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>إعداد 0000 مع تخصيصات متوسطة</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>(WORKFLOWS) تخصيص النماذج، التقارير، وسير العمل</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>ربط الأقسام المختلفة داخل النظام</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>تهيئة التقارير ولوحات التحكم</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>تدريب شامل للفريق</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>دعم فني موسّع بعد الإطلاق</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                        </ul> 




                        <div className="p-4 pt-0 mt-10">
                        <a href="https://wa.me/201200064762" target="_blank" rel="noopener noreferrer" className="w-full rounded-full border-2 border-[#2F5B44] py-3 flex items-center justify-center gap-2 hover:bg-[#2F5B44]/10 transition-colors group">
                            <img src={whatsIcon} className="w-5 h-5" />
                            <span className="text-[#2F5B44] font-changa font-medium ">احصل علي عرض سعر</span>
                            
                        </a>
                    </div>
                        
                    </div>
                        
                    </div>
                    
                    {/* CTA Button */}
                   
                </div>

                {/* الباقة الاحترافية - Professional Package (Recommended) */}
                <div className="rounded-3xl bg-[#2F5B44]/70 border-2 border-[#2F5B44]/70  shadow-lg flex flex-col relative order-2 md:order-2">
                <img src={offer} className="absolute top-[-6%] left-0 w-24 h-24" />
                    {/* Ribbon */}
                    <div className="relative">
                        <div className=" mt-10 text-center font-semibold uppercase text-custom-cream text-3xl font-changa">
                        الباقة الاحترافية 
                        </div>
                        
                    </div>

                    <div>
                        <p className="text-center font-medium uppercase text-custom-cream text-lg font-changa mt-5 mb-5">الأفضل للوكالات في مرحلة النمو</p>
                    </div>
                    
                   
                    
                    
                    
                    <div className="py-3 px-3 h-full">
                        {/* Features Section */}
                    <div className="p-5 flex-grow bg-[#FEF9D0]/90 rounded-3xl  ">
                        <h1 className="text-center font-medium uppercase text-custom-green text-lg font-changa mt-3">شركات لديها عمليات أو أقسام متعددة وتحتاج تخصيص وتحكم أكبر</h1>
                        <h4 className="text-[#2F5B44] text-right font-medium uppercase text-custom-green text-lg font-changa  mt-10 mb-7"> : تشمل الباقة   </h4>
                        <ul className="space-y-2 text-right text-[#2F5B44] text-right font-normal uppercase text-custom-green text-base font-changa">
                            <li className="flex items-start gap-2 justify-end">
                                <span>(BUSINESS FLOW) تحليل مفصّل للعمليات</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>إعداد 0000 مع تخصيصات متوسطة</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>(WORKFLOWS) تخصيص النماذج، التقارير، وسير العمل</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>ربط الأقسام المختلفة داخل النظام</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>تهيئة التقارير ولوحات التحكم</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>تدريب شامل للفريق</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>دعم فني موسّع بعد الإطلاق</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                        </ul> 



                        <div className="p-4 pt-0 mt-10">
                        <a href="https://wa.me/201200064762" target="_blank" rel="noopener noreferrer" className="w-full rounded-full border-2 bg-[#2F5B44]/80 border-[#2F5B44] py-3 flex items-center justify-center gap-2 hover:bg-[#2F5B44] group">
                            <img src={yellowWhatsIcon} className="w-5 h-5" />
                            <span className="text-[#FEF9D0] font-changa font-medium ">احصل علي عرض سعر</span>
                            
                        </a>
                    </div>
                        
                    </div>
                        
                    </div>
                    
                    {/* CTA Button */}
                   
                </div>

                {/* باقة البداية - Starter Package */}
                <div className="rounded-3xl bg-[#2F5B44] border-2 border-[#2F5B44] overflow-hidden shadow-lg flex flex-col order-1 md:order-3">
                    {/* Ribbon */}
                    <div className="relative">
                        <div className="bg-[#2F5B44] mt-10 text-center font-semibold uppercase text-custom-cream text-3xl font-changa">
                        باقة البداية 
                        </div>
                        
                    </div>

                    <div>
                        <p className="text-center font-medium uppercase text-custom-cream text-lg font-changa mt-5 mb-5">الأفضل للوكالات الصغيرة</p>
                    </div>
                    
                   
                    
                    
                    
                    <div className="py-3 px-3 h-full">
                        {/* Features Section */}
                    <div className="p-5 flex-grow bg-[#FEF9D0] rounded-3xl  ">
                        <h1 className="text-center font-medium uppercase text-custom-green text-lg font-changa mt-3">مناسبة للشركات الصغيرة ورواد الأعمال</h1>
                        <h4 className="text-[#2F5B44] text-right font-medium uppercase text-custom-green text-lg font-changa  mt-10 mb-7">  :تشمل الباقة   </h4>
                        <ul className="space-y-2 text-right text-[#2F5B44] text-right font-normal uppercase text-custom-green text-base font-changa">
                            <li className="flex items-start gap-2 justify-end">
                                <span>تحليل أساسي لاحتياجات العمل</span> 
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>0000 وتشغيل الموديولات المطلوبة</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>(SETUP) تهيئة النظام بالإعدادات القياسية (STANDARD)</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>إعداد المستخدمين والصلاحيات</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>(SAMPLE / OPENING DATA) إدخال بيانات أولية</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>تدريب أساسي للفريق</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>دعم فني بعد الإطلاق</span>
                                <span className="text-[#2F5B44]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span className="text-[#FEF9D0]">دعم فني بعد الإطلاق</span>
                                <span className="text-[#FEF9D0]">•</span>
                            </li>
                        </ul> 



                        <div className="p-4 pt-0 mt-10">
                        <a href="https://wa.me/201200064762" target="_blank" rel="noopener noreferrer" className="w-full rounded-full border-2 border-[#2F5B44] py-3 flex items-center justify-center gap-2 hover:bg-[#2F5B44]/10 transition-colors group">
                            <img src={whatsIcon} className="w-5 h-5" />
                            <span className="text-[#2F5B44] font-changa font-medium ">احصل علي عرض سعر</span>
                            
                        </a>
                    </div>
                        
                    </div>
                        
                    </div>
                    
                    {/* CTA Button */}
                   
                </div>
                
            </div>
           

           </div>



           <div className="mt-[3rem] md:mt-[5rem] container mx-auto max-w-7xl mb-10 px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
                <div className="rounded-3xl bg-[#2F5B44]/70 p-6 md:p-10 flex w-full md:w-72 px-6 pt-8 md:pt-12 pb-10 md:pb-16 justify-center items-center gap-4">
                <div className="flex flex-col gap-3">
                    <p className="text-right font-medium uppercase text-custom-cream text-base md:text-lg font-changa whitespace-nowrap">تنفيذ احترافي مع</p>
                    <p className="text-right font-medium uppercase text-custom-cream text-base md:text-lg font-changa whitespace-nowrap">تدريب كامل لفريقك</p>

                </div>

                <img src={icon9} className="w-12 h-12 md:w-16 md:h-16" />
               

                </div>
                <div className="rounded-3xl bg-[#2F5B44]/70 p-6 md:p-10 flex w-full md:w-72 px-6 pt-8 md:pt-12 pb-10 md:pb-16 justify-center items-center gap-4">
                <div className="flex flex-col gap-3">
                    <p className="text-right font-medium uppercase text-custom-cream text-base md:text-lg font-changa whitespace-nowrap">  خطط دفع مرنة تناسب</p>
                    <p className="text-right font-medium uppercase text-custom-cream text-base md:text-lg font-changa">  ميزانية عملك</p>

                </div>

                <img src={icon10} className="w-12 h-12 md:w-16 md:h-16" />
                
                

                </div>
                <div className="rounded-3xl bg-[#2F5B44]/70 p-6 md:p-10 flex w-full md:w-72 px-6 pt-8 md:pt-12 pb-10 md:pb-16 justify-center items-center gap-4">
                <div className="flex flex-col gap-3">
                    <p className="text-right font-medium uppercase text-custom-cream text-base md:text-lg font-changa whitespace-nowrap">  دعم فني مجاني لمدة</p>
                    <p className="text-right font-medium uppercase text-custom-cream text-base md:text-lg font-changa">  شهرين بعد الإطلاق</p>

                </div>

                <img src={icon11} className="w-12 h-12 md:w-16 md:h-16" />
                

                </div>

            </div>
            
           </div>



           {/* last section  */}
            <div className="grid grid-cols-12 gap-4 md:gap-6 mt-[3rem] md:mt-[8rem] px-4 md:px-0 relative pb-[6rem] sm:pb-[8rem] md:pb-0">
           
                    <img src={laptop} className="absolute w-[60%] sm:w-[50%] md:w-[40%] lg:w-auto -bottom-[4rem] sm:-bottom-[5rem] md:-bottom-[8rem] left-[5%] sm:left-[8%] md:left-[10%] z-10" />
                        

                 
            <div className="col-span-12 md:col-span-6 order-2 md:order-1 bg-[#FEF9D0] p-4 md:p-10 pb-[4rem] sm:pb-[5rem] md:pb-10" >    
            <ul className="mt-6 md:mt-20 space-y-6 md:space-y-10 text-right font-medium uppercase text-[#2F5B44] text-base md:text-xl font-changa">
                            <li className="flex items-start gap-2 justify-end">
                                <span className="text-right font-medium uppercase text-custom-green text-base md:text-xl font-changa">    منصة واحدة تدير كل أعمالك بذكاء : اربط المبيعات، المحاسبة، المخزون والعمليات اليومية في نظام متكامل وسهل الاستخدام</span>
                                <span className="text-[#FEF9D0]">
                                <img src={li} className="w-4 h-4 md:w-5 md:h-5" />
                                    
                                </span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>قرارات أسرع مبنية على بيانات دقيقة : لوحات تحكم وتقارير لحظية تساعدك على متابعة الأداء واتخاذ القرار في الوقت الصحيح   </span>
                                <span className="text-[#FEF9D0]">
                                <img src={li} className="w-4 h-4 md:w-5 md:h-5" />
                                </span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>تشغيل أكثر كفاءة وتكلفة أقل : أتمتة العمليات وتقليل الأخطاء يوفر عليك الوقت والجهد ويخفض التكاليف التشغيلية.</span>
                                <span className="text-[#FEF9D0]">
                                <img src={li} className="w-4 h-4 md:w-5 md:h-5" />
                                </span>
                            </li>            
                            
                        </ul> 

                    

            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2 bg-[#2F5B44] p-4 md:p-10 rounded-2xl md:rounded-none md:rounded-l-3xl ">
                <p className="text-center md:text-right font-semibold uppercase text-custom-cream text-2xl md:text-4xl font-changa mt-4 md:mt-10">كيف يساعدك نظام Odoo ERP على نمو أعمالك؟</p>

                <ul className="mt-8 md:mt-20 space-y-6 md:space-y-10 text-right font-medium uppercase text-custom-cream text-base md:text-xl font-changa">
                            <li className="flex items-start gap-2 justify-end">
                                <span>    منصة واحدة تدير كل أعمالك بذكاء : اربط المبيعات، المحاسبة، المخزون والعمليات اليومية في نظام متكامل وسهل الاستخدام</span>
                                <span className="text-[#FEF9D0]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>قرارات أسرع مبنية على بيانات دقيقة : لوحات تحكم وتقارير لحظية تساعدك على متابعة الأداء واتخاذ القرار في الوقت الصحيح   </span>
                                <span className="text-[#FEF9D0]">•</span>
                            </li>
                            <li className="flex items-start gap-2 justify-end">
                                <span>تشغيل أكثر كفاءة وتكلفة أقل : أتمتة العمليات وتقليل الأخطاء يوفر عليك الوقت والجهد ويخفض التكاليف التشغيلية.</span>
                                <span className="text-[#FEF9D0]">•</span>
                            </li>
                            
                           
                           
                            
                            
                        </ul> 


                        <div className="p-2 md:p-4 pt-0 mt-6 md:mt-10 flex justify-center md:justify-end">
                        <a href="https://wa.me/201200064762" target="_blank" rel="noopener noreferrer" className="px-6 md:px-10 bg-[#2F5B44]/80 py-3 flex items-center justify-center gap-2 hover:bg-[#2F5B44] group rounded-full border-2 border-custom-cream">
                            <img src={yellowWhatsIcon} className="w-5 h-5" />
                            <span className="text-[#FEF9D0] font-changa font-medium text-sm md:text-base">احصل علي عرض سعر</span>
                            
                        </a>
                    </div>
                
            </div>

           </div>


           <div className="mt-[2rem] sm:mt-[3rem] md:mt-20">
           <img src={flag} className="w-full object-cover" />
            

           </div>


           <div className="mt-6 md:mt-[8rem] container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 border-t border-[#2F5B44] py-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-0">
            <p className="font-medium uppercase text-custom-green text-xs md:text-base font-inter">©2025 devext. allrights reserved</p>
            <p className="font-medium uppercase text-custom-green text-xs md:text-base font-inter">Privacy policy</p>
            <p className="font-medium uppercase text-custom-green text-xs md:text-base font-inter">Accessibility</p>
            <p className="font-medium uppercase text-custom-green text-xs md:text-base font-inter">Call us : 01200064762</p>
            
        
        

           </div>












           

          


            

        </div>
        </>
    )
}
