export const styles = `
<style>
@import url('https://fonts.cdnfonts.com/css/wotfard');
section.youtime *, section.youtime *::before, section.youtime *::after {
  box-sizing: border-box;
}

#youtime * {
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
#youtime * {
    --youtime-bg: linear-gradient(145deg, #1a1a1a, #111111);
    --youtime-fg: #cad3f5;
    --youtime-muted-fg: #6e738d;
    --youtime-card-bg: #24273a;
    --youtime-border-radius: 16px;
    --youtime-button-bg: #a6e3a1;
    --youtime-blur: blur(5px);
    --youtime-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05);
    --youtime-primary: linear-gradient(135deg, #ff4444, #cc1c1c);
    --youtime-shadow-primary: 0 4px 12px rgba(255, 68, 68, 0.3);
    --youtime-border: 1px solid rgba(255, 255, 255, 0.1);
    --youtime-border-focus: 1px solid #ff4444;
    --youtime-font-family: "Wotfard", sans-serif;
}

#youtime {
    align-items: center;
    backdrop-filter: var(--youtime-blur);
    background: rgba(0, 0, 0, 0.65);
    box-shadow: var(--youtime-shadow);
    color: var(--youtime-fg);
    display: flex;
    font-family: var(--youtime-font-family);
    height: 100%;
    justify-content: center;
    opacity: 1;
    position: fixed;
    transform: "scale(1)",
    transition: "opacity 0.3s ease-out transform 0.3s ease-out";
    width: 100%;
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
    gap: 12px
}

#youtime .badge {
    background: var(--youtime-primary);
    border-radius: var(--youtime-border-radius);
    color: var(--youtime-fg);
    font-weight: bold;
    letter-spacing: 0.5,
    boxShadow: var(--youtime-shadow-primary);
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
    minHeight: 140px;
    outline: none;
    padding: 16px;
    resize: vertical;
    transition: all 0.2s ease;
    width: 100%;
    font-size: 1.5rem;
}

#youtime textarea:focus {
    border: var(--youtime-border-focus);
    background: #2a2a2a
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(255, 68, 68, 0.2);
}

#youtime footer {
    padding: 20px 28px 28px;
    display: flex;
    justify-content: center;
    gap: 16px
}

#youtime button {
    padding: 12px 24px;
    border-radius: var(--youtime-border-radius);
    fontWeight: 500;
    cursor: pointer;
    border: none;
    transition: "all 0.2s ease";
    font-size: 1.5rem;
}

#youtime button:hover {
    transform: translateY(-1px);
}

#youtime button.primary {
    background: linear-gradient(135deg, #ff4444, #cc1c1c);
    color: white;
    box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3)
}

#youtime button.primary:hover {
    box-shadow: 0 6px 16px rgba(255, 68, 68, 0.4)
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
