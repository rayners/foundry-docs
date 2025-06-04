---
sidebar_position: 9
---

# Legal Compliance

Legal compliance information for Errors and Echoes error reporting system.

## Overview

Errors and Echoes is designed to comply with major privacy and data protection regulations worldwide. This document outlines our compliance approach and provides guidance for module authors.

## GDPR Compliance (European Union)

### Legal Basis for Processing

Under the General Data Protection Regulation (GDPR), our legal basis for processing personal data is:
- **Article 6(1)(a) - Consent**: Explicit consent from the data subject
- **Article 6(1)(f) - Legitimate Interest**: Legitimate interest in improving software quality (where consent is given)

### GDPR Principles Implementation

#### 1. Lawfulness, Fairness, and Transparency
- Error reporting requires explicit opt-in consent
- Clear information provided about data collection
- Transparent privacy controls and settings

#### 2. Purpose Limitation
- Data collected solely for error reporting and module improvement
- No secondary use of data for marketing or other purposes
- Clear documentation of collection purposes

#### 3. Data Minimization
- Only essential data collected for error debugging
- Multiple privacy levels to limit data collection
- Context providers limited to debugging-relevant information

#### 4. Accuracy
- Error data is technical and factual
- No personal data collected that could be inaccurate
- Users can disable reporting if they believe data is inaccurate

#### 5. Storage Limitation
- Recommend 90-day automatic deletion for error data
- Module authors responsible for implementing retention limits
- Users can request deletion at any time

#### 6. Integrity and Confidentiality
- HTTPS encryption for all data transmission
- Rate limiting and input validation for security
- Anonymous session IDs to prevent tracking

#### 7. Accountability
- This documentation demonstrates compliance measures
- Module authors required to implement privacy controls
- Regular review of data practices

### Individual Rights Under GDPR

#### Right to Information (Articles 13-14)
- **Provided through**: Privacy policy and module documentation
- **Implementation**: Clear disclosure of data collection practices

#### Right of Access (Article 15)
- **How to Exercise**: Contact module author or privacy@rayners.dev
- **Response Time**: 30 days maximum
- **Implementation**: Module authors must provide access procedures

#### Right to Rectification (Article 16)
- **Scope**: Limited as error data is technical and factual
- **Implementation**: Users can disable reporting for inaccurate attribution

#### Right to Erasure (Article 17)
- **How to Exercise**: Contact module author for data deletion
- **Response Time**: 30 days maximum
- **Implementation**: Module authors must implement deletion procedures

#### Right to Restrict Processing (Article 18)
- **Implementation**: Users can disable specific module reporting
- **Granular Control**: Per-module and privacy level controls

#### Right to Data Portability (Article 20)
- **Scope**: Limited applicability for technical error data
- **Implementation**: Available upon request in structured format

#### Right to Object (Article 21)
- **Implementation**: Opt-out available at any time
- **Immediate Effect**: Disabling stops all data collection immediately

### GDPR Compliance Checklist

- ✅ **Lawful basis identified** (Consent)
- ✅ **Privacy by design** implemented
- ✅ **Data minimization** enforced
- ✅ **Consent management** system
- ✅ **Individual rights** procedures
- ✅ **Data breach** procedures (see Security section)
- ✅ **Privacy impact assessment** conducted
- ✅ **Documentation** maintained

## CCPA Compliance (California)

### California Consumer Privacy Act Rights

#### Right to Know
- **Categories of Information**: Technical error data, module context
- **Sources**: Direct from Foundry VTT when error occurs
- **Business Purpose**: Software debugging and improvement
- **Third Parties**: Module authors' error monitoring services
- **Sale of Information**: We do not sell personal information

#### Right to Delete
- **Process**: Contact module author for data deletion
- **Exceptions**: None applicable (no legal retention requirements)
- **Implementation**: Module authors must implement deletion

#### Right to Opt-Out
- **Method**: Disable error reporting in module settings
- **Immediate Effect**: Stops all data collection
- **Granular Control**: Per-module opt-out available

#### Right to Non-Discrimination
- **Implementation**: No reduced functionality for opting out
- **Module Access**: Full module functionality regardless of reporting choice

### CCPA Categories of Information

| Category | Collected | Source | Purpose | Shared |
|----------|-----------|---------|---------|--------|
| Identifiers | Anonymous session ID only | Auto-generated | Error correlation | Module authors |
| Commercial Information | None | N/A | N/A | N/A |
| Biometric Information | None | N/A | N/A | N/A |
| Internet Activity | Error stack traces | User's browser | Debugging | Module authors |
| Geolocation Data | None | N/A | N/A | N/A |
| Sensory Data | None | N/A | N/A | N/A |
| Professional Information | None | N/A | N/A | N/A |
| Education Information | None | N/A | N/A | N/A |
| Inferences | None | N/A | N/A | N/A |

## Other Privacy Laws

