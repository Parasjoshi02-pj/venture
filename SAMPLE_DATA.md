# Lex Analytics - Sample Data & Implementation Reference

## 🔍 Understanding the Examples with Real Data

This document provides sample data structures, statistics, and implementation details for the three interactive examples on the website.

---

## Example 1: Criminal Bail Application (IPC §437)

### Sample Case Input
```json
{
  "case_type": "Criminal Bail Application",
  "section": "IPC §437",
  "accused_profile": {
    "age": 28,
    "criminal_history": "First-time offender",
    "employment": "Self-employed shopkeeper",
    "family_status": "Married, 2 children"
  },
  "offense": {
    "nature": "Drug possession",
    "weight": "150 grams heroin",
    "circumstances": "Found during house search"
  },
  "court": "District Court, Delhi",
  "judge": "Justice Sharma"
}
```

### Platform Analysis Output
```json
{
  "similar_cases_found": 847,
  "factual_match_percentage": 98,
  "bail_grant_statistics": {
    "overall_rate": "68%",
    "for_first_time_offenders": "72%",
    "by_judge": {
      "Justice_Sharma": "74%",
      "Justice_Kumar": "62%",
      "Justice_Singh": "59%"
    },
    "by_substance": {
      "heroin": "68%",
      "cocaine": "45%",
      "cannabis": "71%"
    }
  },
  "top_similar_precedents": [
    {
      "case_name": "State v. Sharma",
      "year": 2025,
      "court": "Delhi High Court",
      "factual_match": "98%",
      "outcome": "Bail Granted",
      "judge": "Justice Rajendra Kumar",
      "key_factors": "First offender, family support, steady employment"
    },
    {
      "case_name": "State v. Kumar",
      "year": 2024,
      "court": "District Court, Delhi",
      "factual_match": "95%",
      "outcome": "Bail Granted",
      "judge": "Justice Priya Singh",
      "key_factors": "Similar age, married, employed"
    },
    {
      "case_name": "State v. Singh",
      "year": 2024,
      "court": "District Court, Delhi",
      "factual_match": "92%",
      "outcome": "Bail Granted",
      "judge": "Justice Anil Patel",
      "key_factors": "First offense, family responsibilities"
    }
  ],
  "recommended_bail_amount": "₹2,00,000 - ₹3,00,000",
  "conditions_typically_imposed": [
    "Surrender of passport",
    "Reporting to police station weekly",
    "Personal recognizance",
    "Surety from family member"
  ],
  "judge_profile": {
    "name": "Justice Sharma",
    "court": "District Court, Delhi",
    "cases_analyzed": 234,
    "bail_grant_rate_437": "74%",
    "average_bail_amount": "₹2,50,000",
    "average_judgment_time": "18 months",
    "decision_tendencies": "Favors bail for first-time offenders with family support"
  }
}
```

### Sample Dashboard Visualization Data
```
Bail Grant Rate: 68%
├── Granted: 575 cases (68%)
├── Denied: 215 cases (25%)
└── Pending: 57 cases (7%)

By Judge Performance:
├── Justice Sharma: 74% ⭐ (234 cases)
├── Justice Kumar: 62% (189 cases)
└── Justice Singh: 59% (156 cases)

By Substance Type:
├── Cannabis: 71% (342 cases)
├── Heroin: 68% (847 cases) ← YOUR CASE
└── Cocaine: 45% (234 cases)

Time to Judgment:
├── Average: 18-24 months
└── Judge Sharma: 16 months (fastest)
```

---

## Example 2: Commercial Contract Dispute - Sale of Goods

### Sample Case Input
```json
{
  "case_type": "Breach of Contract - Defective Goods",
  "law_applicable": "Indian Sale of Goods Act, 1930",
  "parties": {
    "buyer": "ABC Manufacturing Ltd",
    "seller": "XYZ Trading Company"
  },
  "transaction": {
    "goods": "Industrial pumps",
    "quantity": 50,
    "unit_price": "₹50,000",
    "total_value": "₹25,00,000",
    "delivery_date": "2024-06-15",
    "defect_identified": "2024-07-01"
  },
  "defect_description": "Pumps non-functional, motor failures within 30 days",
  "damages_claimed": "₹30,00,000 (replacement cost + business loss)",
  "court": "High Court, Mumbai",
  "case_stage": "Pre-litigation (consultation)"
}
```

