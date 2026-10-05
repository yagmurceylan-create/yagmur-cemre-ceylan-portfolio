// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", () => {

    // Sayfadaki bölümleri seç
    const sections = document.querySelectorAll("section");

    // Başlangıçta bölümleri görünmez yap
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.7s ease";
    });

    // Sayfayı kaydırdıkça bölümleri göster
    function sectionAnimation() {

        sections.forEach(section => {

            const sectionTop =
                section.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {

                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", sectionAnimation);

    // Sayfa ilk açıldığında da kontrol et
    sectionAnimation();

});