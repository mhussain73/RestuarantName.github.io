const p_pages = document.querySelectorAll('#main .posts');
let current = 0;
                
function showPage(index) {
    p_pages.forEach((pg, i) => {
        pg.classList.toggle('active', i === index);
		pg.classList.toggle('inactive', i !== index);
    });
}
//Start

// --- Section Navigation (Prev / Next) ---
document.getElementById('nextSect').addEventListener('click', (e) => {
    e.preventDefault();
    current = current + 1;
	if (current > (p_pages.length - 1)) {
		current = 0;
	}
    //current = (currentSectionIndex + 1) % sections.length;
    showPage(current);
});

document.getElementById('prevSect').addEventListener('click', (e) => {
    e.preventDefault();
	current = current - 1;
	if (current < 0) {
		current = p_pages.length - 1;
	}
    //current = (currentSectionIndex - 1 + sections.length) % sections.length;
    showPage(current);
});

//End