### Platform Analysis Output
```json
{
  "similar_cases_analyzed": 342,
  "factual_similarity_score": 96,
  
  "liability_analysis": {
    "seller_liable_rate": "76%",
    "buyer_liable_rate": "18%",
    "shared_liability_rate": "6%"
  },
  
  "damages_prediction": {
    "minimum": "₹20,00,000",
    "average": "₹32,00,000",
    "maximum": "₹45,00,000",
    "your_case_prediction": "₹28,00,000 - ₹35,00,000"
  },
  
  "section_wise_analysis": {
    "Sale_of_Goods_Act": {
      "section_9": "Seller's liability for fitness",
      "cases_analyzed": 284,
      "buyer_win_rate": "78%",
      "average_damages": "₹31,50,000"
    },
    "Indian_Contract_Act": {
      "section_73": "Compensation for breach",
      "cases_analyzed": 342,
      "damages_awarded": "₹25L to ₹45L range"
    }
  },
  
  "timeline_expectations": {
    "trial_duration": "24-36 months",
    "median_duration": "3.2 years",
    "judgment_to_appeal": "6-12 months"
  },
  
  "appeal_statistics": {
    "appeal_success_rate": "18%",
    "reversal_rate": "12%",
    "partial_reversal": "6%",
    "implication": "Settlement now recommended over appeal risk"
  },
  
  "settlement_recommendation": {
    "claim": "₹30,00,000",
    "realistic_settlement_range": "₹28,00,000 - ₹32,00,000",
    "reasoning": "Data shows average ₹32L for similar cases; seller often settles 90% of claim"
  },
  
  "top_similar_cases": [
    {
      "case_id": "HBC-2024-001",
      "parties": "DEF Corp v. GHI Industries",
      "damages_claimed": "₹31,00,000",
      "damages_awarded": "₹29,50,000",
      "settlement": "Settled at ₹28,00,000",
      "similarity": "97%"
    },
    {
      "case_id": "HBC-2023-456",
      "parties": "JKL Manufacturing v. MNO Traders",
      "damages_claimed": "₹28,50,000",
      "damages_awarded": "₹34,20,000",
      "similarity": "94%"
    }
  ]
}
```

### Sample Analytics Dashboard Data
```
Damages Analysis for Similar Cases:
├── Minimum Award: ₹20,00,000 (20%)
├── Average Award: ₹32,00,000 (50%)
└── Maximum Award: ₹45,00,000 (80%)

YOUR CASE PREDICTION: ₹28L - ₹35L

Liability Analysis:
├── Seller Liable: 76% ✓
├── Buyer Liable: 18%
└── Shared: 6%

Settlement Success Rate:
├── Settled: 89% (cases)
├── Litigated: 11% (cases)
└── Recommended: Settle at ₹28-32L

Recent Cases (2024-2025):
├── Buyer Win Rate: 78%
├── Appeal Success: 18% (LOW)
└── Duration: 3.2 years average

Section §9 (Sale of Goods): 78% buyer favorable
Section §73 (Contract Act): ₹25-45L damage range
```

---

## Example 3: Judge Analytics - Court Selection

### Sample Judge Profile Data

#### Judge 1: Justice Anil Patel
```json
{
  "name": "Justice Anil Patel",
  "court": "High Court, Mumbai",
  "case_type": "Landlord-Tenant Disputes",
  
  "statistics": {
    "total_cases_analyzed": 156,
    "favorable_to_tenant": 71,
    "favorable_to_landlord": 79,
    "pending": 6,
    "favorable_rate": "71%"
  },
  
  "decision_patterns": {
    "tenant_favor_reasons": "Tenant protection focus, lenient on rental defaults",
    "landlord_favor_reasons": "Strict on lease violations, enforces written contracts"
  },
  
  "timeline": {
    "average_judgment_time": "16 months",
    "earliest": "8 months",
    "latest": "32 months"
  },
  
  "recent_decisions": [
    {
      "case": "Tenant v. Landlord",
      "year": 2025,
      "ruling": "For Tenant",
      "key_issue": "Arbitrary eviction notice"
    },
    {
      "case": "Landlord v. Tenant",
      "year": 2025,
      "ruling": "For Landlord",
      "key_issue": "Non-payment of rent"
    }
  ],
  
  "recommendation": "FAVORABLE for tenant cases (71% success rate)",
  "confidence": "HIGH (156 cases analyzed)"
}
```

