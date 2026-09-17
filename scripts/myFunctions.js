const password = document.querySelector('.js-wifi-password');
const copyButton = document.querySelector('.js-wifi__password-copy');

copyButton.addEventListener('click', async () => {
  await navigator.clipboard.writeText(password.innerText);

  copyButton.innerText = "Copied!";

  setTimeout(() => {
    copyButton.innerText = "Copy";
  }, 2000);
})


const printButton = document.querySelector('.js-print-screen');

printButton.addEventListener("click", () => {
  window.print();
});

const bookingContent = document.querySelector('.js-booking-content');
const stayCard = document.querySelector('.js-stay-card');
const hostNote = document.querySelector('.js-host-note');

bookingContent.addEventListener("mouseenter", () => {
  stayCard.classList.remove('stay-card');
  stayCard.classList.add('stay-card-packed');

  hostNote.classList.remove('host-note');
  hostNote.classList.add('host-note-packed');
});

bookingContent.addEventListener("mouseleave", () => {
  stayCard.classList.remove('stay-card-packed');
  stayCard.classList.add('stay-card');

  hostNote.classList.remove('host-note-packed');
  hostNote.classList.add('host-note');
});
