let num = 1;
function changeTheme() {
  const theme = document.getElementsByTagName("link")[1];
  console.log(theme);
  console.log(num);
  if (num < 13) {
    theme.href = "./styles/style" + num + ".css";
  } else {
    num = 0;
    theme.href = "./styles/style" + num + ".css";
  }
  num += 1;
}
