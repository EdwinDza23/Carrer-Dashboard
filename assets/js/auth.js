/* ================================================================
   AUTH.JS — Pixel ATS Platform
   Session management · Route protection · Role-based redirect
   ================================================================ */

(function () {
  'use strict';

  const SESSION_KEY = 'ats_session';
  const LOGIN_URL = 'auth/login.html';

  /* ── Demo accounts ── */
  const DEMO_ACCOUNTS = {
    'candidate@demo.com': {
      password: 'Candidate@123',
      role: 'candidate',
      name: 'Edwin Dsouza',
      company: '',
      title: 'UI/UX Designer',
      portal: 'candidate/dashboard.html',
    },
    'recruiter@demo.com': {
      password: 'Recruiter@123',
      role: 'recruiter',
      name: 'Riya Kapoor',
      company: 'Edwin Design Studio',
      title: 'Lead Recruiter',
      portal: 'recruiter/dashboard.html',
    },
    'client@demo.com': {
      password: 'Client@123',
      role: 'client',
      name: 'Arjun Patel',
      company: 'Acme Corp',
      title: 'Hiring Lead',
      portal: 'client/dashboard.html',
    },
  };

  /* ── Portal role → home URL map ── */
  const PORTAL_HOME = {
    candidate: 'candidate/dashboard.html',
    recruiter: 'recruiter/dashboard.html',
    client: 'client/dashboard.html',
  };

  /**
   * Resolve target path relative to current page location.
   * Handles root (/index.html), 1-level deep (/auth/login.html), or file:// URLs.
   */
  function rootUrl(targetPath) {
    const cleanTarget = targetPath.replace(/^\//, '');
    const path = location.pathname.replace(/\\/g, '/');
    const segments = path.split('/').filter(Boolean);

    // Check if we are inside a subfolder (auth, candidate, recruiter, client, errors)
    const subfolders = ['auth', 'candidate', 'recruiter', 'client', 'errors'];
    const currentFolder = segments.length > 1 ? segments[segments.length - 2] : '';

    if (subfolders.includes(currentFolder.toLowerCase())) {
      return '../' + cleanTarget;
    }
    return './' + cleanTarget;
  }

  /* ================================================================
     SESSION MANAGEMENT
     ================================================================ */
  const ATS_Auth = {

    setSession(data) {
      try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(data));
      } catch (e) {
        console.error('Failed to save session:', e);
      }
    },

    getSession() {
      try {
        const raw = localStorage.getItem(SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },

    clearSession() {
      try {
        localStorage.removeItem(SESSION_KEY);
      } catch (e) {
        console.error('Failed to clear session:', e);
      }
    },

    /* ── Login ── */
    login(email, password) {
      const cleanEmail = (email || '').toLowerCase().trim();
      const acc = DEMO_ACCOUNTS[cleanEmail];
      if (!acc) return { ok: false, error: 'No account found with that email address.' };
      if (acc.password !== password) return { ok: false, error: 'Incorrect password. Please try again.' };

      const session = {
        role: acc.role,
        name: acc.name,
        company: acc.company,
        title: acc.title,
        email: cleanEmail,
        initials: acc.name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase(),
        loginAt: Date.now(),
        expiresAt: Date.now() + 8 * 60 * 60 * 1000, // 8 hours
      };
      this.setSession(session);
      return { ok: true, portal: acc.portal, session };
    },

    /* ── Logout ── */
    logout() {
      this.clearSession();
      const target = rootUrl(LOGIN_URL) + '?reason=logout';
      window.location.href = target;
    },

    /* ── Session expired redirect ── */
    sessionExpired() {
      this.clearSession();
      window.location.href = rootUrl('errors/session-expired.html');
    },

    /* ── Route guard ── */
    guard(expectedRole) {
      const session = this.getSession();

      // No session → login
      if (!session) {
        window.location.href = rootUrl(LOGIN_URL) + '?reason=auth';
        return null;
      }

      // Expired session
      if (session.expiresAt && Date.now() > session.expiresAt) {
        this.sessionExpired();
        return null;
      }

      // Wrong portal role → redirect to authorized workspace
      if (expectedRole && session.role !== expectedRole) {
        const dest = PORTAL_HOME[session.role] || LOGIN_URL;
        window.location.href = rootUrl(dest);
        return null;
      }

      // Extend session lifetime on active navigation
      session.expiresAt = Date.now() + 8 * 60 * 60 * 1000;
      this.setSession(session);

      return session;
    },

    /* ── Apply session values to page DOM ── */
    applyToDOM(session) {
      if (!session) return;
      const nameEls = document.querySelectorAll('[data-session="name"]');
      const roleEls = document.querySelectorAll('[data-session="title"]');
      const companyEls = document.querySelectorAll('[data-session="company"]');
      const initialsEls = document.querySelectorAll('[data-session="initials"]');
      const emailEls = document.querySelectorAll('[data-session="email"]');
      const subtitleEls = document.querySelectorAll('[data-session="subtitle"]');

      nameEls.forEach(el => el.textContent = session.name);
      roleEls.forEach(el => el.textContent = session.title + (session.company ? ' · ' + session.company : ''));
      companyEls.forEach(el => el.textContent = session.company);
      initialsEls.forEach(el => el.textContent = session.initials);
      emailEls.forEach(el => el.textContent = session.email);

      const titleText = session.title || 'UI/UX Designer';
      const displayTitle = titleText.toLowerCase().includes('senior') ? titleText : 'Senior ' + titleText;
      const locText = session.location || 'Bengaluru, India';
      subtitleEls.forEach(el => el.textContent = `${displayTitle} · ${locText}`);

      document.querySelectorAll('[data-session="avatar"]').forEach(el => {
        el.textContent = session.initials;
      });
    },

    getDemoAccounts: () => DEMO_ACCOUNTS,
    rootUrl,
  };

  window.ATS = window.ATS || {};
  window.ATS.Auth = ATS_Auth;

})();
