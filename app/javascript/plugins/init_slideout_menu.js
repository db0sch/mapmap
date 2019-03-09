import Slideout from 'slideout'

const initSlideoutMenu = () => {
  const slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'touch': false,
    'padding': 256,
    'tolerance': 70
  });

  const toggle = document.querySelector('.toggle-button')
  if(toggle) {
    toggle.addEventListener('click', function() { slideout.toggle(); });
  }
}

export { initSlideoutMenu };
