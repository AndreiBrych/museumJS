
 function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [`assets/img/galery/galery1.jpg`,`assets/img/galery/galery2.jpg`,`assets/img/galery/galery3.jpg`,`assets/img/galery/galery4.jpg`,`assets/img/galery/galery5.jpg`,`assets/img/galery/galery6.jpg`,`assets/img/galery/galery7.jpg`,`assets/img/galery/galery8.jpg`,`assets/img/galery/galery9.jpg`,`assets/img/galery/galery10.jpg`,`assets/img/galery/galery11.jpg`,`assets/img/galery/galery12.jpg`,`assets/img/galery/galery13.jpg`,`assets/img/galery/galery14.jpg`,`assets/img/galery/galery15.jpg`];
  
  shuffle(arr);
   
    const  ArrayOfImages = arr
    ArrayOfImages.forEach(function(image) {
    const pictureInnerContainer = document.querySelector('.picture-inner-container');
    const img = document.createElement('img');
    img.src = image;
    pictureInnerContainer.appendChild(img).classList.add('anime-items');
  
  });

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('_active');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.anime-items');
  
  for (let elm of elements) {
    observer.observe(elm);
  }