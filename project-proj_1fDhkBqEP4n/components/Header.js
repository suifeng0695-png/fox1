function Header() {
    try {
        return (
            <header data-name="header" className="text-center py-8 px-4">
                <h1 data-name="game-title" className="game-title text-4xl md:text-5xl font-bold mb-4">
                    Bru & Boegie: Get Da Milk
                </h1>
                <p data-name="game-tagline" className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Join two adorable friends on their exciting quest to find milk in this charming adventure game!
                </p>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
