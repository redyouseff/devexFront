import React from 'react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const PolicyPage = () => {
  return (
    <div className="w-full bg-[#FEF9D0] min-h-screen">
      <SEO 
        title="Privacy Policy - Devext"
        description="Devext respects your privacy and is committed to protecting the personal information you share with us."
        canonical="/privacy"
      />
   

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-inter text-[#2F5B44]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-kalam">Privacy Policy</h1>
        <p className="text-sm opacity-80 mb-10">Last updated: May 16, 2026</p>

        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            Devext respects your privacy and is committed to protecting the personal information you share with us when you visit our website, contact us, request a consultation, or use any of our digital services.
          </p>
          <p>
            This Privacy Policy explains how Devext, referred to as “Devext,” “we,” “our,” or “us,” collects, uses, stores, and protects personal information through our website: <a href="https://devext.io/" className="underline font-bold hover:opacity-80 transition-opacity">https://devext.io/</a>.
          </p>
          <p>
            By using our website or submitting information through our forms, you agree to the practices described in this Privacy Policy.
          </p>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">1. Information we collect</h2>
            <p className="mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job title or role</li>
              <li>Project details or business requirements</li>
              <li>Messages submitted through contact forms</li>
              <li>Any files, documents, or information you send to us for quotation, consultation, support, or project purposes</li>
            </ul>
            <p className="mb-4">We may also automatically collect certain technical information when you visit our website, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time spent on the website</li>
              <li>Referral source</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">2. How we use your information</h2>
            <p className="mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and consultation requests</li>
              <li>To prepare proposals, quotations, contracts, and project scopes</li>
              <li>To provide web development, app development, eCommerce, Odoo ERP, digital marketing, and related technology services</li>
              <li>To communicate with clients and potential clients</li>
              <li>To manage projects, support requests, and service delivery</li>
              <li>To improve our website, services, content, and user experience</li>
              <li>To send marketing communications, offers, or updates where permitted by law or where you have agreed to receive them</li>
              <li>To protect our website, systems, business, and users from fraud, abuse, or unauthorized access</li>
              <li>To comply with legal, regulatory, accounting, or contractual obligations</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">3. Legal basis for processing</h2>
            <p className="mb-4">Where applicable, we process personal information based on one or more of the following legal grounds:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your consent, such as when you submit a contact form or agree to receive marketing communications</li>
              <li>The need to perform a contract or take steps before entering into a contract</li>
              <li>Our legitimate business interests, such as responding to inquiries, improving our services, securing our website, and managing client relationships</li>
              <li>Compliance with legal or regulatory obligations</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">4. Cookies and tracking technologies</h2>
            <p className="mb-4">
              Our website may use cookies and similar technologies to improve functionality, analyze website traffic, understand visitor behavior, and support marketing activities.
            </p>
            <p className="mb-4">Cookies may help us:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Remember user preferences</li>
              <li>Understand how visitors interact with our website</li>
              <li>Improve website performance</li>
              <li>Measure marketing campaign effectiveness</li>
              <li>Deliver relevant advertising or remarketing campaigns, where applicable</li>
            </ul>
            <p className="mb-4">
              You can control or disable cookies through your browser settings. Please note that disabling cookies may affect some website features.
            </p>
            <p>
              If we use third-party analytics or advertising tools, such as Google Analytics, Google Ads, Meta Pixel, or similar services, these providers may collect information according to their own privacy policies and settings.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">5. Marketing communications</h2>
            <p className="mb-4">
              We may use your contact details to send you updates, offers, newsletters, or information about our services if you have requested them, agreed to receive them, or where permitted by applicable law.
            </p>
            <p className="mb-4">
              You may opt out of marketing communications at any time by contacting us at: <br/>
              <a href="mailto:marketing@devext.io" className="underline font-bold hover:opacity-80 transition-opacity">marketing@devext.io</a>
            </p>
            <p>
              Even if you opt out of marketing messages, we may still send you necessary service-related or contractual communications.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">6. How we share information</h2>
            <p className="mb-4">We do not sell your personal information.</p>
            <p className="mb-4">We may share your information only when necessary with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Devext team members and authorized personnel</li>
              <li>Service providers who help us operate our website, manage communications, host data, analyze traffic, or deliver services</li>
              <li>Payment, hosting, CRM, email, analytics, advertising, or project management providers, where applicable</li>
              <li>Legal, regulatory, or government authorities when required by law</li>
              <li>Professional advisors, such as lawyers, accountants, or auditors</li>
              <li>Business partners or subcontractors involved in delivering a specific project, when necessary and under appropriate confidentiality obligations</li>
            </ul>
            <p>
              We require third parties that process personal information on our behalf to handle it securely and only for the purposes we specify.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">7. Client project data</h2>
            <p className="mb-4">
              As a software development and digital services provider, Devext may receive access to client business data, website data, application data, dashboard data, CRM data, ERP data, or other project-related information during service delivery.
            </p>
            <p className="mb-4">
              We treat client project data as confidential and use it only for the purpose of delivering the agreed services, such as development, testing, deployment, support, maintenance, integration, or troubleshooting.
            </p>
            <p>
              Clients are responsible for ensuring they have the necessary rights and permissions to share any data with Devext for project purposes.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">8. Data retention</h2>
            <p className="mb-4">We keep personal information only for as long as necessary for the purposes described in this Privacy Policy, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Responding to inquiries</li>
              <li>Managing client relationships</li>
              <li>Preparing quotations or contracts</li>
              <li>Delivering services</li>
              <li>Meeting legal, accounting, tax, or regulatory requirements</li>
              <li>Resolving disputes or enforcing agreements</li>
            </ul>
            <p>
              When information is no longer needed, we will delete it, anonymize it, or securely archive it according to our internal procedures and applicable legal requirements.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">9. Data security</h2>
            <p className="mb-4">
              We use reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, disclosure, or destruction.
            </p>
            <p className="mb-4">
              These measures may include access controls, secure systems, confidentiality obligations, restricted permissions, monitoring, backups, and secure communication practices.
            </p>
            <p>
              However, no method of online transmission or electronic storage is completely secure. Therefore, while we work to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">10. International data transfers</h2>
            <p className="mb-4">
              Some of our service providers, hosting providers, software tools, or business systems may process or store data in countries outside your country of residence.
            </p>
            <p>
              Where international transfers occur, we take reasonable steps to ensure that your information receives an appropriate level of protection in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">11. Your privacy rights</h2>
            <p className="mb-4">Depending on your location and applicable law, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Request restriction of processing</li>
              <li>Object to certain processing activities</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Request a copy of your personal information in a structured format</li>
              <li>Object to direct marketing communications</li>
            </ul>
            <p className="mb-4">
              To exercise any of these rights, please contact us at: <br/>
              <a href="mailto:marketing@devext.io" className="underline font-bold hover:opacity-80 transition-opacity">marketing@devext.io</a>
            </p>
            <p>We may need to verify your identity before responding to your request.</p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">12. Third-party links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites, platforms, or services. We are not responsible for the privacy practices, content, or security of those third-party websites.
            </p>
            <p>
              We encourage you to review the privacy policies of any external websites you visit.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">13. Children’s privacy</h2>
            <p className="mb-4">
              Our website and services are intended for businesses and professional users. We do not knowingly collect personal information from children.
            </p>
            <p>
              If you believe that a child has provided us with personal information, please contact us and we will take appropriate steps to delete such information where required.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">14. Changes to this Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, technologies, or business practices.
            </p>
            <p>
              The updated version will be posted on this page with a revised “Last updated” date. Your continued use of our website after any updates means you accept the revised Privacy Policy.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4">15. Contact us</h2>
            <p className="mb-4">If you have any questions, requests, or concerns about this Privacy Policy or how we handle personal information, you can contact us at:</p>
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

export default PolicyPage;