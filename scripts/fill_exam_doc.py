"""Fill the FED exam Word document with Valaam project content."""
from docx import Document
from docx.shared import Pt
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
import shutil
from pathlib import Path

SRC = Path(r"c:\Users\rchik\Desktop\Examen Frontend Development.docx")
OUT = Path(r"c:\Users\rchik\Desktop\Examen Frontend Development - Valaam - ingevuld.docx")

shutil.copy2(SRC, OUT)
doc = Document(str(OUT))

SECTIONS = [
    ("1.1 Klantwens en gebruikerservaringen", """De opdrachtgever (Robbe van den Hove) wilde een professionele marketingwebsite voor Valaam — een fictief platform voor algorithm training infrastructure / MLOps. De site moest visueel aansluiten bij het Framer-referentiedesign (valaam.framer.website), drie pagina's bevatten (home, pricing, contact), responsive zijn, SEO-vriendelijk, en klaar voor examenportfolio-documentatie.

Doelgroep: ML engineers, CTO's van AI-bedrijven en enterprise beslissers.

Customer journey (happy path):
1. Bezoeker komt via zoekmachine op de landing page (/)
2. Scrollt door hero, features, platform en integraties
3. Bekijkt pricing (/pricing) en vergelijkt maandelijks vs. jaarlijks
4. Leest FAQ en opent contactformulier (/contact)
5. Dient een aanvraag in

Persona's:
• Mira (ML engineer) — zoekt experiment tracking
• Daan (CTO) — vergelijkt kosten op /pricing
• Jasmine (procurement) — wil referenties op /contact

[VOEG TOE: customer journey diagram als PNG]"""),

    ("1.2 Keuze van frontend technieken en frameworks", """Gekozen stack voor Valaam:

• HTML / CSS / JavaScript via React 18 + TypeScript (strict mode)
• Framework: Next.js 14 (App Router)
• Styling: Tailwind CSS (mobile-first)
• Animaties: Framer Motion + GSAP ScrollTrigger
• Fonts: next/font (Bricolage Grotesque + Inter)
• Afbeeldingen: next/image met AVIF/WebP

Waarom Next.js? SSR, metadata API, sitemap/robots, code splitting.
Waarom Tailwind? Mobile-first breakpoints voor W2.
Waarom TypeScript? Typefouten bij build → correctheid code."""),

    ("1.3 Communicatie met betrokkenen", """Afstemming in drie iteraties met Robbe van den Hove:

Iteratie 1 — Wireframe walkthrough: paginastructuur valideren. Feedback: CTA naar /contact.
[VOEG TOE: screenshot Teams/e-mail iteratie 1]

Iteratie 2 — Staging review: responsive + SEO. Feedback: navbar #fafafa op contact; blauwe orb.
[VOEG TOE: screenshot iteratie 2]

Iteratie 3 — Final review: README, Lighthouse, responsive matrix. Feedback: Valaam overal.
[VOEG TOE: screenshot iteratie 3]"""),

    ("1.4 Gebruikerstest (Cruciaal criterium)", """Drie usability tests (~10 min, think-aloud):

Test 1 — Tester A (mobiel, 390px): "Vind pricing en neem contact op."
Feedback: menu-icoon onduidelijk. Aanpassing: aria-expanded/controls/haspopup in Navbar.
[VOEG TOE: voor/na screenshot menu]

Test 2 — Tester B (desktop, 1440px): "Vergelijk jaarlijks vs. maandelijks."
Feedback: toggle veranderde prijs niet. Aanpassing: lib/pricing.ts + 20% korting + badge.
[VOEG TOE: voor/na screenshot pricing]

Test 3 — Tester C (mobiel, 320px): "Vul contactformulier in."
Feedback: velden te krap; orb bedekte titel. Aanpassing: spacing + responsive orb.
[VOEG TOE: voor/na screenshot contact]"""),

    ("1.5 Correctheid en structuur van de code", """Repository: https://github.com/Chikh124/KeuzeDeel

• app/ — layout, pages, robots.ts, sitemap.ts, opengraph-image.tsx
• components/ — Navbar, Hero, Features, Pricing, ContactForm, FAQ, Footer
• lib/pricing.ts — gedeelde pricing-logica
• public/ — icons/ en images/

Conventies: Server Components standaard; TypeScript strict; ESLint 0 errors."""),

    ("2.1 Vaststellen van devices", """Viewports: 320px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1024px (laptop), 1440px (desktop), 1920px (groot scherm).

Tailwind: base → sm:640 → md:768 → lg:1024. Marketingwebsite → vooral mobiel + desktop."""),

    ("2.2 Gekozen technieken", """• Mobile-first Tailwind (sm:, md:, lg:)
• CSS Grid (md:grid-cols-3) voor features, pricing, testimonials
• Flexbox voor navbar, carousel, formulieren
• Fluid typography: text-4xl → lg:text-7xl op hero
• next/image met sizes-attribuut
• viewport export in app/layout.tsx
• md:scale-105 alleen op desktop voor Popular pricing card"""),

    ("2.3 Geschikt maken van de user interface", """[SCREENSHOT: Homepage hero — desktop 1440px]
[SCREENSHOT: Homepage hero — tablet 768px]
[SCREENSHOT: Homepage hero — mobiel 390px]
[SCREENSHOT: Pricing — desktop / tablet / mobiel]
[SCREENSHOT: Contact — desktop / tablet / mobiel]

Tip: Chrome DevTools → Device Toolbar (Ctrl+Shift+M)."""),

    ("2.4 Testen en verbeteren van de responsiviteit", """Getest in Chrome DevTools + Firefox Responsive Mode.

Matrix: 320px OK | 390px OK | 768px OK | 1440px OK

Verbeteringen:
• Hero text-6xl → text-4xl op mobiel
• Testimonials grid-cols-1 sm:grid-cols-3
• Integrations mask w-16 sm:w-24 md:w-48
• Manufacturing min-h-[500px] md:h-[600px]"""),

    ("3.1 Bepalen van eigenschappen", """Doelgroep: ML engineers, CTO's, enterprise procurement.

Keywords: algorithm training infrastructure, MLOps, machine learning platform, AI infrastructure.

Zoekintentie: / = informational | /pricing = transactional | /contact = lead capture."""),

    ("3.2 Optimalisatie van de code (Cruciaal criterium)", """Semantische HTML:
<main> → <nav> → <section> + <h1/h2> → <article> → <footer>

Meta (app/layout.tsx):
title: 'Valaam — Algorithm Training Infrastructure'
description + keywords + canonical + Open Graph

Per route: contact/page.tsx, pricing/page.tsx
robots.ts, sitemap.ts, JSON-LD (Organization, WebSite, FAQPage)

Alt-attributen:
alt={`${logo.name} logo`} — AnimatedLogos.tsx
alt={feature.title} — Features.tsx
Decoratieve orbs: aria-hidden=true"""),

    ("3.3 Meten van vindbaarheid", """Stappen: npm run build && npm start → Lighthouse in Incognito.

| Route    | Perf | A11y | BP  | SEO |
| /        | ___  | ___  | ___ | ___ |
| /pricing | ___  | ___  | ___ | ___ |
| /contact | ___  | ___  | ___ | ___ |

[VOEG TOE: screenshot Lighthouse SEO-rapport]
Extra: Google Rich Results Test, opengraph.xyz"""),

    ("3.4 Advies over de vindbaarheid", """1. Sitemap in Google Search Console + Bing
2. NEXT_PUBLIC_SITE_URL op productie
3. Blog voor long-tail keywords
4. Backlinks (dev.to, Product Hunt)
5. Alt-tekst bij nieuwe images
6. Product/Offer JSON-LD op pricing
7. Core Web Vitals monitoren
8. axe DevTools in CI"""),
]

