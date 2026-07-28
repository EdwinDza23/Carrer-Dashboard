# Candidate Portal – Product Specification

# Candidate Portal

A modern, human-centred Applicant Tracking System (ATS) focused on delivering an exceptional candidate experience from application to hiring.

Unlike traditional ATS platforms that expose internal HR processes, this portal is designed around one simple question:

> **"What do I need to know or do next?"**

Every screen, component and interaction should help candidates understand their current status, upcoming steps and required actions.

---

# Product Vision

Create a hiring experience that is:

* Transparent
* Human-centric
* Easy to understand
* Action-oriented
* Mobile friendly
* Accessible (WCAG AA)
* Consistent with the existing Recruiter Dashboard design language

---

# Product Ecosystem

```
Landing Website
      │
      ▼
Career Page
      │
      ▼
Apply Job
      │
      ▼
Login / Register
      │
 ┌───────────────┐
 │ Select Portal │
 └───────────────┘
      │
 ┌──────────┴──────────┐
 │                     │
 ▼                     ▼
Candidate Portal   Recruiter Portal
```

Future Expansion

```
Landing

├── Candidate Portal
├── Recruiter Portal
├── Client Portal (Future)
└── Admin Portal
```

---

# Authentication Flow

Landing Page

↓

Career Page

↓

Job Details

↓

Apply Now

↓

Login / Register

↓

Role Detection

↓

Candidate Dashboard

Recruiters and candidates use different authentication.

Candidate login should never expose recruiter functionality.

---

# Login Page

Purpose

Differentiate users before entering the system.

Two approaches are supported.

## Option 1 (Recommended)

Separate URLs

```
candidate.company.com

recruiter.company.com
```

## Option 2

Single login page

```
Sign In

Email

Password

Continue

──────────────

Candidate Login

Recruiter Login
```

The system redirects users based on account type.

---

# Candidate User Flow

```
Landing Page

↓

Career Page

↓

Search Jobs

↓

Job Detail

↓

Apply

↓

Login / Register

↓

Upload Resume

↓

Application Submitted

↓

Candidate Dashboard

↓

Track Status

↓

Interview

↓

Offer

↓

Accept / Reject

↓

Hired
```

---

# Recruiter User Flow

```
Recruiter Login

↓

Recruiter Dashboard

↓

Create Job

↓

Receive Applications

↓

Review Candidates

↓

Schedule Interviews

↓

Offer

↓

Hire
```

---

# Complete Information Architecture

```
Candidate Portal

├── Dashboard
│
├── My Applications
│      ├── Active
│      ├── Archived
│      ├── Withdrawn
│      └── Rejected
│
├── Application Details
│      ├── Timeline
│      ├── Status
│      ├── Recruiter Messages
│      ├── Attachments
│      └── Activity
│
├── Interviews
│      ├── Upcoming
│      ├── Previous
│      └── Calendar
│
├── Messages
│
├── Documents
│
├── Job Recommendations
│
├── Notifications
│
├── Profile
│      ├── Personal
│      ├── Experience
│      ├── Education
│      ├── Skills
│      ├── Resume
│      └── Portfolio
│
└── Settings
       ├── Password
       ├── Privacy
       ├── Notifications
       └── Delete Account
```

---

# Candidate Dashboard

Purpose

Provide a quick overview without overwhelming the user.

Sections

## Welcome Card

* Welcome message
* Candidate name
* Profile completion
* Current application

---

## Active Application

Display

* Position
* Application ID
* Applied Date
* Current Stage
* Last Updated

CTA

View Details

---

## Timeline Progress

```
Applied

↓

Resume Review

↓

Hiring Manager Review

↓

Interview

↓

Offer

↓

Hired
```

Current stage highlighted.

---

## Next Action

Visible only when required.

Examples

* Confirm Interview
* Upload Portfolio
* Complete Assessment
* Update Resume

Otherwise

> No action required. We'll notify you when something changes.

---

## Recent Updates

Examples

* Resume Reviewed
* Recruiter Sent Message
* Interview Scheduled
* Status Updated

---

## Recommended Jobs

Based on

* Skills
* Experience
* Previous applications

---

# My Applications

Display all applications.

Each card contains

* Position
* Department
* Location
* Status
* Last Updated

Filters

* Active
* Interview
* Offer
* Rejected
* Withdrawn
* Archived

Sorting

* Recent
* Oldest
* Status

---

# Application Details

Most important screen.

Sections

## Job Information

* Position
* Department
* Employment Type
* Recruiter
* Location

---

## Current Status

Instead of

> Under Review

Use

> Your application is currently being reviewed by the hiring manager.

---

## What Happens Next

Example

Current Status

Hiring Manager Review

What happens next?

• Your portfolio is under review.

• This stage usually takes 3–5 business days.

