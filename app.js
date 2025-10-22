document.addEventListener('DOMContentLoaded', () => {


    const xOffset = document.getElementById('x-offset');
    const yOffset = document.getElementById('y-offset');
    const blurRadius = document.getElementById('blur-radius');
    const spreadRadius = document.getElementById('spread-radius');
    const shadowColor = document.getElementById('shadow-color');
    const insetShadow = document.getElementById('inset-shadow');

    const previewBox = document.getElementById('preview-box');
    const resultCode = document.getElementById('result-code');
    const copyButton = document.getElementById('copy-btn');

    const inputs = [xOffset, yOffset, blurRadius, spreadRadius, shadowColor, insetShadow];


    function generateShadow() {
        const x = xOffset.value;
        const y = yOffset.value;
        const blur = blurRadius.value;
        const spread = spreadRadius.value;
        const color = shadowColor.value;
        
        const inset = insetShadow.checked ? 'inset ' : '';

        const shadowString = `${inset}${x}px ${y}px ${blur}px ${spread}px ${color}`;


        previewBox.style.boxShadow = shadowString;

        resultCode.value = `box-shadow: ${shadowString};`;
    }


    inputs.forEach(input => {
        input.addEventListener('input', generateShadow);
    });

    copyButton.addEventListener('click', () => {
        resultCode.select(); 
        navigator.clipboard.writeText(resultCode.value); 

        copyButton.textContent = 'Скопійовано!';
        setTimeout(() => {
            copyButton.textContent = 'Копіювати код';
        }, 1500);
    });

    generateShadow();
});