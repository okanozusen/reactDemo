function App() {
    return (
        <div>
            <Person 
                name="Alexander" 
                age={20} 
                hobbies={['Reading', 'Swimming']} 
            />
            <Person 
                name="Tom" 
                age={17} 
                hobbies={['Gaming', 'Coding']} 
            />
            <Person 
                name="Charlotte" 
                age={25} 
                hobbies={['Hiking', 'Photography']} 
            />
        </div>
    );
}
