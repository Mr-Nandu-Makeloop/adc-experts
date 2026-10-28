import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-design-page">
      <div className="container" style={{ padding: '24px 24px 64px', maxWidth: '920px', margin: '0 auto' }}>
        
        {/* Page Header matching privacypolicy.png */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 
            style={{ 
              fontSize: '26px', 
              fontWeight: 800, 
              color: 'var(--color-primary)', 
              lineHeight: 1.25, 
              marginBottom: '6px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}
          >
            ADC EXPERTS
          </h1>
          <h2 
            style={{ 
              fontSize: '20px', 
              fontWeight: 700, 
              color: '#111827', 
              margin: 0 
            }}
          >
            Privacy Policy
          </h2>
        </div>

        {/* Policy Body Content */}
        <div className="privacy-body" style={{ color: '#000000', fontSize: '15.5px', lineHeight: 1.68 }}>
          
          {/* 1. About this Privacy Policy */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">1. About this Privacy Policy</h2>
            <p>
              ADC Experts is operated by ADC Coaching Pty Ltd (&ldquo;ADC Experts&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). We respect the privacy of our students, members, candidates, website visitors and other people who interact with us. This Privacy Policy explains how we collect, hold, use and disclose personal information and how you can contact us about your information.
            </p>
          </section>

          {/* 2. Personal information we may collect */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">2. Personal information we may collect</h2>
            <ul className="privacy-list">
              <li>Identity and contact information, including your name, email address, phone number and country/location details where provided.</li>
              <li>Membership and transaction information, including subscription status, payment date, product/service purchased, invoices and transaction references.</li>
              <li>Learning and account information, including LMS account details, enrolments, access status, course participation and support requests.</li>
              <li>Information you provide in forms, emails, messages, enquiries, feedback, surveys or support communications.</li>
              <li>Technical information generated when you use our website or online services, such as device/browser information, IP address, cookies and basic analytics data where enabled.</li>
              <li>Other information that is reasonably necessary to provide our education, membership, mentoring, practical training or support services.</li>
            </ul>
          </section>

          {/* 3. Payment information */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">3. Payment information</h2>
            <p>
              Membership and other online payments may be processed by third-party payment providers such as Stripe. ADC Experts may receive transaction and customer information from the payment provider, such as your name, email address, phone number, payment status, subscription status and transaction identifiers. Full payment card details are handled by the payment provider and are not intended to be stored by ADC Experts in its own systems.
            </p>
          </section>

          {/* 4. How we collect personal information */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">4. How we collect personal information</h2>
            <ul className="privacy-list">
              <li>Directly from you when you register, subscribe, make a payment, enrol, contact us or use our services.</li>
              <li>Through our website, forms, LMS, email, phone, messaging channels and in-person interactions.</li>
              <li>From service providers that support our business, including payment, website, LMS, email, analytics and administration providers.</li>
              <li>From publicly available or referral sources where lawful and appropriate.</li>
            </ul>
          </section>

          {/* 5. Why we collect, use and disclose information */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">5. Why we collect, use and disclose information</h2>
            <ul className="privacy-list">
              <li>To create and manage memberships and LMS accounts.</li>
              <li>To process payments, subscriptions, invoices, refunds and cancellations.</li>
              <li>To provide ADC Part 1 and ADC Part 2 learning resources, practical training, mentoring, mock examinations and related services.</li>
              <li>To communicate with you about your membership, access, bookings, support, changes to services and administrative matters.</li>
              <li>To reconcile Stripe subscriptions with our member/LMS records.</li>
              <li>To improve our website, learning resources, member experience and business operations.</li>
              <li>To manage security, prevent misuse or fraud, resolve disputes and comply with legal or regulatory obligations.</li>
              <li>To send marketing or educational updates where permitted. You can opt out of marketing communications at any time.</li>
            </ul>
          </section>

          {/* 6. Who we may disclose information to */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">6. Who we may disclose information to</h2>
            <ul className="privacy-list">
              <li>Payment service providers, including Stripe, for payment and subscription processing.</li>
              <li>Website, hosting, LMS, email, cloud-storage, analytics, IT and communications providers that support our services.</li>
              <li>Professional advisers such as accountants, auditors, insurers or legal advisers where reasonably required.</li>
              <li>Government, regulatory, law-enforcement or other bodies where required or authorised by law.</li>
              <li>Other parties with your consent or where disclosure is otherwise permitted by law.</li>
            </ul>
          </section>

          {/* 7. Overseas processing and disclosure */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">7. Overseas processing and disclosure</h2>
            <p>
              Some of the service providers we use may store or process personal information outside Australia. The countries involved can vary depending on the provider and the services used. Where practicable, ADC Experts will take reasonable steps to use reputable providers and manage personal information consistently with applicable privacy obligations. If specific overseas locations become material to our information handling, this policy should be updated to identify them where practicable.
            </p>
          </section>

          {/* 8. How we hold and protect information */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">8. How we hold and protect information</h2>
            <p>
              We may hold personal information electronically and, where required, in physical records. We use reasonable administrative, technical and organisational measures appropriate to our operations to protect personal information from misuse, interference, loss, unauthorised access, modification or disclosure. No online service or data transmission can be guaranteed to be completely secure.
            </p>
          </section>

          {/* 9. Access and correction */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">9. Access and correction</h2>
            <p>
              You may request access to personal information we hold about you or ask us to correct information that is inaccurate, out of date, incomplete, irrelevant or misleading. Contact us using the details below. We may need to verify your identity before actioning a request.
            </p>
          </section>

          {/* 10. Marketing communications */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">10. Marketing communications</h2>
            <p>
              If we send you marketing communications, you may opt out using the unsubscribe function provided or by contacting us. Administrative messages relating to an active membership, payment, account, booking or service may still be sent where necessary.
            </p>
          </section>

          {/* 11. Cookies and analytics */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">11. Cookies and analytics</h2>
            <p>
              Our website may use cookies and similar technologies to operate the website, remember preferences, understand website usage and improve services. Browser settings may allow you to control some cookies. The website developer should ensure this section matches the actual analytics, advertising and cookie technologies enabled on the site.
            </p>
          </section>

          {/* 12. Complaints */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">12. Complaints</h2>
            <p>
              If you have a privacy question or complaint, please contact us using the details below and provide enough information for us to understand the issue. We will review the matter and aim to respond within a reasonable period. If applicable, you may also have the right to contact the Office of the Australian Information Commissioner (OAIC).
            </p>
          </section>

          {/* 13. Changes to this policy */}
          <section className="privacy-section" style={{ marginBottom: '32px' }}>
            <h2 className="privacy-heading">13. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes to our services, systems, legal obligations or information-handling practices. The current version should be published on our website with the date of the latest update.
            </p>
          </section>

          {/* 14. Contact us */}
          <section className="privacy-section" style={{ marginBottom: '16px' }}>
            <h2 className="privacy-heading">14. Contact us</h2>
            <p style={{ marginBottom: '6px' }}>
              ADC Experts Operated by ADC Coaching Pty Ltd, Suit 7 Unit 19 334-348, Albany Highway, VIC PARK WA 6100 (Western Australia)
            </p>
            <p style={{ margin: 0 }}>
              Website:{' '}
              <a 
                href="https://adcexperts.com.au" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                https://adcexperts.com.au
              </a>
              {' '}Email:{' '}
              <a 
                href="mailto:admin@adcexperts.com.au" 
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                admin@adcexperts.com.au
              </a>
              {' '}Phone:{' '}
              <a 
                href="tel:+61435421145" 
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                +61 435 421 145
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
