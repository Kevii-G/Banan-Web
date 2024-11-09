document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.getElementById("O-mne-toggler-1");
    const btn2 = document.getElementById("O-mne-toggler-2");
    const text1 = document.getElementById("toggle-1");
    const text2 = document.getElementById("toggle-2");

    btn1.addEventListener("click", () => {
        text1.style.display = "block"; // Show text1
        text2.style.display = "none";   // Hide text2
        btn1.classList.add("active");   // Set button 1 active
        btn2.classList.remove("active"); // Remove active from button 2
    });

    btn2.addEventListener("click", () => {
        text1.style.display = "none";   // Hide text1
        text2.style.display = "block";   // Show text2
        btn2.classList.add("active");    // Set button 2 active
        btn1.classList.remove("active"); // Remove active from button 1
    });

    // Initialize to show the text for button 1
    text2.style.display = "none"; // Ensure text2 is hidden by default
});