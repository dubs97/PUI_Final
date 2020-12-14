$(function() {
  
    var scrollMagicController = new ScrollMagic();
    
    var tween1 = TweenMax.to('#animation-1', 0.3, {
      backgroundColor: 'rgb(255, 39, 46)',
      scale: 10,
      rotation: 360
    });
    var scene1 = new ScrollScene({
      triggerElement: '#scene-1',
      offset: 50
    })
    .setClassToggle('body', 'scene-1-active')
    .setTween(tween1)
    .addTo(scrollMagicController);

    
    var scene2 = new ScrollScene({
      triggerElement: '#scene-2',
          offset: 50
    })
    .setClassToggle('body', 'scene-2-active')
    .setTween(tween2)
    .addTo(scrollMagicController);
    
    
    var scene3 = new ScrollScene({
      triggerElement: '#scene-3',
          offset: 50
    })
    .setClassToggle('body', 'scene-3-active')
    .setTween(tween3)
    .addTo(scrollMagicController);

    var scene4 = new ScrollScene({
        triggerElement: '#scene-4',
            offset: 50
      })
      .setClassToggle('body', 'scene-4-active')
      .setTween(tween4)
      .addTo(scrollMagicController);
      
    
    var scene5 = new ScrollScene({
      triggerElement: '#scene-5',
          offset: 50
    })
    .setClassToggle('body', 'scene-5-active')
    .setTween(tween5)
    .addTo(scrollMagicController);
    
    
    
    
    // Add debug indicators fixed on right side
     scene1.addIndicators();
       scene2.addIndicators();
    scene3.addIndicators();
    
  });