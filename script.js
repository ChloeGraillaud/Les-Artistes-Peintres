document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const galleries = document.querySelectorAll('.gallery-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Log clicked link
            console.log('Clicked:', this.getAttribute('data-gallery'));

            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked nav link
            this.classList.add('active');

            // Hide all galleries
            galleries.forEach(gallery => {
                gallery.classList.add('hidden');
                gallery.classList.remove('active');
            });

            // Show the selected gallery
            const galleryId = this.getAttribute('data-gallery') + '-gallery';
            const selectedGallery = document.getElementById(galleryId);

            // Log selected gallery
            console.log('Selected Gallery:', selectedGallery);

            if (selectedGallery) {
                // Use a small timeout to ensure the transition takes place
                setTimeout(() => {
                    selectedGallery.classList.remove('hidden');
                    selectedGallery.classList.add('active');
                }, 10);
            } else {
                console.log('Gallery not found:', galleryId);
            }
        });
    });
});

