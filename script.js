const projectData = {
    jupiter: {
        title: "Intelligent Patient Discharge Assistant",
        theme: "#f59e0b",
        goal: "To build a multimodal AI system that transforms complex clinical discharge summaries into accessible, patient-friendly content — breaking down medical jargon, recognising handwritten doctor notes, and generating audio summaries so patients can truly understand their own care.",
        architecture: "The pipeline ingests patient discharge documents and applies OCR + handwriting recognition to extract doctor notes. An NLP layer (transformer-based) then simplifies clinical language into plain explanations. A text-to-speech module generates audio output of the summary. Additional features include medication reminders, follow-up instruction extraction, and a Q&A interface for patient queries.",
        tech: ["NLP", "OCR", "Hugging Face", "Text-to-Speech", "Python", "FastAPI", "Transformers"],
        github: "#"
    },
    emotion: {
        title: "Emotion-Aware AI Narration System",
        theme: "#a855f7",
        goal: "To develop an intelligent storytelling platform capable of dynamically shifting narrative tone, vocabulary, and pacing based on the emotional context or user's emotional state.",
        architecture: "Real-time sentiment analysis and emotion classification using Transformer-based NLP models. The parsed emotional state conditions a Generative Language Model, which synthesizes narrative text aligned with the detected affective state.",
        tech: ["NLP", "Generative AI", "Transformers", "Python", "Sentiment Analysis"],
        github: "#"
    },
    ulcer: {
        title: "Diabetic Foot Ulcer Classification",
        theme: "#2dd4bf",
        goal: "To build a highly accurate image classification pipeline that provides model explainability via Grad-CAM++ heatmaps — highlighting exactly which regions drive the classification decision.",
        architecture: "Transfer Learning with EfficientNet-B0 in PyTorch. Explainability via Grad-CAM++ visual heatmaps. Automated report generation included. Deployed end-to-end with FastAPI and Streamlit.",
        tech: ["Computer Vision", "PyTorch", "EfficientNet-B0", "Grad-CAM++", "FastAPI", "Streamlit", "Deep Learning"],
        github: "https://github.com/disha-p23"
    },
    ecg: {
        title: "ECG Anomaly Detection",
        theme: "#e11d48",
        goal: "To perform continuous, autonomous monitoring of sensor-simulated heartbeat data, detecting subtle morphological anomalies that indicate cardiac arrhythmias — with a false positive rate under 2%.",
        architecture: "A time-series pipeline processing streaming sensor signals via a Convolutional Autoencoder trained on the MIT-BIH dataset. Normal heartbeats are learned during training; anomalies are flagged at inference based on reconstruction error thresholds.",
        tech: ["Time-Series Analysis", "Signal Processing", "Convolutional Autoencoder", "PyTorch", "Python"],
        github: "https://github.com/disha-p23"
    },
    chatbot: {
        title: "Custom Transformer Chatbot",
        theme: "#38bdf8",
        goal: "To build a ground-up understanding of LLMs by designing and training a conversational AI entirely from scratch — no proprietary APIs, no pre-trained layers.",
        architecture: "End-to-end custom Decoder-only Transformer in PyTorch — custom word-level tokenizer, absolute Positional Encoding, Multi-Head Self-Attention, and Feed-Forward networks. Training loss dropped from 5.06 to 0.26.",
        tech: ["PyTorch", "Transformer Architecture", "Self-Attention", "Tokenization", "NLP"],
        github: "https://github.com/disha-p23"
    }
};

const cards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const closeBtn = document.querySelector('.close-btn');

const modalTitle = document.getElementById('modal-title');
const modalGoal = document.getElementById('modal-goal');
const modalArchitecture = document.getElementById('modal-architecture');
const modalTech = document.getElementById('modal-tech');
const modalContentBox = document.querySelector('.modal-content');
const modalGithubLink = document.getElementById('modal-github-link');

function populateModal(data) {
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
        openModal(card.getAttribute('data-project'));
    });
});

closeBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
