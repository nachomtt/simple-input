document.addEventListener('DOMContentLoaded', function() {
    const configButton = document.getElementById('configButton');
    const configMenu = document.getElementById('configMenu');
    const textArea = document.getElementById('textArea');
    const fontSizeInput = document.getElementById('fontSize');
    const fontColorInput = document.getElementById('fontColor');
    const navbarColorInput = document.getElementById('navbarColor');
    const navbar = document.getElementById("navbar")
    const textareaBgColorInput = document.getElementById('textareaBgColor');
    const textareaBorderColorInput = document.getElementById('textareaBorderColor');
    const bodyBgColorInput = document.getElementById('bodyBgColor');
    const resetButton = document.getElementById('resetButton');


    // Load saved settings
    const savedFontSize = localStorage.getItem('fontSize');
    const savedFontColor = localStorage.getItem('fontColor');
    const savedNavbarColor = localStorage.getItem("navbarColor");
    const savedTextareaBgColor = localStorage.getItem('textareaBgColor');
    const savedTextareaBorderColor = localStorage.getItem('textareaBorderColor');
    const savedBodyBgColor = localStorage.getItem('bodyBgColor');

    if (savedFontSize) {
        textArea.style.fontSize = `${savedFontSize}px`;
        fontSizeInput.value = savedFontSize;
    }
    if (savedFontColor) {
        textArea.style.color = savedFontColor;
        fontColorInput.value = savedFontColor;
    }

    if (savedNavbarColor) {
        navbar.style.backgroundColor = savedNavbarColor;
        navbarColorInput.value = savedNavbarColor;
    }

    if (savedTextareaBgColor) {
        textArea.style.backgroundColor = savedTextareaBgColor;
        textareaBgColorInput.value = savedTextareaBgColor;
    }

    if (savedTextareaBorderColor) {
        textArea.style.borderColor = savedTextareaBorderColor;
        textareaBorderColorInput.value = savedTextareaBorderColor;
    }

    if (savedBodyBgColor) {
        document.body.style.backgroundColor = savedBodyBgColor;
        bodyBgColorInput.value = savedBodyBgColor;
    }

    // Toggle config menu visibility
    configButton.addEventListener('click', function() {
        configMenu.classList.toggle('hidden');
    });

    // Update font size
    fontSizeInput.addEventListener('input', function() {
        const fontSize = fontSizeInput.value;
        textArea.style.fontSize = `${fontSize}px`;
        localStorage.setItem('fontSize', fontSize);
    });

    fontColorInput.addEventListener('input', function() {
        const color = fontColorInput.value;
        textArea.style.color = color;
        localStorage.setItem('fontColor', color);
    });

    navbarColorInput.addEventListener('input', function() {
        const color = navbarColorInput.value;
        navbar.style.backgroundColor = color;
        localStorage.setItem('navbarColor', color);
    });

    // Update textarea background color
    textareaBgColorInput.addEventListener('input', function() {
        const color = textareaBgColorInput.value;
        textArea.style.backgroundColor = color;
        localStorage.setItem('textareaBgColor', color);
    });

    textareaBorderColorInput.addEventListener('input', function() {
        const color = textareaBorderColorInput.value;
        textArea.style.borderColor = color;
        localStorage.setItem('textareaBorderColor', color);
    });



    // Update page background color
    bodyBgColorInput.addEventListener('input', function() {
        const color = bodyBgColorInput.value;
        document.body.style.backgroundColor = color;
        localStorage.setItem('bodyBgColor', color);
    });

    // Reset settings to default
    resetButton.addEventListener('click', function() {
        localStorage.removeItem('fontSize');
        localStorage.removeItem('fontColor');
        localStorage.removeItem('navbarColor');
        localStorage.removeItem('textareaBgColor');
        localStorage.removeItem('textareaBorderColor');
        localStorage.removeItem('bodyBgColor');

        textArea.style.fontSize = 'xx-large';
        textArea.style.color = '#000000';
        navbar.style.backgroundColor = "#121212"
        textArea.style.backgroundColor = 'rgb(186, 186, 186)';
        textArea.style.borderColor = 'orange';
        document.body.style.backgroundColor = 'rgb(13, 13, 13)';

        fontSizeInput.value = '';
        fontColorInput.value = '#000000';
        navbarColorInput.value = '#121212'
        textareaBgColorInput.value = '#bababa';
        textareaBorderColorInput.value = '#ffa500';
        bodyBgColorInput.value = '#0d0d0d';
    });
});
