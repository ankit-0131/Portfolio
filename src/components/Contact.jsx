import { useState } from 'react';
import { FiSend, FiArrowUpRight } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import './Contact.css';

/**
 * Contact — Editorial Closing Anchor.
 * Left: Big typographic call to action and monospaced copy links.
 * Right: Minimal, underline-only input contact form.
 */
export default function Contact() {
  const [copyStates, setCopyStates] = useState({ email: false, phone: false });
  const [srAnnouncement, setSrAnnouncement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message received! This is a structural demonstration.');
  };

  const handleCopy = async (text, type) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopyStates((prev) => ({ ...prev, [type]: true }));
        setSrAnnouncement(`${type === 'email' ? 'Email address' : 'Phone number'} copied.`);
        setTimeout(() => {
          setCopyStates((prev) => ({ ...prev, [type]: false }));
        }, 2000);
      } else {
        throw new Error('Clipboard API blocked/missing');
      }
    } catch (err) {
      console.warn('Clipboard API failed, presenting manual prompt:', err);
      setSrAnnouncement('Please copy manually.');
      setCopyStates((prev) => ({ ...prev, [type]: 'Failed' }));
      setTimeout(() => {
        setCopyStates((prev) => ({ ...prev, [type]: false }));
      }, 2000);
      window.prompt(`Copy this ${type}:`, text);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Screen Reader Live Region */}
        <div className="sr-only" aria-live="polite" style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0'
        }}>
          {srAnnouncement}
        </div>

        <div className="contact-grid-editorial">
          {/* Left: Call to Action & Copy Targets (Level 2 Glass) */}
          <div className="contact-cta-pane technical-glass animate-on-scroll">
            <div className="divider-tick"></div>
            <h2 className="contact-heading-statement">
              HAVE A PROJECT OR COMPLEX SYSTEM TO BUILD?
            </h2>
            <p className="contact-cta-text">
              I am open to engineering roles, database configurations, and web projects.
              Connect directly via email or the form.
            </p>

            <div className="contact-ledger-block">
              {/* Email Row */}
              <div className="contact-ledger-row-val">
                <div className="contact-val-col">
                  <span className="contact-meta-label mono">EMAIL</span>
                  <a href={`mailto:${personalInfo.email}`} className="contact-val-anchor">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className={`contact-ledger-copy-btn mono ${copyStates.email ? 'copied' : ''}`}
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  aria-label="Copy email address"
                >
                  {copyStates.email === 'Failed' ? 'ERR' : copyStates.email ? 'COPIED' : 'COPY'}
                </button>
              </div>

              {/* Phone Row */}
              <div className="contact-ledger-row-val">
                <div className="contact-val-col">
                  <span className="contact-meta-label mono">PHONE</span>
                  <a href={`tel:${personalInfo.phone}`} className="contact-val-anchor">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className={`contact-ledger-copy-btn mono ${copyStates.phone ? 'copied' : ''}`}
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  aria-label="Copy phone number"
                >
                  {copyStates.phone === 'Failed' ? 'ERR' : copyStates.phone ? 'COPIED' : 'COPY'}
                </button>
              </div>
            </div>

            <div className="contact-social-row">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link-editorial">
                LinkedIn <FiArrowUpRight />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-editorial">
                GitHub <FiArrowUpRight />
              </a>
            </div>
          </div>

          {/* Right: Underline-only Form */}
          <div className="contact-form-pane animate-on-scroll stagger-1">
            <form className="contact-form-editorial" onSubmit={handleSubmit}>
              <h3 className="form-heading mono">SEND MESSAGE</h3>

              <div className="form-group-underline">
                <input type="text" id="contact-name" required placeholder=" " />
                <label htmlFor="contact-name">Your Name</label>
                <div className="underline-line"></div>
              </div>

              <div className="form-group-underline">
                <input type="email" id="contact-email" required placeholder=" " />
                <label htmlFor="contact-email">Your Email</label>
                <div className="underline-line"></div>
              </div>

              <div className="form-group-underline">
                <textarea id="contact-message" required placeholder=" "></textarea>
                <label htmlFor="contact-message">Your Message</label>
                <div className="underline-line"></div>
              </div>

              <button type="submit" className="link-editorial form-submit-btn">
                Send Query <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
