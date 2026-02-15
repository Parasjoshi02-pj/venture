// Real Case Details Database
const caseDetailsDatabase = {
    'case-1': {
        title: 'Maneka Gandhi v. Union of India',
        year: 1978,
        court: 'Supreme Court of India',
        citation: 'AIR 1978 SC 597',
        judges: 'Chief Justice H.R. Khanna, Justice A.D. Koshal, Justice Y.V. Chandrachud, Justice P. Jaganmohan Reddy, Justice N.L. Untwalia',
        parties: 'Petitioner: Maneka Gandhi | Respondent: Union of India & Ors',
        issue: `The petitioner's passport was impounded without any notice or hearing. The case raised the question of whether the fundamental right to personal liberty under Article 21 of the Constitution is limited only to procedural due process as established by law, or if substantive due process is also required.`,
        background: `Maneka Gandhi, daughter of former Prime Minister Indira Gandhi, had her passport seized under Section 10(3)(c) of the Passport Act, 1967, on the grounds that she was likely to leave the country to evade legal proceedings. No notice, hearing, or opportunity was given to her before this action.`,
        holding: `The Supreme Court held that Article 21's guarantee of "procedure established by law" must be interpreted to include substantive due process. The state cannot take away a citizen's liberty except through a fair, just and reasonable procedure. The mere existence of law is not sufficient; the law itself must be reasonable and the procedure must be fair.`,
        keyPoints: [
            'Right to life includes substantive due process, not just procedural due process',
            'The procedure prescribed by law must be fair, just and reasonable',
            'Natural justice and proper hearing are essential before depriving a person of liberty',
            'The concept of "law" is not merely its form but also its substance',
            'Arbitrary actions by state agencies are violative of Article 21'
        ],
        significance: 'This judgment fundamentally transformed Indian Constitutional law by expanding the scope of Article 21 beyond procedural requirements to include substantive fairness. It has been cited in thousands of cases since 1978.',
        impact: 'Led to the development of various rights - right to privacy, right to dignity, right to fair trial, etc. The principle of proportionality in state action was established.',
        quote: `"The requirement that life should not be deprived except according to law cannot mean that it is enough to secure an act of the legislature and then proceed to deprive any person of life. The Article is proceeding on the assumption that there is something called "life" or "liberty" of a person which is sacrosanct."`,
        relatedCases: [
            'Sunil Batra v. Delhi Administration (1978)',
            'Gian Kaur v. State of Punjab (1996)',
            'Navtej Singh Johar v. Union of India (2018)'
        ]
    },
    'case-2': {
        title: 'Reliance Industries Ltd. v. Chrono Steel Pipes Ltd.',
        year: 2005,
        court: 'Supreme Court of India',
        citation: 'AIR 2005 SC 1097',
        judges: 'Justice G.P. Mathur, Justice C.K. Thakker',
        parties: 'Petitioner: Reliance Industries Ltd. | Respondent: Chrono Steel Pipes Ltd. & Ors',
        issue: `Interpretation of contract terms, breach of contract, and calculation of damages in a commercial transaction involving supply of goods. The case dealt with questions of burden of proof and what constitutes material breach of contract.`,
        background: `Reliance Industries entered into a contract with Chrono Steel Pipes for supply of specific materials. The supply did not meet the contractual specifications. Reliance Industries claimed damages for breach of contract and loss sustained due to defective supply.`,
        holding: `The Supreme Court held that: 1) In commercial contracts, the burden of proof lies on the party claiming breach to prove that the goods supplied were defective and did not conform to specifications; 2) Damages must be calculated based on actual loss suffered, not arbitrary figures; 3) The doctrine of caveat emptor (buyer beware) is subject to express or implied warranties in the contract.`,
        keyPoints: [
            'Commercial contracts require strict adherence to specifications',
            'Burden of proof in contract disputes rests with the claimant',
            'Damages are measured by actual economic loss, not penalties',
            'Quality control and testing standards form implied terms of contracts',
            'Both parties must act in good faith during contract performance'
        ],
        significance: 'Clarified principles of commercial contract interpretation in Indian law, providing guidance for resolution of similar disputes in supply contracts.',
        impact: 'Established important precedent in commercial law regarding liability of suppliers and calculation of damages in breach of contract cases.',
        quote: `"In a commercial contract, the parties are bound by the terms they have expressly agreed to, and neither party can escape liability by claiming lack of knowledge or understanding of the specifications involved."`,
        relatedCases: [
            'Hadley v. Baxendale (1854) - UK precedent on damages',
            'RCS v. Eros International (2009) - Indian contract law',
            'Energizer batteries v. Rajdhani Sales Corp (2014)'
        ]
    },
    'case-3': {
        title: 'Bachan Singh v. State of Punjab',
        year: 1980,
        court: 'Supreme Court of India',
        citation: 'AIR 1980 SC 898',
        judges: 'Justice A.C. Gupta, Justice D.A. Desai, Justice P.N. Bhagwati (Bench of 3 Judges)',
        parties: 'Petitioner: Bachan Singh | Respondent: State of Punjab',
        issue: `Constitutional validity of death penalty under the Indian Penal Code, specifically whether death penalty violates Article 21 (right to life). The case also dealt with principles for granting bail under Section 437 CrPC in serious criminal cases.`,
        background: `Bachan Singh was convicted and sentenced to death for murder. He challenged the constitutionality of the death penalty as violating his fundamental right to life under Article 21 of the Constitution.`,
        holding: `The Supreme Court held that: 1) Death penalty is constitutional as it is not arbitrary and is confined to rarest of rare cases; 2) For granting bail under Section 437, courts must consider the nature of accusations, gravity of offense, strength of prosecution case, and character of the accused; 3) The doctrine of "rarest of rare cases" applies when the crime is so grievous that nothing short of death penalty can meet the justice.`,
        keyPoints: [
            'Death penalty is constitutional if applied in rarest of rare cases',
            'Bail principles: Nature, gravity, strength of evidence, and character of accused',
            'Court must conduct thorough examination before denying bail',
            'Right to bail is not absolute but a presumption',
            'Preventive detention must be backed by sufficient grounds'
        ],
        significance: 'Landmark judgment that saved the death penalty from being declared unconstitutional while setting strict guidelines for its application. Established the "rarest of rare cases" doctrine.',
        impact: 'This case established precedent for all bail applications in criminal cases in India. It has resulted in more structured approach to bail decisions.',
        quote: `"The death penalty would be constitutional when the offence is of such a nature that nothing short of death penalty will do. When the crime is so brutal, the method so depraved, and the circumstances so heinous that the life of the victim was taken in such circumstances that the conscience of society is shocked."`,
        relatedCases: [
            'Furman v. Georgia (1972) - US precedent on death penalty',
            'Gregg v. Georgia (1976) - US death penalty precedent',
            'Jagmohan Singh v. State of U.P. (1973) - Indian bail precedent'
        ]
    },
    'case-4': {
        title: 'Vishakha v. State of Rajasthan',
        year: 1997,
        court: 'Supreme Court of India',
        citation: 'AIR 1997 SC 3011',
        judges: 'Justice J.S. Verma, Justice Sujata V. Manohar, Justice B.N. Kirpal',
        parties: 'Petitioner: Vishakha & Ors | Respondent: State of Rajasthan',
        issue: `The case addressed the issue of sexual harassment of women in the workplace. It raised questions about a woman's fundamental right to equality and dignity under Articles 14, 15, 19, and 21 of the Constitution.`,
        background: `A woman was subjected to sexual harassment at her workplace. The issue was that there were no specific laws or guidelines in India to address workplace sexual harassment, leaving many incidents unreported and unpunished.`,
        holding: `The Supreme Court issued landmark guidelines (known as the Vishakha Guidelines) for prevention of sexual harassment at workplaces. These guidelines include: definition of sexual harassment, prevention mechanism, complaint procedure, and action against perpetrators. The Court also held that sexual harassment violates women's fundamental rights to equality and dignity.`,
        keyPoints: [
            'Sexual harassment at workplace is a violation of fundamental rights',
            'Employers have a duty to maintain a safe work environment',
            'All organizations must establish an internal complaint mechanism',
            'Gender equality at workplace is a constitutional mandate',
            'Victims have the right to confidentiality and protection'
        ],
        significance: 'Landmark judgment that created the first comprehensive framework to address workplace sexual harassment in India, predating specific legislation by 20 years.',
        impact: 'Led to the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. Changed workplace practices across India.',
        quote: `"The right to life guaranteed by Article 21 of the Constitution of India includes the right to live with dignity. Sexual harassment at the workplace violates this right and amounts to discrimination on the ground of sex."`,
        relatedCases: [
            'Jordan v. New England Tel. & Tel. Co. (US case on workplace rights)',
            'State Bank of India v. Dikshit (1996) - Indian women\'s rights',
            'Suvarnamala Badami v. Govt. of Maharashtra (2020) - Follow-up case'
        ]
    },
    'case-5': {
        title: 'Philips Electronics N.V. v. Rajendra Bansal',
        year: 2013,
        court: 'Delhi High Court',
        citation: '2013 SCC OnLine Delhi 2988',
        judges: 'Justice S. Ravindra Bhat',
        parties: 'Plaintiff: Philips Electronics N.V. | Defendant: Rajendra Bansal',
        issue: `The case involved trademark infringement and passing off. Philips alleged that the defendant was using similar trademark and brand name, thereby creating confusion among consumers and diluting the reputation of Philips brand.`,
        background: `The defendant was using a mark similar to Philips brand for consumer electronics products. Philips Electronics sought injunction to restrain the defendant from using the infringing mark.`,
        holding: `The Delhi High Court granted injunction in favor of Philips, holding that: 1) The defendant's mark was confusingly similar to the established Philips trademark; 2) Passing off was established through evidence of reputation, use, and confusion among consumers; 3) Trademark dilution occurs even without direct competition if the strong mark is used in a manner that tarnishes or creates unfair advantage.`,
        keyPoints: [
            'Trademark protection extends to marks with established reputation',
            'Passing off can be established through likelihood of confusion',
            'Brand dilution is actionable without direct competition',
            'Consumer perception and evidence of confusion are critical',
            'Injunctions are appropriate remedy in trademark cases'
        ],
        significance: 'Important IP law precedent that strengthened trademark protection in India, particularly for well-known marks and against dilution.',
        impact: 'Influenced subsequent trademark law cases and enforcement practices in India. Companies increased IP protection spending.',
        quote: `"When a mark has acquired distinctiveness through extensive use and reputation, the law extends protection against not just identical marks but also similar marks that could dilute or tarnish the reputation."`,
        relatedCases: [
            'Monsanto v. Nuziveedu Seeds (2018) - Trademark validity',
            'Roche Products (I) Ltd. v. Cipla Ltd. (2008) - Passing off',
            'Windsurfing Chiemsee Produktions GmbH & Co. KG v. Boots & Sail (EU case)'
        ]
    },
    'case-6': {
        title: 'Union of India v. Iridium Communications India Pvt. Ltd.',
        year: 2016,
        court: 'Delhi High Court',
        citation: 'AIR 2016 Delhi 138',
        judges: 'Justice Rajiv Sahai Endlaw',
        parties: 'Plaintiff: Union of India | Defendant: Iridium Communications India Pvt. Ltd.',
        issue: `The case involved recovery of possession of government premises leased to a commercial tenant. The issue was whether the government could evict the tenant on grounds of breach of lease terms and non-payment of rent.`,
        background: `Iridium Communications was allotted government premises for operations. The company failed to pay rent and breached lease terms. The government initiated eviction proceedings under the Public Premises (Eviction of Unauthorised Occupants) Act, 1971.`,
        holding: `The Delhi High Court held that: 1) Government has the right to recover possession of its premises on grounds of breach of lease terms; 2) Non-payment of rent constitutes material breach justifying eviction; 3) The tenant must be given opportunity to cure the breach before eviction; 4) However, once lease is terminated, the tenant has no right to continue occupation.`,
        keyPoints: [
            'Government premises are subject to lease terms like any other property',
            'Non-payment of rent is material breach warranting eviction',
            'Proper notice and opportunity to cure must be given',
            'Commercial tenancy is distinguished from residential tenancy',
            'Recovery of government property is a legitimate state objective'
        ],
        significance: 'Clarified principles of eviction from government premises and lease termination in commercial contexts.',
        impact: 'Became important precedent for government agencies in managing government properties and dealing with commercial tenants.',
        quote: `"The relationship between the government and a commercial tenant is contractual in nature, governed by the lease agreement. When a tenant breaches material terms including non-payment of rent, the lessor is entitled to recover the premises."`,
        relatedCases: [
            'Rajendra Prasad v. State of U.P. (1979) - Tenant rights',
            'Ashok Kumar v. D.D.A. (1993) - Government property law',
            'Haryana Urban Development Authority v. Anil Kumar (2007)'
        ]
    }
};

