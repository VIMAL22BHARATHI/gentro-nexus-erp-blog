import React, { useMemo, useRef, useState } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

/**
 * Contact details (taken verbatim from the supplied reference screenshot).
 * Keep them in one place so they are easy to update.
 */
const CONTACT_INFO = {
  phoneDisplay: '(+91) 9659245977',
  phoneTel: '+919659245977',
  whatsappNumber: '919659245977',
  officeName: `${BRAND_CONFIG.productName} by Gentrobyte AI Labs`,
  address:
    '9th floor, BLOCK D3, Manyata Tech Park Rd, Manyata Tech Park, Thanisandra, Bengaluru, Karnataka 560045',
  gst: '33DKUPP4601K1ZR'
};

/**
 * Optional real backend. If VITE_CONTACT_ENDPOINT is set at build time, the form
 * POSTs JSON to it and only reports success when the server answers 2xx.
 * If it is NOT set, nothing is transmitted: the form prepares the message for
 * WhatsApp / copy instead and says so plainly.
 */
const CONTACT_ENDPOINT = import.meta.env?.VITE_CONTACT_ENDPOINT || '';
const REQUEST_TIMEOUT_MS = 12000;

const MESSAGE_MIN = 10;
const MESSAGE_MAX = 1000;

/* ---------------------------------------------------------------- validation */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_RE = /^[\p{L}][\p{L}\p{M}\s.'’-]*$/u;
const PHONE_CHARS_RE = /^\+?[\d\s().-]+$/;

function validateName(value) {
  const v = value.trim();
  if (!v) return 'Please enter your name.';
  if (v.length < 2) return 'Name must be at least 2 characters.';
  if (v.length > 60) return 'Name must be 60 characters or fewer.';
  if (!NAME_RE.test(v)) return 'Name can only contain letters, spaces, . - and apostrophes.';
  return '';
}

function validateContact(value) {
  const v = value.trim();
  if (!v) return 'Please enter a phone number or email address.';

  if (v.includes('@')) {
    if (v.length > 254 || !EMAIL_RE.test(v)) return 'Enter a valid email, e.g. name@company.com.';
    return '';
  }

  if (!PHONE_CHARS_RE.test(v)) return 'Enter a valid phone number or email address.';

  const hasPlus = v.startsWith('+');
  const digits = v.replace(/\D/g, '');

  if (hasPlus) {
    if (digits.startsWith('91')) {
      const national = digits.slice(2);
      if (national.length !== 10 || !/^[6-9]/.test(national)) {
        return 'Indian numbers need 10 digits after +91, starting with 6–9.';
      }
      return '';
    }
    if (digits.length < 8 || digits.length > 15) return 'Enter a valid international number (8–15 digits).';
    return '';
  }

  // No "+": accept 10-digit Indian mobile, optionally prefixed with 0 or 91.
  let national = digits;
  if (digits.length === 11 && digits.startsWith('0')) national = digits.slice(1);
  else if (digits.length === 12 && digits.startsWith('91')) national = digits.slice(2);

  if (national.length !== 10 || !/^[6-9]/.test(national)) {
    return 'Enter a 10-digit mobile number (starting 6–9), include +country code, or use an email.';
  }
  return '';
}

function validateMessage(value) {
  const v = value.trim();
  if (!v) return 'Please tell us a little about your business.';
  if (v.length < MESSAGE_MIN) return `Please write at least ${MESSAGE_MIN} characters.`;
  if (v.length > MESSAGE_MAX) return `Message must be ${MESSAGE_MAX} characters or fewer.`;
  return '';
}

const VALIDATORS = { name: validateName, contact: validateContact, message: validateMessage };
const FIELD_ORDER = ['name', 'contact', 'message'];

/* -------------------------------------------------------------------- helpers */

function buildWhatsAppText({ name, contact, message }) {
  return [
    `Hello ${BRAND_CONFIG.productName} team,`,
    '',
    `Name: ${name.trim()}`,
    `Contact: ${contact.trim()}`,
    '',
    message.trim()
  ].join('\n');
}

function whatsAppUrl(text) {
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/* ---------------------------------------------------------------------- icons */

const Icon = {
  Phone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Pin: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Send: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 2-7 20-4-9-9-4 20-7z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
  Check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  Alert: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),
  Info: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  Whatsapp: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 0 16.2 8 8 0 0 1-4.13-1.14l-.3-.18-3.08.89.9-3-.2-.31A8.1 8.1 0 0 1 12.04 3.8zm-3.1 4.4c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.8 2.86 4.45 3.9 2.2.87 2.65.7 3.13.65.48-.04 1.55-.63 1.77-1.24.22-.6.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3-.26-.13-1.55-.77-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.68.85-.83 1.03-.15.17-.3.2-.57.07-.26-.13-1.1-.4-2.1-1.3-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.94-.21-.5-.43-.44-.59-.45h-.5z" />
    </svg>
  ),
  Copy: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Edit: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  ),
  Map: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
};

