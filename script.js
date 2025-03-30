document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Ajouter un message de bienvenue initial
    addMessage('Bienvenue sur Orian Beta v1. Comment puis-je vous aider?', 'ai');

    // Gestionnaire d'envoi de message
    function handleSend() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userInput.value = '';
            simulateAIResponse(message);
        }
    }

    // Écouteurs d'événements
    sendBtn.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    // Ajouter un message au chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Simuler une réponse de l'IA
    function simulateAIResponse(userMessage) {
        // Afficher l'indicateur de saisie
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'ai-message', 'typing-indicator');
        typingIndicator.innerHTML = '<span></span><span></span><span></span>';
        chatContainer.appendChild(typingIndicator);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Simuler un délai de traitement
        setTimeout(() => {
            // Supprimer l'indicateur
            typingIndicator.remove();

            // Générer une réponse simulée
            const responses = [
                `J'ai analysé votre demande : "${userMessage}"`,
                'Les agents spécialisés traitent votre requête...',
                'Voici ce que notre système multi-agents propose :',
                'Cette réponse a été validée par 4 agents sur 5'
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'ai');
        }, 1500 + Math.random() * 2000);
    }
});