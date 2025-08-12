let lastframe: DOMHighResTimeStamp = performance.now();
const gameLoop = () => {
    const currentframe: DOMHighResTimeStamp = performance.now();
 
    window.frametime = currentframe - lastframe;
    window.deltatime = window.frametime * 0.001;

    requestAnimationFrame(gameLoop);
};

gameLoop();