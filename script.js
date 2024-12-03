const options = {
    distance: '50px',
    origin: 'bottom',
    duration: 700,
};

ScrollReveal().reveal('.explore-content', {
    ...options,
    origin: 'left',
});

ScrollReveal().reveal('.category-container h2', {
    ...options,
});

ScrollReveal().reveal('.category-container p', {
    ...options,
    delay: 200,
});

ScrollReveal().reveal('.category-item', {
    ...options,
    origin: 'left',
    interval: 100,
});

ScrollReveal().reveal('.shopping-card', {
    ...options,
    interval: 100,
});

ScrollReveal().reveal('.decor-content', {
    ...options,
    origin: 'right',
});
