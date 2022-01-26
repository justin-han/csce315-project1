let num = 2;
function changeTheme() {
  const theme = document.getElementsByTagName("link")[1];
  console.log(num);
  if (num < 7) {
    theme.href = "./styles/style" + num + ".css";
    num += 1;
  } else {
    num = 1;
    theme.href = "./styles/style" + num + ".css";
  }
}
