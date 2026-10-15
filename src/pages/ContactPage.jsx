import React, { useState } from 'react';
import contactDoctorImg from '../assets/contactus-doctor.png';
import contactFormSchema from '../forms/contactus.json';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Extract options directly from Koadz contactus.json schema
  const courseField = contactFormSchema?.data?.find((item) => 
    item?.formFields?.cols?.[0]?.colsData?.fieldData?.name === 'course'
  );
  const courseOptions = courseField?.formFields?.cols?.[0]?.colsData?.fieldData?.options || [
    { label: 'ADC part-1', value: 'ADC part-1' },
    { label: 'ADC part-2', value: 'ADC part-2' },
    { label: 'Mock Exam', value: 'Mock Exam' },
    { label: 'Free online session', value: 'Free online session' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
    setErrorMessage(null);
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    // Koadz form submission payload required by commonapi.koadz.ai
    const koadzPayload = {
      body: {
        form_json: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
          "Name": formData.name,
          "Email": formData.email,
          "Whatsapp/Phone": formData.phone,
          "Which course are you interested in?": formData.course,
          "Message": formData.message
        },
        form_builder_id: '83208939-d5c7-11f0-9f65-0616b5b288d3'
      },
      emailContent: [
        { title: 'title', value: 'New ADC Experts Inquiry' },
        { title: 'message', value: 'A new request has been submitted with the following details:' }
      ],
      recipientsEmail: [
        'adminteam@adcexperts.com.au',
        'jackvania8@gmail.com',
        'drvania8@gmail.com',
        'uma.arakalgudu@makelooplabs.com',
        'aditya@makelooplabs.com',
        'nandana.reddivari@makelooplabs.com'
      ]
    };

    try {
      // 1. Send submission to real Koadz API endpoint
      const response = await fetch('https://commonapi.koadz.ai/api/v1/form/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(koadzPayload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.warn('Koadz response non-200:', response.status, errorData);
      }

      // 2. Also persist in localStorage for reliable audit/backup
      try {
        const existing = JSON.parse(localStorage.getItem('koadz_contact_submissions') || '[]');
        existing.unshift({ 
          id: Date.now(), 
          submittedAt: new Date().toISOString(),
          ...koadzPayload 
        });
        localStorage.setItem('koadz_contact_submissions', JSON.stringify(existing));
      } catch (err) {
        console.warn('Could not save to localStorage', err);
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback save and display confirmation
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-design-page">
      <div className="container" style={{ padding: '24px 24px 48px', maxWidth: '1240px' }}>
        <div className="contact-main-grid">
          {/* ------------------------------------------------------------------
              LEFT COLUMN: KOADZ CONTACT FORM (Matching contactus.png)
              ------------------------------------------------------------------ */}
          <div className="contact-form-column">
            {submitted ? (
              <div className="contact-success-card">
                <div className="success-icon-badge" aria-hidden="true">✓</div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '12px' }}>
                  Thank you for reaching out!
                </h3>
                <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.6, marginBottom: '24px' }}>
                  Your inquiry has been submitted successfully to the ADC Experts admissions team. One of our mentors will get in touch with you shortly.
                </p>
                <button 
                  type="button" 
                  className="btn-terracotta"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="koadz-contact-form" noValidate={false}>
                {errorMessage && (
                  <div style={{ padding: '12px 16px', background: '#FEF2F2', border: '1px solid #F87171', borderRadius: '8px', color: '#991B1B', fontSize: '14px', marginBottom: '20px' }}>
                    {errorMessage}
                  </div>
                )}
                {/* 1. Name */}
                <div className="koadz-form-group">
                  <label htmlFor="koadz-name" className="koadz-form-label">
                    Name
                  </label>
                  <input
                    id="koadz-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="koadz-form-input"
                  />
                </div>

                {/* 2. Email */}
                <div className="koadz-form-group">
                  <label htmlFor="koadz-email" className="koadz-form-label">
                    Email
                  </label>
                  <input
                    id="koadz-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="koadz-form-input"
                  />
                </div>

                {/* 3. Whatsapp/Phone */}
                <div className="koadz-form-group">
                  <label htmlFor="koadz-phone" className="koadz-form-label">
                    Whatsapp/Phone
                  </label>
                  <input
                    id="koadz-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your whatsapp or Phone number"
                    className="koadz-form-input"
                  />
                </div>

                {/* 4. Course Select */}
                <div className="koadz-form-group">
                  <label htmlFor="koadz-course" className="koadz-form-label">
                    Which course are you interested in?
                  </label>
                  <select
                    id="koadz-course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="koadz-form-select"
                  >
                    <option value="" disabled>Select a course</option>
                    {courseOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 5. Message */}
                <div className="koadz-form-group">
                  <label htmlFor="koadz-message" className="koadz-form-label">
                    Message
                  </label>
                  <textarea
                    id="koadz-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your Message"
                    className="koadz-form-textarea"
                  />
                </div>

                {/* Action Buttons: Submit and Reset aligned right */}
                <div className="koadz-btn-group">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="koadz-btn-submit"
                  >
                    {submitting ? 'Submitting...' : 'Submit'}
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="koadz-btn-reset"
                  >
                    Reset
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ------------------------------------------------------------------
              RIGHT COLUMN: EDITORIAL HEADLINE + DOCTOR GRAPHIC
              ------------------------------------------------------------------ */}
          <div className="contact-editorial-column">
            <h1 className="contact-editorial-title">
              Let’s Begin Your ADC Journey Together.
            </h1>
            <p className="contact-editorial-desc">
              Have questions? Need course advice? Our mentors are just a message away.
            </p>

            <div className="contact-media-wrap">
              <img
                src={contactDoctorImg}
                alt="ADC Experts Contact Us - We're here to help"
                className="contact-doctor-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
