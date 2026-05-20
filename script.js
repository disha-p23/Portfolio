const projectData = {
    emotion: {
        title: "Emotion-Aware AI Narration System",
        icon: "🧠",
        theme: "#a855f7",
        goal: "To develop an intelligent storytelling platform capable of dynamically shifting narrative tone, vocabulary, and pacing based on the emotional context or user's emotional state.",
        architecture: "The system integrates real-time sentiment analysis and emotion classification using Transformer-based NLP models. The parsed emotional state acts as a conditioning parameter for a Generative Language Model, which iteratively synthesizes narrative text to align with the desired affective resonance.",
        tech: ["NLP", "Generative AI", "Transformers", "Python", "Sentiment Analysis"]
    },
    ulcer: {
        title: "Diabetic Foot Ulcer Classification",
        icon: "🩺",
        theme: "#2dd4bf",
        goal: "To build a highly accurate, clinical-grade image classification pipeline that not only detects diabetic foot ulcers but also provides model explainability to build trust among medical professionals.",
        architecture: "Leveraging Transfer Learning (e.g., ResNet/EfficientNet frameworks) implemented via PyTorch. Crucially, the model incorporates explainable AI (XAI) techniques like Grad-CAM to generate heatmaps highlighting the exact regions of the image contributing to the classification decision.",
        tech: ["Computer Vision", "PyTorch", "Grad-CAM", "Deep Learning", "Bio-informatics"]
    },
    ecg: {
        title: "ECG Anomaly Detection",
        icon: "❤️",
        theme: "#e11d48",
        goal: "To perform continuous, autonomous monitoring of sensor-simulated heartbeat data, with the ability to instantly detect subtle morphological anomalies that may indicate cardiac arrhythmias.",
        architecture: "A sophisticated time-series analysis pipeline processing streaming sensor signals. The model utilizes sequential deep learning architectures (like LSTMs or 1D CNNs) and Autoencoders. Normal heartbeats are 'learned' during training, and anomalies are identified during inference based on higher reconstruction errors.",
        tech: ["Time-Series Analysis", "Signal Processing", "Autoencoders", "LSTM", "Python"]
    },
    chatbot: {
        title: "Custom Transformer Chatbot",
        icon: "💬",
        theme: "#38bdf8",
        goal: "To achieve a fundamental understanding of Large Language Models by designing, training, and evaluating a domain-specific conversational AI starting from complete scratch, without invoking proprietary APIs or pre-trained layers.",
        architecture: "An end-to-end custom Decoder-only Transformer neural network written in PyTorch. The architectural pipeline includes a custom word-level tokenizer, absolute Positional Encoding, Multi-Head Self-Attention mechanisms, and Feed-Forward networks. The dataset was curated independently.",
        tech: ["PyTorch", "Transformer Architecture", "Self-Attention", "Tokenization", "NLP"]
    }
};

const cards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const closeBtn = document.querySelector('.close-btn');

// Modal Elements
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalGoal = document.getElementById('modal-goal');
const modalArchitecture = document.getElementById('modal-architecture');
const modalTech = document.getElementById('modal-tech');
const modalContentBox = document.querySelector('.modal-content');

function populateModal(data) {
    modalIcon.textContent = data.icon;
    modalTitle.textContent = data.title;
    modalTitle.style.color = data.theme;
    modalGoal.textContent = data.goal;
    modalArchitecture.textContent = data.architecture;

    // Set border color dynamically matching theme
    modalContentBox.style.borderTopColor = data.theme;

    // Reset and build tech tags
    modalTech.innerHTML = '';
    data.tech.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = tag;
        // subtle highlight color
        span.style.borderColor = data.theme;
        modalTech.appendChild(span);
    });
}

function openModal(projectId) {
    const data = projectData[projectId];
    if (data) {
        populateModal(data);
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling in background
    }
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Event Listeners
cards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openModal(projectId);
    });
});

closeBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
