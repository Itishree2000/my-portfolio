let typed = new Typed(".text", {
    strings: ["Frontend Developer", "Creative Technologist", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// more project
function toggleMoreProjects() {
    const moreProjectsList = document.getElementById('moreProjectsList');
    if (moreProjectsList.style.display === 'none') {
        moreProjectsList.style.display = 'block';
    } else {
        moreProjectsList.style.display = 'none';
    }
  }