document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Di na kuni padugayon pa,",
        "Happy Birthday Tita Jhona!",
        "Og salamat sa tanan",
        "Nga gihatag nimo namo.",
        "Gi higugma ka namo!"
    ];

    const delay = 101;
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                const charElement = document.createElement("span"); 
                charElement.textContent = char;
                charElement.style.animation = "glow 2s ease-in-out"; 
                lyricsElement.appendChild(charElement); 

                await new Promise((resolve) => setTimeout(resolve, delay));

                
                charElement.style.animation = "";
            }

            lyricsElement.appendChild(document.createElement("br")); 

            await new Promise((resolve) => setTimeout(resolve, delay * 4));

            lyricsElement.textContent = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 3));
        }

        setTimeout(function () {
            window.location.href = "card.html";
        }, 700);
    }
    
    displayLyrics();
});
