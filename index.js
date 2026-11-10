document.addEventListener("DOMContentLoaded", () => {

  // 1. LÓGICA DEL CARRUSEL DE IMÁGENES
  
  const track = document.getElementById("track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicatorsContainer = document.getElementById("indicators");

  if (track) {
    const images = track.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;

    // Crear dinámicamente los puntos indicadores
    if (indicatorsContainer) {
      indicatorsContainer.innerHTML = "";
      images.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        indicatorsContainer.appendChild(dot);
      });
    }

    const dots = indicatorsContainer ? indicatorsContainer.querySelectorAll(".dot") : [];

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      if (dots.length > 0) {
        dots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentIndex);
        });
      }
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    let autoSlide = setInterval(nextSlide, 4000);

    const container = document.querySelector(".carousel-container");
    if (container) {
      container.addEventListener("mouseenter", () => clearInterval(autoSlide));
      container.addEventListener("mouseleave", () => {
        autoSlide = setInterval(nextSlide, 4000);
      });
    }
  }
  
  //   FUNCIONALIDAD DEL BUSCADOR DE PRODUCTOS
  
  const buscador = document.getElementById("buscarProductoIndex");

  if (buscador) {
    buscador.addEventListener("input", (e) => {
      const textoBusqueda = e.target.value.toLowerCase().trim();
      const tarjetas = document.querySelectorAll(".col-12, .col-md-6, .col-lg-4, .card");

      if (textoBusqueda !== "") {
        const seccionCatalogo = document.getElementById("catalogo");
        if (seccionCatalogo) {
          seccionCatalogo.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      // Filtrar las tarjetas de productos
      tarjetas.forEach((tarjeta) => {
        const textoTarjeta = tarjeta.textContent.toLowerCase();
        if (textoBusqueda === "" || textoTarjeta.includes(textoBusqueda)) {
          tarjeta.style.display = ""; 
        } else {
          tarjeta.style.display = "none"; 
        }
      });
    });
  }

  //  EFECTO 3D EN LAS TARJETAS

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * 6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.transition = "none";
      card.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      card.style.transition = "transform 0.4s ease, box-shadow 0.4s ease";
      card.style.boxShadow = "";
    });
  });
});

// menú desplegable del Catálogo
document.addEventListener('DOMContentLoaded', () => {
    const btnCatalogo = document.getElementById('btnCatalogo');
    const menuCatalogo = document.getElementById('menuCatalogo');

    if (btnCatalogo && menuCatalogo) {
        btnCatalogo.addEventListener('click', (e) => {
            e.preventDefault(); 
            
    if (menuCatalogo.style.display === 'block') {
         menuCatalogo.style.display = 'none';
          } else {
             menuCatalogo.style.display = 'block';
            }
        });
        window.addEventListener('click', (e) => {
            if (!btnCatalogo.contains(e.target) && !menuCatalogo.contains(e.target)) {
                menuCatalogo.style.display = 'none';
            }
        });
    }
});