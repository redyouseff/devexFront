
import React from 'react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const Accessibility = () => {
  return (
    <div className="w-full bg-[#FEF9D0] min-h-screen">
      <SEO 
        title="Accessibility - Devext"
        description="Devext is committed to making its website accessible and user-friendly for all visitors, including people with disabilities."
        canonical="/accessibility"
      />
      

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-inter text-[#2F5B44]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-kalam">Accessibility</h1>
        <p className="text-sm opacity-80 mb-10">Last updated: May 16, 2026</p>

        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            Devext is committed to making its website accessible and user-friendly for all visitors, including people with disabilities.
          </p>
          <p>
            We believe that everyone should be able to access information about our services, communicate with our team, and use our website with comfort, clarity, and independence.
          </p>
          <p>
            This Accessibility Statement applies to the Devext website:<br/>
            <a href="https://devext.io/" className="text-[#2F5B44] font-bold underline hover:opacity-80 transition-opacity">https://devext.io/</a>
          </p>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">1. Our commitment to accessibility</h2>
            <p>
              Devext aims to provide a website experience that is accessible, inclusive, and easy to use for all users, regardless of ability, device, browser, or assistive technology.
            </p>
            <p className="mt-4">
              We are working to improve the accessibility of our website by following recognized accessibility practices, including the Web Content Accessibility Guidelines, commonly known as WCAG.
              Our goal is to work toward alignment with WCAG 2.2 Level AA where reasonably possible.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">2. Accessibility features we aim to support</h2>
            <p className="mb-4">We aim to make our website easier to use by focusing on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clear and readable text</li>
              <li>Logical page structure</li>
              <li>Consistent navigation</li>
              <li>Keyboard-friendly website interaction</li>
              <li>Proper heading hierarchy</li>
              <li>Sufficient color contrast where possible</li>
              <li>Alternative text for meaningful images</li>
              <li>Descriptive links and buttons</li>
              <li>Forms that are clear and easy to complete</li>
              <li>Compatibility with common browsers and assistive technologies</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">3. Ongoing improvements</h2>
            <p className="mb-4">
              Accessibility is an ongoing process. As Devext continues to update its website, content, designs, and digital services, we aim to review and improve accessibility wherever possible.
            </p>
            <p className="mb-4">Our accessibility efforts may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reviewing website pages for usability and readability</li>
              <li>Improving contrast, spacing, headings, and navigation</li>
              <li>Adding or improving alternative text for images</li>
              <li>Making forms easier to understand and complete</li>
              <li>Testing important pages on different devices and browsers</li>
              <li>Considering accessibility during future website updates and redesigns</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">4. Known limitations</h2>
            <p className="mb-4">
              While we aim to make the Devext website accessible, some areas may not yet fully meet all accessibility standards.
            </p>
            <p className="mb-4">Possible limitations may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Some images may not yet include complete alternative text</li>
              <li>Some third-party tools, plugins, embedded content, or external platforms may not be fully controlled by Devext</li>
              <li>Some older website content or design elements may require further accessibility improvements</li>
              <li>Some animations, visual effects, or interactive sections may need additional optimization for assistive technologies</li>
            </ul>
            <p className="mt-4">
              We are committed to reviewing these areas and improving them where reasonably possible.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">5. Third-party content and tools</h2>
            <p className="mb-4">
              Our website may include links, integrations, plugins, analytics tools, embedded content, or third-party services.
            </p>
            <p>
              While we try to work with reliable providers, Devext may not have full control over the accessibility of third-party platforms or external websites.
              We encourage users to review the accessibility information and policies of any third-party websites they visit through links on our website.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">6. Feedback and support</h2>
            <p className="mb-4">
              If you experience any difficulty accessing any part of the Devext website, or if you notice an accessibility issue, please contact us.
            </p>
            <p className="mb-4">
              We welcome your feedback and will do our best to respond and provide the information or support you need in an accessible format.
            </p>
            <p className="mb-4 font-bold">You can contact us at:</p>
            <ul className="space-y-1 mb-4">
              <li>Email: <a href="mailto:marketing@devext.io" className="underline hover:opacity-80 transition-opacity">marketing@devext.io</a></li>
              <li>Website: <a href="https://devext.io/" className="underline hover:opacity-80 transition-opacity">https://devext.io/</a></li>
            </ul>
            <p className="mb-4 font-bold">When contacting us, please include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The page URL where you experienced the issue</li>
              <li>A short description of the problem</li>
              <li>The device, browser, or assistive technology you were using, if relevant</li>
              <li>Your preferred way for us to respond</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">7. Response time</h2>
            <p>
              We aim to review accessibility-related requests and respond as soon as reasonably possible.
              Some issues may require additional technical review or development work, but we will make reasonable efforts to address reported accessibility barriers.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">8. Alternative access</h2>
            <p className="mb-4">
              If you cannot access certain information or functionality on our website, please contact us at: <br/>
              <a href="mailto:marketing@devext.io" className="underline font-bold hover:opacity-80 transition-opacity">marketing@devext.io</a>
            </p>
            <p>
              We will make reasonable efforts to provide the requested information through an alternative communication method where possible.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">9. Future updates</h2>
            <p>
              Devext may update this Accessibility Statement from time to time to reflect improvements, website changes, accessibility reviews, or updates to applicable standards.
              The latest version will always be available on this page with the updated date shown above.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">10. Contact us</h2>
            <p className="mb-4">For accessibility questions, feedback, or support requests, please contact:</p>
            <p className="font-bold">Devext</p>
            <ul className="space-y-1 mt-2">
              <li>Website: <a href="https://devext.io/" className="underline hover:opacity-80 transition-opacity">https://devext.io/</a></li>
              <li>Email: <a href="mailto:marketing@devext.io" className="underline hover:opacity-80 transition-opacity">marketing@devext.io</a></li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Accessibility;