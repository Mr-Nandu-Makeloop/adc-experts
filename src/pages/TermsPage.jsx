import React from 'react';

export default function TermsPage({ onOpenModal }) {
  return (
    <div className="membership-terms-page">
      <div className="container" style={{ padding: '24px 24px 64px', maxWidth: '920px', margin: '0 auto' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h1 
            style={{ 
              fontSize: '34px', 
              fontWeight: 800, 
              color: 'var(--color-primary)', 
              lineHeight: 1.25, 
              marginBottom: '12px',
              letterSpacing: '-0.01em'
            }}
          >
            ADC Experts Membership - Terms and Conditions
          </h1>
          <p 
            style={{ 
              fontSize: '16px', 
              fontWeight: 600, 
              color: '#111827', 
              margin: 0 
            }}
          >
            ADC Coaching Pty Ltd | <a href="https://www.adcexperts.com.au" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>www.adcexperts.com.au</a>
          </p>
        </div>

        {/* Terms Content */}
        <div className="terms-body" style={{ color: '#000000', fontSize: '15.5px', lineHeight: 1.68 }}>
          
          {/* 1. Membership */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">1. Membership</h2>
            <p>
              ADC Experts provides educational resources and exam preparation support for overseas-qualified dentists preparing for Australian Dental Council examinations.
            </p>
            <p>
              The ADC Experts Membership provides access to online learning resources for ADC Part 1 and ADC Part 2.
            </p>
          </section>

          {/* 2. Membership Fee */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">2. Membership Fee</h2>
            <p>
              The membership fee is A$10 per week.
            </p>
            <p>
              The membership fee will be charged automatically to the payment method provided when joining.
            </p>
          </section>

          {/* 3. Minimum Membership Period */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">3. Minimum Membership Period</h2>
            <p>
              Membership has a minimum initial commitment of three months.
            </p>
            <p>
              During this initial three-month period, weekly membership payments will continue and the membership cannot be cancelled early for change of mind.
            </p>
            <p>
              After completion of the minimum three-month membership period, the membership continues automatically on a weekly basis until a cancellation request is submitted and the applicable cancellation notice period has been completed.
            </p>
          </section>

          {/* 4. What Is Included in Membership */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">4. What Is Included in Membership</h2>
            <p>
              Active members receive access to the ADC Experts online learning platform and resources made available for ADC Part 1 and ADC Part 2 preparation.
            </p>
            <p style={{ marginBottom: '8px' }}>
              Resources may include:
            </p>
            <ul className="terms-list">
              <li>Study materials and educational resources</li>
              <li>Relevant reference material</li>
              <li>Journals and publications</li>
              <li>Learning resources added or updated by ADC Experts</li>
              <li>Other ADC-related educational information made available through the platform</li>
            </ul>
            <p>
              Members can access the online learning platform and study at their own pace from anywhere in the world.
            </p>
            <p>
              Active members who are in Perth may also attend the ADC Experts centre for independent study, subject to centre opening hours, availability and centre rules.
            </p>
          </section>

          {/* 5. Additional Services */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">5. Additional Services</h2>
            <p>
              Some ADC Experts services are separate from the weekly membership and may attract additional fees.
            </p>
            <p>
              These may include practical workstation use, one-to-one mentoring, supervised practical sessions, assessments, mock examinations and other additional training services.
            </p>
            <p>
              Any applicable fee will be communicated before the additional service is booked.
            </p>
          </section>

          {/* 6. Automatic Renewal */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">6. Automatic Renewal</h2>
            <p>
              After the initial three-month minimum membership period, membership will continue automatically at A$10 per week until cancellation is completed.
            </p>
            <p>
              Weekly payments will continue using the payment method authorised by the member.
            </p>
          </section>

          {/* 7. Cancellation and Four-Week Notice Period */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">7. Cancellation and Four-Week Notice Period</h2>
            <p>
              A member may request cancellation once the initial three-month minimum membership period has been completed.
            </p>
            <p style={{ fontWeight: '700' }}>
              A four-week cancellation notice period applies to all membership cancellations.
            </p>
            <p style={{ marginBottom: '8px' }}>
              This means that after ADC Experts receives a cancellation request:
            </p>
            <ul className="terms-list">
              <li>the membership will remain active for a further four weeks;</li>
              <li>the normal A$10 weekly membership fee will continue to be charged during those four weeks; and</li>
              <li>the membership will end after completion of the four-week notice period.</li>
            </ul>
            <p>
              The member will continue to have normal membership access during the four-week notice period.
            </p>
            <p>
              After the final payment applicable to the notice period has been processed, no further weekly membership payments will be charged.
            </p>
            <p>
              For clarity, submitting a cancellation request does not result in immediate cancellation of the membership.
            </p>
          </section>

          {/* 8. How to Cancel */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">8. How to Cancel</h2>
            <p>
              Cancellation requests must be submitted to ADC Experts using the nominated membership cancellation process or by contacting <a href="mailto:admin@adcexperts.com.au" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600' }}>admin@adcexperts.com.au</a>.
            </p>
            <p>
              ADC Experts may provide an online cancellation facility in the future.
            </p>
            <p>
              The four-week cancellation notice period begins when ADC Experts receives the cancellation request.
            </p>
          </section>

          {/* 9. Refunds */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">9. Refunds</h2>
            <p>
              Membership fees already paid are generally not refundable for change of mind where membership access has been provided.
            </p>
            <p>
              This does not affect any rights a member may have under applicable consumer protection laws, including rights that cannot legally be excluded.
            </p>
          </section>

          {/* 10. Membership Account */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">10. Membership Account</h2>
            <p>
              Membership is personal to the registered member.
            </p>
            <p>
              Login credentials and membership access must not be shared with another person.
            </p>
            <p>
              ADC Experts may suspend or terminate access where there is reasonable evidence of account sharing, misuse, unauthorised access or other serious breaches of these membership terms.
            </p>
          </section>

          {/* 11. Educational Purpose */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">11. Educational Purpose</h2>
            <p>
              ADC Experts provides educational and exam-preparation resources and support.
            </p>
            <p style={{ marginBottom: '8px' }}>
              Membership does not guarantee:
            </p>
            <ul className="terms-list">
              <li>success in an Australian Dental Council examination;</li>
              <li>registration with a professional regulatory authority;</li>
              <li>employment;</li>
              <li>migration or visa outcomes; or</li>
              <li>any particular examination result.</li>
            </ul>
          </section>

          {/* 12. Learning Resources */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">12. Learning Resources</h2>
            <p>
              ADC Experts may add, update, replace, reorganise or remove learning resources as the program develops and as educational information changes.
            </p>
            <p>
              Membership provides access to the resources made available by ADC Experts during the period of active membership rather than ownership of those resources.
            </p>
          </section>

          {/* 13. Intellectual Property and Sharing */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">13. Intellectual Property and Sharing</h2>
            <p>
              ADC Experts membership material is provided for the member's personal educational use.
            </p>
            <p>
              Members must not reproduce, distribute, sell, upload, publicly share or commercially use ADC Experts materials without permission.
            </p>
            <p>
              Access to third-party publications, journals or other materials remains subject to the applicable rights and licence conditions of those materials.
            </p>
          </section>

          {/* 14. Centre Access */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">14. Centre Access</h2>
            <p style={{ marginBottom: '8px' }}>
              Where ADC Experts provides physical centre access to active members, access is subject to:
            </p>
            <ul className="terms-list">
              <li>centre opening hours;</li>
              <li>available capacity;</li>
              <li>reasonable centre rules;</li>
              <li>safety requirements; and</li>
              <li>any booking requirements applicable at the time.</li>
            </ul>
            <p>
              Membership study access does not automatically include paid practical workstation hire, mentoring or other separately priced services.
            </p>
          </section>

          {/* 15. Changes to Membership */}
          <section className="terms-section" style={{ marginBottom: '36px' }}>
            <h2 className="terms-heading">15. Changes to Membership</h2>
            <p>
              ADC Experts may reasonably update its membership resources, operating arrangements or these terms from time to time.
            </p>
            <p>
              Where a material change affects an existing member's fees or significant membership conditions, ADC Experts will provide reasonable notice where appropriate.
            </p>
          </section>

          {/* 16. Contact Details */}
          <section className="terms-section" style={{ marginBottom: '16px' }}>
            <h2 className="terms-heading">16. Contact Details</h2>
            <div style={{ lineHeight: 1.6 }}>
              <p style={{ margin: 0, fontWeight: 700 }}>ADC Experts</p>
              <p style={{ margin: 0 }}>Operated by ADC Coaching Pty Ltd</p>
              <p style={{ margin: 0 }}>
                Website: <a href="https://www.adcexperts.com.au" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>www.adcexperts.com.au</a>
              </p>
              <p style={{ margin: 0 }}>
                Email: <a href="mailto:admin@adcexperts.com.au" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>admin@adcexperts.com.au</a>
              </p>
            </div>
          </section>

          {/* Bottom Action for candidates */}
          <div style={{ textAlign: 'center', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #E5E7EB' }}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenModal('Membership Inquiries & Consultation')}
            >
              Have Questions? Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
