# aframe-easy-teleport
A straightforward method for teleporting objects within A-Frame, including the camera and other entities. Plain and simple.

Live demo: https://maddening-luxuriant-hair.glitch.me/

# schema

The purpose of this component is to provide an extremely simple way to move objects or the user to a specific position within the scene without any unnecessary frills and with minimal code.

This component needs from you the *what* and *where*. Simple. Use "where" to specify a 3 vector position and "target" to define what will move to the position.

  'easy-teleport', {
    schema: {
      where: { type: 'vec3' },
      target: { type: 'selector' }


This component will relocate the object whose "id" has been entered in the "target" field, which includes cameras, rigs, objects, and essentially any type of A-Frame entity that can have an "id". In the accompanying scene, three typical use cases of this plugin have been demonstrated.

    <a-box color="green" easy-teleport="where: 1 1.8 -2; target: #camara;" scale="0.2 0.2 0.1" position="1 1.8 -2"></a-box>
    <a-box color="red" easy-teleport="where: 0 1.6 0; target: #camara;" scale="0.2 0.2 0.1" position="-1 1.8 -2"></a-box>
    <a-box color="blue" easy-teleport="where: 0 3 -5; target: #esfera-movible;" scale="0.2 0.2 0.1" position="0 2.1 -2"></a-box>
 