• If shortlisted you'll receive an interview invitation.

No action is required.

---

## Timeline

* Applied
* Resume Reviewed
* Shortlisted
* Interview
* Offer
* Hired

---

## Recruiter Messages

Conversation history.

Attachments supported.

---

## Documents

* Resume
* Cover Letter
* Portfolio

---

## Activity History

Chronological log.

---

# Interview Module

Upcoming interview card

Contains

* Date
* Time
* Timezone
* Interview Type
* Interviewer
* Meeting Link

Actions

* Join Meeting
* Add Calendar
* Reschedule

---

# Messages

Inbox

Conversation list

Chat window

Support

* Attachments
* Read Status
* Notifications

---

# Documents

Candidate uploads

* Resume
* Portfolio
* Cover Letter
* Certifications
* ID Proof
* Offer Letter

Version history supported.

---

# Profile

Editable

Personal

Professional

Education

Experience

Skills

Portfolio

Social Links

Resume

Profile completion percentage

---

# Job Recommendations

Display

Job

Department

Location

Match Score

Apply CTA

Save Job

---

# Notifications

Types

* Interview
* Recruiter Message
* Status Change
* Assessment
* Reminder

---

# Settings

* Password
* Email
* Notifications
* Privacy
* Delete Account

---

# Candidate Application Lifecycle

```
Applied

↓

Resume Screening

↓

Hiring Manager Review

↓

Assessment (Optional)

↓

Interview

↓

Final Review

↓

Offer

↓

Background Verification (Optional)

↓

Hired

↓

Archived
```

Rejected and Withdrawn can occur at any stage.

---

# UX Principles

## Always Explain Status

Don't show

```
Manager Review
```

Show

```
Your application is currently being reviewed by the hiring manager.

This typically takes 3–5 business days.
```

---

## Always Show

* Current Stage
* Next Stage
* Estimated Review Time
* Last Updated
* Required Action

---

## Never Show Internal HR Language

Avoid

* Recruiter Assignment
* Workflow Completed
* Internal Approval Pending

Use human-friendly language instead.

---

## Reduce Anxiety

Every page should answer

* Where am I?
* What happens next?
* Do I need to do anything?

---

# Design Principles

* Same design system as Recruiter Dashboard
* Same typography
* Same spacing
* Same colour palette
* Same icons
* Same component library
* Glassmorphism where appropriate
* Responsive design
* WCAG AA Accessibility
* Skeleton loading
* Empty states
* Error states
* Success states

---

# Candidate Portal Screens

Authentication

* Login
* Register
* Forgot Password
* Reset Password
* Email Verification

Core

* Dashboard
* My Applications
* Application Detail
* Timeline
* Messages
* Interview Detail
* Documents
* Profile
* Notifications
* Job Recommendations
* Settings

Supporting

* Empty States
* Error Pages
* Loading States
* 404
* Session Expired

---

# Future Client Portal

The Client Portal is separate from both Recruiter and Candidate portals and should serve hiring clients who manage hiring requests, approvals and recruiter collaboration.

```
Client Login

↓

Client Dashboard

├── Hiring Requests
├── Open Positions
├── Candidate Shortlists
├── Interview Feedback
├── Approvals
├── Recruiter Communication
├── Reports & Analytics
├── Company Profile
└── Settings
```

Client capabilities:

* Raise new hiring requests
* Approve job requisitions
* Review shortlisted candidates
* Schedule or confirm interviews
* Submit interview feedback
* Approve or reject offers
* View hiring pipeline analytics
* Communicate directly with recruiters

---

# End-to-End System Flowchart

```
Landing Website
        │
        ▼
Career Page
        │
        ▼
Search Jobs
        │
        ▼
Job Details
        │
        ▼
Apply Now
        │
        ▼
Authentication
        │
 ┌──────┼─────────────┐
 │      │             │
 ▼      ▼             ▼
Candidate Recruiter  Client
 Login      Login      Login
 │           │          │
 ▼           ▼          ▼
Candidate  Recruiter   Client
Dashboard  Dashboard   Dashboard
 │           │          │
 ▼           ▼          ▼
Track      Manage     Review Hiring
Application Candidates Requests
 │           │          │
 ▼           ▼          ▼
Interview  Interview   Feedback
 │           │          │
 ▼           ▼          ▼
Offer      Offer      Approval
 │           │          │
 └───────────┼──────────┘
             ▼
          Candidate Hired
```

---

# Differentiators

* Human-readable application statuses
* "What happens next?" guidance on every application
* Estimated review timelines
* Action-driven dashboard with no unnecessary clutter
* Clear separation of Candidate, Recruiter and Client experiences
* Unified design system across all portals
* Enterprise-ready architecture that can scale to Admin and HR operations without changing the candidate experience.
