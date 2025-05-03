export const styles = `
<style>
section.youtime *, section.youtime *::before, section.youtime *::after {
  box-sizing: border-box;
}

section.youtime * {
    padding: 0;
    margin: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
section.youtime {
    --youtime-bg: #1e2030;
    --youtime-fg: #cad3f5;
    --youtime-muted-fg: #6e738d;
    --youtime-card-bg: #24273a;
    --youtime-border-radius: 16px;
    --youtime-button-bg: #a6e3a1;
}

section.youtime {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--youtime-fg);
}
main.youtime {
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
h1.youtime {
    text-align: center;
    padding: 0;
    font-size: 100%;
}

textarea.youtime {
    flex: 1;
    resize: none;
    border: none;
    border-radius: var(--youtime-border-radius);
    padding: 2rem;
    background: var(--youtime-card-bg) !important;
    color: var(--youtime-fg) !important;
    width: 100%;
}

textarea.youtime::placeholder {
    color: var(--youtime-muted-fg);
}

textarea.youtime::focus {
    outline: none;
    border: none;
}

section.youtime button {
    background: var(--youtime-button-bg);
    color: var(--youtime-bg);
    border-radius: var(--youtime-border-radius);
    padding: 16px;
    border: none;
    width: 80%;
    cursor: pointer;
}
</style>
`;
