window.addEventListener('message', function(event) {
    if (event.data.action === 'showImage') {
        const images = ['blood_splatter.png', 'blood_splatter2.png', 'blood_splatter3.png', 'blood_splatter4.png', 'blood_splatter5.png', 'blood_splatter6.png', 'blood_splatter7.png', 'blood_splatter8.png'];
        const randomImage = images[Math.floor(Math.random() * images.length)];

        const image = document.createElement('img');
        image.src = randomImage;
        image.style.position = 'absolute';
        image.style.left = `${Math.random() * window.innerWidth}px`;
        image.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(image);

        setTimeout(() => {
            document.body.removeChild(image);
        }, 5000); // Show image for 5 seconds
    }
});
