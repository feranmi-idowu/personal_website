document.addEventListener("DOMContentLoaded", function() {
    const slackName = "babyDev";
    const slackEmail = "Idowuferanmi4@gmail.com";
    const slackProfilePic = "profile.jpg";
    document.getElementById("slack-name").textContent = slackName;
    document.getElementById("slack-email").textContent = slackEmail;
    document.getElementById("slack-profile-picture").src = slackProfilePic;

    function updateTime() {
        const now = new Date();
        const TimeInUtc = now.toUTCString().split(' ')[4];
        const currentDay = now.toLocaleString('en-US', { weekday: 'long' });
        
        document.getElementById("current-time").textContent = TimeInUtc;
        document.getElementById("current-day").textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
