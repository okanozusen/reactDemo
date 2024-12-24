function App() {
    return (
        <div>
            <Tweet 
                username="johndoe" 
                name="John Doe" 
                date="Dec 24, 2024" 
                message="Hello Twitter! This is my first tweet." 
            />
            <Tweet 
                username="janedoe" 
                name="Jane Doe" 
                date="Dec 23, 2024" 
                message="React is awesome! 🚀" 
            />
            <Tweet 
                username="bobsmith" 
                name="Bob Smith" 
                date="Dec 22, 2024" 
                message="Learning React every day!" 
            />
        </div>
    );
}
