const attackTypes = [
    {
        icon: "✉️",
        name: "Email Phishing",
        definition: "Email phishing uses deceptive emails that appear to come from legitimate organizations or services. They may contain fraudulent links, malicious attachments, or requests for sensitive information.",
        example: "Subject: Urgent Account Notice\n\nYour account requires verification. Visit the link below to confirm your details and avoid temporary account restrictions.",
        signs: [
            "Unexpected urgency.",
            "A link whose destination may not match the claimed organization.",
            "Requests for passwords or sensitive information.",
            "Sender details that do not match the claimed organization."
        ]
    },
    {
        icon: "🎯",
        name: "Spear Phishing",
        definition: "Spear phishing is a targeted form of phishing customized for a particular person or organization. Attackers may use publicly available information to make the message appear more believable.",
        example: "Hello Alex,\n\nI noticed your school technology project was recently presented. Please review the attached document before tomorrow's meeting.",
        signs: [
            "Unexpected requests related to your work or personal activities.",
            "Unusual requests involving files, access, or confidential information.",
            "A familiar name or detail used to create false trust."
        ],
        note: "Personalization alone does not prove a message is malicious."
    },
    {
        icon: "💬",
        name: "Smishing",
        subtitle: "SMS phishing",
        definition: "Smishing uses text messages to persuade people to open fraudulent links, share information, or make payments.",
        example: "Delivery Notice: Your parcel could not be delivered. Confirm your delivery details using the link provided.",
        signs: [
            "Unexpected delivery or payment notices.",
            "Unfamiliar shortened links.",
            "Requests for payment or personal information.",
            "Pressure to act immediately."
        ]
    },
    {
        icon: "📞",
        name: "Vishing",
        subtitle: "Voice phishing",
        definition: "Vishing uses phone calls or voice messages to impersonate trusted people or organizations and persuade victims to reveal information or take unsafe actions.",
        example: "Hello, this is a representative from your bank's security department. We detected a problem with your account and need you to confirm a verification code.",
        signs: [
            "Requests for one-time passwords or verification codes.",
            "Pressure to stay on the call.",
            "Threats or urgent demands.",
            "Refusal to let you verify the request independently."
        ]
    },
    {
        icon: "🧬",
        name: "Clone Phishing",
        definition: "Clone phishing imitates a legitimate message or notification, sometimes replacing a previously shared link or attachment with a malicious alternative.",
        example: "You recently received a project document. Here is the updated copy for you to review.",
        signs: [
            "An unexpected replacement attachment or link.",
            "A sender asking you to open a file you were not expecting.",
            "A changed destination or unusual request that has not been independently confirmed."
        ]
    },
    {
        icon: "▦",
        name: "Quishing",
        subtitle: "QR-code phishing",
        definition: "Quishing uses deceptive QR codes to direct people to fraudulent websites or unsafe actions. Because the destination may not be visible before scanning, the code can conceal where it leads.",
        example: "A poster claims that you must scan a QR code immediately to prevent your student account from expiring.",
        signs: [
            "Unexpected QR codes requesting account access or payment.",
            "QR codes placed over another code.",
            "Destinations that do not match the claimed organization.",
            "Requests to enter sensitive information after scanning."
        ]
    },
    {
        icon: "🎣",
        name: "Angler Phishing",
        subtitle: "Social-media phishing",
        definition: "Angler phishing uses social media, often by impersonating a company's support account, to persuade people to disclose information or follow fraudulent links.",
        example: "Hello! We can resolve your account issue. Please send us your login details through this private message.",
        signs: [
            "Support accounts contacting you unexpectedly.",
            "Requests for passwords or verification codes.",
            "Unverified profiles or suspicious links.",
            "Attempts to move the conversation to an unofficial channel."
        ]
    }
];

const redFlags = [
    "Unexpected urgency or threats.",
    "Requests for passwords or one-time verification codes.",
    "Links whose destinations do not match the claimed organization.",
    "Unexpected attachments.",
    "Unusual payment requests or changes to payment instructions.",
    "Sender addresses, phone numbers, or accounts that cannot be verified.",
    "Requests that bypass normal security procedures.",
    "Offers that seem implausibly good to be true.",
    "Unexpected requests to install software or grant remote access.",
    "Messages that discourage independent verification."
];