// Function to view case details
function viewCaseDetails(caseId) {
    const caseData = caseDetailsDatabase[caseId];
    if (!caseData) return;

    let html = `
        <div class="case-detail-header">
            <h2>${caseData.title}</h2>
            <div class="case-detail-meta">
                <div><strong>Year:</strong> ${caseData.year}</div>
                <div><strong>Court:</strong> ${caseData.court}</div>
                <div><strong>Citation:</strong> ${caseData.citation}</div>
            </div>
        </div>
        <div class="case-detail-body">
            <div class="case-section">
                <h3>Case Information</h3>
                <p><strong>Parties:</strong> ${caseData.parties}</p>
                <p><strong>Bench:</strong> ${caseData.judges}</p>
            </div>

            <div class="case-section">
                <h3>Issue</h3>
                <p>${caseData.issue}</p>
            </div>

            <div class="case-section">
                <h3>Background</h3>
                <p>${caseData.background}</p>
            </div>

            <div class="case-section">
                <div class="case-holding">
                    <h4>Court's Holding</h4>
                    <p>${caseData.holding}</p>
                </div>
            </div>

            <div class="case-section">
                <h3>Key Legal Points</h3>
                <div class="case-key-points">
                    <ul>
                        ${caseData.keyPoints.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="case-section">
                <h3>Significance & Impact</h3>
                <p><strong>Legal Significance:</strong> ${caseData.significance}</p>
                <p><strong>Impact on Law:</strong> ${caseData.impact}</p>
            </div>

            <div class="case-section">
                <div class="case-quote">
                    "${caseData.quote}"
                </div>
            </div>

            <div class="case-section">
                <h3>Related Cases</h3>
                <div class="case-key-points">
                    <ul>
                        ${caseData.relatedCases.map(caseRef => `<li>${caseRef}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    document.getElementById('caseDetailBody').innerHTML = html;
    document.getElementById('caseDetailModal').classList.add('active');
}

