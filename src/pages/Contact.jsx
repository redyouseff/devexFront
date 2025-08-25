import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import downarrow from "/images/home/Vector1.svg"
import whatsapp from "/images/home/WhatsApp.svg"
import instagram from "/images/home/Instagram.svg"
import linkedin from "/images/home/Linkedin.svg"
import name from "/images/home/name.svg"
import email from "/images/home/email.svg"
import phone from "/images/home/phone.svg"
import message from "/images/home/message.svg"
import { useState } from 'react';

function Contact() {


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  return (

    <>
    <Navbar />
    {/* form Section - Contact Form */}
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden m" style={{ background: '#2F5B44' }}>

<div className="container mx-auto max-w-6xl relative z-10 mt-[10rem]">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    
    {/* Right Side - Contact Form - First on Mobile */}
    <div className="bg-transparent lg:order-2 order-1 lg:ml-[2rem]">
      <div className="mb-6 sm:mb-8 text-center lg:text-left ">
        <h3 className="text-[24px] sm:text-[28px] lg:text-[29px] font-bold text-[#FEF9D0] mb-2 leading-tight">
          START A CONVERSATION<br />
          WITH US
        </h3>
      </div>

      <form className="space-y-4 sm:space-y-6" onSubmit={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        setSubmitError('');
        try {
          const formEl = e.currentTarget;
          const formData = new FormData(formEl);
          // Simple validation similar to provided hook
          const name = (formData.get('name') || '').toString().trim();
          const email = (formData.get('email') || '').toString().trim();
          const messageVal = (formData.get('message') || '').toString().trim();
          if (!name) {
            setSubmitError('Please enter your name.');
            setIsSubmitting(false);
            return;
          }
          if (!email || !email.includes('@') || email.length < 5) {
            setSubmitError('Please enter a valid email.');
            setIsSubmitting(false);
            return;
          }
          if (!messageVal) {
            setSubmitError('Please enter your message.');
            setIsSubmitting(false);
            return;
          }
          formData.append('access_key', 'a17daa5b-725c-4354-913d-e7cd75d01bc2');
          formData.append('subject', 'New Contact Form Submission');
          formData.append('from_name', 'DEVEXT Website');
          formData.append('botcheck', '');
          formData.append('to', 'devextdeveloping@gmail.com');
          formData.append('replyto', email);

          // (debug logs removed per request)
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
            headers: { Accept: 'application/json' }
          });
          const data = await res.json().catch(() => ({ success: false, message: 'Invalid response from server' }));
          // (response debug logs removed per request)
          if (res.ok && data.success) {
            setSubmitMessage('Thanks! Your message has been sent.');
            formEl.reset();
          } else {
            setSubmitError(data?.message || 'Submission failed. Please try again.');
          }
        } catch (err) {
          setSubmitError('Submission failed. Please try again.');
          console.log(err)
        } finally {
          setIsSubmitting(false);
        }
      }}>
        {/* Name Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={name} alt="name icon" className="w-5 h-5" />
            <label className="text-[#FEF9D0] text-sm font-medium">NAME *</label>
          </div>
          <input
            type="text"
            required
            name="name"
            className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
            placeholder=""
          />
        </div>

        {/* Company Name Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={name} alt="company icon" className="w-5 h-5" />
            <label className="text-[#FEF9D0] text-sm font-medium">COMPANY NAME *</label>
          </div>
          <input
            type="text"
            required
            name="company"
            className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
            placeholder=""
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={email} alt="email icon" className="w-5 h-5" />
            <label className="text-[#FEF9D0] text-sm font-medium">EMAIL *</label>
          </div>
          <input
            type="email"
            required
            name="email"
            className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
            placeholder=""
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={phone} alt="phone icon" className="w-5 h-5" />
            <label className="text-[#FEF9D0] text-sm font-medium">PHONE *</label>
          </div>
          <input
            type="tel"
            required
            name="phone"
            className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
            placeholder=""
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={message} alt="message icon" className="w-5 h-5" />
            <label className="text-[#FEF9D0] text-sm font-medium">YOUR MESSAGE*</label>
          </div>
          <textarea
            required
            rows={4}
            name="message"
            className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60 resize-none"
            placeholder=""
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center bg-transparent text-[#FEF9D0] px-8 py-3 rounded-full font-medium text-[16px] hover:bg-[#FEF9D0] hover:text-[#2F5B44] transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ border: '2px solid #FEF9D0' }}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
            <img src={downarrow} alt="arrow" className="w-4 h-4 ml-2" />
          </button>
        </div>
        {(submitMessage || submitError) && (
          <div className={`mt-4 text-sm ${submitError ? 'text-red-300' : 'text-[#FEF9D0]'}`}>
            {submitError || submitMessage}
          </div>
        )}
      </form>
    </div>

    {/* Left Side - Text Content - Second on Mobile */}
    <div className="space-y-1 lg:space-y-20 pb-4 text-left mr-[3rem] lg:order-1 order-2 mt-[13rem] lg:mt-0">
      <div>
        <h2 className=" -mt-[11rem] text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[27px] font-bold text-[#FEF9D0] leading-tight " style={{ fontFamily: 'Inter' }}>
          DIGITIZING YOUR BUSINESS<br />
          GROWTH
        </h2>
      </div>

      <div className="space-y-6">
        {/* Email */}
        <div>
          <h4 className="text-[#FEF9D0] text-[16px] sm:text-[18px] font-semibold mb-2">Email</h4>
          <p className="text-[#FEF9D0] text-[14px] sm:text-[15px] opacity-90">info@devext.io</p>
        </div>

        {/* Contact Number */}
        <div>
          <h4 className="text-[#FEF9D0] text-[16px] sm:text-[18px] font-semibold mb-2">Contact Number</h4>
          <p className="text-[#FEF9D0] text-[14px] sm:text-[15px] opacity-90">+20 - 1200064762</p>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-[#FEF9D0] text-[16px] sm:text-[18px] font-semibold mb-2">Location</h4>
          <p className="text-[#FEF9D0] text-[14px] sm:text-[15px] opacity-90">Alexandria, Egypt</p>
        </div>
      </div>

      {/* Follow Us */}
      <div className="pt-2 flex justify-between">
        <p className="text-[#FEF9D0] text-[16px] sm:text-[18px] font-semibold mb-2">FOLLOW US</p>
        <div className="flex items-center gap-4 mb-2 ">
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="WhatsApp">
            <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
            <img src={instagram} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


</section>

{/* Map Section - Full Width */}
<section className="w-full">
  <div className="w-full h-[200px] sm:h-[500px] lg:h-[550px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.861334607816!2d29.946724699999997!3d31.224570900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4ebc1c8c0d3%3A0xd30636b17acadbba!2s398%20Abou%20Quer%2C%20Abu%20an%20Nawatir%2C%20Sidi%20Gaber%2C%20Alexandria%20Governorate%205433140!5e0!3m2!1sen!2seg!4v1756125153750!5m2!1sen!2seg"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="DEVEXT Location - 398 Abou Quer, Alexandria"
      className="w-full h-full"
    ></iframe>
  </div>
</section>




    <Footer />
    </>
   
  );
}

export default Contact;