PLACEHOLDER_STARTS = (
    "Beschrijf hier kort", "Leg uit welke technieken", "Laat zien dat je tijdig",
    "Hoe de gebruikerservaring", "Wat de feedback was", "Welke eventuele aanpassingen",
    "Voeg een link naar je repository", "Op basis van de klantwensen",
    "Beschrijf welke technieken je hebt gebruikt", "Plaats hier overzichtelijke screenshots",
    "Beschrijf hoe je de responsiviteit", "Beschrijf de specifieke eigenschappen",
    "Bewijs dat de vindbaarheid", "Laat zien hoe je de vindbaarheid",
    "Schrijf hier een kort, professioneel advies",
    "Semantische HTML tags.", "Meta descriptions en titels.", "Alt-attributen voor afbeeldingen.",
)


def is_placeholder(text: str) -> bool:
    t = text.strip()
    return bool(t) and any(t.startswith(p) for p in PLACEHOLDER_STARTS)


def set_text(p, text: str):
    for r in p.runs:
        r.text = ""
    if p.runs:
        p.runs[0].text = text
        p.runs[0].font.size = Pt(11)
    else:
        run = p.add_run(text)
        run.font.size = Pt(11)


def matches_heading(text: str, prefix: str) -> bool:
    return text.strip().startswith(prefix)


# Build index map for section headings (second occurrence = body, not TOC)
heading_indices: dict[str, int] = {}
for i, p in enumerate(doc.paragraphs):
    t = p.text.strip()
    for prefix, _ in SECTIONS:
        if matches_heading(t, prefix):
            if prefix in heading_indices:
                heading_indices[prefix] = i  # keep last (body section)
            else:
                heading_indices[prefix] = i

# Clear all placeholders first
for p in doc.paragraphs:
    if is_placeholder(p.text):
        set_text(p, "")

# Insert content after each section heading
for prefix, content in SECTIONS:
    idx = heading_indices.get(prefix)
    if idx is None:
        print(f"Missing: {prefix}")
        continue
    # Find first empty or placeholder paragraph after heading, or insert new
    inserted = False
    for j in range(idx + 1, min(idx + 8, len(doc.paragraphs))):
        t = doc.paragraphs[j].text.strip()
        if t.startswith(("1.", "2.", "3.", "Hoofdstuk")) and not matches_heading(t, prefix):
            break
        if not t:
            set_text(doc.paragraphs[j], content)
            inserted = True
            break
    if not inserted:
        # insert new paragraph after heading
        new_p = OxmlElement('w:p')
        doc.paragraphs[idx]._element.addnext(new_p)
        from docx.text.paragraph import Paragraph
        para = Paragraph(new_p, doc.paragraphs[idx]._parent)
        set_text(para, content)

doc.save(str(OUT))
print(f"Saved: {OUT}")
