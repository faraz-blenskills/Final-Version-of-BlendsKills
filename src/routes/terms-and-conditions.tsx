import { createFileRoute, Link } from "@tanstack/react-router";

import { Reveal } from "../components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | BlendSkills" },
      {
        name: "description",
        content:
          "Read the BlendSkills Pvt. Ltd. Terms & Conditions, including our Privacy Policy clause, service terms, payment terms, and legal disclosures.",
      },
      { property: "og:title", content: "Terms & Conditions | BlendSkills" },
      {
        property: "og:description",
        content: "The legal terms that govern your use of BlendSkills' website and services.",
      },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

type LegalBlock = string | string[];

type LegalSection = {
  title: string;
  body: LegalBlock[];
};

const sections: LegalSection[] = [
  {
    title: "1. Our Services",
    body: [
      "The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.",
    ],
  },
  {
    title: "2. Intellectual Property Rights",
    body: [
      "Our intellectual property",
      "We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the 'Content'), as well as the trademarks, service marks, and logos contained therein (the 'Marks').",
      "Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.",
      "The Content and Marks are provided in or through the Services 'AS IS' for your personal, non-commercial use or internal business purpose only.",
      "Your use of our Services",
      "Subject to your compliance with these Legal Terms, including the 'Prohibited Activities' section below, we grant you a non-exclusive, non-transferable, revocable licence to:",
      [
        "access the Services",
        "download or print a copy of any portion of the Content to which you have properly gained access",
      ],
      "solely for your personal, non-commercial use or internal business purpose.",
      "Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.",
      "If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to support@blendskills.co.in. If we ever grant you permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.",
      "We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.",
      "Your submissions",
      "Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ('Submissions'), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.",
      "You are responsible for what you post or upload. By sending us Submissions through any part of the Services you:",
      [
        "confirm that you have read and agree with our Prohibited Activities section and will not post, send, publish, upload, or transmit any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening, sexually explicit, false, inaccurate, deceitful, or misleading",
        "to the extent permissible by applicable law, waive any and all moral rights to any such Submission",
        "warrant that any such Submission is original to you or that you have the necessary rights and licences to submit it, and that you have full authority to grant us the above-mentioned rights",
        "warrant and represent that your Submissions do not constitute confidential information",
      ],
      "You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.",
    ],
  },
  {
    title: "3. User Representations",
    body: [
      "By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not under the age of 13; (3) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (4) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (5) you will not use the Services for any illegal or unauthorised purpose; and (6) your use of the Services will not violate any applicable law or regulation.",
      "If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).",
    ],
  },
  {
    title: "4. Products",
    body: [
      "All products are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.",
    ],
  },
  {
    title: "5. Purchases and Payment",
    body: [
      "We accept the following forms of payment:",
      [
        "Bank Transfer",
        "NEFT",
        "RTGS",
        "IMPS",
        "Visa",
        "Mastercard",
        "American Express",
        "Discover",
        "PayPal",
      ],
      "You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Indian Rupees (INR).",
      "You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.",
      "We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgement, appear to be placed by dealers, resellers, or distributors.",
    ],
  },
  {
    title: "6. Refunds Policy",
    body: ["All sales are final and no refund will be issued."],
  },
  {
    title: "7. Prohibited Activities",
    body: [
      "You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.",
      "As a user of the Services, you agree not to:",
      [
        "Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
        "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
        "Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.",
        "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.",
        "Use any information obtained from the Services in order to harass, abuse, or harm another person.",
        "Make improper use of our support services or submit false reports of abuse or misconduct.",
        "Use the Services in a manner inconsistent with any applicable laws or regulations.",
        "Engage in unauthorised framing of or linking to the Services.",
        "Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming, that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.",
        "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
        "Delete the copyright or other proprietary rights notice from any Content.",
        "Attempt to impersonate another user or person or use the username of another user.",
        "Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including clear graphics interchange formats ('gifs'), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 'spyware' or 'passive collection mechanisms').",
        "Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.",
        "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.",
        "Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.",
        "Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
        "Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.",
        "Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorised script or other software.",
        "Use a buying agent or purchasing agent to make purchases on the Services.",
        "Make any unauthorised use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences.",
        "Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavour or commercial enterprise.",
      ],
      "Prohibited activities also include, without limitation: illegal or unlawful use; intellectual-property infringement; hacking or unauthorised access; malware or harmful code; fraud or deceptive activity; misleading advertising; unauthorised data use; spam; abuse of BlendSkills personnel; circumventing payment; reverse engineering; circumventing security or usage restrictions; unauthorised use of third-party accounts; illegal products or services; manipulation of reviews or engagement; and third-party platform policy evasion.",
    ],
  },
  {
    title: "8. User Generated Contributions",
    body: [
      "The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, 'Contributions'). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that:",
      [
        "The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including copyright, patent, trademark, trade secret, or moral rights, of any third party.",
        "You are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.",
        "You have the written consent, release, and/or permission of each identifiable individual person in your Contributions to use their name or likeness in any manner contemplated by the Services and these Legal Terms.",
        "Your Contributions are not false, inaccurate, or misleading.",
        "Your Contributions are not unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.",
        "Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, or otherwise objectionable (as determined by us).",
        "Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone, or promote violence against a specific person or class of people.",
        "Your Contributions do not violate any applicable law, regulation, or rule, or the privacy or publicity rights of any third party.",
        "Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.",
        "Your Contributions do not include any offensive comments connected to race, national origin, gender, sexual preference, or physical handicap.",
        "Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.",
      ],
      "Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.",
    ],
  },
  {
    title: "9. Contribution Licence",
    body: [
      "You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).",
      "By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.",
      "We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.",
    ],
  },
  {
    title: "10. Guidelines for Reviews",
    body: [
      "We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organise a campaign encouraging others to post reviews, whether positive or negative.",
      "We may accept, reject, or remove reviews in our sole discretion, with no obligation to screen or delete reviews. Reviews are not endorsed by us and do not necessarily represent our opinions. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you grant us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and licence to reproduce, modify, translate, transmit, display, perform, and/or distribute all content relating to that review.",
    ],
  },
  {
    title: "11. Third-Party Websites and Content",
    body: [
      "The Services may contain (or you may be sent via the Site) links to other websites ('Third-Party Websites') as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ('Third-Party Content'). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services.",
      "Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or Third-Party Content does not imply approval or endorsement by us. If you leave the Services to access Third-Party Websites or use or install Third-Party Content, you do so at your own risk and these Legal Terms no longer govern. You should review the applicable terms and policies of any website you navigate to. Any purchases through Third-Party Websites are exclusively between you and the applicable third party, and you agree to hold us blameless from any harm caused by such purchases or any Third-Party Content or contact with Third-Party Websites.",
    ],
  },
  {
    title: "12. Services Management",
    body: [
      "We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including reporting such user to law enforcement authorities; (3) in our sole discretion, refuse, restrict access to, limit the availability of, or disable any of your Contributions; (4) in our sole discretion, remove from the Services or otherwise disable all files and content that are excessive in size or burdensome to our systems; and (5) otherwise manage the Services to protect our rights and property and facilitate proper functioning of the Services.",
    ],
  },
  {
    title: "13. Privacy Policy",
    body: [
      "We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in India. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in India, then through your continued use of the Services, you are transferring your data to India, and you expressly consent to have your data transferred to and processed in India.",
    ],
  },
  {
    title: "14. Term and Termination",
    body: [
      "These Legal Terms shall remain in full force and effect while you use the Services. Without limiting any other provision of these Legal Terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the Services (including blocking certain IP addresses), to any person for any reason or for no reason, including for breach of any representation, warranty, or covenant contained in these Legal Terms or of any applicable law or regulation. We may terminate your use or participation in the Services or delete any content or information that you posted at any time, without warning, in our sole discretion.",
      "If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including pursuing civil, criminal, and injunctive redress.",
    ],
  },
  {
    title: "15. Modifications and Interruptions",
    body: [
      "We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.",
      "We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.",
    ],
  },
  {
    title: "16. Governing Law",
    body: [
      "These Legal Terms shall be governed by and defined following the laws of India. BLENDSKILLS PRIVATE LIMITED and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.",
    ],
  },
  {
    title: "17. Dispute Resolution",
    body: [
      "Informal Negotiations",
      "To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a 'Dispute'), the parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.",
      "Binding Arbitration",
      "If the parties are unable to resolve the dispute through informal negotiation, the dispute shall be finally resolved by arbitration in accordance with the United Nations Commission on International Trade Law Arbitration Rules in force at the time of commencement of the arbitration. The number of arbitrators shall be one (1). The seat, or legal place, of arbitration shall be Pune, Maharashtra, India. The language of the proceedings shall be English, Hindi, Marathi. The governing law of these Legal Terms shall be the substantive law of India.",
      "Restrictions",
      "The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law: (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilise class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.",
      "Exceptions to Informal Negotiations and Arbitration",
      "The following Disputes are not subject to the above provisions: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any intellectual property rights of a Party; (b) any Dispute related to allegations of theft, piracy, invasion of privacy, or unauthorised use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, such Dispute shall be decided by a court of competent jurisdiction within the courts listed above, and the Parties agree to submit to the personal jurisdiction of that court.",
    ],
  },
  {
    title: "18. Corrections",
    body: [
      "There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.",
    ],
  },
  {
    title: "19. Disclaimer",
    body: [
      "THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT AND WILL ASSUME NO LIABILITY FOR ANY: (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (2) PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES; (3) UNAUTHORISED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY PERSONAL OR FINANCIAL INFORMATION STORED THEREIN; (4) INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES; (5) BUGS, VIRUSES, OR TROJAN HORSES TRANSMITTED BY ANY THIRD PARTY; AND/OR (6) ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF CONTENT POSTED, TRANSMITTED, OR MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED BY A THIRD PARTY THROUGH THE SERVICES. AS WITH ANY PURCHASE, YOU SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE CAUTION WHERE APPROPRIATE.",
    ],
  },
  {
    title: "20. Limitations of Liability",
    body: [
      "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER, REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US. CERTAIN LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES; IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.",
    ],
  },
  {
    title: "21. Indemnification",
    body: [
      "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. We reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defence of such claims.",
    ],
  },
  {
    title: "22. User Data",
    body: [
      "We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.",
    ],
  },
  {
    title: "23. Electronic Communications, Transactions, and Signatures",
    body: [
      "Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing. You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the Services, and waive any rights or requirements under any statutes, regulations, rules, or other laws requiring an original signature or delivery or retention of non-electronic records.",
    ],
  },
  {
    title: "24. Miscellaneous",
    body: [
      "These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision is determined to be unlawful, void, or unenforceable, that provision is deemed severable and does not affect the validity of the remaining provisions. There is no joint venture, partnership, employment, or agency relationship created between you and us as a result of these Legal Terms or use of the Services.",
    ],
  },
  {
    title: "25. Performance Marketing & No Guaranteed Results",
    body: [
      "BlendSkills may provide performance marketing, paid advertising, lead generation, conversion optimisation, retargeting, analytics, A/B testing and campaign management services. While BlendSkills will use commercially reasonable efforts to optimise campaigns and improve performance, no specific number of leads, sales, conversions, revenue, ROI, ROAS, impressions, clicks, cost per lead, cost per acquisition, ranking or other business result is guaranteed unless expressly agreed in a separate written agreement. Campaign results may be affected by advertising-platform algorithms, competition, market conditions, budget, audience behaviour, Client pricing, product quality, sales processes, website performance and other factors outside BlendSkills' control.",
    ],
  },
  {
    title: "26. Advertising Platforms & Third-Party Services",
    body: [
      "BlendSkills may use third-party platforms including Google, Meta, LinkedIn, YouTube, hosting providers, analytics services, APIs, cloud platforms, payment gateways and other technology providers. These third-party services operate independently and may change their policies, algorithms, pricing, technical requirements, availability, approval processes or account restrictions. BlendSkills shall not be responsible for losses resulting directly from third-party platform suspension, rejection, outage, policy changes, algorithm changes, API changes or discontinuation, provided BlendSkills has acted reasonably within the agreed scope.",
    ],
  },
  {
    title: "27. Client Content, Information & Legal Responsibility",
    body: [
      "The Client is responsible for ensuring that all information, content, claims, images, videos, trademarks, testimonials, pricing, offers, documents and other materials supplied to BlendSkills are accurate, lawful and authorised for use. The Client shall not knowingly provide misleading, fraudulent, defamatory, infringing or unlawful material. BlendSkills may refuse, modify, suspend or remove content where it reasonably believes the content may violate applicable law, third-party rights, advertising policies or platform rules. The Client remains responsible for the legality and accuracy of claims concerning its own products and services.",
    ],
  },
  {
    title: "28. Intellectual Property & Ownership",
    body: [
      "The Client retains ownership of its pre-existing intellectual property, including trademarks, logos, business information, photographs, videos, documents and proprietary materials. BlendSkills retains ownership of its pre-existing frameworks, methodologies, templates, processes, reusable code, libraries, internal tools, systems, strategies and know-how. Unless otherwise agreed in writing, ownership or licensed rights in specifically commissioned final deliverables shall be transferred or granted only after full payment of the applicable fees. Third-party materials, including software, plugins, fonts, stock images, music, APIs and open-source components, remain subject to their respective licences.",
    ],
  },
  {
    title: "29. Data Protection & Personal Information",
    body: [
      "BlendSkills may collect and process personal information necessary for enquiries, communication, service delivery, account management, billing, analytics, security, support and other legitimate business purposes. The Client shall ensure that personal data supplied to BlendSkills has been collected and shared lawfully and that the Client has the necessary permissions, notices, consents or other lawful basis required under applicable law. BlendSkills will handle personal information in accordance with applicable data-protection requirements and its Privacy Policy. Where BlendSkills processes Client-controlled personal data on the Client's instructions, the parties may enter into a separate Data Processing Agreement where appropriate.",
    ],
  },
  {
    title: "30. Payments, Advertising Budget & Third-Party Expenses",
    body: [
      "BlendSkills' professional fees, advertising expenditure and third-party costs shall be treated separately unless expressly stated otherwise in the applicable quotation or agreement. The Client is responsible for agreed fees, applicable taxes and approved third-party expenses. These may include advertising spend, hosting, domains, premium software, APIs, plugins, stock assets, creator/influencer fees, production expenses and other external costs. BlendSkills may suspend or pause Services where material payments remain overdue, subject to the applicable agreement and law. Work already completed and third-party expenses already incurred or irrevocably committed may remain payable after cancellation.",
    ],
  },
  {
    title: "31. Scope of Work, Revisions & Change Requests",
    body: [
      "BlendSkills shall provide Services according to the agreed scope, proposal, quotation, Statement of Work or service agreement. Deliverables, features, revisions, campaigns, pages, integrations, platforms and timelines shall be limited to what is expressly included. Requests that materially change the approved scope may be treated as additional work and may require additional fees and time. A revision means a reasonable modification to an existing deliverable and does not automatically include a completely new concept, redesign, additional functionality, additional campaign or new deliverable. Client delays in providing content, access, approvals or feedback may also affect delivery timelines.",
    ],
  },
  {
    title: "32. Website, Software, AI & Technology Limitations",
    body: [
      "BlendSkills may develop websites, applications, software, AI systems, automation workflows, APIs and other technology solutions. Unless expressly guaranteed, BlendSkills does not warrant that software will operate completely without defects or interruption, that third-party integrations will remain available indefinitely, or that AI-generated outputs will always be accurate, complete or unbiased. AI-generated or automated outputs should be reviewed before being used for legal, financial, medical, employment, regulatory or other consequential decisions. New features or requirements introduced after approval may be treated as additional development work.",
    ],
  },
  {
    title: "33. Confidentiality, Security & Access",
    body: [
      "Both parties shall take reasonable measures to protect confidential business, technical, financial, customer, marketing and security information received from the other party. Client credentials and system access shall be used only for authorised purposes. The Client should maintain secure passwords and authentication methods and should promptly notify BlendSkills of suspected unauthorised access. BlendSkills may restrict or suspend access where necessary to protect systems, data or security. No internet-connected system can be guaranteed to be completely secure, and BlendSkills shall not be responsible for security incidents caused exclusively by compromised Client credentials, Client systems or third-party infrastructure outside BlendSkills' reasonable control.",
    ],
  },
  {
    title: "34. Disputes, Suspension & Termination",
    body: [
      "The parties shall first attempt to resolve disputes through good-faith informal negotiations. Where a dispute remains unresolved for 30 days after written notice, it may be referred to arbitration where the applicable agreement provides for arbitration, in accordance with the Arbitration and Conciliation Act, 1996. Unless otherwise agreed in writing and subject to mandatory applicable law, the proposed seat of arbitration shall be Pune, Maharashtra, India, and proceedings shall be conducted in English before one arbitrator. BlendSkills may suspend or terminate Services for material non-payment, unlawful instructions, serious breach, security risks, fraudulent activity or circumstances making continued performance commercially or technically impractical. Termination does not eliminate accrued payment, confidentiality, intellectual-property, data-protection, liability or dispute-resolution obligations.",
    ],
  },
  {
    title: "35. Contact Us",
    body: [
      "In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:",
      "BlendSkills Private Limited\nRoad No -12, V K S Colony, Gaya, Gaya, Bihar, India, 823001\nIndia\nPhone: +91 9175789966\nEmail: support@blendskills.co.in",
    ],
  },
];

