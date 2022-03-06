"use strict";

const storage = localStorage;
// let maxPage = storage;
// const pageNum = storage.currentPage.length > -1 ? storage.getItem("currentPage") : 1;


// var ABC = localStorage.getItem( "DATA" ); // なかったらnullが返る
// if ( ABC ){
//     ABC = JSON.parse( ABC );
//     if ( ABC.value ){
//         alert('中身がある');
//     } else {
//         alert('中身がない');
//     }
// } else {
//     alert('中身がない(使ってない)');
// }

const getPageNum = () => {
    // const storage = localStorage;
    const pageNum = storage.getItem("currentPage");
    // const parsed = JSON.parse(pageNum);
    if(pageNum === "NaN"){
        return 1;
    } else if(pageNum > storage.maxPage){
        storage.currentPage = 1;
        return 1;
    } else {
        return pageNum;
    }
    // return pageNum === "NaN" ? 1 : pageNum;
}

const getNewNum = (pageNum, isLeft) => {
    if(isLeft){
        return pageNum < storage.maxPage ? pageNum + 1 : pageNum;
    } else {
        return pageNum > 1 ? pageNum - 1 : pageNum;
    }
}

const clickedButton = (isLeft) => {
    // console.log("storage.currentPage: ");
    // console.log(storage.currentPage);
    const pageNum = parseInt(getPageNum());
    // const newNum = isLeft ? pageNum + 1 : pageNum - 1;
    const newNum = getNewNum(pageNum, isLeft);
    storage.currentPage = newNum;
    console.log("clicked " + (isLeft ? "Left" : "Right"));
    // console.log("pageNum: " + pageNum);
    console.log("newNum: " + newNum);
    scroll(newNum, true);
}
//
// const clickRight = () => {
//     const pageNum = getPageNum(false);
//     console.log("clicked right");
//     console.log("pageNum: " + pageNum);
//     // scroll(pageNum);
// }

// const getLocation = () => {
//     if(xy === "horizontal-tb"){
//         return (currentPage - 1) * window.innerWidth;
//     } else {
//         return (maxPage - currentPage + 1) * window.innerWidth;
//         // 1-5 2-4 3-3 4-2 5-1
//     }
// }

const scroll = (pageNum, isSmooth) => {
    window.scrollTo({
        left: (storage.maxPage - pageNum) * window.innerWidth,
        // right: pageNum * window.innerWidth,
        behavior: isSmooth ? 'smooth' : "instant"
    });
    console.log("scrolled");
}

// scroll(1, false);