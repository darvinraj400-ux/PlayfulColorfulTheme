import { useState, useRef, useId } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const statusId = useId();
  const emailId = useId();

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate a brief delay for demo purposes
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return 'Thanks! This is a demo — in production, you\'d receive a confirmation email.';
      case 'error':
        return errorMessage;
      default:
        return '';
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-plum/50 mb-4">
            03 / Stay in the Loop
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-plum leading-tight mb-4">
            Something good{' '}
            <span className="font-serif italic">starts here</span>.
          </h2>
          <p className="text-lg text-plum/60 mb-10 leading-relaxed">
            Leave your email and we'll be in touch with updates, ideas, and next steps.
          </p>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            <div>
              <label htmlFor={emailId} className="sr-only">
                Email address
              </label>
              <input
                id={emailId}
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') {
                    setStatus('idle');
                    setErrorMessage('');
                  }
                }}
                placeholder="you@example.com"
                className="form-input"
                disabled={status === 'submitting'}
                aria-describedby={status !== 'idle' ? statusId : undefined}
                aria-invalid={status === 'error'}
                autoComplete="email"
              />
            </div>

            {/* Status messages */}
            <div
              id={statusId}
              role="status"
              aria-live="polite"
              className="min-h-[1.5rem]"
            >
              {status === 'error' && (
                <p className="text-coral text-sm font-medium">{errorMessage}</p>
              )}
              {status === 'success' && (
                <p className="text-mint-dark text-sm font-medium" style={{ color: '#2D8B4E' }}>
                  {getStatusMessage()}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-coral text-warm-white px-7 py-3.5 rounded-full font-semibold hover:bg-coral-dark transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'submitting' ? 'Sending...' : 'Keep me posted ↗'}
              </button>
              <p className="text-xs text-plum/40 font-mono">
                No spam. Just the good stuff.
              </p>
            </div>

            {/* Demo notice */}
            <p className="text-xs text-plum/30 mt-4 border-t border-plum/5 pt-4">
              This is a demo form. A real subscription service or backend would be required to process actual signups.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
