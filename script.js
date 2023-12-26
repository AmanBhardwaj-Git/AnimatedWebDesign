
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.from('.nlink', {
    stagger: .2,
    duration : 1,
    ease: Power2,
    y:10,
    opacity:0
})

Shery.textAnimate("#ephemeral #heading h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from('.anim2', {
    y:'-80',
    opacity:0,
    ease: Expo,
    duration:1,
    stagger:.3
})
gsap.from('#picimg img', {
    y:'300',
    opacity:0,
    ease: Expo,
    duration:2,
})


Shery.mouseFollower({});

// Shery.imageEffect('#ephemeral img , #pictures #secondpic img',{
//     style:4,
//    config:  {"uColor":{"value":true},"uSpeed":{"value":0.65,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.91,"range":[0,5]},"uFrequency":{"value":5.88,"range":[0,10]},"geoVertex":{"range":[1,64],"value":50.53},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500113035221775},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":2.07,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
// })

// Shery.imageEffect('#susimagewrapper img , #firstpic img',{
//     style:1,
//     config:{"a":{"value":6.41,"range":[0,30]},"b":{"value":0.04,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666264769713045},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.67,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
// })

// Shery.imageEffect("#bimg", {
//     style: 4,
//    config: {"uColor":{"value":true},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.79,"range":[0,5]},"uFrequency":{"value":5.27,"range":[0,10]},"geoVertex":{"range":[1,64],"value":42.36},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8821634134134134},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.35,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.52,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":25.19,"range":[0,100]}},
//     gooey: true,
//   });

document.querySelector('#ftext button')
.addEventListener('mouseover', function(){
    gsap.to('#future video', {
        opacity:1,
        ease: Power4,
        duration:1.5,
    })
})
document.querySelector('#ftext button')
.addEventListener('mouseleave', function(){
    gsap.to('#future video', {
        opacity:0,
        ease: Power4,
        duration:1.5,
    })
})

Shery.makeMagnet("button, a, i, #motive span" , {});
