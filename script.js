const projectData = {
    jupiter: {
        title: "Intelligent Patient Discharge Assistant",
        theme: "#f59e0b",
        icon: "🏥",
        goal: "To build a multimodal AI system that transforms complex clinical discharge summaries into accessible, patient-friendly content — breaking down medical jargon, recognising handwritten doctor notes, and generating audio summaries so patients can truly understand their own care.",
        architecture: "The pipeline ingests patient discharge documents and applies OCR + handwriting recognition to extract doctor notes. An NLP layer (transformer-based) then simplifies clinical language into plain, easy-to-understand explanations tailored for a non-medical audience. A text-to-speech module generates audio output of the summary. Additional features include medication reminders, follow-up instruction extraction, and a Q&A interface for patient queries.",
        tech: ["NLP", "OCR", "Hugging Face", "Text-to-Speech", "Python", "FastAPI", "Transformers", "Clinical AI"],
        github: "#"
    },
    emotion: {
        title: "Emotion-Aware AI Narration System",
        theme: "#a855f7",
        icon: "🧠",
        goal: "To develop an intelligent storytelling platform capable of dynamically shifting narrative tone, vocabulary, and pacing based on the emotional context or user's emotional state.",
        architecture: "The system integrates real-time sentiment analysis and emotion classification using Transformer-based NLP models. The parsed emotional state acts as a conditioning parameter for a Generative Language Model, which iteratively synthesizes narrative text to align with the desired affective resonance.",
        tech: ["NLP", "Generative AI", "Transformers", "Python", "Sentiment Analysis"],
        github: "#"
    },
    ulcer: {
        title: "Diabetic Foot Ulcer Classification",
        theme: "#2dd4bf",
        icon: "🩺",
        goal: "To build a highly accurate, clinical-grade image classification pipeline that not only detects diabetic foot ulcers but also provides model explainability to build trust among medical professionals.",
        architecture: "Leveraging Transfer Learning with EfficientNet-B0 implemented via PyTorch. The model incorporates explainable AI (XAI) techniques like Grad-CAM++ to generate heatmaps highlighting the exact regions contributing to the classification decision. Deployed end-to-end with FastAPI and Streamlit.",
        tech: ["Computer Vision", "PyTorch", "EfficientNet-B0", "Grad-CAM++", "FastAPI", "Streamlit", "Deep Learning"],
        github: "https://github.com/disha-p23"
    },
    ecg: {
        title: "ECG Anomaly Detection",
        theme: "#e11d48",
        icon: "❤️",
        goal: "To perform continuous, autonomous monitoring of sensor-simulated heartbeat data, with the ability to instantly detect subtle morphological anomalies that may indicate cardiac arrhythmias.",
        architecture: "A sophisticated time-series analysis pipeline processing streaming sensor signals. Utilises a Convolutional Autoencoder trained on the MIT-BIH dataset. Normal heartbeats are learned during training; anomalies are flagged during inference based on reconstruction error thresholds, achieving a false positive rate of just 1.17%.",
        tech: ["Time-Series Analysis", "Signal Processing", "Convolutional Autoencoder", "PyTorch", "Python", "MIT-BIH Dataset"],
        github: "https://github.com/disha-p23"
    },
    chatbot: {
        title: "Healthcare Transformer Chatbot",
        theme: "#38bdf8",
        icon: "💬",
        goal: "To achieve a fundamental understanding of Large Language Models by designing, training, and evaluating a domain-specific conversational AI from complete scratch — without proprietary APIs or pre-trained layers.",
        architecture: "An end-to-end custom Decoder-only Transformer written in PyTorch. The pipeline includes a custom word-level tokenizer, absolute Positional Encoding, Multi-Head Self-Attention, and Feed-Forward networks. Training loss dropped from 5.06 to 0.26 on an independently curated healthcare dataset.",
        tech: ["PyTorch", "Transformer Architecture", "Self-Attention", "Tokenization", "NLP", "Healthcare Data"],
        github: "https://github.com/disha-p23"
    }
};

const cards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const closeBtn = document.querySelector('.close-btn');

const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalGoal = document.getElementById('modal-goal');
const modalArchitecture = document.getElementById('modal-architecture');
const modalTech = document.getElementById('modal-tech');
const modalContentBox = document.querySelector('.modal-content');
const modalGithubLink = document.getElementById('modal-github-link');

function populateModal(data) {
    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.title;
    modalTitle.style.color = data.theme;
    modalGoal.textContent = data.goal;
    modalArchitecture.textContent = data.architecture;
    modalContentBox.style.borderTopColor = data.theme;

    modalTech.innerHTML = '';
    data.tech.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = tag;
        span.style.borderColor = data.theme;
        modalTech.appendChild(span);
    });

    if (data.github && data.github !== '#') {
        modalGithubLink.href = data.github;
        modalGithubLink.style.display = 'inline-block';
    } else {
        modalGithubLink.style.display = 'none';
    }
}

function openModal(projectId) {
    const data = projectData[projectId];
    if (data) {
        populateModal(data);
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openModal(projectId);
    });
});

closeBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
