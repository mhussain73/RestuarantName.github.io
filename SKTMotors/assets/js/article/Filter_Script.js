const vehicles = document.querySelectorAll(".vehicle");

const brandFilter = document.getElementById("brandFilter");
const subBrandFilter = document.getElementById("subBrandFilter");
const yearFilter = document.getElementById("yearFilter");
const priceFilter = document.getElementById("priceFilter");


// ------------------------------------------------------
// 1. AUTO-GENERATE FILTER OPTIONS FROM VEHICLE DATA
// ------------------------------------------------------

let brands = new Set();
let modelsByBrand = {};
let years = new Set();
let priceRanges = new Set();

// Extract from DOM
vehicles.forEach(v => {
    const brand = v.dataset.brand;
    const sub = v.dataset.subbrand;
    const year = v.dataset.year;
    const price = parseInt(v.dataset.price);

    brands.add(brand);
    years.add(year);

    if (!modelsByBrand[brand]) modelsByBrand[brand] = new Set();
    modelsByBrand[brand].add(sub);
});

// Auto-fill brand dropdown
brands.forEach(b => {
    brandFilter.innerHTML += `<option value="${b}">${b}</option>`;
});

// Auto-fill years dropdown
[...years].sort((a, b) => b - a).forEach(y => {
    yearFilter.innerHTML += `<option value="${y}">${y}</option>`;
});

// Auto-fill price ranges (dynamic)
let prices = [...vehicles].map(v => parseInt(v.dataset.price));
prices.sort((a,b)=>a-b);

// Create smart price ranges (4 segments)
const rangeCount = 4;
const segment = Math.ceil(prices.length / rangeCount);

for (let i = 0; i < rangeCount; i++) {
    const startIndex = i * segment;
    const endIndex = Math.min(startIndex + segment - 1, prices.length - 1);

    const min = prices[startIndex];
    const max = prices[endIndex];

    if (min && max) {
        priceFilter.innerHTML += 
            `<option value="${min}-${max}">R${min.toLocaleString()} – R${max.toLocaleString()}</option>`;
    }
}


// ------------------------------------------------------
// 2. UPDATE SUB-BRAND (MODEL) WHEN BRAND CHANGES
// ------------------------------------------------------

brandFilter.addEventListener("change", () => {
    const brand = brandFilter.value;

    subBrandFilter.innerHTML = `<option value="">All Models</option>`;

    if (brand && modelsByBrand[brand]) {
        subBrandFilter.disabled = false;
        modelsByBrand[brand].forEach(m => {
            subBrandFilter.innerHTML += `<option value="${m}">${m}</option>`;
        });
    } else {
        subBrandFilter.disabled = true;
    }

    filterVehicles();
});

subBrandFilter.addEventListener("change", filterVehicles);
yearFilter.addEventListener("change", filterVehicles);
priceFilter.addEventListener("change", filterVehicles);


// ------------------------------------------------------
// 3. MAIN FILTER FUNCTION
// ------------------------------------------------------

function filterVehicles() {
    const brand = brandFilter.value;
    const sub = subBrandFilter.value;
    const year = yearFilter.value;
    const priceRange = priceFilter.value;

    vehicles.forEach(v => {
        let visible = true;

        const vBrand = v.dataset.brand;
        const vSub = v.dataset.subbrand;
        const vYear = v.dataset.year;
        const vPrice = parseInt(v.dataset.price);

        if (brand && vBrand !== brand) visible = false;
        if (sub && vSub !== sub) visible = false;
        if (year && vYear !== year) visible = false;

        if (priceRange) {
            const [min, max] = priceRange.split("-").map(Number);
            if (vPrice < min || vPrice > max) visible = false;
        }

        v.style.display = visible ? "block" : "none";
    });
}
