function Tweet({ username, name, date, message }) {
    return (
        <div className="tweet">
            <h3>@{username}</h3>
            <p>{message}</p>
            <p><i>- {name}, {date}</i></p>
        </div>
    );
}
