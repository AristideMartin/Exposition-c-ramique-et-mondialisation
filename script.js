
// Shared JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Track exhibition progress
    const trackProgress = () => {
        const currentPage = window.location.pathname.split('/').pop();
        const progressBar = document.querySelector('.progress-bar');
        
        if (progressBar) {
            let progress = 0;
            
            switch(currentPage) {
                case 'intro.html':
                    progress = 0;
                    break;
                case 'room1.html':
                    progress = 33;
                    break;
                case 'room2.html':
                    progress = 66;
                    break;
                case 'room3.html':
                    progress = 100;
                    break;
                default:
                    progress = 0;
            }
            
            progressBar.style.width = `${progress}%`;
        }
    };
    
    trackProgress();
    
    // Initialize any other shared functionality here
    console.log('ChronoCéramique Odyssey loaded');
});

// Prevent access to rooms out of order
function checkAccess() {
    const currentPage = window.location.pathname.split('/').pop();
    const visitedRooms = JSON.parse(sessionStorage.getItem('visitedRooms') || '[]');
    
    if (currentPage === 'room2.html' && !visitedRooms.includes('room1')) {
        window.location.href = 'intro.html';
    }
    if (currentPage === 'room3.html' && !visitedRooms.includes('room2')) {
        window.location.href = 'intro.html';
    }
    
    // Track visited rooms
    if (currentPage.startsWith('room') && !visitedRooms.includes(currentPage)) {
        visitedRooms.push(currentPage);
        sessionStorage.setItem('visitedRooms', JSON.stringify(visitedRooms));
    }
}

document.addEventListener('DOMContentLoaded', checkAccess);
// Make info points clickable
document.addEventListener('click', function(e) {
    if (e.target.closest('.info-point')) {
        const infoId = e.target.closest('.info-point').getAttribute('data-info');
        if (infoId) {
            showInfo(infoId);
        }
    }
});

// Function to handle navigation active state
function setActiveNavItem() {
    const currentPath = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('nav a');
    
    navItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (itemPath === currentPath) {
            item.classList.add('text-indigo-600', 'font-bold');
            item.classList.remove('text-gray-600');
        }
    });
}