const exampleMessages = [
    {
        sender: "Swift Parcel Service",
        message: "Your delivery is waiting. Pay a small unexpected fee to release the package immediately.",
        verdict: "suspicious",
        analysis: "The unexpected payment request and urgency are warning signs. Verify delivery status using the courier's official website or app, accessed independently."
    },
    {
        sender: "Account Security Team",
        message: "Your account will be restricted unless you reply with the six-digit verification code sent to your phone.",
        verdict: "suspicious",
        analysis: "Verification codes should not be shared with someone who contacts you unexpectedly. Use the service's official support channel."
    },
    {
        sender: "Records Office",
        message: "Please open this unexpected document and enable its requested active content to view the grades.",
        verdict: "suspicious",
        analysis: "An unexpected document requesting active content is a warning sign. Verify the request with the school through a known contact method."
    },
    {
        sender: "Learning Platform",
        message: "Your weekly study summary is ready. Open the official learning platform using your usual bookmark to view it.",
        verdict: "legitimate",
        analysis: "This message is consistent with a legitimate notification, although its authenticity cannot be proven from text alone. Verify the source and navigate independently."
    },
    {
        sender: "Calendar Notifications",
        message: "Reminder: Your scheduled meeting begins tomorrow at 10:00 AM. You can check the details in your organization's usual calendar.",
        verdict: "legitimate",
        analysis: "This appears consistent with a routine reminder. Context matters, and unexpected links or requests would still need verification."
    },
    {
        sender: "Support Team (social media DM)",
        message: "We can restore your account immediately. Send us your password and verification code in this private chat.",
        verdict: "suspicious",
        analysis: "Legitimate support should not require you to disclose your password or one-time verification code in a private message."
    }
];

const quizQuestions = [
    {
        question: "A message says your account will be locked in one hour unless you click a button right away. What is the best first step?",
        options: [
            "Click quickly so the account is not locked",
            "Pause, then open the official website or app yourself instead of using the message",
            "Reply and ask the sender to extend the deadline",
            "Forward it to friends so they can check it"
        ],
        answer: 1,
        explanation: "Urgency is a common pressure tactic. Going to the official site on your own lets you check the account without trusting the message."
    },
    {
        question: "Someone claiming to be from your bank calls and asks for the code that was just texted to you. What should you do?",
        options: [
            "Read the code so they can confirm your identity",
            "Give only the first three digits",
            "End the call and contact the bank using a number you already trust",
            "Ask the caller to prove who they are, then share the code"
        ],
        answer: 2,
        explanation: "One-time codes should never be shared with someone who contacts you. A caller can fake convincing details, so contact the bank independently."
    },
    {
        question: "An email shows a familiar company name, but hovering over its button reveals a different web address. What does this suggest?",
        options: [
            "Nothing, because button text is what counts",
            "The destination does not match the claimed organization, so avoid the link",
            "The email is safe because the logo looks right",
            "The link is probably just slow to load"
        ],
        answer: 1,
        explanation: "A mismatch between what a link claims and where it leads is a classic warning sign. Navigate to the organization's site yourself."
    },
    {
        question: "You get a polished email, with correct grammar, that looks like it is from a colleague asking you to update payment details. What is the safest approach?",
        options: [
            "Proceed, since the writing is professional",
            "Check only that the logo matches",
            "Confirm the request through a contact method you already trust, such as a known phone number",
            "Reply to the email asking if it is real"
        ],
        answer: 2,
        explanation: "Good grammar proves nothing. Replying to the same message can reach the attacker, so verify through a separate, trusted channel."
    },
    {
        question: "A message is full of spelling mistakes. Which conclusion is most reasonable?",
        options: [
            "It is definitely phishing",
            "It is definitely safe because scammers write perfectly",
            "Mistakes are one clue, but you should evaluate the sender, request, and context too",
            "Spelling never matters at all"
        ],
        answer: 2,
        explanation: "Attackers can write well and legitimate organizations sometimes make errors. Judge the whole situation rather than a single clue."
    },
    {
        question: "You see a sticker with a QR code on a public notice board saying you must scan it to keep your student account active. What is the best response?",
        options: [
            "Scan it quickly and sign in",
            "Scan it but avoid typing a password",
            "Skip it and check your account status through the official website or the school directly",
            "Photograph it and share it online"
        ],
        answer: 2,
        explanation: "QR codes hide their destination and can be stuck over genuine ones. Unexpected codes asking for account access are best verified independently."
    },
    {
        question: "A coworker's account sends you an unexpected file and asks you to enable editing or active content to view it. What should you do?",
        options: [
            "Enable it, since the sender is someone you know",
            "Open it on your phone instead",
            "Confirm with your coworker using a different channel before opening it",
            "Delete the coworker from your contacts"
        ],
        answer: 2,
        explanation: "A familiar sender can be impersonated or have a compromised account. A quick check through another channel is a low-cost safeguard."
    },
    {
        question: "Which sign-in protection is generally considered most resistant to phishing?",
        options: [
            "A password that is changed every week",
            "A passkey or hardware security key",
            "A security question about your pet's name",
            "A code sent by text message"
        ],
        answer: 1,
        explanation: "Passkeys and security keys are bound to the real website, so they are much harder to hand over to a fake page than passwords or typed codes."
    },
    {
        question: "A social media account named 'Help Desk' messages you first and offers to fix a problem if you move to a private chat and share login details. What is the best response?",
        options: [
            "Share the details, since it offered help",
            "Do not share anything, and contact support through the company's official website or app",
            "Share only your username",
            "Ask them to follow you first"
        ],
        answer: 1,
        explanation: "Genuine support does not need your password or codes. Unsolicited help that moves you to a private channel is a warning sign."
    },
    {
        question: "You receive a routine-looking notice about a password reset you did not request. It includes a button to 'secure your account'. What is the most careful approach?",
        options: [
            "Use the button, since it is meant to protect you",
            "Ignore it permanently and never check your account",
            "Do not use the message's link; open the service yourself and review your account's security settings",
            "Reply with your current password so they can verify you"
        ],
        answer: 2,
        explanation: "The notice may be genuine or fake, and the text alone cannot settle it. Checking your account through your own route is safe in both cases."
    }
];

