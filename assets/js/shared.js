/* ================================================================
   SHARED.JS — Edwin ATS Platform
   Toast · Frame corners · Reveal · Modal · Sidebar · Theme
   Notifications · Portal init · Common utilities
   ================================================================ */

(function () {
  'use strict';

  window.ATS = window.ATS || {};

  /* ================================================================
     TOAST SYSTEM
     ================================================================ */
  const Toast = {
    region: null,

    init() {
      this.region = document.getElementById('toast-region');
      if (!this.region) {
        this.region = document.createElement('div');
        this.region.id = 'toast-region';
        this.region.className = 'toast-region';
        this.region.setAttribute('aria-live', 'polite');
        this.region.setAttribute('aria-atomic', 'false');
        document.body.appendChild(this.region);
      }
    },

    show(message, type = 'info', duration = 3500) {
      if (!this.region) this.init();
      const iconMap = {
        success: 'check_circle',
        error:   'error',
        warn:    'warning',
        info:    'info',
      };
      const toast = document.createElement('div');
      toast.className = `toast toast--${type}`;
      toast.setAttribute('role', 'status');
      toast.innerHTML = `
        <span class="material-symbols-rounded" aria-hidden="true">${iconMap[type] || 'info'}</span>
        <span>${message}</span>
      `;
      this.region.appendChild(toast);
      setTimeout(() => {
        toast.classList.add('is-leaving');
        toast.addEventListener('animationend', () => toast.remove(), { once: true });
      }, duration);
    },
  };

  /* ================================================================
     FRAME CORNERS
     ================================================================ */
  const FrameCorners = {
    inject(root = document) {
      root.querySelectorAll('.frame').forEach(el => {
        if (el.querySelector('.corner')) return;
        ['tl', 'tr', 'bl', 'br'].forEach(pos => {
          const span = document.createElement('span');
          span.className = `corner corner--${pos}`;
          span.setAttribute('aria-hidden', 'true');
          el.appendChild(span);
        });
      });
    },
  };

  /* ================================================================
     REVEAL ON SCROLL
     ================================================================ */
  const Reveal = {
    observer: null,

    init(root = null) {
      const options = root
        ? { root, threshold: 0.08 }
        : { threshold: 0.08 };

      this.observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            this.observer.unobserve(e.target);
          }
        });
      }, options);

      document.querySelectorAll('[data-reveal]').forEach(el => this.observer.observe(el));
    },
  };

  /* ================================================================
     MODAL SYSTEM
     ================================================================ */
  const Modal = {
    _escHandler: null,

    open(id) {
      const overlay = typeof id === 'string' ? document.getElementById(id) : id;
      if (!overlay) return;
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      const focusable = overlay.querySelector('button:not(.modal-close), input, select, textarea, [tabindex]');
      if (focusable) setTimeout(() => focusable.focus(), 80);

      this._escHandler = e => {
        if (e.key === 'Escape') this.closeAll();
      };
      document.addEventListener('keydown', this._escHandler);
    },

    close(id) {
      const overlay = typeof id === 'string' ? document.getElementById(id) : id;
      if (!overlay) return;
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (this._escHandler) {
        document.removeEventListener('keydown', this._escHandler);
        this._escHandler = null;
      }
    },

    closeAll() {
      document.querySelectorAll('.modal-overlay.is-open').forEach(el => {
        el.classList.remove('is-open');
        el.setAttribute('aria-hidden', 'true');
      });
      document.body.style.overflow = '';
      if (this._escHandler) {
        document.removeEventListener('keydown', this._escHandler);
        this._escHandler = null;
      }
    },

    bindClose(overlayId, ...closeBtnIds) {
      const overlay = document.getElementById(overlayId);
      if (!overlay) return;

      overlay.addEventListener('click', e => {
        if (e.target === overlay) this.close(overlayId);
      });

      closeBtnIds.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) btn.addEventListener('click', () => this.close(overlayId));
      });
    },
  };

  /* ================================================================
     SIDEBAR (portal shell)
     ================================================================ */
  const Sidebar = {
    el: null,
    backdrop: null,

    init() {
      this.el       = document.querySelector('.sidebar');
      this.backdrop = document.getElementById('sidebar-backdrop');
      const toggleBtn = document.getElementById('sidebar-toggle');

      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => this.toggle());
      }
      if (this.backdrop) {
        this.backdrop.addEventListener('click', () => this.close());
      }

      this.setActive();
    },

    toggle() {
      if (!this.el) return;
      const isOpen = this.el.classList.toggle('is-open');
      if (this.backdrop) this.backdrop.classList.toggle('is-visible', isOpen);
    },

    close() {
      if (!this.el) return;
      this.el.classList.remove('is-open');
      if (this.backdrop) this.backdrop.classList.remove('is-visible');
    },

    setActive() {
      const current = location.pathname.split('/').pop() || 'dashboard.html';
      document.querySelectorAll('.nav-item[data-page]').forEach(item => {
        const page = item.getAttribute('data-page');
        if (page && current.includes(page)) {
          item.classList.add('is-active');
          item.setAttribute('aria-current', 'page');
        }
      });
    },
  };

  /* ================================================================
     USER MENU (sidebar footer dropdown & sign-out)
     ================================================================ */
  const UserMenu = {
    menu: null,
    btn:  null,

    init() {
      this.menu = document.getElementById('user-menu');
      this.btn  = document.getElementById('user-menu-btn');
      if (!this.menu || !this.btn) return;

      this.btn.addEventListener('click', e => {
        e.stopPropagation();
        const open = this.menu.classList.toggle('is-open');
        this.btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      document.addEventListener('click', e => {
        if (this.menu && !this.menu.contains(e.target) && e.target !== this.btn) {
          this.menu.classList.remove('is-open');
          this.btn.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && this.menu && this.menu.classList.contains('is-open')) {
          this.menu.classList.remove('is-open');
          this.btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Logout button - triggers immediate clean sign-out
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', e => {
          e.preventDefault();
          e.stopPropagation();
          if (window.ATS?.Auth) {
            window.ATS.Auth.logout();
          }
        });
      }

      // Confirm logout in modal if present
      const logoutConfirm = document.getElementById('logout-confirm');
      if (logoutConfirm) {
        logoutConfirm.addEventListener('click', e => {
          e.preventDefault();
          if (window.ATS?.Auth) {
            window.ATS.Auth.logout();
          }
        });
      }
    },
  };

  /* ================================================================
     NOTIFICATIONS DROPDOWN
     ================================================================ */
  const Notifications = {
    btn:  null,
    drop: null,
    dot:  null,

    init(items = []) {
      this.btn  = document.getElementById('notif-btn');
      this.drop = document.getElementById('notif-drop');
      this.dot  = document.getElementById('notif-dot');
      if (!this.btn || !this.drop) return;

      this.render(items);

      this.btn.addEventListener('click', e => {
        e.stopPropagation();
        const open = this.drop.classList.toggle('is-open');
        this.btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      document.addEventListener('click', e => {
        if (this.drop && !this.drop.contains(e.target) && e.target !== this.btn) {
          this.drop.classList.remove('is-open');
          this.btn.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && this.drop && this.drop.classList.contains('is-open')) {
          this.drop.classList.remove('is-open');
          this.btn.setAttribute('aria-expanded', 'false');
        }
      });

      const markAll = document.getElementById('notif-mark-all');
      if (markAll) {
        markAll.addEventListener('click', () => {
          this.drop.querySelectorAll('.notif-item--unread').forEach(el => el.classList.remove('notif-item--unread'));
          this.drop.querySelectorAll('.notif-unread-dot').forEach(el => el.remove());
          if (this.dot) this.dot.style.display = 'none';
          Toast.show('All notifications marked as read.', 'success');
        });
      }
    },

    render(items) {
      const list = document.getElementById('notif-list');
      if (!list) return;
      const unread = items.filter(n => n.unread).length;
      if (this.dot) this.dot.style.display = unread ? 'block' : 'none';

      if (!items.length) {
        list.innerHTML = '<p class="notif-empty">You\'re all caught up ✓</p>';
        return;
      }

      list.innerHTML = items.map(n => `
        <div class="notif-item ${n.unread ? 'notif-item--unread' : ''}">
          <div class="notif-icon-wrap notif-icon-wrap--${n.type || 'violet'}">
            <span class="material-symbols-rounded" aria-hidden="true">${n.icon}</span>
          </div>
          <div style="flex:1;min-width:0">
            <p class="notif-text">${n.text}</p>
            <p class="notif-time">${n.time}</p>
          </div>
          ${n.unread ? '<span class="notif-unread-dot" aria-label="Unread"></span>' : ''}
        </div>
      `).join('');
    },
  };

  /* ================================================================
     THEME TOGGLE (dark / light)
     ================================================================ */
  const Theme = {
    KEY: 'ats_theme',

    init() {
      const saved = localStorage.getItem(this.KEY) || 'dark';
      this.apply(saved);

      const toggleBtn = document.getElementById('theme-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          const current = document.documentElement.getAttribute('data-theme') || 'dark';
          const next    = current === 'dark' ? 'light' : 'dark';
          this.apply(next);
          localStorage.setItem(this.KEY, next);
        });
      }
    },

    apply(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      const btn = document.getElementById('theme-toggle');
      if (btn) this._updateIcon(btn, theme);
    },

    _updateIcon(btn, theme) {
      const icon = btn.querySelector('.material-symbols-rounded');
      if (icon) icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    },
  };

  /* ================================================================
     PORTAL INITIALIZER
     ================================================================ */
  const Portal = {
    init({ role, notifs = [] } = {}) {
      if (role) document.documentElement.setAttribute('data-portal', role);

      const session = window.ATS?.Auth?.guard(role);
      if (!session) return null;

      window.ATS.Auth.applyToDOM(session);
      FrameCorners.inject();

      const content = document.querySelector('.page-content');
      Reveal.init(content);

      Sidebar.init();
      UserMenu.init();
      Notifications.init(notifs);
      Theme.init();
      Toast.init();

      if (!document.getElementById('sidebar-backdrop')) {
        const bd = document.createElement('div');
        bd.id = 'sidebar-backdrop';
        bd.className = 'sidebar-backdrop';
        document.body.appendChild(bd);
        bd.addEventListener('click', () => Sidebar.close());
      }

      return session;
    },
  };

  /* ================================================================
     UTILITIES
     ================================================================ */
  const Utils = {
    formatDate(dateStr) {
      const d = new Date(dateStr);
      if (isNaN(d)) return dateStr;
      return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    },

    initials(name) {
      return (name || '').split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
    },

    debounce(fn, wait = 250) {
      let t;
      return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
    },

    plural(n, word) {
      return `${n} ${word}${n !== 1 ? 's' : ''}`;
    },

    animateFunnel(container = document) {
      setTimeout(() => {
        container.querySelectorAll('.funnel-fill[data-target]').forEach(el => {
          el.style.width = el.dataset.target;
        });
      }, 100);
    },

    emptyState({ icon = 'search_off', title = 'Nothing here', body = '' } = {}) {
      return `
        <div class="empty-state">
          <span class="material-symbols-rounded" aria-hidden="true">${icon}</span>
          <h3>${title}</h3>
          ${body ? `<p>${body}</p>` : ''}
        </div>`;
    },

    skeletonRows(cols = 4, rows = 5) {
      return Array(rows).fill(0).map(() => `
        <div class="data-row" style="grid-template-columns: repeat(${cols},1fr); pointer-events:none">
          ${Array(cols).fill('<div class="skeleton skeleton--text" style="width:80%"></div>').join('')}
        </div>`).join('');
    },
  };

  /* ================================================================
     CHIP FILTER HELPER
     ================================================================ */
  const ChipFilter = {
    init(chipAttr, renderFn) {
      document.querySelectorAll(`[${chipAttr}]`).forEach(chip => {
        chip.addEventListener('click', () => {
          document.querySelectorAll(`[${chipAttr}]`).forEach(c => c.classList.remove('is-active'));
          chip.classList.add('is-active');
          renderFn(chip.getAttribute(chipAttr));
        });
      });
    },
  };

  /* ================================================================
     EXPOSE GLOBALS
     ================================================================ */
  Object.assign(window.ATS, {
    Toast,
    Modal,
    Sidebar,
    UserMenu,
    Notifications,
    Theme,
    Portal,
    Utils,
    ChipFilter,
    FrameCorners,
    Reveal,
  });

})();