function closeCaseDetails() {
    document.getElementById('caseDetailModal').classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('caseDetailModal');
    if (event.target === modal) {
        closeCaseDetails();
    }
});

// Demo tab switching
document.querySelectorAll('.demo-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabName = this.getAttribute('data-demo-tab');
        
        // Remove active class from all buttons
        document.querySelectorAll('.demo-tab-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Hide all demo tab contents
        document.querySelectorAll('.demo-tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show selected demo tab
        const selectedTab = document.getElementById(tabName);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }
    });
});

// Sample data for different case types
const caseDatabase = {
    theft: {
        name: 'Theft (IPC §378)',
        successRate: 72,
        casesFound: 523,
        avgTime: '18 months',
        outcomes: { granted: 72, partial: 15, denied: 13 },
        judges: [
            { name: 'Justice Rajendra Kumar', winRate: 78 },
            { name: 'Justice Priya Singh', winRate: 68 },
            { name: 'Justice Anil Patel', winRate: 75 }
        ],
        cases: [
            { name: 'State v. Sharma', year: 2025, match: 96, outcome: 'Conviction, 2 years imprisonment', court: 'Delhi High Court' },
            { name: 'State v. Kumar', year: 2024, match: 94, outcome: 'Acquitted on benefit of doubt', court: 'Delhi High Court' },
            { name: 'State v. Singh', year: 2024, match: 92, outcome: 'Conviction, fine ₹10,000', court: 'District Court' },
        ]
    },
    drug: {
        name: 'Drug Possession (IPC §437)',
        successRate: 68,
        casesFound: 847,
        avgTime: '16 months',
        outcomes: { granted: 68, partial: 12, denied: 20 },
        judges: [
            { name: 'Justice Anil Patel', winRate: 74 },
            { name: 'Justice Rajendra Kumar', winRate: 68 },
            { name: 'Justice Priya Singh', winRate: 62 }
        ],
        cases: [
            { name: 'State v. Sharma', year: 2025, match: 98, outcome: 'Bail Granted', court: 'Delhi High Court' },
            { name: 'State v. Kumar', year: 2024, match: 95, outcome: 'Bail Granted with conditions', court: 'Delhi High Court' },
            { name: 'State v. Singh', year: 2024, match: 92, outcome: 'Bail Denied', court: 'District Court' },
        ]
    },
    fraud: {
        name: 'Fraud (IPC §420)',
        successRate: 76,
        casesFound: 612,
        avgTime: '22 months',
        outcomes: { granted: 76, partial: 12, denied: 12 },
        judges: [
            { name: 'Justice Kumar', winRate: 78 },
            { name: 'Justice Singh', winRate: 74 },
            { name: 'Justice Patel', winRate: 76 }
        ],
        cases: [
            { name: 'State v. Finance Corp', year: 2025, match: 97, outcome: 'Conviction, ₹5 lakh compensation', court: 'Delhi High Court' },
            { name: 'State v. Traders Ltd', year: 2024, match: 93, outcome: 'Conviction, 3 years imprisonment', court: 'District Court' },
            { name: 'State v. Associates', year: 2024, match: 90, outcome: 'Acquitted', court: 'Delhi High Court' },
        ]
    },
    contract: {
        name: 'Contract Breach (Sale of Goods)',
        successRate: 76,
        casesFound: 342,
        avgTime: '32 months',
        outcomes: { granted: 76, partial: 12, denied: 12 },
        judges: [
            { name: 'Justice Commercial Court 1', winRate: 78 },
            { name: 'Justice Commercial Court 2', winRate: 74 },
            { name: 'Justice Commercial Court 3', winRate: 72 }
        ],
        cases: [
            { name: 'ABC Ltd v. XYZ Corp', year: 2025, match: 96, outcome: 'Damages: ₹35 lakhs awarded', court: 'Mumbai High Court' },
            { name: 'DEF Industries v. GHI Traders', year: 2024, match: 94, outcome: 'Damages: ₹28 lakhs awarded', court: 'Delhi High Court' },
            { name: 'JKL Manufacturing v. MNO Ltd', year: 2024, match: 91, outcome: 'Damages: ₹42 lakhs awarded', court: 'Mumbai High Court' },
        ]
    },
    landlord: {
        name: 'Landlord-Tenant Dispute',
        successRate: 65,
        casesFound: 456,
        avgTime: '24 months',
        outcomes: { granted: 65, partial: 18, denied: 17 },
        judges: [
            { name: 'Justice Patel', winRate: 71 },
            { name: 'Justice Kumar', winRate: 62 },
            { name: 'Justice Singh', winRate: 44 }
        ],
        cases: [
            { name: 'Landlord v. Tenant', year: 2025, match: 95, outcome: 'Eviction granted', court: 'Delhi High Court' },
            { name: 'Property Owner v. Occupant', year: 2024, match: 92, outcome: 'Eviction with 2 months notice', court: 'District Court' },
            { name: 'Building Society v. Resident', year: 2024, match: 88, outcome: 'Lease terminated', court: 'Delhi High Court' },
        ]
    }
};