#### Judge 2: Justice Rajendra Kumar
```json
{
  "name": "Justice Rajendra Kumar",
  "court": "High Court, Mumbai",
  "case_type": "Landlord-Tenant Disputes",
  
  "statistics": {
    "total_cases_analyzed": 134,
    "favorable_to_tenant": 83,
    "favorable_to_landlord": 51,
    "favorable_rate": "62%"
  },
  
  "timeline": {
    "average_judgment_time": "18 months",
    "earliest": "10 months",
    "latest": "36 months"
  },
  
  "recommendation": "MODERATELY FAVORABLE for tenant cases (62% success rate)",
  "confidence": "HIGH (134 cases analyzed)"
}
```

#### Judge 3: Justice Priya Singh
```json
{
  "name": "Justice Priya Singh",
  "court": "High Court, Mumbai",
  "case_type": "Landlord-Tenant Disputes",
  
  "statistics": {
    "total_cases_analyzed": 128,
    "favorable_to_tenant": 56,
    "favorable_to_landlord": 72,
    "favorable_rate": "44%"
  },
  
  "timeline": {
    "average_judgment_time": "24 months",
    "earliest": "15 months",
    "latest": "40 months"
  },
  
  "recommendation": "UNFAVORABLE for tenant cases (44% success rate)",
  "confidence": "HIGH (128 cases analyzed)"
}
```

### Judge Comparison Matrix
```
Judge Comparison for Landlord-Tenant Disputes:

                     | Anil Patel | Rajendra Kumar | Priya Singh
─────────────────────────────────────────────────────────────────
Tenant Success Rate  |    71% ⭐  |      62%       |    44% ⚠️
Cases Analyzed       |    156     |      134       |     128
Avg. Duration        |   16 mo ⚡  |     18 mo      |    24 mo ⚠️
Recommendation       |  OPTIMAL   |   MODERATE     |   POOR

STRATEGIC CHOICE: File before Justice Anil Patel
- 71% success rate (27% better than Singh)
- Fastest resolution (16 vs 24 months)
- 156 cases = statistically reliable data
```

---

## 📊 Overall Platform Statistics

### Data Coverage
```
TOTAL JUDGMENTS ANALYZED: 14,000,000+
├── Supreme Court: 2,345,678 (17%)
├── High Courts: 4,567,890 (33%)
├── District Courts: 6,789,012 (48%)
└── Other Courts: 297,420 (2%)

TIME PERIOD COVERED: 20+ years
├── 2000-2010: 2,100,000 judgments
├── 2010-2020: 5,900,000 judgments
└── 2020-2026: 6,000,000 judgments

GEOGRAPHIC COVERAGE:
├── All 28 States + 8 Union Territories
├── All High Courts
└── 587 District Courts

LEGAL SECTIONS TRACKED: 500+
├── IPC (Indian Penal Code): All 511 sections
├── CrPC (Criminal Procedure Code)
├── CPC (Civil Procedure Code)
├── Sale of Goods Act, 1930
├── Indian Contract Act, 1872
├── And 100+ other statutes
```

### Judge Database
```
JUDGES PROFILED: 2,847
├── Supreme Court Judges: 34
├── High Court Judges: 456
├── District/Sessions Judges: 2,357

CONFIDENCE LEVELS:
├── "HIGH": 2,156 judges (5+ years data)
├── "MODERATE": 567 judges (2-5 years data)
└── "LOW": 124 judges (new, <2 years data)

DATA POINTS PER JUDGE:
├── Cases analyzed: 100+
├── Decision patterns: Computed
├── Judge tendencies: Mapped
├── Average judgment time: Calculated
└── Confidence score: Assigned
```

