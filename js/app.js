(function () {
    let Socials = document.querySelectorAll('.Social div')
    Socials.forEach(function(Social , index){
        Social.style.animation = `moveIn 1s ease-in-out forwards ${index/7 +0.2}s`
    })


}())