---
sidebar_position: 8
---

# Privacy Policy

Privacy policy for the Errors and Echoes module and error reporting system.

## Overview

Errors and Echoes is designed with privacy as a fundamental principle. This privacy policy explains how the module handles data collection, processing, and storage when error reporting is enabled.

**Key Principle**: Error reporting is entirely opt-in and no data is collected without explicit user consent.

## Information We Collect

### When Error Reporting is Disabled (Default)

When error reporting is disabled (the default state), Errors and Echoes:
- **Does not collect any data**
- **Does not transmit any information**
- **Does not contact external servers**
- Only provides local error reporting capabilities to other modules

### When Error Reporting is Enabled

When a Game Master explicitly enables error reporting, we may collect:

#### Technical Information
- **Error messages and stack traces** (sanitized to remove personal information)
- **Module identification** (which module caused the error)
- **Foundry VTT version** and **game system information**
- **Browser type and version** (general categories only)
- **List of active modules** (names and versions only)
- **Anonymous session identifier** (changes daily, cannot be traced to individuals)

#### Module Context (Optional)
- **Module configuration settings** (non-personal)
- **Feature usage information** (non-personal)
- **Performance metrics** (timing, memory usage)

## Information We DO NOT Collect

We never collect:
- **User names or real names**
- **Email addresses or contact information**
- **IP addresses** (beyond basic routing)
- **Character names or game content**
- **Chat messages or private communications**
- **User passwords or authentication tokens**
- **Personal file paths** (sanitized before transmission)
- **Any personally identifiable information (PII)**

## How We Use Information

Collected data is used solely for:
- **Identifying and fixing bugs** in Foundry VTT modules
- **Improving module stability** and performance
- **Understanding compatibility issues** between modules and systems
- **Providing better user experiences** through error prevention

We do not use collected data for:
- Marketing or advertising
- User tracking or profiling
- Commercial purposes beyond module improvement
- Sharing with third parties (except as required by law)

## Data Storage and Security

### Storage Location
- Error reports are forwarded to module authors' chosen error monitoring services
- The Errors and Echoes module itself does not store error data
- Each module author is responsible for their own data handling practices

### Security Measures
- All data transmission uses HTTPS encryption
- Error reports are sanitized to remove potential personal information
- Anonymous session IDs rotate daily and cannot be linked to individuals
- Rate limiting prevents abuse and excessive data collection

### Data Retention
- Module authors set their own data retention policies
- We recommend automatic deletion after 90 days for privacy compliance
- Users can request data deletion at any time (see User Rights below)

## User Rights and Controls

### Privacy Controls
- **Opt-in Requirement**: Error reporting must be explicitly enabled by a Game Master
- **Privacy Levels**: Choose from Minimal, Standard, or Detailed data collection
- **Module-Specific Control**: Enable/disable reporting for individual modules
- **Immediate Opt-out**: Disable error reporting at any time

### Your Rights Under GDPR (EU Users)
- **Right to Information**: Full transparency about data collection (this policy)
- **Right of Access**: Request information about data collected about you
- **Right to Rectification**: Request correction of inaccurate data
- **Right to Erasure**: Request deletion of your data
- **Right to Restrict Processing**: Request limits on how your data is used
- **Right to Data Portability**: Request your data in a portable format
- **Right to Object**: Object to processing of your personal data

### Your Rights Under CCPA (California Users)
- **Right to Know**: Information about data collection practices
- **Right to Delete**: Request deletion of personal information
- **Right to Opt-Out**: Opt-out of data collection
- **Right to Non-Discrimination**: No discrimination for exercising privacy rights

## How to Exercise Your Rights

### Disabling Error Reporting
1. Open Foundry VTT as a Game Master
2. Go to **Game Settings** → **Module Settings**
3. Find **Errors and Echoes** section
4. Set **Enable Error Reporting** to **Disabled**

### Data Deletion Requests
To request deletion of your data:
1. **Identify the module author** whose error reporting you want to delete
2. **Contact the module author** directly (see module documentation)
3. **Request data deletion** with details about your Foundry instance
4. **Module authors must respond** within 30 days

### General Privacy Concerns
For questions about this privacy policy or Errors and Echoes:
- **GitHub Issues**: [fvtt-errors-and-echoes/issues](https://github.com/rayners/fvtt-errors-and-echoes/issues)
- **Email**: privacy@rayners.dev
- **Discord**: rayners78

## Module Author Responsibilities

Module authors who use Errors and Echoes for error reporting must:
- **Implement privacy controls** in their module settings
- **Provide clear information** about what data they collect
- **Respect user privacy levels** and consent decisions
- **Implement data deletion** procedures for user requests
- **Maintain appropriate security** for collected data
- **Comply with applicable privacy laws** (GDPR, CCPA, etc.)

## Third-Party Services

### Error Monitoring Services
Module authors may use third-party error monitoring services such as:
- **Sentry**: Privacy policy at https://sentry.io/privacy/
- **Bugsnag**: Privacy policy at https://www.bugsnag.com/privacy/
- **LogRocket**: Privacy policy at https://logrocket.com/privacy/
- **Custom endpoints**: Authors' own privacy policies apply

Each service has its own privacy policy and data handling practices.

## International Data Transfers

Error data may be transferred to countries outside your location for processing:
- **Module authors choose** where their error data is processed
- **Errors and Echoes itself** does not control international transfers
- **Users should review** individual module authors' privacy practices
- **EU users**: Transfers are subject to GDPR adequacy decisions and safeguards

## Children's Privacy

Errors and Echoes is not intended for use by children under 13 years of age:
- We do not knowingly collect personal information from children
- If we become aware of such collection, we will delete it immediately
- Parents should supervise children's use of Foundry VTT and disable error reporting if concerned

## Changes to This Policy

This privacy policy may be updated to:
- Reflect changes in our data practices
- Comply with new legal requirements
- Improve clarity and transparency

**Notice of Changes**:
- Significant changes will be announced in module updates
- The effective date of changes will be clearly indicated
- Continued use of error reporting after changes indicates acceptance

## Compliance and Certification

### GDPR Compliance
This module and policy are designed to comply with the EU General Data Protection Regulation (GDPR):
- Lawful basis for processing: Consent (Article 6(1)(a))
- Data protection by design and by default (Article 25)
- Transparency and information requirements (Articles 13-14)
- Individual rights implementation (Articles 15-22)

### CCPA Compliance
This policy complies with the California Consumer Privacy Act (CCPA):
- Clear disclosure of data collection practices
- Consumer rights implementation
- Non-discrimination provisions
- Opt-out mechanisms

## Contact Information

**For privacy concerns related to Errors and Echoes:**
- **Primary Contact**: privacy@rayners.dev
- **GitHub Issues**: https://github.com/rayners/fvtt-errors-and-echoes/issues
- **Discord**: rayners78

**For data deletion requests:**
1. Contact the specific module author whose data you want deleted
2. If unable to contact module author, contact us for assistance

**Response Times:**
- We aim to respond to privacy inquiries within 5 business days
- Data deletion requests will be forwarded to module authors immediately
- Module authors are required to respond within 30 days

---

**Effective Date**: June 4, 2025  
**Last Updated**: June 4, 2025  
**Version**: 1.0

This privacy policy is part of the Errors and Echoes documentation and is available at https://docs.rayners.dev/errors-and-echoes/privacy-policy