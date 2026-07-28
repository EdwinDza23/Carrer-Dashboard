# Enterprise ATS Platform — Architecture & Technical Specifications

## Architectural Overview

This repository has been fully refactored into a scalable, production-ready, enterprise-grade Applicant Tracking System (ATS) architecture designed for high-scale multi-role SaaS operations.

### High-Level Folder Structure

```
d:\Post\career\Dashboard\
├── index.html                           ← Entry Point Router (Redirects to auth/login.html or active portal)
├── Client Portal.md                     ← Spec / Product Requirement Document
├── README.md                            ← Architecture & API Documentation
│
├── auth/                                ← Centralized Authentication Workspace
│   ├── login.html                       ← Unified Sign-In with Role Detection & Demo Access
│   ├── forgot-password.html             ← Account Recovery Request Flow
│   └── reset-password.html              ← New Password Update Screen
│
├── errors/                              ← Global Error Pages & Security Timeouts
│   ├── 404.html                         ← Page Not Found
│   ├── 401.html                         ← Unauthorized Access
│   ├── 403.html                         ← Forbidden Workspace Access
│   ├── 500.html                         ← Internal Server Error
│   └── session-expired.html              ← Security Inactivity Timeout
│
├── assets/                              ← Global Shared Assets
│   ├── css/
│   │   ├── tokens.css                   ← CSS Custom Properties, Typography, Dark/Light tokens
│   │   ├── components.css               ← Shared UIPrimitives (Cards, Tables, Badges, Modals, Toasts)
│   │   └── portal.css                   ← Universal Portal Shell (Sidebar, Topbar, Responsive Layout)
│   ├── js/
│   │   ├── auth.js                      ← Route Protection Guard, Session Expiry & Redirect Logic
│   │   ├── shared.js                    ← Common UI Logic (Toasts, Modals, Sidebar, Theme Toggle)
│   │   └── data.js                      ← Centralized Namespaced Mock Store (Candidate, Recruiter, Client)
│   ├── images/                          ← Product graphics and branding assets
│   ├── icons/                           ← Icon sets & SVGs
│   ├── fonts/                           ← Custom font assets
│   └── components/                      ← Reusable HTML layout snippets
│
├── candidate/                           ← Candidate Portal (9 Role-Specific Pages)
│   ├── dashboard.html                   ← Pipeline progress, stat cards & upcoming interviews
│   ├── applications.html                ← Filterable job applications with stage visualizer
│   ├── application-details.html         ← Detailed application status & recruiter guidance
│   ├── interviews.html                  ← Scheduled interviews & preparation checklists
│   ├── messages.html                    ← Candidate-recruiter message thread
│   ├── documents.html                   ← Resume, portfolio & certificate document vault
│   ├── profile.html                     ← Profile editor, skill tags & AI job recommendations
│   ├── notifications.html               ← Activity alerts feed
│   └── settings.html                    ← Security settings & notification preferences
│
├── recruiter/                           ← Recruiter Portal (6 Role-Specific Pages)
│   ├── dashboard.html                   ← Open jobs, active candidates & interview queue
│   ├── jobs.html                        ← Requisition management & applicant metrics table
│   ├── candidates.html                  ← Candidate card grid with match scores & client shortlisting
│   ├── interviews.html                  ← Interview panel scheduling & video call links
│   ├── reports.html                     ← Recruitment funnel analytics & SLA performance tracking
│   └── settings.html                    ← Recruiter profile & team member management
│
└── client/                              ← Client Portal (7 Role-Specific Pages)
    ├── dashboard.html                   ← Hiring requests snapshot, offer sign-off queue & stats
    ├── hiring-requests.html             ← Requisition submission & stage progress tracking
    ├── candidates.html                  ← Shortlisted candidates review with accept/decline logic
    ├── interviews.html                  ← Candidate interview feedback evaluation forms
    ├── approvals.html                   ← Offer & requisition approval sign-off queue
    ├── reports.html                     ← Client hiring analytics & agency response SLA metrics
    └── settings.html                    ← Company access management & personal account settings
```

---

## 🔐 Authentication & Session Flow

The platform centralizes authentication through `/auth/login.html` and enforces security via `assets/js/auth.js`:

1. **Role-Based Routing**: Upon successful sign-in, users are redirected automatically to their assigned portal:
   - Candidate → `/candidate/dashboard.html`
   - Recruiter → `/recruiter/dashboard.html`
   - Client → `/client/dashboard.html`
2. **Route Guard**: Every portal page invokes `ATS.Portal.init({ role: '...' })` which validates session validity and role permissions. If an unauthenticated user or wrong role attempts direct URL access, they are automatically redirected to `/auth/login.html` or `/errors/403.html`.
3. **One-Click Demo Accounts**:
   - **Candidate**: `candidate@demo.com` / `Candidate@123`
   - **Recruiter**: `recruiter@demo.com` / `Recruiter@123`
   - **Client**: `client@demo.com` / `Client@123`

---

## 📑 Architectural Decision Record (ADR)

### 1. File Consolidation & Legacy Deletions
- **Deleted**: `admin-dashboard.html`, `admin-script.js`, `admin-styles.css` (merged into `/recruiter/` workspace and shared assets).
- **Deleted**: `client-portal.html`, `client-script.js`, `client-styles.css` (refactored into `/client/` workspace pages and shared CSS/JS).
- **Deleted**: Root `styles.css` (decomposed into `assets/css/tokens.css`, `assets/css/components.css`, and `assets/css/portal.css`).
- **Moved**: Root `404.html` and `session-expired.html` moved into dedicated `/errors/` directory along with new `401.html`, `403.html`, and `500.html` pages.

### 2. Design System Architecture
- **Single Source of Tokens**: Color variables (`--violet`, `--coral`, `--emerald`, `--amber`, `--bg`, `--surface`), typography, spacing scale (8px grid), radii, and shadows are defined once in `assets/css/tokens.css`.
- **Dynamic Accent Theming**: Portals switch primary accent colors automatically based on the `data-portal` attribute (`candidate` = `--coral`, `recruiter` = `--violet`, `client` = `--emerald`).
- **Light/Dark Mode**: Universal support toggled via `data-theme="dark|light"`.

### 3. Maintainability & Scalability
- Zero duplicate code: UI primitives (cards, tables, badges, modals, toasts, progress steps, search bars, filter chips) live exclusively in `assets/css/components.css` and `assets/js/shared.js`.
- Modular page files: Each HTML page contains only its semantic markup and page-specific controller logic, importing shared scripts.
