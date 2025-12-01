const p_pages = document.querySelectorAll('#main .posts');
let currentSection = 0;

function showPage(index) {
    p_pages.forEach((pg, i) => {
        pg.classList.toggle('active', i === index);
        pg.classList.toggle('inactive', i !== index);
    });

    // Reinitialize article 1 for new section
    funcA1();
    funcA2();
    funcA3();
    funcA4();
    funcA5();
    funcA6();
    funcA7();
    funcA8();
    funcA9();
    funcA10();
}

//Next Section
document.getElementById('nextSect').addEventListener('click', (e) => {
    e.preventDefault();
    currentSection++;
    if (currentSection >= p_pages.length) currentSection = 0;
    showPage(currentSection);
});

//Previous Section
document.getElementById('prevSect').addEventListener('click', (e) => {
    e.preventDefault();
    currentSection--;
    if (currentSection < 0) currentSection = p_pages.length - 1;
    showPage(currentSection);
});

//Article 1
function funcA1() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(1) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(1) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(1) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA1();

//Article 2
function funcA2() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(2) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(2) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(2) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA2();

//Article 3
function funcA3() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(3) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(3) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(3) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA3();

//Article 4
function funcA4() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(4) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(4) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(4) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA4();

//Article 5
function funcA5() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(5) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(5) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(5) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA5();

//Article 6
function funcA6() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(6) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(6) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(6) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA6();

//Article 7
function funcA7() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(7) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(7) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(7) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA7();

//Article 8
function funcA8() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(8) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(8) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(8) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA8();

//Article 9
function funcA9() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(9) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(9) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(9) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA9();

//Article 10
function funcA10() {

    const activeSection = document.querySelector('#main .posts.active');
    const images = activeSection.querySelectorAll('article:nth-of-type(10) .carousel .img-container img');
	let current = 0;
	function showImage(index) {
		images.forEach((img, i) => {
			img.classList.toggle('active', i === index);
			img.classList.toggle('inactive', i !== index);
		});
	}
	let startX = 0; // To store where the swipe starts
				
	activeSection.querySelector('article:nth-of-type(10) .carousel').addEventListener('touchstart', (e) => {
		startX = e.touches[0].clientX;
	});
	activeSection.querySelector('article:nth-of-type(10) .carousel').addEventListener('touchend', (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;
					
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
	
}
//Activate on initial load
funcA10();
