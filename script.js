document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById('greeting');
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const dateString = currentDate.toDateString();

    let greetingMessage;
    let gifUrl;

    // Tentukan greeting dan GIF berdasarkan waktu
    if (hours < 12) {
        greetingMessage = 'Good Morning!';
        gifUrl = 'https://i.pinimg.com/originals/3a/48/4b/3a484b2fc4131da6b73f5c76b429ef73.gif'; // Morning GIF
    } else if (hours < 18) {
        greetingMessage = 'Good Afternoon!';
        gifUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fclipart-library.com%2Fclipart%2Fanimated-gif-clipart-36.htm&psig=AOvVaw1o21rt9uXlTqYnoCfxsr8V&ust=1736268039071000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjSg9PE4YoDFQAAAAAdAAAAABAhhttps://clipart-library.com/2023/AcceptableImpureAxisdeer-size_restricted.gif'; // Afternoon GIF
    } else {
        greetingMessage = 'Good Night!';
        gifUrl = 'https://i.pinimg.com/originals/89/42/1c/89421c7c864aac1063c2581b99e65b5a.gif'; // Night GIF
    }

    // Tambahkan greeting message
    greetingElement.innerHTML = `<p>${greetingMessage} Today is ${dateString}.</p>`;

    // Tambahkan GIF ke halaman
    const gifElement = document.createElement('img');
    gifElement.src = gifUrl;
    gifElement.alt = `${greetingMessage} GIF`;
    gifElement.style.width = '50%'; // Sesuaikan ukuran
    gifElement.style.maxWidth = '200px'; // Maksimal ukuran
    gifElement.style.marginTop = '10px';

    greetingElement.appendChild(gifElement);
});
