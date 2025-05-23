const arrowRight=document.querySelector('.work-box .navigation .right');
const arrowLeft=document.querySelector('.work-box .navigation .left');
let index=0;
const totalSlides=document.querySelectorAll('.img-item').length;
const activePortfolio=()=>{
    const imgSlide=document.querySelector('.carousel .img-slide');
    const portfolioDetails=document.querySelectorAll('.work-detail');
    imgSlide.style.transition="transform 0.5s ease-in-out";
    imgSlide.style.transform=`translateX(calc(-${index} * (100% + 2rem)))`;
    updateButtonState();
    portfolioDetails.forEach(detail =>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}
arrowRight.addEventListener('click', () => {
    index = (index + 1) % 4; // 总共有4个图片项，0-3循环
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    index = (index - 1 + 4) % 4; // 总共有4个图片项，3-0循环
    activePortfolio();
});

const updateButtonState=()=>{
    // 完全移除禁用状态
    arrowLeft.disabled = false;
    arrowRight.disabled = false;
};
document.addEventListener('DOMContentLoaded', () => {
    updateButtonState();
    activePortfolio();
});