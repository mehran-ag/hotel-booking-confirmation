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


const isDesktop = window.matchMedia("(min-width: 769px)");


const bookingContent = document.querySelector('.js-booking-content');
const stayCard = document.querySelector('.js-stay-card');
const hostNote = document.querySelector('.js-host-note');


if (isDesktop.matches) {
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
};


const hamMenu = document.querySelector('.js-ham-menu');

const iconClose = document.querySelector('.js-icon-close');

const sideBar = document.querySelector('.js-sidebar');

const sidebarMain = document.querySelector('.js-sidebar-main');

const sidebarFooter = document.querySelector('.js-sidebar-footer');

hamMenu.addEventListener('click', () => {

  sideBar.classList.remove('sidebar');

  sideBar.classList.add('sidebar-show');

  sidebarMain.style.display = 'flex';

  sidebarFooter.style.display = 'flex';

  hamMenu.style.display = 'none';

  iconClose.style.display = 'flex';
})

iconClose.addEventListener('click', () => {

  sideBar.classList.remove('sidebar-show');

  sideBar.classList.add('sidebar');

  sidebarMain.style.display = 'none';

  sidebarFooter.style.display = 'none';

  hamMenu.style.display = 'flex';

  iconClose.style.display = 'none';
})