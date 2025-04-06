function App() {
    try {
        return (
            <div data-name="app-container" className="min-h-screen">
                <Header />
                <GameFrame />
                <GameDescription />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
