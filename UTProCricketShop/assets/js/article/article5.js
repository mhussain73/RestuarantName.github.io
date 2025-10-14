const images = document.querySelectorAll('#main .posts article:nth-of-type(5) .carousel .img-container img');
const overlay = document.querySelector('#main .overlay');
const expandedImg = document.getElementById('expanded-img');
let current = 0;
                
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
		img.classList.toggle('inactive', i !== index);
    });
}
/*
//Start
// update overlay image source to match current
function updateOverlayImage(j) {
    images.forEach((img, i) => {
		if (j === i) {
			expandedImg.src = img.src;
		}
    });
}
//End
*/
let startX = 0; // To store where the swipe starts
				
// Detect when user touches the screen
document.querySelector('#main .posts article:nth-of-type(5) .carousel').addEventListener('touchstart', (e) => {
  	startX = e.touches[0].clientX;
});
				
// Detect when user lifts their finger
document.querySelector('#main .posts article:nth-of-type(5) .carousel').addEventListener('touchend', (e) => {
  	const endX = e.changedTouches[0].clientX;
  	const diffX = endX - startX;
					
  	// Minimum swipe distance to trigger
  	if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            // Swipe right → show previous image
			current = current - 1;
			if (current < 0) {
				current = images.length - 1;
			}
		}
		else {
      	    // Swipe left → show next image
     		current = current + 1;
			if (current > (images.length - 1)) {
				current = 0;
			}
		}
        showImage(current);
	}
});
        
//Expand image on click
images.forEach((img) => {
    img.addEventListener('click', () => {
        expandedImg.src = img.src;
      	overlay.classList.add('show');
		// optional: prevent page scroll while overlay open
        document.body.style.overflow = 'hidden';
    });
});

// Close expanded image when clicking overlay background
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      	overlay.classList.remove('show');
		document.body.style.overflow = '';
		expandedImg.src = '';
		current = 0;//Add On
    }
});

// update overlay image source to match current
function updateOverlayImage() {
    if (!overlay || !expandedImg) return;
        expandedImg.src = images[current].src;
        expandedImg.alt = images[current].alt || `Image ${current + 1}`;
}

// Swipe support inside overlay (so you can swipe while enlarged)
if (overlay) {
    let overlayStartX = null;
    overlay.addEventListener('touchstart', (e) => {
       	// only start swipe if overlay is shown
       	if (!overlay.classList.contains('show')) return;
       	overlayStartX = e.touches[0].clientX;
	}, { passive: true });

    overlay.addEventListener('touchend', (e) => {
        if (overlayStartX === null) return;
        const overlayendX = e.changedTouches[0].clientX;
       	const overlaydx = overlayendX - overlayStartX;
       	const threshold = 40;
       	if (Math.abs(overlaydx) > threshold) {
            if (overlaydx > 0) {
				// Swipe right → show previous image
				current = current - 1;
			    if (current < 0) {
				    current = images.length - 1;
                }
			}//current = (current - 1 + images.length) % images.length;
         	else {
				// Swipe left → show next image
			    current = current + 1;
			    if (current > (images.length - 1)) {
				    current = 0;
			    }
			}//current = (current + 1) % images.length;
         	updateOverlayImage();
       	}
       	overlayStartX = null;
    }, { passive: true });
}
