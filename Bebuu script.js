// Hide header and show main content when "Please Enter" button is clicked
document.getElementById('enter-button').addEventListener('click', function() {
    document.querySelector('header').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});

// Show the selected content section
function showSection(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none'); // Hide all sections
    document.getElementById(section).style.display = 'block'; // Show the selected section
}

// Show the selected video
function showVideo(videoType) {
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    let videoPath = '';

    switch (videoType) {
        case 'dancing':
            videoPath = 'New folder/u_dancin.mp4'; // Update with your actual path
            break;
        case 'silly':
            videoPath = 'New folder/us_being_silly.mp4'; // Update with your actual path
            break;
        case 'hot':
            videoPath = 'New folder/u_being_hot.mp4'; // Update with your actual path
            break;
    }

    videoSource.src = videoPath;
    videoPlayer.load();
    videoPlayer.play();
    document.getElementById('video-content').style.display = 'block'; // Show video player
}

// Function to go back to the previous section
function goBack() {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.style.display = 'none'); // Hide all sections
    document.getElementById('message').style.display = 'block'; // Show default section
}

// Function to refresh the page and go back to the home screen
function goHome() {
    location.reload(); 
}