### AI Accuracy Metrics
```
FACTUAL MATCHING ACCURACY:
┌─────────────────────────────────────┐
│ Lex Analytics: 92% accuracy ✓       │
│ Keyword-only: 35% accuracy         │
│ Improvement: 57% better accuracy    │
└─────────────────────────────────────┘

WHAT ACCOUNTS FOR 92% ACCURACY:
├── Facts identification (90%): Extracted from judgment text
├── Legal principles (88%): Identified from ratio decidendi
├── Evidence evaluation (85%): Analyzed evidence similarity
├── Precedent chains (87%): Tracked case citations
└── Judge behavior (91%): Judges' past patterns

FALSE POSITIVE RATE: <8%
False Negative Rate: <5%
```

---

## 🎯 Implementation Details

### How Examples Work on Website

#### Example 1: Criminal Bail
```html
<div id="example-1" class="example-content active">
  <h3>Criminal Bail Application - IPC §437</h3>
  <!-- Shows: Problem, Process, Results -->
  <div class="stat-card">
    <div class="stat-value">68%</div>
    <div class="stat-label">Bail Grant Rate</div>
  </div>
  <!-- Shows precedents with match scores -->
  <div class="precedent-item">
    <span class="match-score">98% Match</span>
    <p>State v. Sharma (2025)</p>
  </div>
</div>
```

#### Example 2: Commercial Dispute
```html
<div id="example-2" class="example-content">
  <h3>Commercial Contract Dispute - Sale of Goods</h3>
  <!-- Shows: Liability analysis -->
  <div class="liability-item">
    <div class="bar liability-yes"></div>
    <span>Seller Liable (76%)</span>
  </div>
  <!-- Shows: Damages prediction -->
  <div class="stat-card">
    <div class="stat-value">₹32L</div>
    <div class="stat-label">Avg. Damages</div>
  </div>
</div>
```

#### Example 3: Judge Analytics
```html
<div id="example-3" class="example-content">
  <h3>Judge Analytics - Strategic Court Selection</h3>
  <!-- Shows: Judge comparison cards -->
  <div class="judge-card favorable">
    <div class="favor-bar" style="width: 71%;"></div>
    <div class="favor-text">71% Favorable</div>
  </div>
</div>
```

---

## 🔗 Data Integration Points

### Connecting to Real Backend

#### For Bail Example
```javascript
// Send case data to backend
const caseData = {
  case_type: "Criminal Bail",
  section: "IPC §437",
  details: {...}
};

fetch('/api/analyze-bail', {
  method: 'POST',
  body: JSON.stringify(caseData)
}).then(response => response.json())
  .then(data => {
    // Display results
    document.querySelector('.stat-value').textContent = data.bail_grant_rate;
  });
```

#### For Commercial Example
```javascript
// Analyze commercial case
const commercialCase = {
  case_type: "Breach of Contract",
  value: 2500000,
  defect_type: "manufacturing"
};

fetch('/api/analyze-damages', {
  method: 'POST',
  body: JSON.stringify(commercialCase)
}).then(response => response.json())
  .then(data => {
    // Display damage range
    document.querySelector('.stat-value').textContent = data.average_damages;
  });
```

#### For Judge Analytics
```javascript
// Get judge profile
const judgeRequest = {
  judge_name: "Justice Anil Patel",
  case_type: "Landlord-Tenant",
  court: "High Court Mumbai"
};

fetch('/api/judge-profile', {
  method: 'POST',
  body: JSON.stringify(judgeRequest)
}).then(response => response.json())
  .then(data => {
    // Display judge data
    updateJudgeCard(data);
  });
```

---

## 📈 Metrics to Track

### User Engagement
- Time spent on each example (goal: 2-3 min)
- Which example clicked most (likely = best use case)
- Scroll depth (should reach CTA section)
- Form completion rate

### Business Metrics
- Demo requests from example section
- Beta signup conversion
- User satisfaction with examples
- Lead quality (comes from examples)

---

## 🎓 Using This Data

### For Presentations
1. Show the three examples in order
2. Walk through each case scenario
3. Highlight the data/statistics
4. Emphasize time savings
5. Explain the competitive advantage

### For Documentation
1. Include example data in technical docs
2. Reference sample outputs
3. Explain data sources
4. Document accuracy metrics
5. Provide implementation examples

### For Training
1. Use examples to teach platform capabilities
2. Show data structures
3. Explain how to interpret results
4. Demonstrate judge profile analysis
5. Walk through decision-making process

---

**This reference document supports the three interactive examples on the Lex Analytics website. Use it to understand the data, customize examples, and integrate with real backend systems.**
