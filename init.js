const WIDTH = window.screen.width;

if (WIDTH <= 400) {
    document.documentElement.style.setProperty('--bg-link', 'url("assets/img/exports/mobile-water-200.jpg")');
} else if (WIDTH <= 1000) {
    document.documentElement.style.setProperty('--bg-link', 'url("assets/img/exports/mobile-water-375.jpg")');
} else if (WIDTH < 1920) {
    document.documentElement.style.setProperty('--bg-link', 'url("assets/img/exports/water-1000.jpg")');
} else if (WIDTH < 3840) {
    document.documentElement.style.setProperty('--bg-link', 'url("assets/img/exports/water-1920.jpg")');
} else {
    document.documentElement.style.setProperty('--bg-link', 'url("assets/img/exports/water-4096.jpg")');
}

