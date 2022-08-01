
const imgList = document.getElementsByClassName("item__img-inner")
const btnList = document.getElementsByClassName("item__link")

for (let b = 0; b < btnList.length; b++)
{
    btnList[b].addEventListener('mouseenter', () => {
        gsap.killTweensOf(imgList[b])
        gsap.to(imgList[b], {
            duration: 2,
            ease: 'power4',
            scale: 1.5
        })
    })

    btnList[b].addEventListener('mouseleave', () => {
        gsap.killTweensOf(imgList[b])
        gsap.to(imgList[b], {
            duration: 0.7,
            ease: 'expo',
            scale: 1
        })
    })

}