const safetySteps = [
    ["Pause before reacting", "Urgency is often used to prevent careful thinking. Take a moment to evaluate unexpected requests, especially those involving money, account access, or personal information."],
    ["Verify the sender", "Check the sender's identity and address. Remember that display names can be misleading, and familiar details do not prove authenticity."],
    ["Inspect links without opening them", "On a computer, you can often preview a link's destination by hovering over it. On a phone, use the available link-preview feature when safe. If uncertain, avoid the link and navigate to the official website or app independently."],
    ["Never share authentication secrets", "Do not disclose passwords, one-time verification codes, or recovery codes to someone who contacts you unexpectedly. Legitimate support should not ask you to reveal your password."],
    ["Confirm unusual requests independently", "Contact the organization, school, employer, or person using a phone number or contact method you already trust, rather than details provided in the suspicious message."],
    ["Enable multifactor authentication", "Where available, enable multifactor authentication. Prefer phishing-resistant methods, such as passkeys or security keys, when supported."],
    ["Keep devices and software updated", "Install updates from official sources, use reputable security tools, and avoid installing unexpected attachments or applications."],
    ["Report and recover safely", "If you receive a suspicious message, report it through the relevant service or organization. If you believe you have disclosed sensitive information, use the service's official recovery process promptly and seek trusted assistance."],
    ["Remember that legitimate messages can look unusual too", "Do not judge a message by spelling, grammar, or design alone. Attackers can create polished messages, and legitimate organizations sometimes send imperfect ones. Context and independent verification matter."]
];

