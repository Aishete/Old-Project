// When user click left button
  // set box left position to left

// When user click center button
  // set box center position to center

// When user click right button
  // set box right position to right

  document.getElementById('HOT');

  document.getElementById('ICE');
  
  document.getElementById('SHAKE');
/*
  function toggleClass(tagname){
    console.log(tagname.value);
    const hot = document.getElementById('hot');
    hot.classList.toggle(tagname.value);
  };*/
  function imgToTop(p1) {
    document.getElementById('hot').style.zIndex = 0;
    document.getElementById('ice').style.zIndex = 0;
    document.getElementById('shake').style.zIndex = 0;
    document.getElementById(p1).style.zIndex = 1;
}