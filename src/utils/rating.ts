export function getRandomRating(min = 4.3, max = 5.0) {
    // Dapatkan angka acak di [min, max)
    const raw = Math.random() * (max - min) + min;
    // Bulatkan ke 1 desimal
    return Math.round(raw * 10) / 10;
}
