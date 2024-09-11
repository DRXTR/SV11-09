function speakDescription(button) {
    // Obter a descrição do prato a partir do atributo data-description
    const description = button.parentElement.getAttribute('data-description');
    
    // Verificar se a SpeechSynthesis API está disponível
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(description);
        window.speechSynthesis.speak(utterance);
    } else {
        alert('A API Speech Synthesis não é suportada neste navegador.');
    }
}
