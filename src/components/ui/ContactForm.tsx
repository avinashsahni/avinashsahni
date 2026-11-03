import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  projectType: string;
  description: string;
  timeline: string;
  website_hp: string; // Honeypot field for spam prevention
}

const initialForm: FormData = {
  fullName: '',
  email: '',
  companyName: '',
  projectType: 'SaaS Development',
  description: '',
  timeline: '1-3 Months',
  website_hp: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your business email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please tell me about your project and technical requirements.';
    } else if (formData.description.trim().length < 20) {
      newErrors.description = 'Please provide at least a brief 20-character description.';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select an expected timeline.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger validation
    if (!validate()) {
      return;
    }

    // Honeypot spam trap check
    if (formData.website_hp) {
      console.warn('Spam trap triggered.');
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success !== false) {
        setStatus('success');
        setFormData(initialForm);
      } else {
        setStatus('error');
        setErrorMessage(
          result.error ||
            'Failed to dispatch message. You can also reach Avinash directly at avinash@avinashsahni.com.'
        );
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        'A network issue occurred while sending your inquiry. Please email avinash@avinashsahni.com directly.'
      );
    }
  };

  return (
    <div className="w-full">
      {status === 'success' ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center sm:p-12 animate-in fade-in zoom-in duration-300">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
          <p className="mt-2 text-sm text-text-secondary max-w-md mx-auto">
            Thank you for reaching out. I review every project inquiry personally and will respond within 24–48 hours with next steps and technical considerations.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="text-xs font-mono text-accent hover:underline"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {status === 'error' && (
            <div className="rounded-lg border border-red-500/30 bg-red-950/20 p-4 text-sm text-red-200">
              <p className="font-semibold text-red-300">Submission Error</p>
              <p className="mt-1 text-xs">{errorMessage}</p>
            </div>
          )}

          {/* Honeypot field - hidden from real humans */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_hp">Leave this empty</label>
            <input
              type="text"
              id="website_hp"
              name="website_hp"
              value={formData.website_hp}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2"
              >
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Sarah Connor"
                aria-invalid={Boolean(errors.fullName)}
                className={`w-full rounded-lg border bg-[#141414] px-4 py-3 text-sm text-white placeholder-text-muted transition-colors focus:outline-none ${
                  errors.fullName
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-white/10 focus:border-accent'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2"
              >
                Business Email <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="s.connor@cyberdyne.io"
                aria-invalid={Boolean(errors.email)}
                className={`w-full rounded-lg border bg-[#141414] px-4 py-3 text-sm text-white placeholder-text-muted transition-colors focus:outline-none ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-white/10 focus:border-accent'
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Company / Business Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2"
              >
                Company / Organization <span className="text-text-muted text-[10px]">(Optional)</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Acme Ventures Inc."
                className="w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-sm text-white placeholder-text-muted transition-colors focus:border-accent focus:outline-none"
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2"
              >
                Project Type <span className="text-accent">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-[#141414] px-4 py-3 text-sm text-white transition-colors focus:border-accent focus:outline-none appearance-none cursor-pointer"
              >
                <option value="SaaS Development">SaaS Development</option>
                <option value="Custom Web Applications">Custom Web Applications</option>
                <option value="Backend & API Development">Backend & API Development</option>
                <option value="Website Development">Website Development</option>
                <option value="Admin Panels & Dashboards">Admin Panels & Dashboards</option>
                <option value="Third-Party Integrations">Third-Party Integrations</option>
                <option value="Technical Consultation / Other">Technical Consultation / Other</option>
              </select>
            </div>
          </div>

          {/* Expected Timeline */}
          <div>
            <label
              htmlFor="timeline"
              className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2"
            >
              Target Timeline <span className="text-accent">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: '< 1 Month', value: 'Less than 1 Month' },
                { label: '1–3 Months', value: '1-3 Months' },
                { label: '3–6 Months', value: '3-6 Months' },
                { label: 'Ongoing / Advisory', value: 'Ongoing / Advisory' },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2.5 text-xs font-mono transition-all text-center ${
                    formData.timeline === opt.value
                      ? 'border-accent bg-accent/10 text-white font-medium'
                      : 'border-white/10 bg-[#141414] text-text-secondary hover:border-white/20 hover:text-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={opt.value}
                    checked={formData.timeline === opt.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-xs font-mono uppercase tracking-wider text-text-secondary mb-2"
            >
              Project Description & Requirements <span className="text-accent">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell me about your product, business goals, existing tech stack (if any), and the core challenges you are looking to solve..."
              aria-invalid={Boolean(errors.description)}
              className={`w-full rounded-lg border bg-[#141414] px-4 py-3 text-sm text-white placeholder-text-muted transition-colors focus:outline-none resize-y ${
                errors.description
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-white/10 focus:border-accent'
              }`}
            />
            {errors.description && (
              <p className="mt-1.5 text-xs text-red-400">{errors.description}</p>
            )}
          </div>

          {/* Privacy Note */}
          <div className="text-[11px] text-text-muted">
            Direct communication only. Your information is treated confidentially and never shared with third parties. Read the{' '}
            <a href="/privacy" className="text-text-secondary underline hover:text-white">
              Privacy Policy
            </a>
            .
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center rounded-lg bg-[#FF6B35] px-6 py-4 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,107,53,0.3)] transition-all hover:bg-[#FF8252] hover:shadow-[0_0_32px_rgba(255,107,53,0.45)] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Transmitting Inquiry...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Submit Project Inquiry</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

