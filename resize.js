const desktop = document.getElementById("Desktop1");

// Function to get numerical values from style properties
const getNumericalStyle = (element, styleProperty) => {
    const styleValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
    return parseFloat(styleValue);
};

// Function to set styles based on parent dimensions
const setRelativeStyles = (element, parentWidth, parentHeight) => {
    const width = getNumericalStyle(element, 'width');
    const height = getNumericalStyle(element, 'height');
    const left = getNumericalStyle(element, 'left');
    const top = getNumericalStyle(element, 'top');
    const fontSize = getNumericalStyle(element, 'font-size');
    const newFontSize = fontSize * (window.innerWidth / parentWidth);
    element.style.fontSize = `${newFontSize}px`;
    element.style.width = `${width / parentWidth * 100}vw`;
    element.style.height = `${height / parentHeight * 100}vh`;
    element.style.left = `${left / parentWidth * 100}vw`;
    element.style.top = `${top / parentHeight * 100}vh`;
    
};

const desktopWidth = desktop.clientWidth; // or use getNumericalStyle(desktop, 'width');
const desktopHeight = desktop.clientHeight; // or use getNumericalStyle(desktop, 'height');
desktop.style.height = '100vh';
desktop.style.width = '100vw';

const childrenOfTypeHTMLElement = Array.from(desktop.children).filter(element => element instanceof HTMLElement);

const resize = () => {
    // Loop through child nodes of desktop and set relative styles
    Array.from(desktop.children).filter(element => element instanceof HTMLElement).
    forEach((item, i) => {
        setRelativeStyles(item, desktopWidth, desktopHeight);
    });
};
resize();
/*
const amber_name = document.getElementById("AmberSmith");
const avatar = document.getElementById("GenericAvatar");
const amber = () => {
    const width = getNumericalStyle(amber_name, 'width');
    const height = getNumericalStyle(amber_name, 'height');
    const left = getNumericalStyle(amber_name, 'left');
    const top = getNumericalStyle(amber_name, 'top');
    const avatar_width = getNumericalStyle(avatar, 'width');
    const avatar_left = getNumericalStyle(avatar, 'left');
    amber_name.style.left = `${avatar_width / 2 - width / 2 + avatar_left}px`;
}
if (amber_name && avatar)
    amber();
*/