const analyzerChecks = [
    {
        title: "Urgency or pressure wording",
        pattern: /\b(urgent(ly)?|immediately|right away|act now|within \d+ (hours?|minutes?)|last chance|final notice|expires?|suspended|restricted|locked|deadline|asap)\b/i,
        detail: "Pressure to act quickly is often used to discourage careful thinking."
    },
    {
        title: "Request for passwords or verification codes",
        pattern: /\b(password|passcode|pin|verification code|one[- ]time (code|password)|otp|security code|recovery code|login details|credentials|\d-?digit code)\b/i,
        detail: "Legitimate services should not ask you to disclose secrets to someone who contacts you unexpectedly."
    },
    {
        title: "Payment or financial demand",
        pattern: /\b(pay(ment)?|fee|invoice|gift cards?|wire transfer|bank (details|transfer)|card number|refund|transfer funds)\b/i,
        detail: "Unexpected payment or banking requests deserve independent verification."
    },
    {
        title: "Suspicious link pattern",
        pattern: /(https?:\/\/\d{1,3}(\.\d{1,3}){3})|(\b(bit\.ly|tinyurl\.com|t\.co|goo\.gl|cutt\.ly|is\.gd|ow\.ly)\/)|(https?:\/\/[^\s/]*@)|(http:\/\/)|(https?:\/\/[^\s/]*xn--)/i,
        detail: "Shortened links, raw IP addresses, unencrypted http links, or addresses containing an at-sign can hide where a link really goes."
    },
    {
        title: "Attachment or active-content request",
        pattern: /\b(attachment|attached|enable (editing|content|macros?)|open the (file|document)|download (the|this) (file|document))\b/i,
        detail: "Unexpected files that ask for extra permissions can be unsafe. Verify with the sender through another channel."
    },
    {
        title: "Software install or remote access request",
        pattern: /\b(install|remote access|anydesk|teamviewer|screen sharing|download (the )?(app|software|tool))\b/i,
        detail: "Requests to install tools or grant control of your device are a serious warning sign when unexpected."
    },
    {
        title: "Too-good-to-be-true offer or threat",
        pattern: /\b(you('ve| have)? won|winner|prize|free (gift|money)|guaranteed|claim your|legal action|arrest|penalty)\b/i,
        detail: "Surprise rewards and threats are common ways to trigger emotional reactions."
    },
    {
        title: "Discourages independent verification",
        pattern: /\b(do not (tell|contact|call|share this)|keep this (confidential|secret)|stay on (the )?(line|call)|only reply|don't tell)\b/i,
        detail: "A message that discourages checking with others is trying to keep you from verifying it."
    }
];

const sampleMessage = "URGENT: Your account will be suspended within 24 hours.\n\nTo avoid restrictions, confirm your login details and the six-digit verification code we sent you at http://account-check.example/verify\n\nDo not contact support. Reply immediately.";

const select = (selector, root = document) => root.querySelector(selector);
const selectAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function renderAttackTypes() {
    const grid = select("#types-grid");
    grid.innerHTML = attackTypes.map(type => `
        <article class="card reveal">
            <span class="type-icon" aria-hidden="true">${type.icon}</span>
            <h3>${type.name}</h3>
            ${type.subtitle ? `<p class="type-sub">${type.subtitle.toUpperCase()}</p>` : ""}
            <p>${type.definition}</p>
            <p class="sample-label">FICTIONAL EXAMPLE</p>
            <p class="sample">${type.example}</p>
            <p class="sample-label">WARNING SIGNS</p>
            <ul class="sign-list">${type.signs.map(sign => `<li>${sign}</li>`).join("")}</ul>
            ${type.note ? `<p class="type-note">${type.note}</p>` : ""}
        </article>
    `).join("");
}

function renderRedFlags() {
    select("#flags-grid").innerHTML = redFlags.map(flag => `<li class="reveal">${flag}</li>`).join("");
}

function renderSafetySteps() {
    select("#steps-list").innerHTML = safetySteps.map(([title, text]) => `
        <li class="reveal"><h3>${title}</h3><p>${text}</p></li>
    `).join("");
}

function renderExamples() {
    const grid = select("#examples-grid");
    grid.innerHTML = exampleMessages.map((item, index) => `
        <article class="card example-card reveal">
            <div class="example-head">
                <span class="example-sender">From: ${item.sender}</span>
            </div>
            <p class="example-message">"${item.message}"</p>
            <button class="btn btn-ghost" type="button" aria-expanded="false" aria-controls="analysis-${index}" data-index="${index}">Reveal Analysis</button>
            <div class="analysis-box ${item.verdict}" id="analysis-${index}" hidden>
                <span class="badge ${item.verdict}">${item.verdict === "suspicious" ? "SUSPICIOUS" : "APPEARS LEGITIMATE"}</span>
                <p>${item.analysis}</p>
            </div>
        </article>
    `).join("");

    grid.addEventListener("click", event => {
        const button = event.target.closest("button[data-index]");
        if (!button) return;
        const box = select(`#analysis-${button.dataset.index}`);
        const willShow = box.hidden;
        box.hidden = !willShow;
        button.setAttribute("aria-expanded", String(willShow));
        button.textContent = willShow ? "Hide Analysis" : "Reveal Analysis";
    });
}

function setupNavigation() {
    const toggle = select("#menu-toggle");
    const nav = select("#site-nav");

    const closeMenu = () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    selectAll(".nav-link").forEach(link => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && nav.classList.contains("open")) {
            closeMenu();
            toggle.focus();
        }
    });

    const links = selectAll(".nav-link");
    const sections = links.map(link => select(link.getAttribute("href")));
    const activeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(link => {
                const isActive = link.getAttribute("href") === `#${entry.target.id}`;
                link.classList.toggle("active", isActive);
                if (isActive) link.setAttribute("aria-current", "true");
                else link.removeAttribute("aria-current");
            });
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(section => section && activeObserver.observe(section));
}

function setupReveal() {
    const items = selectAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        items.forEach(item => item.classList.add("visible"));
        return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
}

const quizState = { index: 0, score: 0, answered: false };

function showQuestion() {
    const total = quizQuestions.length;
    const current = quizQuestions[quizState.index];
    quizState.answered = false;

    select("#quiz-progress-text").textContent = `Question ${quizState.index + 1} of ${total}`;
    select("#quiz-score-live").textContent = `Score: ${quizState.score}`;
    select("#quiz-progress-fill").style.width = `${(quizState.index / total) * 100}%`;
    const bar = select("#quiz-progress-bar");
    bar.setAttribute("aria-valuenow", String(quizState.index + 1));

    const question = select("#quiz-question");
    question.textContent = current.question;

    const options = select("#quiz-options");
    options.innerHTML = "";
    current.options.forEach((text, optionIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "quiz-option";
        button.textContent = text;
        button.addEventListener("click", () => selectAnswer(optionIndex));
        options.appendChild(button);
    });

    select("#quiz-feedback").innerHTML = "";
    select("#quiz-next").hidden = true;
}

function selectAnswer(chosen) {
    if (quizState.answered) return;
    quizState.answered = true;

    const current = quizQuestions[quizState.index];
    const isCorrect = chosen === current.answer;
    if (isCorrect) quizState.score += 1;

    selectAll(".quiz-option").forEach((button, optionIndex) => {
        button.disabled = true;
        if (optionIndex === current.answer) button.classList.add("correct");
        else if (optionIndex === chosen) button.classList.add("incorrect");
    });

    const lead = isCorrect ? "Correct." : "Not quite, and that is how we learn.";
    const feedback = select("#quiz-feedback");
    feedback.innerHTML = `<p class="${isCorrect ? "" : "wrong"}"><strong>${lead}</strong> ${current.explanation}</p>`;

    select("#quiz-score-live").textContent = `Score: ${quizState.score}`;
    const next = select("#quiz-next");
    next.textContent = quizState.index === quizQuestions.length - 1 ? "See Results" : "Next Question";
    next.hidden = false;
    next.focus();
}

function showResult() {
    const total = quizQuestions.length;
    const percent = Math.round((quizState.score / total) * 100);
    let message;
    if (percent >= 90) message = "Excellent work. You recognize the major warning signs and good verification habits. Keep questioning unexpected requests, and help others do the same.";
    else if (percent >= 70) message = "Strong result. You have a solid grasp of the essentials. Review the explanations for any missed questions to sharpen your instincts further.";
    else if (percent >= 50) message = "A good start. Phishing is designed to be convincing, so these mistakes are common. Revisit the red flags and safety steps, then try again.";
    else message = "Phishing is built to be tricky, and learning it takes practice. Read through the attack types and safety steps, then retake the quiz.";

    select("#quiz-progress-fill").style.width = "100%";
    select("#quiz-body").hidden = true;
    select("#quiz-result").hidden = false;
    select("#result-score").textContent = `${quizState.score} / ${total}`;
    select("#result-percent").textContent = `${percent}% correct`;
    select("#result-message").textContent = message;
    select("#quiz-restart").focus();
}

function resetQuiz() {
    quizState.index = 0;
    quizState.score = 0;
    select("#quiz-result").hidden = true;
    select("#quiz-body").hidden = false;
    showQuestion();
}

function setupQuiz() {
    select("#quiz-next").addEventListener("click", () => {
        if (quizState.index === quizQuestions.length - 1) {
            showResult();
        } else {
            quizState.index += 1;
            showQuestion();
            select("#quiz-question").focus();
        }
    });
    select("#quiz-restart").addEventListener("click", () => {
        resetQuiz();
        select("#quiz-question").focus();
    });
    select("#cta-retake").addEventListener("click", () => {
        resetQuiz();
        select("#quiz").scrollIntoView({ behavior: "smooth" });
    });
    showQuestion();
}

function analyzeMessage(text) {
    const findings = analyzerChecks
        .filter(check => check.pattern.test(text))
        .map(check => ({ title: check.title, detail: check.detail }));

    const count = findings.length;
    let label;
    let level;
    let explanation;

    if (count === 0) {
        label = "Few indicators found";
        level = "risk-low";
        explanation = "None of the simple checks matched. This does not prove the message is safe: attackers can write convincing messages without any of these patterns.";
    } else if (count <= 2) {
        label = "Some warning signs";
        level = "risk-mid";
        explanation = "A small number of indicators matched. Treat the message with caution and verify the request independently before acting on it.";
    } else {
        label = "Multiple warning signs detected";
        level = "risk-high";
        explanation = "Several indicators matched. Do not click links or share information. Contact the organization using a trusted method you found yourself.";
    }

    return { label, level, explanation, findings };
}

function setupAnalyzer() {
    const input = select("#analyzer-input");
    const counter = select("#char-count");
    const error = select("#analyzer-error");
    const analysis = select("#analysis");

    const updateCounter = () => {
        counter.textContent = `${input.value.length} / ${input.maxLength}`;
    };

    const hideResults = () => {
        analysis.hidden = true;
        error.hidden = true;
    };

    input.addEventListener("input", () => {
        updateCounter();
        error.hidden = true;
    });

    select("#analyzer-clear").addEventListener("click", () => {
        input.value = "";
        updateCounter();
        hideResults();
        input.focus();
    });

    select("#analyzer-sample").addEventListener("click", () => {
        input.value = sampleMessage;
        updateCounter();
        hideResults();
        input.focus();
    });

    select("#analyzer-run").addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) {
            analysis.hidden = true;
            error.textContent = "Please paste a message or load the example message before analyzing.";
            error.hidden = false;
            input.focus();
            return;
        }
        if (text.length < 15) {
            analysis.hidden = true;
            error.textContent = "That message is very short. Add more of the text so the checks have something to examine.";
            error.hidden = false;
            return;
        }

        error.hidden = true;
        const result = analyzeMessage(text);
        const riskLabel = select("#risk-label");
        riskLabel.textContent = result.label;
        riskLabel.className = `risk-label ${result.level}`;
        select("#risk-explanation").textContent = result.explanation;

        const list = select("#finding-list");
        list.innerHTML = "";
        result.findings.forEach(finding => {
            const item = document.createElement("li");
            const title = document.createElement("strong");
            title.textContent = finding.title;
            item.appendChild(title);
            item.appendChild(document.createTextNode(finding.detail));
            list.appendChild(item);
        });

        analysis.hidden = false;
    });

    updateCounter();
}

function init() {
    renderAttackTypes();
    renderRedFlags();
    renderSafetySteps();
    renderExamples();
    setupNavigation();
    setupQuiz();
    setupAnalyzer();
    setupReveal();
    select("#year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
