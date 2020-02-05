export default () => {
  const menu = document.getElementsByClassName(
    "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
  );
  menu[0].classList.toggle("hidden");
};
