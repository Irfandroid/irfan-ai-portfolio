from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer


OUTPUT = Path("output/pdf/muhamad-irfan-afriyansyah-cv-ats.pdf")


def p(text, style):
    return Paragraph(escape(text).replace("\n", "<br/>") if "<" not in text else text, style)


styles = getSampleStyleSheet()
name = ParagraphStyle(
    "Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=19,
    leading=23, alignment=TA_LEFT, textColor="#111111", spaceAfter=4,
)
headline = ParagraphStyle(
    "Headline", parent=styles["Normal"], fontName="Helvetica", fontSize=10.5,
    leading=14, alignment=TA_LEFT, textColor="#222222", spaceAfter=5,
)
contact = ParagraphStyle(
    "Contact", parent=headline, fontSize=9, leading=12, textColor="#222222",
    spaceAfter=11,
)
section = ParagraphStyle(
    "Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=10.5,
    leading=13, textColor="#111111", spaceBefore=8, spaceAfter=4,
    uppercase=True,
)
body = ParagraphStyle(
    "Body", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.2,
    leading=12.5, textColor="#222222", spaceAfter=3,
)
role = ParagraphStyle(
    "Role", parent=body, fontName="Helvetica-Bold", fontSize=9.5,
    leading=12.5, spaceAfter=1,
)
meta = ParagraphStyle(
    "Meta", parent=body, fontName="Helvetica-Oblique", fontSize=8.7,
    leading=11, textColor="#555555", spaceAfter=2,
)
bullet = ParagraphStyle(
    "Bullet", parent=body, leftIndent=11, firstLineIndent=-8, spaceAfter=2,
)
small = ParagraphStyle(
    "Small", parent=body, fontSize=8.5, leading=11, textColor="#444444",
)


story = [
    Paragraph("Muhamad Irfan Afriyansyah", name),
    Paragraph("AI Engineer | Retrieval Systems | LLM Applications", headline),
    Paragraph(
        "Tangerang, Indonesia | mirfana141@gmail.com | linkedin.com/in/muhirfanaf | github.com/Irfandroid | irfandroid.vercel.app",
        contact,
    ),
    Paragraph("Professional Summary", section),
    p(
        "AI Engineer focused on RAG, retrieval systems, LLM applications, evaluation, and reliable AI systems. Builds inspectable applications that connect data, vector retrieval, APIs, structured generation, testing, and fallback behavior. Transitioning from data annotation and machine learning training into AI engineering, with Qalbu as the primary case study. Interested in AI Engineer, LLM Engineer, and GenAI Engineer roles.",
        body,
    ),
    Paragraph("Technical Skills", section),
    p("AI / ML: Python, machine learning, retrieval-augmented generation (RAG), retrieval systems, embeddings, vector search, evaluation\nEngineering: FastAPI, REST APIs, Git, testing, Server-Sent Events (SSE)\nReliability: safety boundaries, provenance and citation validation, quality gates, fallback handling, technical documentation\nTools: Supabase pgvector, Jina embeddings (768 dimensions), Gemini structured JSON, Pytest", body),
    Paragraph("Professional Experience", section),
    KeepTogether([
        p("Machine Learning Intern | FlyRank AI", role),
        p("June 2026 - Present | Remote", meta),
    ]),
    KeepTogether([
        p("Data Annotator | Thoth AI", role),
        p("June 2025 - Present | Jakarta, Indonesia | On-site", meta),
    ]),
    KeepTogether([
        p("Robotics Trainer | PT. Racer Robotics Indonesia", role),
        p("October 2022 - April 2023 | South Tangerang, Banten, Indonesia", meta),
    ]),
    Paragraph("Featured Project", section),
    KeepTogether([
        p("Qalbu - Indonesian Quran Reflection Chat", role),
        p("Personal project | Work in progress | Python, FastAPI, RAG, Jina embeddings, Gemini | github.com/Irfandroid/qalbu-rag", meta),
        p("- Implemented 768-dimensional Jina retrieval with a documented 0.32 cosine threshold, parent-level deduplication capped at four sources, citation and quality gates, and sources-only fallbacks when evidence is insufficient.", bullet),
        p("- Repository includes 52 Pytest test functions covering safety, retrieval, citations, response quality, API behavior, providers, and frontend history.", bullet),
        p("- Uses the active qalbu-seed-v1 corpus with provenance from the LPMQ Ministry of Religious Affairs portal; indexing and runtime are aligned at 768 dimensions.", bullet),
    ]),
    Paragraph("Education", section),
    p("Bachelor's Degree in Computer Programming | Universitas Pamulang", role),
    p("January 2019 - May 2024 | GPA: 3.51", meta),
    Paragraph("Certifications", section),
    p("AI for Gen Y / Magang Studi Independen Bersertifikat - Orbit Future Academy; AWS re/Start Batch 10 - Orbit Future Academy; Alibaba Cloud Platform for AI (PAI); Model Studio Fundamentals; The Large World of Language Models; Machine Learning Developer - Digital Talent Scholarship; Data Analysis Using Python - IBM; Data Visualization Using Python - IBM.", body),
]


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColorRGB(0.4, 0.4, 0.4)
    canvas.drawString(0.62 * inch, 0.38 * inch, "Muhamad Irfan Afriyansyah - AI Engineer")
    canvas.drawRightString(A4[0] - 0.62 * inch, 0.38 * inch, f"Page {doc.page}")
    canvas.restoreState()


OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4, rightMargin=0.62 * inch, leftMargin=0.62 * inch,
    topMargin=0.52 * inch, bottomMargin=0.58 * inch, title="Muhamad Irfan Afriyansyah - ATS CV",
    author="Muhamad Irfan Afriyansyah",
)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
