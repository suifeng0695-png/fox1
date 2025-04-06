function GameFrame() {
    try {
        return (
            <div data-name="game-frame-container" className="game-container max-w-4xl mx-auto p-4 my-8">
                <div data-name="game-frame-wrapper" className="relative w-full" style={{ paddingBottom: '75%' }}>
                    <iframe
                        data-name="game-iframe"
                        src="https://mikdog.itch.io/bru-boegie-get-da-milk"
                        className="game-frame absolute top-0 left-0 w-full h-full"
                        allowFullScreen
                        title="Bru & Boegie: Get Da Milk"
                    ></iframe>
                </div>
            </div>
        );
    } catch (error) {
        console.error('GameFrame component error:', error);
        reportError(error);
        return null;
    }
}
