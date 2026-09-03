(function () {
  var burger = document.querySelector('.burger');
  var links = document.querySelector('.nav-links');
  if (!burger || !links) return;

  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.textContent = open ? '\u2715' : '\u2630';
  });

  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.textContent = '\u2630';
    }
  });
})();