function TermsPage() {
  return (
    <section className="mx-auto max-w-[900px] px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal>
        <p className="eyebrow">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          / Terms &amp; Conditions
        </p>
        <h1 className="display-xl mt-6">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: August 15, 2026</p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            We are BLENDSKILLS PRIVATE LIMITED, doing business as BLENDSKILLS ('Company', 'we',
            'us', or 'our'), a company registered in India at Road No -12, V K S Colony, Gaya, Gaya,
            Bihar, India, 823001.
          </p>
          <p>
            We operate the website{" "}
            <a
              href="http://www.blendskills.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              www.blendskills.co.in
            </a>{" "}
            (the 'Site'), as well as any other related products and services that refer or link to
            these legal terms (the 'Legal Terms') (collectively, the 'Services').
          </p>
          <p>
            BlendSkills Pvt. Ltd. is a digital growth and technology company providing services
            including, without limitation: Performance Marketing; Paid Advertising; Website
            Development; App Development; Software Development; Branding and Creative Design; AI and
            Business Automation; SEO; Social Media Growth; Video Production; Content Creation;
            Analytics; Conversion Optimisation; Technical Support; Maintenance; and other
            technology, creative, marketing or consulting services.
          </p>
          <p>
            The service list should not be interpreted as a promise that every listed service is
            available in every package. The actual services supplied to a Client are determined by
            the accepted commercial proposal or agreement. BlendSkills may add, remove, rename or
            modify services as its business develops.
          </p>
          <p>
            You can contact us by phone at +91 9175789966, email at support@blendskills.co.in, or by
            mail to Road No -12, V K S Colony, Gaya, Gaya, Bihar, India, 823001.
          </p>
          <p>
            These Legal Terms constitute a legally binding agreement made between you, whether
            personally or on behalf of an entity ('you'), and BLENDSKILLS PRIVATE LIMITED,
            concerning your access to and use of the Services. You agree that by accessing the
            Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
            If you do not agree with all of these Legal Terms, then you are expressly prohibited
            from using the Services and you must discontinue use immediately.
          </p>
          <p>
            Users will be notified through a notice/banner on the BlendSkills website when updated
            Terms &amp; Conditions become effective.
          </p>
          <p>
            The Services are intended for users who are at least 13 years of age. All users who are
            minors in the jurisdiction in which they reside (generally under the age of 18) must
            have the permission of, and be directly supervised by, their parent or guardian to use
            the Services. If you are a minor, you must have your parent or guardian read and agree
            to these Legal Terms prior to you using the Services.
          </p>
          <p className="font-medium text-foreground">
            We recommend that you print a copy of these Legal Terms for your records.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-14 w-full">
          {sections.map((s) => (
            <AccordionItem key={s.title} value={s.title} className="border-border py-2">
              <AccordionTrigger className="font-display text-left text-lg font-medium hover:no-underline">
                {s.title}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {s.body.map((block, idx) =>
                  Array.isArray(block) ? (
                    <ul key={idx} className="mt-3 list-disc space-y-2 pl-5 first:mt-0">
                      {block.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={idx} className="mt-3 whitespace-pre-line first:mt-0">
                      {block}
                    </p>
                  ),
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
