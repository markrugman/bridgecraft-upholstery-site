const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');

if (header && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const galleryFilters = document.querySelectorAll('.gallery-filter');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryFilters.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    const filter = filterButton.dataset.filter;

    galleryFilters.forEach((button) => button.classList.remove('is-active'));
    filterButton.classList.add('is-active');

    galleryItems.forEach((item) => {
      const categories = item.dataset.category || '';
      item.hidden = filter !== 'all' && !categories.split(' ').includes(filter);
    });
  });
});

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxTitle = document.querySelector('[data-lightbox-title]');
const lightboxClose = document.querySelector('[data-lightbox-close]');

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const image = item.querySelector('img');
    if (!lightbox || !lightboxImage || !lightboxTitle || !image) return;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxTitle.textContent = item.dataset.title || image.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

const contactForm = document.querySelector('[data-contact-form]');
const formStatus = document.querySelector('[data-form-status]');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      event.preventDefault();
      formStatus.textContent = 'Please add your name, email, and query before submitting.';
      return;
    }

    formStatus.textContent = 'Sending your enquiry.';
  });
}
