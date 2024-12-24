function Person({ name, age, hobbies }) {
    const displayName = name.length > 8 ? name.slice(0, 6) : name;
    const voteMessage = age >= 18 ? "please go vote!" : "you must be 18.";

    return (
        <div className="person">
            <h2>{displayName}</h2>
            <p>Age: {age}</p>
            <h4>{voteMessage}</h4>
            <ul>
                {hobbies.map(hobby => (
                    <li key={hobby}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}
