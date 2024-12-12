var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

const mySwiper = new Swiper('.swiper', {


    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed:2000,

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    }
  });
  document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        mySwiper.autoplay.stop();
    });

    slide.addEventListener('mouseleave', () => {
        mySwiper.autoplay.start();
    });
  });

  document.querySelectorAll("#accordion .accordion-toggle").forEach(toggle => {
    toggle.addEventListener("click", function () {
      // Expand or collapse this panel
      const content = this.nextElementSibling;
      if (content) {
        const isOpened = this.classList.contains("opened");

        // Reset all panels
        document.querySelectorAll("#accordion .accordion-content").forEach(panel => {
          panel.style.display = "none";
          panel.classList.remove("opened");
        });

        document.querySelectorAll("#accordion .accordion-toggle").forEach(tgl => {
          tgl.classList.remove("opened");
        });

        // Toggle current panel
        if (!isOpened) {
          content.style.display = "block";
          content.classList.add("opened");
          this.classList.add("opened");
        }
      }
    });
  });


 
  document.addEventListener('DOMContentLoaded', function() {
    const observer = new MutationObserver(() => {
      setTimeout(() => {
        const links = document.querySelectorAll('a[rel="noreferrer"]');
        links.forEach(link => {
          link.style.display = 'none'; // Okamžité skrytí
        });
      }, 1000); // Zpoždění 100ms po detekci změny
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

});


const button = document.querySelector('.btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  });
};

displayButton();
scrollToTop();