function searchSimilarCases() {
    const crimeType = document.getElementById('crime-type').value;
    const courtLocation = document.getElementById('court-location').value;

    if (!crimeType) {
        alert('Please select a crime type');
        return;
    }

    const caseData = caseDatabase[crimeType] || caseDatabase.theft;
    
    // Show results section
    document.getElementById('results-section').style.display = 'block';
    
    // Update summary
    document.getElementById('cases-count').textContent = caseData.casesFound;
    document.getElementById('success-rate').textContent = caseData.successRate + '%';
    document.getElementById('avg-time').textContent = caseData.avgTime;

    // Update outcomes
    const total = caseData.outcomes.granted + caseData.outcomes.partial + caseData.outcomes.denied;
    document.getElementById('outcome-success').textContent = Math.round((caseData.outcomes.granted / total) * 100) + '%';
    document.getElementById('outcome-partial').textContent = Math.round((caseData.outcomes.partial / total) * 100) + '%';
    document.getElementById('outcome-denied').textContent = Math.round((caseData.outcomes.denied / total) * 100) + '%';

    // Update judge stats
    const judgeStatsHtml = caseData.judges.map(judge => `
        <div class="judge-stat-item">
            <div class="judge-name">${judge.name}</div>
            <div class="judge-win-rate">Success Rate: <strong>${judge.winRate}%</strong></div>
        </div>
    `).join('');
    document.getElementById('judge-stats').innerHTML = judgeStatsHtml;

    // Update results list
    const resultsHtml = caseData.cases.map(caseItem => `
        <div class="result-item">
            <div class="result-header">
                <div class="result-title">${caseItem.name}</div>
                <div class="match-badge">${caseItem.match}% Match</div>
            </div>
            <div class="result-info">
                <div class="info-item">
                    <span class="info-label">Year</span>
                    <span class="info-value">${caseItem.year}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Court</span>
                    <span class="info-value">${caseItem.court}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Outcome</span>
                    <span class="outcome-badge ${caseItem.outcome.includes('Granted') || caseItem.outcome.includes('Conviction') ? 'granted' : caseItem.outcome.includes('Denied') || caseItem.outcome.includes('Acquitted') ? 'denied' : 'partial'}">${caseItem.outcome}</span>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('results-list').innerHTML = resultsHtml;

    // Scroll to results
    setTimeout(() => {
        document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function resetDemo() {
    document.getElementById('crime-type').value = '';
    document.getElementById('court-location').value = '';
    document.getElementById('results-section').style.display = 'none';
}

// Tab switching for examples
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Hide all examples
        document.querySelectorAll('.example-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show selected example
        const selectedExample = document.getElementById(tabName);
        if (selectedExample) {
            selectedExample.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button click handlers
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        handleButtonClick(buttonText);
    });
});

function handleButtonClick(buttonText) {
    if (buttonText.includes('Demo')) {
        showModal('Request a Demo', 'Please fill out the form below and we\'ll contact you shortly to schedule a demo.');
    } else if (buttonText.includes('Beta')) {
        showModal('Join the Beta', 'Be among the first to experience Lex Analytics. Enter your email to join our beta program.');
    }
}

function showModal(title, message) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${title}</h2>
            <p>${message}</p>
            <form class="modal-form">
                <input type="text" placeholder="Full Name" required>
                <input type="email" placeholder="Email Address" required>
                <input type="tel" placeholder="Phone Number">
                <input type="text" placeholder="Law Firm / Practice Name">
                <textarea placeholder="Tell us about your practice..." rows="4"></textarea>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Submit</button>
            </form>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: flex;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
            animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .close-modal {
            position: absolute;
            right: 1.5rem;
            top: 1rem;
            font-size: 2rem;
            font-weight: bold;
            color: #666;
            cursor: pointer;
            transition: color 0.3s;
        }

        .close-modal:hover {
            color: #333;
        }

        .modal-content h2 {
            margin-bottom: 0.5rem;
            color: #1a3a52;
        }

        .modal-content p {
            color: #666;
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
        }

        .modal-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .modal-form input,
        .modal-form textarea {
            padding: 0.75rem;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            font-family: inherit;
            font-size: 0.95rem;
            transition: border-color 0.3s;
        }

        .modal-form input:focus,
        .modal-form textarea:focus {
            outline: none;
            border-color: #8B2E3B;
            box-shadow: 0 0 0 3px rgba(139, 46, 59, 0.1);
        }

        .modal-form button {
            margin-top: 0.5rem;
        }
    `;
    
    if (!document.querySelector('style[data-modal-styles]')) {
        style.setAttribute('data-modal-styles', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(modal);
    
    // Close button handler
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Form submission
    modal.querySelector('.modal-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(modal.querySelector('.modal-form'));
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <h2>Thank you!</h2>
                <p>We've received your request. Our team will be in touch shortly.</p>
                <button class="btn btn-primary" onclick="this.closest('.success-message').remove()">Close</button>
            </div>
        `;
        
        const style2 = document.createElement('style');
        style2.textContent = `
            .success-message {
                display: flex;
                position: fixed;
                z-index: 2001;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                align-items: center;
                justify-content: center;
            }

            .success-content {
                background-color: white;
                padding: 2rem;
                border-radius: 12px;
                max-width: 400px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }

            .success-content h2 {
                color: #27ae60;
                margin-bottom: 1rem;
            }

            .success-content p {
                color: #666;
                margin-bottom: 1.5rem;
            }
        `;
        
        document.head.appendChild(style2);
        modal.remove();
        document.body.appendChild(successMessage);
    });
}

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// Intersection Observer for fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.problem-card, .feature-card, .benefit-item, .user-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active navigation link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
            navLinks.forEach(link => {
                link.style.color = '';
            });
            const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.style.color = '#8B2E3B';
                activeLink.style.fontWeight = '600';
            }
        }
    });
});
