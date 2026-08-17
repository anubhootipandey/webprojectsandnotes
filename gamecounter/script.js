let h = document.getElementById("bbox");
let hcount = 0;
let gcount = 0;
let g = document.getElementById("gbbox");
function incre1() {
  hcount += 1;
  h.innerText = hcount;
}
function incre2() {
  hcount += 2;
  h.innerText = hcount;
}
function incre3() {
  hcount += 3;
  h.innerText = hcount;
}
function gincre1() {
  gcount += 1;
  g.innerText = gcount;
}
function gincre2() {
  gcount += 2;
  g.innerText = gcount;
}
function gincre3() {
  gcount += 3;
  g.innerText = gcount;
}
function newfun() {
  h.innerText = 0;
  g.innerText = 0;
  hcount = 0;
  gcount = 0;
}