/* ------------------------------------------------------------------ component */

export default function ContactSection() {
  const [values, setValues] = useState({ name: '', contact: '', message: '', website: '' });
  const [touched, setTouched] = useState({});
  const [attempted, setAttempted] = useState(false);
  const [shaking, setShaking] = useState(false);
  // idle | submitting | prepared | sent | error
  const [status, setStatus] = useState('idle');
  const [errorDetail, setErrorDetail] = useState('');
  const [copied, setCopied] = useState('');
  const refs = { name: useRef(null), contact: useRef(null), message: useRef(null) };
  const copiedTimer = useRef(null);

  const errors = useMemo(() => {
    const out = {};
    FIELD_ORDER.forEach((f) => {
      const msg = VALIDATORS[f](values[f]);
      if (msg) out[f] = msg;
    });
    return out;
  }, [values]);

  const showError = (f) => (touched[f] || attempted) && errors[f];
  const isValid = (f) => touched[f] && !errors[f];
  const invalidCount = Object.keys(errors).length;
  const busy = status === 'submitting';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Leaving a finished/errored state means the user is editing again.
    if (status === 'error') setStatus('idle');
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const flashCopied = (label) => {
    setCopied(label);
    window.clearTimeout(copiedTimer.current);
    copiedTimer.current = window.setTimeout(() => setCopied(''), 2200);
  };

  const handleCopy = async (label, text) => {
    const ok = await copyToClipboard(text);
    flashCopied(ok ? label : 'failed');
  };

  const resetForm = () => {
    setValues({ name: '', contact: '', message: '', website: '' });
    setTouched({});
    setAttempted(false);
    setStatus('idle');
    setErrorDetail('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (busy) return;

    // Honeypot: real people never see or fill this field.
    if (values.website) return;

    setAttempted(true);

    if (invalidCount > 0) {
      const first = FIELD_ORDER.find((f) => errors[f]);
      refs[first]?.current?.focus();
      setShaking(true);
      window.setTimeout(() => setShaking(false), 500);
      setStatus('idle');
      return;
    }

    // No backend configured -> be transparent: nothing is transmitted.
    if (!CONTACT_ENDPOINT) {
      setStatus('prepared');
      return;
    }

    setStatus('submitting');
    setErrorDetail('');
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          contact: values.contact.trim(),
          message: values.message.trim(),
          source: `${BRAND_CONFIG.productName} contact form`,
          submittedAt: new Date().toISOString()
        }),
        signal: controller.signal
      });
      if (!res.ok) throw new Error(`Server responded with status ${res.status}`);
      setStatus('sent');
    } catch (err) {
      setErrorDetail(
        err?.name === 'AbortError'
          ? 'The request timed out.'
          : 'The server could not be reached or rejected the request.'
      );
      setStatus('error');
    } finally {
      window.clearTimeout(timer);
    }
  };

  const waText = buildWhatsAppText(values);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`;

  /* ---- field renderer ---- */
  const renderField = (name, label, control) => {
    const err = showError(name);
    return (
      <div
        className={`contact-field contact-field-${name} ${err ? 'has-error' : ''} ${
          isValid(name) ? 'is-valid' : ''
        } ${shaking && err ? 'shake' : ''}`}
      >
        <label className="contact-label" htmlFor={`contact-${name}`}>
          {label}
        </label>
        <div className="contact-control">
          {control}
          {isValid(name) && name !== 'message' && (
            <span className="contact-valid-icon" aria-hidden="true">
              {Icon.Check}
            </span>
          )}
        </div>
        <div className="contact-field-foot">
          <span id={`contact-${name}-error`} className="contact-error" role={err ? 'alert' : undefined}>
            {err || ''}
          </span>
          {name === 'message' && (
            <span
              className={`contact-counter ${values.message.length > MESSAGE_MAX ? 'over' : ''}`}
              aria-hidden="true"
            >
              {values.message.length}/{MESSAGE_MAX}
            </span>
          )}
        </div>
      </div>
    );
  };

  const commonProps = (name) => ({
    id: `contact-${name}`,
    name,
    ref: refs[name],
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    disabled: busy,
    'aria-required': 'true',
    'aria-invalid': showError(name) ? 'true' : 'false',
    'aria-describedby': `contact-${name}-error`
  });

  /* ---- right column: form or outcome panel ---- */
  const renderRight = () => {
    if (status === 'sent') {
      return (
        <div className="contact-outcome success" role="status">
          <div className="contact-outcome-icon">{Icon.Check}</div>
          <h3>Message sent</h3>
          <p>
            Thanks, <strong>{values.name.trim()}</strong>. Our server confirmed it received your message. The{' '}
            {BRAND_CONFIG.productName} team will reach out on <strong>{values.contact.trim()}</strong>.
          </p>
          <div className="contact-outcome-actions">
            <button type="button" className="contact-btn-ghost" onClick={resetForm}>
              Send another message
            </button>
          </div>
        </div>
      );
    }

    if (status === 'prepared') {
      return (
        <div className="contact-outcome prepared" role="status">
          <div className="contact-outcome-icon info">{Icon.Info}</div>
          <h3>Your message is ready, but not sent yet</h3>
          <p>
            This page isn’t connected to a messaging service, so <strong>nothing has been transmitted</strong>. To
            reach us, send your message on WhatsApp (it opens with your text pre-filled — you still need to press
            send) or copy it and email or call us using the details alongside.
          </p>
          <blockquote className="contact-preview">
            <span>{values.name.trim()} · {values.contact.trim()}</span>
            {values.message.trim()}
          </blockquote>
          <div className="contact-outcome-actions">
            <a
              className="contact-btn-whatsapp"
              href={whatsAppUrl(waText)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon.Whatsapp}
              <span>Continue on WhatsApp</span>
            </a>
            <button type="button" className="contact-btn-ghost" onClick={() => handleCopy('message', waText)}>
              {Icon.Copy}
              <span>{copied === 'message' ? 'Copied' : 'Copy message'}</span>
            </button>
            <button type="button" className="contact-btn-ghost" onClick={() => setStatus('idle')}>
              {Icon.Edit}
              <span>Edit message</span>
            </button>
          </div>
          <span className="contact-sr-live" aria-live="polite">
            {copied === 'message' ? 'Message copied to clipboard' : copied === 'failed' ? 'Copy failed' : ''}
          </span>
        </div>
      );
    }

    return (
      <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
        {/* Honeypot (hidden from people and assistive tech) */}
        <div className="contact-hp" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={handleChange}
          />
        </div>

        {renderField(
          'name',
          'Name',
          <input
            {...commonProps('name')}
            type="text"
            placeholder="Your name"
            autoComplete="name"
            maxLength={80}
          />
        )}

        {renderField(
          'contact',
          'Contact Details',
          <input
            {...commonProps('contact')}
            type="text"
            placeholder="Phone or email"
            autoComplete="off"
            maxLength={254}
          />
        )}

        {renderField(
          'message',
          'Message',
          <textarea
            {...commonProps('message')}
            placeholder="Tell us about your business"
            rows={6}
          />
        )}

        {status === 'error' && (
          <div className="contact-banner error" role="alert">
            {Icon.Alert}
            <div>
              <strong>Your message was not sent.</strong> {errorDetail} Please try again, or reach us on WhatsApp.
              <div className="contact-banner-actions">
                <a
                  href={whatsAppUrl(waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-inline-link"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {attempted && invalidCount > 0 && status !== 'error' && (
          <div className="contact-banner warn" role="alert">
            {Icon.Alert}
            <div>
              Please fix {invalidCount} highlighted {invalidCount === 1 ? 'field' : 'fields'} before sending.
            </div>
          </div>
        )}

        <button type="submit" className="contact-submit" disabled={busy}>
          <span className="contact-submit-shine" aria-hidden="true" />
          {busy ? (
            <>
              <span className="contact-spinner" aria-hidden="true" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <span>{status === 'error' ? 'Try Again' : 'Send Message'}</span>
              {Icon.Send}
            </>
          )}
        </button>
      </form>
    );
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-shell">
          {/* Left: intro + info cards */}
          <div className="contact-left">
            <div className="contact-eyebrow">Contact Us</div>
            <h2 id="contact-heading" className="contact-title">
              Talk to the {BRAND_CONFIG.productName} team
            </h2>
            <p className="contact-lead">
              Share your details and message. Our team will help you scope the right modules, demo path, and
              rollout plan for your manufacturing operation.
            </p>

            <div className="contact-info-panel">
              <div className="contact-card contact-card-phone" data-spotlight>
                <span className="contact-card-icon">{Icon.Phone}</span>
                <div className="contact-card-body">
                  <span className="contact-card-label">Call / WhatsApp</span>
                  <a className="contact-phone" href={`tel:${CONTACT_INFO.phoneTel}`}>
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <div className="contact-card-actions">
                    <a className="contact-chip" href={`tel:${CONTACT_INFO.phoneTel}`}>
                      Call
                    </a>
                    <a
                      className="contact-chip"
                      href={whatsAppUrl(`Hello ${BRAND_CONFIG.productName} team, I would like to know more about the AI-powered manufacturing ERP.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                    <button
                      type="button"
                      className="contact-chip"
                      onClick={() => handleCopy('phone', CONTACT_INFO.phoneDisplay)}
                    >
                      {copied === 'phone' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-card contact-card-office" data-spotlight>
                <span className="contact-card-icon">{Icon.Pin}</span>
                <div className="contact-card-body">
                  <span className="contact-card-label">Office</span>
                  <strong className="contact-office-name">{CONTACT_INFO.officeName}</strong>
                  <address className="contact-address">{CONTACT_INFO.address}</address>
                  <div className="contact-card-actions">
                    <a className="contact-chip" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                      <span>View on map</span>
                      {Icon.Map}
                    </a>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="contact-gst"
                onClick={() => handleCopy('gst', CONTACT_INFO.gst)}
                aria-label={`GST number ${CONTACT_INFO.gst}. Click to copy.`}
                title="Click to copy"
              >
                <span>GST: {CONTACT_INFO.gst}</span>
                <span className="contact-gst-copy" aria-hidden="true">
                  {copied === 'gst' ? 'Copied' : 'Copy'}
                </span>
              </button>
              <span className="contact-sr-live" aria-live="polite">
                {copied === 'phone' ? 'Phone number copied' : copied === 'gst' ? 'GST number copied' : ''}
              </span>
            </div>
          </div>

          {/* Right: form / outcome */}
          <div className="contact-right">{renderRight()}</div>
        </div>
      </div>
    </section>
  );
}