### PIPEDA (Canada)
- **Consent**: Explicit opt-in required
- **Purpose**: Limited to error reporting and debugging
- **Minimal Collection**: Only data necessary for purpose
- **Accuracy**: Technical data, inherently accurate

### Privacy Act 1988 (Australia)
- **Collection**: Only with consent and for stated purpose
- **Use and Disclosure**: Limited to error reporting
- **Security**: HTTPS encryption and access controls
- **Access and Correction**: Procedures provided

### LGPD (Brazil)
- **Legal Basis**: Consent for data processing
- **Data Subject Rights**: Similar to GDPR, fully implemented
- **Data Protection Officer**: Contact privacy@rayners.dev
- **International Transfers**: To countries with adequate protection

## Data Processing Agreements

### Module Author Requirements

Module authors using Errors and Echoes must:

1. **Act as Data Controllers** for collected error data
2. **Implement privacy controls** in their modules
3. **Provide clear privacy notices** to users
4. **Respect user consent** and privacy level choices
5. **Implement data deletion** procedures
6. **Maintain appropriate security** measures
7. **Comply with applicable laws** in their jurisdiction

### Third-Party Service Agreements

When using third-party error monitoring services:

1. **Data Processing Agreements** required with service providers
2. **GDPR Article 28** compliance for EU data
3. **Standard Contractual Clauses** for international transfers
4. **Service provider security** standards verification

## International Data Transfers

### Transfer Mechanisms

For data transfers outside the user's country:

#### EU to Third Countries
- **Adequacy Decisions**: Preferred when available
- **Standard Contractual Clauses**: For other countries
- **Binding Corporate Rules**: For multinational organizations
- **Consent**: As fallback mechanism

#### GDPR Article 44-49 Compliance
- **Appropriate Safeguards**: Required for all transfers
- **Data Subject Rights**: Must remain enforceable
- **Effective Remedies**: Available in destination country

### Service Provider Locations

Common error monitoring services and their locations:
- **Sentry**: USA (adequate for EU under Privacy Shield successor)
- **Bugsnag**: UK/EU (adequate for EU)
- **Custom Endpoints**: Variable (author responsibility)

## Data Breach Procedures

### Breach Definition
A breach includes:
- Unauthorized access to error data
- Accidental exposure of personal information
- Loss of data integrity or availability
- Any security incident affecting user privacy

### Response Procedures

#### For Errors and Echoes Team
1. **Assessment**: Determine scope and impact (4 hours)
2. **Containment**: Stop ongoing breach immediately
3. **Notification**: Notify affected users and authorities (72 hours)
4. **Remediation**: Implement fixes and improvements
5. **Documentation**: Maintain breach records

#### For Module Authors
1. **Detection**: Identify potential breach in error data
2. **Notification**: Contact Errors and Echoes team immediately
3. **User Notification**: Inform affected users if required
4. **Authority Notification**: Report to data protection authorities (72 hours)
5. **Cooperation**: Assist with investigation and remediation

### User Notification

Users will be notified of breaches when:
- Personal information is involved
- High risk to rights and freedoms
- Required by applicable law
- Requested by data protection authorities

## Compliance Monitoring

### Regular Reviews
- **Annual privacy policy review**
- **Quarterly compliance assessment**
- **Ongoing monitoring** of module author practices
- **User feedback integration**

### Audit Procedures
- **Internal audits** of data practices
- **Module author compliance** verification
- **Third-party security assessments** when required
- **Documentation maintenance**

### Continuous Improvement
- **Legal requirement updates** implementation
- **Best practice adoption**
- **User feedback incorporation**
- **Technology updates** for privacy enhancement

## Legal Contacts

### Data Protection Authorities

#### European Union
- **Lead Supervisory Authority**: To be determined based on main establishment
- **One-Stop-Shop Mechanism**: For cross-border processing
- **Contact**: Through official DPA websites

#### United States
- **FTC**: For CCPA and general privacy issues
- **State Attorneys General**: For state-specific laws

#### Other Jurisdictions
- **Canada**: Privacy Commissioner of Canada
- **Australia**: Office of the Australian Information Commissioner
- **Brazil**: Autoridade Nacional de Proteção de Dados (ANPD)

### Legal Assistance

For legal questions about compliance:
- **Primary Contact**: legal@rayners.dev
- **Privacy Questions**: privacy@rayners.dev
- **Emergency Contact**: security@rayners.dev

## Disclaimer

This document provides general information about legal compliance and should not be considered legal advice. Module authors and users should:
- **Consult qualified legal counsel** for specific situations
- **Review applicable laws** in their jurisdiction
- **Implement appropriate measures** for their specific use case
- **Stay updated** on changing legal requirements

---

**Effective Date**: June 4, 2025  
**Last Updated**: June 4, 2025  
**Version**: 1.0

This compliance document is part of the Errors and Echoes documentation and is available at https://docs.rayners.dev/errors-and-echoes/legal-compliance