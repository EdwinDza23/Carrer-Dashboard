/* ================================================================
   DATA.JS — Edwin ATS Platform
   All mock data, namespaced by portal
   ================================================================ */

(function () {
  'use strict';

  window.ATS = window.ATS || {};

  /* ================================================================
     SHARED CONSTANTS
     ================================================================ */
  const STAGES = {
    sourcing:     { label: 'Sourcing',     icon: 'manage_search',  cls: 'badge--review'   },
    shortlisting: { label: 'Shortlisting', icon: 'filter_list',    cls: 'badge--pending'  },
    interviewing: { label: 'Interviewing', icon: 'groups',         cls: 'badge--active'   },
    offer:        { label: 'Offer stage',  icon: 'handshake',      cls: 'badge--offer'    },
    filled:       { label: 'Filled',       icon: 'check_circle',   cls: 'badge--approved' },
  };

  /* ================================================================
     RECRUITER PORTAL DATA
     ================================================================ */
  const recruiterData = {

    notifications: [
      { type:'emerald', icon:'person_add',    text:'<strong>Ananya Rao</strong> submitted her application for Sr. Product Designer.', time:'8m ago',      unread:true  },
      { type:'amber',   icon:'schedule',      text:'Interview with <strong>Rohan Verma</strong> starts in 30 minutes.',               time:'25m ago',     unread:true  },
      { type:'violet',  icon:'approval',      text:'<strong>Acme Corp</strong> approved the offer for <strong>Elena Fischer</strong>.', time:'2h ago',     unread:false },
      { type:'coral',   icon:'cancel',        text:'<strong>Marcus Chen</strong> declined the offer for Design Systems Lead.',         time:'Yesterday',   unread:false },
      { type:'emerald', icon:'check_circle',  text:'<strong>Priya Nair</strong> accepted the AI/UX Researcher role.',                  time:'2 days ago',  unread:false },
    ],

    stats: {
      openJobs:       12,
      activeCandidates: 48,
      interviewsThisWeek: 6,
      offersOut:      3,
    },

    jobs: [
      { id:'j1',  title:'Senior Product Designer',       company:'Acme Corp',     dept:'Design',          status:'active',  stage:'shortlisting', posted:'Jun 14',  deadline:'Jul 30', applicants:24, shortlisted:3,  salMin:28, salMax:40, type:'Full-time', location:'Bengaluru / Hybrid', urgent:true  },
      { id:'j2',  title:'Design Systems Lead',           company:'Acme Corp',     dept:'Design Systems',  status:'active',  stage:'interviewing', posted:'Jun 20',  deadline:'Aug 5',  applicants:18, shortlisted:2,  salMin:35, salMax:50, type:'Full-time', location:'Remote',             urgent:false },
      { id:'j3',  title:'AI/UX Researcher',              company:'Acme Corp',     dept:'AI-Native UX',    status:'active',  stage:'offer',        posted:'Jul 1',   deadline:'Aug 10', applicants:31, shortlisted:2,  salMin:30, salMax:45, type:'Full-time', location:'Bengaluru',          urgent:true  },
      { id:'j4',  title:'UX Researcher',                 company:'Acme Corp',     dept:'Research',        status:'active',  stage:'sourcing',      posted:'Jul 10',  deadline:'Aug 20', applicants:7,  shortlisted:0,  salMin:20, salMax:30, type:'Contract',  location:'Remote',             urgent:false },
      { id:'j5',  title:'Brand & Motion Designer',       company:'Zeta Fintech',  dept:'Brand',           status:'filled',  stage:'filled',        posted:'May 2',   deadline:'—',      applicants:41, shortlisted:1,  salMin:18, salMax:28, type:'Full-time', location:'Bengaluru',          urgent:false },
      { id:'j6',  title:'Rapid Prototyping Designer',    company:'Orbit Labs',    dept:'Product',         status:'active',  stage:'sourcing',      posted:'Jul 18',  deadline:'Aug 25', applicants:12, shortlisted:1,  salMin:22, salMax:34, type:'Full-time', location:'Hybrid',             urgent:false },
      { id:'j7',  title:'Visual Designer',               company:'Zeta Fintech',  dept:'Marketing',       status:'active',  stage:'shortlisting', posted:'Jul 5',   deadline:'Aug 15', applicants:29, shortlisted:4,  salMin:16, salMax:24, type:'Full-time', location:'Bengaluru',          urgent:false },
      { id:'j8',  title:'UX Writer',                     company:'Orbit Labs',    dept:'Content Design',  status:'paused',  stage:'sourcing',      posted:'Jun 28',  deadline:'—',      applicants:8,  shortlisted:0,  salMin:14, salMax:20, type:'Full-time', location:'Remote',             urgent:false },
    ],

    candidates: [
      { id:'c1',  name:'Ananya Rao',    role:'Senior Product Designer',    jobId:'j1', jobTitle:'Sr. Product Designer',    company:'Acme Corp',    exp:'6 years',  location:'Bengaluru',     stage:'shortlisting', score:94, skills:['Figma','Design Systems','B2B SaaS','User Research'],      status:'active'   },
      { id:'c2',  name:'Marcus Chen',   role:'Senior Product Designer',    jobId:'j1', jobTitle:'Sr. Product Designer',    company:'Acme Corp',    exp:'5 years',  location:'Remote (GMT+8)', stage:'shortlisting', score:88, skills:['Figma','Prototyping','Mobile','Accessibility'],             status:'active'   },
      { id:'c3',  name:'Elena Fischer', role:'Senior Product Designer',    jobId:'j1', jobTitle:'Sr. Product Designer',    company:'Acme Corp',    exp:'7 years',  location:'Bengaluru',     stage:'interviewing', score:96, skills:['Figma','UX Strategy','AI Tools','Design Leadership'],       status:'active'   },
      { id:'c4',  name:'Priya Nair',    role:'AI/UX Researcher',           jobId:'j3', jobTitle:'AI/UX Researcher',         company:'Acme Corp',    exp:'4 years',  location:'Bengaluru',     stage:'offer',        score:91, skills:['Mixed Methods','AI Products','Usability Testing','Python'], status:'offer'    },
      { id:'c5',  name:'Kabir Singh',   role:'AI/UX Researcher',           jobId:'j3', jobTitle:'AI/UX Researcher',         company:'Acme Corp',    exp:'3 years',  location:'Pune',          stage:'interviewing', score:85, skills:['Qualitative Research','User Interviews','Journey Mapping'], status:'active'   },
      { id:'c6',  name:'Devika Menon',  role:'Design Systems Lead',        jobId:'j2', jobTitle:'Design Systems Lead',      company:'Acme Corp',    exp:'5 years',  location:'Chennai',       stage:'shortlisting', score:76, skills:['Storybook','Tokens','Component APIs'],                      status:'declined' },
      { id:'c7',  name:'Rohan Verma',   role:'Design Systems Lead',        jobId:'j2', jobTitle:'Design Systems Lead',      company:'Acme Corp',    exp:'6 years',  location:'Bengaluru',     stage:'interviewing', score:82, skills:['Figma Variables','Design Tokens','Team Leadership'],        status:'active'   },
      { id:'c8',  name:'Wei Zhang',     role:'Rapid Prototyping Designer', jobId:'j6', jobTitle:'Rapid Prototyping',        company:'Orbit Labs',   exp:'3 years',  location:'Remote',        stage:'shortlisting', score:72, skills:['Framer','ProtoPie','Motion','React basics'],                 status:'active'   },
      { id:'c9',  name:'Sara Al-Amin',  role:'Visual Designer',            jobId:'j7', jobTitle:'Visual Designer',          company:'Zeta Fintech', exp:'4 years',  location:'Bengaluru',     stage:'shortlisting', score:80, skills:['Illustrator','Branding','Motion Design'],                   status:'active'   },
    ],

    interviews: [
      { id:'i1', candidate:'Elena Fischer',  role:'Sr. Product Designer',    type:'Portfolio review',  date:'2026-07-28', time:'2:00 PM', interviewer:'Arjun Patel (Client)', status:'upcoming', meetLink:'https://meet.google.com/abc-defg' },
      { id:'i2', candidate:'Rohan Verma',    role:'Design Systems Lead',     type:'Technical round',   date:'2026-07-29', time:'11:00 AM',interviewer:'Sam Okafor',           status:'upcoming', meetLink:'https://meet.google.com/hij-klmn' },
      { id:'i3', candidate:'Kabir Singh',    role:'AI/UX Researcher',        type:'Culture & values',  date:'2026-07-30', time:'3:30 PM', interviewer:'Riya Kapoor',          status:'upcoming', meetLink:'https://meet.google.com/opq-rstu' },
      { id:'i4', candidate:'Priya Nair',     role:'AI/UX Researcher',        type:'Final round',       date:'2026-07-26', time:'10:00 AM',interviewer:'Arjun Patel (Client)', status:'done',     feedback:'Strong yes' },
      { id:'i5', candidate:'Marcus Chen',    role:'Sr. Product Designer',    type:'Screener call',     date:'2026-07-25', time:'4:00 PM', interviewer:'Riya Kapoor',          status:'done',     feedback:'Proceed'    },
    ],

    activity: [
      { type:'emerald', icon:'person_add',    text:'<strong>Ananya Rao</strong> applied for Senior Product Designer at Acme Corp.',      time:'20m ago'          },
      { type:'amber',   icon:'schedule',      text:'Interview with <strong>Elena Fischer</strong> confirmed for Jul 28 at 2:00 PM.',      time:'2h ago'           },
      { type:'violet',  icon:'approval',      text:'<strong>Acme Corp</strong> approved the offer for <strong>Priya Nair</strong>.',       time:'4h ago'           },
      { type:'emerald', icon:'check_circle',  text:'<strong>Brand & Motion Designer</strong> role filled — offer accepted.',              time:'Yesterday 5:30PM' },
      { type:'coral',   icon:'cancel',        text:'<strong>Devika Menon</strong> declined — not moving forward for Design Systems Lead.', time:'2 days ago'       },
      { type:'violet',  icon:'work',          text:'New job <strong>Rapid Prototyping Designer</strong> opened for Orbit Labs.',          time:'Jul 18, 2026'     },
    ],

    pipelineFunnel: [
      { label:'Applications',  value:146, pct:100 },
      { label:'Screened',      value:90,  pct:62  },
      { label:'Shortlisted',   value:24,  pct:16  },
      { label:'Interviewed',   value:12,  pct:8   },
      { label:'Offers made',   value:5,   pct:3   },
      { label:'Hired',         value:3,   pct:2   },
    ],
  };

  /* ================================================================
     CLIENT PORTAL DATA
     ================================================================ */
  const clientData = {

    notifications: [
      { type:'emerald', icon:'groups',    text:'<strong>3 new candidates</strong> shortlisted for Senior Product Designer.',        time:'20m ago',   unread:true  },
      { type:'amber',   icon:'approval',  text:'Offer for <strong>Rohan Verma</strong> awaiting your approval. Due today.',          time:'4h ago',    unread:true  },
      { type:'amber',   icon:'approval',  text:'Offer for <strong>Elena Fischer</strong> awaiting your approval. Due today.',        time:'4h ago',    unread:true  },
      { type:'violet',  icon:'schedule',  text:'Interview with <strong>Priya Nair</strong> confirmed for Jul 28 at 2:00 PM.',        time:'Yesterday', unread:false },
      { type:'coral',   icon:'chat_bubble',text:'<strong>Riya Kapoor</strong> sent you a message.',                                  time:'Yesterday', unread:false },
    ],

    requests: [
      { id:'req-001', title:'Senior Product Designer',    dept:'Design',         type:'Full-time', status:'active',  urgency:'priority', headcount:2, location:'Bengaluru / Hybrid', salMin:28, salMax:40, raised:'Jun 14, 2026', recruiter:'Riya Kapoor',  skills:['Figma','B2B SaaS','Design Systems'],        stage:3 },
      { id:'req-002', title:'Design Systems Lead',        dept:'Design Systems', type:'Full-time', status:'active',  urgency:'standard', headcount:1, location:'Remote',             salMin:35, salMax:50, raised:'Jun 20, 2026', recruiter:'Sam Okafor',   skills:['Tokens','Component Libraries','Leadership'], stage:4 },
      { id:'req-003', title:'AI/UX Researcher',           dept:'AI-Native UX',   type:'Full-time', status:'active',  urgency:'critical', headcount:1, location:'Bengaluru',          salMin:30, salMax:45, raised:'Jul 1, 2026',  recruiter:'Riya Kapoor',  skills:['User Research','AI Familiarity'],             stage:5 },
      { id:'req-004', title:'UX Researcher',              dept:'Research',        type:'Contract',  status:'pending', urgency:'standard', headcount:1, location:'Remote',             salMin:20, salMax:30, raised:'Jul 10, 2026', recruiter:'Riya Kapoor',  skills:['Qualitative Research','Usability Testing'],  stage:1 },
      { id:'req-005', title:'Brand & Motion Designer',    dept:'Brand',           type:'Full-time', status:'filled',  urgency:'standard', headcount:1, location:'Bengaluru',          salMin:18, salMax:28, raised:'May 2, 2026',  recruiter:'Sam Okafor',   skills:['After Effects','Brand Identity'],             stage:6 },
      { id:'req-006', title:'Rapid Prototyping Designer', dept:'Product',         type:'Full-time', status:'draft',   urgency:'standard', headcount:1, location:'Hybrid',             salMin:22, salMax:34, raised:'—',             recruiter:'—',            skills:['Framer','ProtoPie','Rapid Iteration'],        stage:0 },
    ],

    REQ_STAGES: ['Draft','Pending','Sourcing','Shortlisting','Interviewing','Filled'],

    candidates: [
      { id:'c1', name:'Ananya Rao',    role:'Senior Product Designer', jobId:'j1', match:94, exp:'6y', location:'Bengaluru',     status:'pending',  skills:['Figma','Design Systems','B2B SaaS','User Research'],          note:"Ananya's systems-thinking is exceptional. One of the strongest I've seen for this role.",          noteAuthor:'Riya Kapoor · Jul 18' },
      { id:'c2', name:'Marcus Chen',   role:'Senior Product Designer', jobId:'j1', match:88, exp:'5y', location:'Remote (GMT+8)', status:'pending',  skills:['Figma','Prototyping','Mobile','Accessibility'],               note:"Marcus has excellent craft. Time-zone overlap may need discussion but worth the conversation.",      noteAuthor:'Riya Kapoor · Jul 19' },
      { id:'c3', name:'Elena Fischer', role:'Senior Product Designer', jobId:'j1', match:96, exp:'7y', location:'Bengaluru',     status:'accepted', skills:['Figma','UX Strategy','AI Tools','Design Leadership'],         note:"Elena brings rare strategic depth. High confidence she'll move to offer stage.",                    noteAuthor:'Riya Kapoor · Jul 20' },
      { id:'c4', name:'Priya Nair',    role:'AI/UX Researcher',        jobId:'j3', match:91, exp:'4y', location:'Bengaluru',     status:'pending',  skills:['Mixed Methods','AI Products','Usability Testing','Python'],   note:"Priya directly worked on AI feature research at her last role. Methodology is sharp.",               noteAuthor:'Riya Kapoor · Jul 22' },
      { id:'c5', name:'Kabir Singh',   role:'AI/UX Researcher',        jobId:'j3', match:85, exp:'3y', location:'Pune',          status:'pending',  skills:['Qualitative Research','User Interviews','Journey Mapping'],   note:"Kabir is a strong generalist researcher. Slightly less AI-specific experience.",                    noteAuthor:'Sam Okafor · Jul 22'  },
      { id:'c6', name:'Rohan Verma',   role:'Design Systems Lead',     jobId:'j2', match:82, exp:'6y', location:'Bengaluru',     status:'accepted', skills:['Figma Variables','Design Tokens','Team Leadership','Storybook'],note:"Rohan has built and scaled design systems at two companies. Strong cultural fit.",                  noteAuthor:'Sam Okafor · Jul 20'  },
      { id:'c7', name:'Devika Menon',  role:'Design Systems Lead',     jobId:'j2', match:76, exp:'5y', location:'Chennai',       status:'declined', skills:['Storybook','Tokens','Component APIs'],                        note:"Solid technical foundation but limited leadership experience. Better fit for a senior IC role.",     noteAuthor:'Sam Okafor · Jul 17'  },
    ],

    approvals: [
      { id:'ap1', type:'offer',       urgency:true,  title:'Offer approval — Rohan Verma',              sub:'Design Systems Lead · ₹42L p.a. · Joining: Aug 15, 2026',     due:'Due today',  icon:'description', detail:{ candidate:'Rohan Verma',  role:'Design Systems Lead',  salary:'₹42,00,000 p.a.', joining:'August 15, 2026', notice:'30 days', notes:'Candidate expecting response by EOD. Recruiter recommends acceptance.' }},
      { id:'ap2', type:'offer',       urgency:true,  title:'Offer approval — Elena Fischer',            sub:'Sr. Product Designer · ₹36L p.a. · Joining: Sep 1, 2026',      due:'Due today',  icon:'description', detail:{ candidate:'Elena Fischer', role:'Sr. Product Designer', salary:'₹36,00,000 p.a.', joining:'Sep 1, 2026',     notice:'30 days', notes:'Elena has a competing offer. Recommend prompt approval.' }},
      { id:'ap3', type:'requisition', urgency:false, title:'Requisition approval — UX Researcher (Contract)', sub:'Research · 6-month contract · ₹20–30L annualised', due:'Due Jul 31', icon:'assignment', detail:{ candidate:null, role:'UX Researcher', salary:'₹20–30L (contract)', joining:'ASAP after approval', notice:'N/A', notes:'New headcount request for Q3 product research.' }},
    ],

    messages: [
      { id:'m1', name:'Riya Kapoor', role:'Recruiter',       initials:'RK', preview:"I've shortlisted 3 strong candidates for Sr. Product Designer.",                                 time:'20m ago',   unread:true,  thread:[
        { from:'Riya Kapoor', out:false, text:"Hi Arjun! I've shortlisted 3 candidates for Senior Product Designer. Elena Fischer is my top pick.", time:'10:14 AM' },
        { from:'Arjun Patel', out:true,  text:"Thanks Riya, I'll review today. What should I focus on?",                                           time:'10:32 AM' },
        { from:'Riya Kapoor', out:false, text:"Focus on strategic UX thinking. Check the recruiter notes attached to each card.",                  time:'10:35 AM' },
      ]},
      { id:'m2', name:'Sam Okafor',  role:'Talent Partner',  initials:'SO', preview:'Quick update on Design Systems Lead — two candidates moving to technical round.',                time:'2h ago',    unread:true,  thread:[
        { from:'Sam Okafor',  out:false, text:"Hi Arjun, Rohan Verma and Devika Menon are moving to technical round. Can you block time next week?", time:'08:45 AM' },
        { from:'Arjun Patel', out:true,  text:"Yes, Tuesday or Thursday works. What duration?",                                                      time:'09:20 AM' },
        { from:'Sam Okafor',  out:false, text:"Tuesday works. Plan for 90 minutes — 45 min technical, 45 min culture.",                              time:'09:30 AM' },
      ]},
      { id:'m3', name:'Riya Kapoor', role:'Recruiter',       initials:'RK', preview:"Friendly reminder: Elena Fischer's offer is awaiting your approval.",                            time:'Yesterday', unread:false, thread:[
        { from:'Riya Kapoor', out:false, text:"Hi Arjun, Elena Fischer's offer is waiting for your approval. She has a competing offer deadline tomorrow EOD.", time:'Yesterday 3:22 PM' },
      ]},
    ],

    activity: [
      { type:'emerald', icon:'person_check',  text:'<strong>Elena Fischer</strong> accepted the interview invitation for Sr. Product Designer.', time:'2h ago'          },
      { type:'amber',   icon:'approval',      text:'Offer letter for <strong>Rohan Verma</strong> is pending your approval.',                    time:'4h ago'          },
      { type:'violet',  icon:'groups',        text:'<strong>Riya Kapoor</strong> shortlisted 3 new candidates for Sr. Product Designer.',        time:'6h ago'          },
      { type:'emerald', icon:'check_circle',  text:'Job requisition for <strong>AI/UX Researcher</strong> was approved and is now active.',     time:'Yesterday 5:30PM'},
      { type:'faint',   icon:'schedule',      text:'Technical interview for <strong>Priya Nair</strong> scheduled for Jul 28 at 2:00 PM.',       time:'Yesterday 3:15PM'},
    ],

    interviews: [
      { id:'fi1', candidateName:'Elena Fischer', role:'Sr. Product Designer',  interviewType:'Portfolio review', date:'Jul 21, 2026', status:'pending', criteria:['Communication','Technical Skills','Cultural Fit','Problem Solving'] },
      { id:'fi2', candidateName:'Rohan Verma',   role:'Design Systems Lead',   interviewType:'Technical round',  date:'Jul 22, 2026', status:'pending', criteria:['Technical Depth','Leadership Potential','Communication','Strategic Thinking'] },
      { id:'fi3', candidateName:'Priya Nair',    role:'AI/UX Researcher',      interviewType:'Culture & values', date:'Jul 19, 2026', status:'done',    rating:4, recommendation:'Yes — proceed to next stage' },
      { id:'fi4', candidateName:'Kabir Singh',   role:'AI/UX Researcher',      interviewType:'Screener call',    date:'Jul 18, 2026', status:'done',    rating:3, recommendation:'Maybe — additional interview needed' },
    ],

    reports: {
      funnel:[
        { label:'Requests raised', value:146, pct:100 },
        { label:'Sourced',         value:90,  pct:62  },
        { label:'Shortlisted',     value:24,  pct:16  },
        { label:'Interviewed',     value:12,  pct:8   },
        { label:'Offers made',     value:5,   pct:3   },
        { label:'Hired',           value:3,   pct:2   },
      ],
      metrics:[
        { label:'Sr. Product Designer',    value:'22d', good:true  },
        { label:'Design Systems Lead',     value:'18d', good:true  },
        { label:'AI/UX Researcher',        value:'31d', good:false },
        { label:'Brand & Motion',          value:'16d', good:true  },
      ],
      sla:[
        { label:'Avg. shortlist delivery', value:'4.2 days',  good:true  },
        { label:'Recruiter response time', value:'< 2 hours', good:true  },
        { label:'Feedback turnaround',     value:'1.8 days',  good:true  },
        { label:'Offer turnaround',        value:'2.5 days',  good:true  },
      ],
    },

    recruiterTeam: [
      { name:'Riya Kapoor', email:'riya@edwindesignstudio.com', role:'Lead Recruiter',  initials:'RK' },
      { name:'Sam Okafor',  email:'sam@edwindesignstudio.com',  role:'Talent Partner',  initials:'SO' },
      { name:'Edwin A.',    email:'edwin@edwindesignstudio.com', role:'Account Manager', initials:'EA' },
    ],

    clientTeam: [
      { name:'Arjun Patel',   email:'arjun@acmecorp.io',   role:'Hiring Lead', initials:'AP' },
      { name:'Kavitha Rao',   email:'kavitha@acmecorp.io',  role:'CHRO',        initials:'KR' },
      { name:'Nikhil Sharma', email:'nikhil@acmecorp.io',   role:'Interviewer', initials:'NS' },
    ],
  };

  /* ================================================================
     CANDIDATE PORTAL DATA
     ================================================================ */
  const candidateData = {

    notifications: [
      { type:'emerald', icon:'check_circle',  text:'Your application for <strong>Senior Product Designer</strong> at Acme Corp moved to <strong>Shortlisting</strong>.', time:'1h ago',    unread:true  },
      { type:'amber',   icon:'schedule',      text:'Interview scheduled: <strong>Portfolio Review</strong> on Jul 30 at 2:00 PM.',                                         time:'3h ago',    unread:true  },
      { type:'violet',  icon:'chat_bubble',   text:'<strong>Riya Kapoor</strong> sent you a message.',                                                                     time:'5h ago',    unread:false },
      { type:'emerald', icon:'thumb_up',      text:'Your profile was viewed by the recruiter at <strong>Orbit Labs</strong>.',                                             time:'Yesterday', unread:false },
      { type:'coral',   icon:'info',          text:'Application deadline approaching: <strong>Visual Designer</strong> at Zeta Fintech — 3 days left.',                  time:'2 days ago',unread:false },
    ],

    profile: {
      name:       'Priya Menon',
      title:      'UX Designer',
      location:   'Bengaluru, India',
      email:      'candidate@demo.com',
      phone:      '+91 98765 43210',
      website:    'priyamenon.design',
      linkedin:   'linkedin.com/in/priyamenon',
      bio:        'Senior UX Designer with 5+ years of experience building product experiences for SaaS and fintech. Specialise in design systems, user research, and complex B2B interfaces.',
      experience: '5 years',
      skills:     ['Figma','Design Systems','User Research','Usability Testing','Prototyping','B2B SaaS','Accessibility','Design Tokens'],
      education:  [
        { degree:'M.Des. Interaction Design', school:'IIT Bombay',          year:'2021' },
        { degree:'B.Des. Visual Communication', school:'NID Ahmedabad',     year:'2019' },
      ],
      experience_list: [
        { title:'Senior UX Designer',  company:'Zeta Fintech',  period:'2022 – Present',  desc:'Led design for the core payments product, serving 2M+ users. Built the company design system from scratch.' },
        { title:'UX Designer',         company:'Orbit Labs',    period:'2021 – 2022',      desc:'Designed onboarding and dashboard experiences for a B2B SaaS analytics platform.' },
        { title:'UI/UX Intern',        company:'Edwin Studio',  period:'2020 – 2021',      desc:'Assisted in client portal design and user research for two enterprise clients.' },
      ],
      resumeUploaded: true,
      profileComplete: 88,
    },

    applications: [
      { id:'app1', role:'Senior Product Designer',   company:'Acme Corp',     location:'Bengaluru / Hybrid', type:'Full-time', status:'shortlisted',  applied:'Jun 28', stage:3, stageLabel:'Shortlisting', recruiter:'Riya Kapoor',  salMin:28, salMax:40 },
      { id:'app2', role:'Design Systems Lead',        company:'Acme Corp',     location:'Remote',             type:'Full-time', status:'interviewing',  applied:'Jul 2',  stage:4, stageLabel:'Interviewing', recruiter:'Sam Okafor',   salMin:35, salMax:50 },
      { id:'app3', role:'UX Designer',                company:'Orbit Labs',    location:'Bengaluru',          type:'Full-time', status:'in_review',     applied:'Jul 8',  stage:2, stageLabel:'Under review', recruiter:'Riya Kapoor',  salMin:22, salMax:32 },
      { id:'app4', role:'Product Designer',           company:'Zeta Fintech',  location:'Hybrid',             type:'Full-time', status:'applied',       applied:'Jul 12', stage:1, stageLabel:'Applied',      recruiter:'—',            salMin:20, salMax:30 },
      { id:'app5', role:'Visual Designer',            company:'Zeta Fintech',  location:'Bengaluru',          type:'Full-time', status:'rejected',      applied:'Jun 10', stage:0, stageLabel:'Not selected',  recruiter:'Riya Kapoor',  salMin:16, salMax:24 },
    ],

    interviews: [
      { id:'int1', role:'Senior Product Designer', company:'Acme Corp',   type:'Portfolio review', date:'Jul 30, 2026', time:'2:00 PM',  format:'Video call', link:'https://meet.google.com/abc', status:'upcoming', prep:['Prepare 3 case studies','Focus on B2B work','Know the JTBD framework'] },
      { id:'int2', role:'Design Systems Lead',     company:'Acme Corp',   type:'Technical round',  date:'Aug 3, 2026',  time:'11:00 AM', format:'Video call', link:'https://meet.google.com/xyz', status:'upcoming', prep:['Review token architecture','Prepare a system critique','Know Storybook'] },
      { id:'int3', role:'UX Designer',             company:'Orbit Labs',  type:'Screener call',    date:'Jul 25, 2026', time:'4:00 PM',  format:'Phone call', link:'',                             status:'done',     outcome:'Passed — moved to portfolio round' },
    ],

    messages: [
      { id:'msg1', name:'Riya Kapoor', role:'Lead Recruiter · Edwin Studio', initials:'RK', preview:"Great news! Your application for Sr. Product Designer has moved to Shortlisting.", time:'1h ago',    unread:true, thread:[
        { from:'Riya Kapoor', out:false, text:"Hi Priya! Great news — your application for Senior Product Designer at Acme Corp has been shortlisted. I'll be in touch with next steps soon.",         time:'10:05 AM' },
        { from:'Priya Menon', out:true,  text:"That's wonderful news, thank you Riya! Looking forward to hearing more.",                                                                              time:'10:28 AM' },
        { from:'Riya Kapoor', out:false, text:"The client has reviewed your portfolio and loves your work. Expect an interview invite this week.",                                                     time:'10:32 AM' },
      ]},
      { id:'msg2', name:'Sam Okafor',  role:'Talent Partner · Edwin Studio',  initials:'SO', preview:'Following up on the Design Systems Lead opportunity at Acme Corp.', time:'Yesterday', unread:false, thread:[
        { from:'Sam Okafor',  out:false, text:"Hi Priya, following up on the Design Systems Lead role at Acme Corp. Would you be open to exploring this opportunity?",                                time:'Yesterday 2:00 PM' },
        { from:'Priya Menon', out:true,  text:"Hi Sam, yes absolutely! I'd love to learn more about the role.",                                                                                       time:'Yesterday 4:15 PM' },
      ]},
    ],

    documents: [
      { id:'d1', name:'Priya_Menon_Resume_2026.pdf',     type:'resume',      size:'245 KB',  uploaded:'Jul 10, 2026', status:'active' },
      { id:'d2', name:'Portfolio_Case_Studies_2026.pdf', type:'portfolio',   size:'4.2 MB',  uploaded:'Jul 10, 2026', status:'active' },
      { id:'d3', name:'Cover_Letter_Acme.pdf',           type:'cover_letter',size:'89 KB',   uploaded:'Jun 28, 2026', status:'active' },
      { id:'d4', name:'NID_Degree_Certificate.pdf',      type:'certificate', size:'1.1 MB',  uploaded:'Jul 10, 2026', status:'active' },
    ],

    recommendations: [
      { id:'r1', title:'Senior UX Designer',      company:'Fintech Startup',    location:'Remote',    match:97, type:'Full-time', salMin:32, salMax:48 },
      { id:'r2', title:'Lead Product Designer',   company:'SaaS Platform Co.',  location:'Bengaluru', match:91, type:'Full-time', salMin:40, salMax:55 },
      { id:'r3', title:'Design Systems Designer', company:'Enterprise Tech',    location:'Hybrid',    match:88, type:'Full-time', salMin:28, salMax:42 },
      { id:'r4', title:'UX Research Lead',        company:'AI Product Studio',  location:'Remote',    match:84, type:'Full-time', salMin:35, salMax:50 },
    ],

    activity: [
      { type:'emerald', icon:'check_circle', text:'Application for <strong>Senior Product Designer</strong> moved to Shortlisting.', time:'1h ago'    },
      { type:'amber',   icon:'schedule',     text:'Portfolio review interview scheduled for <strong>Jul 30 at 2:00 PM</strong>.',     time:'3h ago'    },
      { type:'violet',  icon:'chat_bubble',  text:'New message from <strong>Riya Kapoor</strong>.',                                    time:'5h ago'    },
      { type:'emerald', icon:'thumb_up',     text:'Profile viewed by recruiter at <strong>Orbit Labs</strong>.',                      time:'Yesterday' },
      { type:'faint',   icon:'description',  text:'Resume updated successfully.',                                                      time:'Jul 10'    },
    ],
  };

  /* ================================================================
     EXPOSE
     ================================================================ */
  window.ATS.Data = {
    recruiter: recruiterData,
    client:    clientData,
    candidate: candidateData,
    stages:    STAGES,
  };

})();
