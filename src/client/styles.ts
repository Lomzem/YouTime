export const styles = `
<style>
@import url('https://fonts.cdnfonts.com/css/wotfard');

section.youtime *,
section.youtime *::before,
section.youtime *::after {
    box-sizing: border-box;
}

#youtime * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

#youtime {
    /* CSS Variables */
    --youtime-bg: linear-gradient(145deg, #1a1a1a, #111111);
    --youtime-fg: #cad3f5;
    --youtime-muted-fg: #6e738d;
    --youtime-card-bg: #24273a;
    --youtime-button-bg: #a6e3a1;
    --youtime-primary: linear-gradient(135deg, #ff4444, #cc1c1c);
    --youtime-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05);
    --youtime-shadow-primary: 0 4px 12px rgba(255, 68, 68, 0.3);
    --youtime-border: 1px solid rgba(255, 255, 255, 0.1);
    --youtime-border-focus: 1px solid #ff4444;
    --youtime-border-radius: 16px;
    --youtime-blur: blur(5px);
    --youtime-font-family: "Wotfard", sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: var(--youtime-blur);
    color: var(--youtime-fg);
    font-family: var(--youtime-font-family);
    box-shadow: var(--youtime-shadow);
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    z-index: 999999999;
}

#youtime main {
    width: 50dvh;
    height: 50dvh;
    background: var(--youtime-bg);
    border-radius: var(--youtime-border-radius);
    padding: 16px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

#youtime header {
    padding: 24px 28px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
}

#youtime .badge {
    background: var(--youtime-primary);
    border-radius: var(--youtime-border-radius);
    color: var(--youtime-fg); /* Consider using a contrasting color like white */
    font-weight: bold;
    letter-spacing: 0.5px;
    box-shadow: var(--youtime-shadow-primary);
    padding: 8px 16px;
    font-size: 1.5rem;
}

#youtime h3 {
    font-weight: 600;
    font-size: 2rem;
    color: var(--youtime-fg);
}

#youtime textarea {
    background: #2a2a2a;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: var(--youtime-border-radius);
    border: var(--youtime-border);
    color: var(--youtime-fg);
    font-family: inherit;
    line-height: 1.5;
    min-height: 140px;
    outline: none;
    padding: 16px;
    resize: vertical;
    transition: all 0.2s ease;
    width: 100%;
    font-size: 1.5rem;
}

#youtime textarea:focus {
    border: var(--youtime-border-focus);
    /* background: #2a2a2a; */
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(255, 68, 68, 0.2);
}

#youtime footer {
    padding: 20px 28px 28px;
    display: flex;
    justify-content: center;
    gap: 16px;
}

#youtime button {
    padding: 12px 24px;
    border-radius: var(--youtime-border-radius);
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
    font-size: 1.5rem;
}

#youtime button:hover {
    transform: translateY(-1px);
}

#youtime button.primary {
    background: var(--youtime-primary);
    color: white;
    box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3);
}

#youtime button.primary:hover {
    box-shadow: 0 6px 16px rgba(255, 68, 68, 0.4);
}

#youtime button.outline {
    background: rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
}

#youtime button.outline:hover {
    background: rgba(255, 255, 255, 0.15);
}
</style>
`;
