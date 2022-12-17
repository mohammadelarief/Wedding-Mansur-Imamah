jQuery(document).ready(function () {
  /*
      Background slideshow
  */
  $("#banner").backstretch(
    [
      "./Foto/1.jpg",
      "./Foto/2.jpg",
      "./Foto/3.jpg",
      "./Foto/5.jpg",
      "./Foto/6.jpg",
    ],
    { duration: 3000, fade: 750 }
  );
});
