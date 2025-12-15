export const services = [
  {
    id: "quickscan",
    title: "Security + Cloud Ops QuickScan",
    subtitle: "Read-Only Assessment",
    description: "Get a clear baseline of your security posture and cloud configuration—no changes, just evidence.",
    icon: "shield-check",
    whoItsFor: [
      "SMBs that need visibility before deciding what to fix",
      "Teams preparing for compliance audits",
      "Companies recovering from incidents who need to understand current state",
    ],
    deliverables: [
      "Read-only scan of AWS/Azure/GCP infrastructure",
      "NIST CSF-aligned findings report",
      "Prioritized remediation roadmap",
      "Executive summary + technical appendix",
      "30-minute walkthrough call",
    ],
    notIncluded: [
      "No penetration testing or red team exercises",
      "No compliance certification",
      "No hands-on changes to your systems",
    ],
    timeline: "3-5 business days",
    priceRange: "$750-$1,500",
  },
  {
    id: "hardening",
    title: "Weekend Hardening Sprint",
    subtitle: "Hands-On, Rollback-First",
    description:
      "Safe, reversible security improvements delivered over a weekend with full documentation and rollback plans.",
    icon: "wrench",
    whoItsFor: [
      "Teams with a clear list of fixes who want expert execution",
      "Companies that can't afford downtime during business hours",
      "Organizations that want changes documented and reversible",
    ],
    deliverables: [
      "Pre-change architecture diagrams + rollback plans",
      "Weekend implementation window (Friday evening → Sunday)",
      "Real-time Slack/email updates",
      "Post-implementation verification tests",
      "Runbook for ongoing maintenance",
    ],
    notIncluded: [
      "No 'emergency' work—everything is planned and documented first",
      "No changes without rollback plans",
      "No production changes without staging validation",
    ],
    timeline: "1 weekend (Friday PM → Sunday)",
    priceRange: "$1,500-$3,500",
  },
  {
    id: "tuneup",
    title: "Cloud Reliability + Cost Tune-Up",
    subtitle: "Optimize Performance & Budget",
    description: "Reduce cloud waste, improve reliability, and document your infrastructure for the next engineer.",
    icon: "gauge",
    whoItsFor: [
      "Companies with high AWS/Azure bills and no clear optimization path",
      "Teams experiencing frequent outages or performance issues",
      "Organizations with undocumented infrastructure",
    ],
    deliverables: [
      "Cloud cost analysis with waste identification",
      "Right-sizing recommendations for compute/storage",
      "Reliability assessment (SLOs, monitoring gaps, failure modes)",
      "Infrastructure-as-Code audit (Terraform/CloudFormation)",
      "30-day follow-up check-in",
    ],
    notIncluded: [
      "No application code optimization (we focus on infrastructure)",
      "No data migration or re-architecture projects",
      "No FinOps tooling implementation",
    ],
    timeline: "5-7 business days",
    priceRange: "$1,200-$2,500",
  },
]

export const howItWorks = [
  {
    step: "01",
    title: "Discover",
    description:
      "20-minute discovery call to understand your environment, pain points, and goals. We'll determine which service fits best.",
  },
  {
    step: "02",
    title: "Evidence Review",
    description:
      "We gather evidence (read-only scans, architecture diagrams, logs) to build a clear picture of your current state.",
  },
  {
    step: "03",
    title: "Action Plan",
    description:
      "You receive a prioritized, actionable report with findings, recommendations, and a remediation roadmap.",
  },
  {
    step: "04",
    title: "Optional Implementation",
    description:
      "Want us to execute the fixes? We offer weekend hardening sprints with full rollback plans and documentation.",
  },
]

export const faqs = [
  {
    question: "What access do you need to my systems?",
    answer:
      "For QuickScan, we need read-only access (e.g., AWS SecurityAudit policy, Azure Reader role). For Hardening Sprints, we need scoped write access for the specific resources being modified. We never request blanket admin rights—everything is least-privilege and time-boxed.",
  },
  {
    question: "Do you offer penetration testing or red team services?",
    answer:
      "No. We focus on defensive security posture, configuration management, and operational reliability. For offensive security testing, we can refer you to trusted partners.",
  },
  {
    question: "What if something breaks during a Hardening Sprint?",
    answer:
      "Every change includes a tested rollback plan. If an issue arises, we execute the rollback immediately and investigate. Weekend delivery means we have time to validate and fix issues before Monday morning.",
  },
  {
    question: "Can you help us achieve SOC 2 or ISO 27001 compliance?",
    answer:
      "We can help you improve your security posture and prepare for audits, but we don't provide compliance certification. We focus on the technical controls that auditors will evaluate.",
  },
  {
    question: "What cloud platforms do you support?",
    answer:
      "We specialize in AWS, Azure, and GCP. We also work with hybrid environments and can assess on-premises infrastructure that connects to the cloud.",
  },
  {
    question: "Why 'verification-first' and 'weekend delivery'?",
    answer:
      "Verification-first means we always gather evidence before making recommendations—no guesswork. Weekend delivery means changes happen when traffic is low, giving us time to validate and rollback if needed without impacting your business hours.",
  },
]

export const testimonials = [
  {
    quote:
      "True Signal helped us understand our AWS security posture in days, not weeks. The prioritized roadmap gave us a clear path forward.",
    author: "Sarah Chen",
    role: "CTO, GrowthTech Solutions",
    placeholder: true,
  },
  {
    quote:
      "The weekend hardening sprint was executed flawlessly. Every change was documented, tested, and reversible. We slept well Sunday night.",
    author: "Marcus Rodriguez",
    role: "VP Engineering, HealthOS",
    placeholder: true,
  },
]

export const insights = [
  {
    slug: "quickscan-checklist",
    title: "The QuickScan Checklist: What We Look For",
    date: "2025-01-15",
    summary:
      "A deep dive into our read-only security assessment methodology, covering IAM, network controls, data protection, and logging.",
    tags: ["Security", "Cloud Ops", "Methodology"],
  },
  {
    slug: "rollback-first-mindset",
    title: "The Rollback-First Mindset",
    date: "2025-01-08",
    summary: "Why every production change should start with a rollback plan, not an implementation plan.",
    tags: ["DevOps", "Risk Management", "Best Practices"],
  },
  {
    slug: "cloud-cost-optimization-101",
    title: "Cloud Cost Optimization 101",
    date: "2024-12-20",
    summary: "Practical strategies for reducing cloud waste without sacrificing performance or reliability.",
    tags: ["Cloud Ops", "Cost Management", "AWS"],
  },
]
