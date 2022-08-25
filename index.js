let imagesLink=[
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Bihar_assembly_file_PTI_1200x768.jpeg?GKuvXIjp4q5BP_Kr8RFwJLe5jBrm7pRz&size=770:433",
    "https://images.livemint.com/img/2020/02/25/600x338/20200224167L_1582639248960_1582639265318.jpg",
    "https://i0.wp.com/sarkari-job-wale.in/wp-content/uploads/2022/08/m11hvdtg_nitish-kumar-650_650x400_24_August_22.jpg",
    "https://static.toiimg.com/thumb/msid-49717067,imgsize-57409,width-400,resizemode-4/49717067.jpg",
]

let leftBtn=document.getElementById("left-btn");
let rightBtn=document.getElementById("right-btn");
let crauser=document.getElementById("crauser");
// let search=document.getElementById("search");

let imageState=0;
rightBtn.addEventListener("click",function(){
    imageState++;
    if(imageState===imagesLink.length){
        imageState=0;
    }
    crauser.src=imagesLink[imageState];
})

leftBtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imagesLink-1;
    }
    crauser.src=imagesLink[imageState];
})