function GameDescription() {
    try {
        return (
            <section data-name="game-description" className="max-w-4xl mx-auto p-4 my-8">
                <div data-name="game-details" className="game-container p-6">
                    <h2 data-name="about-heading" className="text-2xl font-bold mb-4">About the Game</h2>
                    <p data-name="about-text" className="text-gray-700 mb-6">
                        Bru & Boegie: Get Da Milk is a delightful adventure game that follows two inseparable friends on their quest to find milk. Navigate through challenging levels, solve puzzles, and experience their friendship-filled journey.
                    </p>

                    <h2 data-name="features-heading" className="text-2xl font-bold mb-4">Key Features</h2>
                    <ul data-name="features-list" className="list-disc list-inside text-gray-700 mb-6">
                        <li>Engaging storyline with charming characters</li>
                        <li>Intuitive controls and gameplay mechanics</li>
                        <li>Beautiful graphics and animations</li>
                        <li>Fun puzzles and challenges</li>
                        <li>Suitable for all ages</li>
                    </ul>

                    <h2 data-name="how-to-heading" className="text-2xl font-bold mb-4">How to Play</h2>
                    <p data-name="how-to-text" className="text-gray-700">
                        Use your keyboard to control the characters and help them navigate through various obstacles. Work together with your friend to overcome challenges and find the precious milk! The game automatically saves your progress as you play.
                    </p>
                </div>
            </section>
        );
    } catch (error) {
        console.error('GameDescription component error:', error);
        reportError(error);
        return null;
    }
}
