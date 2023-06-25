// aframe-easy-teleport.js - github.com/disketteomelette
// Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0)
// You are free to share and adapt this script, giving appropiate credit to author and 
// indicating if changes were made, without any other additional restrictions ;)

  AFRAME.registerComponent('easy-teleport', {
  schema: {
    where: { type: 'vec3' },
    target: { type: 'selector' }
  },
  init: function () {
    var data = this.data;
    var el = this.el;
    el.addEventListener('click', function () {
      var targetEl = data.target || el;
      targetEl.setAttribute('position', data.where);
    });
  }
});
