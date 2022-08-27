let imagesLink=[
    "https://auditiondateandplace.com/wp-content/uploads/2020/07/Jhalak-Dikhhla-Jaa-Winners-All-Seasons.jpg",
    "https://images.hindustantimes.com/img/2022/08/07/550x309/jhalak_1659887069276_1659887069527_1659887069527.jpg",
    "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/06/image-10-1655996465.jpg",
    "https://images.hindustantimes.com/img/2022/08/01/1600x900/jhalak_dikhhla_jaa_10_contestants_1659340461394_1659340461629_1659340461629.jpg",
]

let leftBtn=document.getElementById("left-btn");
let rightBtn=document.getElementById("right-btn");
let crauser=document.getElementById("crauser");
let search=document.getElementById("search");

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
// pagination part

let crypto_data = [
    {
        name: "Idirs Elba’s Beast to release in India on September 2 Beast film follows Dr Nate Samuels (Idris Elba) who has to protect himself and his two teenage daughters from being hunted by a massive rogue lion in South Africa.",
        img: "https://images.indianexpress.com/2022/08/Beast-film-1200by667.jpg",
    },
    {
        name: "In a first, Shankar shoots Kamal Haasan’s Indian 2, Ram Charan’s RC15 simultaneously Shankar will shoot Kamal Haasan's Indian 2 and Ram Charan's RC15 simultaneously.",
        img: "https://images.indianexpress.com/2022/08/indian-2-ram-charan.jpg?resize=600,334",
    },
    {
        name: "Alia Bhatt’s pregnancy glow lights up her new pictures, Kareena Kapoor says ‘Uffff, owning it and how’ Soon-to-be parents Alia Bhatt and Ranbir Kapoor pose together at their upcoming film Brahmastra promotions.",
        img: "https://images.indianexpress.com/2022/08/Untitled-design-2022-08-26T150402.291.jpg?resize=600,334",
    },
    {
        name: "Nani, Keerthy Suresh’s Dasara to release on this date Directed by Srikanth Odela, Dasara stars Nani and Keerthy Suresh in the leads.",
       
        img: "https://images.indianexpress.com/2022/08/Nani-Dasara-1200by667.jpg?resize=600,334",
    },
    {
      
        name: "Badshah declined roles in Lust Stories and Good Newwz, took up Khandani Shafakhana: ‘Mera career hi mit jayega’ The music composer and rapper finally made his acting debut with 2019 film Khandani Shafakhana alongside actor Sonakshi Sinha.",
    
        img: "https://images.indianexpress.com/2022/08/Badshah-R.jpg?resize=600,334",
    },
    {
       
        name: "Pushpa 2: This is when Allu Arjun will join the sets of Sukumar’s film Pushpa: The Rule, the sequel to Pushpa: The Rise, went on floors recently with a small pooja.",
        
        img: "https://images.indianexpress.com/2022/08/Screenshot-2022-08-26-at-2.02.40-PM.jpg?resize=600,338",
    },
    {
        name: "Anupam Kher: ‘Karan Johar, Aditya Chopra, Sajid Nadiadwala don’t cast me anymore’ Anupam Kher in a recent interview discussed the reasons behind his transition from Bollywood to south Indian cinema.",
       
        img: "https://images.indianexpress.com/2022/06/Anupam-Kher-1200by667.jpg?resize=600,334",
    },
    {
       
        name: "Suniel Shetty on boycott Bollywood trend: ‘People might not be happy with the type of subjects that films are having these days’ Suniel Shetty has expressed concern about people not going to theatres to watch films.",
        img: "https://images.indianexpress.com/2022/08/Collage-Maker-26-Aug-2022-01.24-PM.jpg?resize=600,334",
    },
    {
        
        name: "Shefali Shah’s show is solid, smart and thought-provoking Delhi Crime Season 2 review: In its second iteration,.",
        
        img: "https://images.indianexpress.com/2022/08/Delhi-Crime-2-review.jpg?resize=600,334",
    },
    {
        name: "Bakasuran first look out: Selvaraghavan looks fierce in Mohan G’s next Selvaraghavan comes across as a devout man in Bakasuran. His look also makes us wonder if he is playing a temple priest in the film",
       
        img: "https://images.indianexpress.com/2022/08/First-look-poster-of-Bakasuran.jpg?resize=600,338"
    },
    {
        name: "Anne Hathaway to star in romance drama The Idea Of You The production for The Idea Of You will begin in October.",
      
        img: "https://images.indianexpress.com/2022/08/Anne-Hathaway-1200by667.jpg?resize=600,334",
    },
    {
        name: "Liger not a regional story: Director Puri Jagannadh Puri Jagannadh said he had reached out to Vijay Deverakonda back in 2019 with the script of Liger.",
        img: "https://images.indianexpress.com/2022/08/Puri-Jagannadh-1200by667.jpg?resize=600,334",
    },
    {
        name: "Sunil Pal takes a dig at Krushna Abhishek: ‘What will you do outside of The Kapil Sharma Show? The same B grade films?’ Actor and comedian Krushna Abhishek announced his exit from The Kapil Sharma Show over monetary differences with the makers.",
       
        img: "https://images.indianexpress.com/2022/08/Sunil-Pal-Krushna-R.jpg?resize=600,334",
    },
    {
        name: "5 years of Arjun Reddy: Sandeep Vanga unveils deleted scene from Vijay Deverakonda’s film The Arjun Reddy deleted scene shared by Sandeep Vanga features Arjun Reddy and his friend Shiva (Rahul Ramakrishna) talking about Preethi's (Shalina Pandey) dad.",
       
        img: "https://images.indianexpress.com/2022/08/A-screenshot-from-deleted-scene-from-Arjun-Reddy.jpg?resize=600,338",
    },
    {
        name: "Vivek Agnihotri shares a selfie with Kartik Aaryan, shares the similarities between them Filmmaker Vivek Agnihotri and actor Kartik Aaryan beamed ear-to-ear as they posed for the selfie, clicked by the director.",
        img: "https://images.indianexpress.com/2022/08/Vivek-and-Kartik-R.jpg?resize=600,334",
    },
    {
        name: "Mike Tyson forgets he is a part of Liger, asks interviewer: ‘I don’t know, tell me about it’. Watch video A video shows boxing legend Mike Tyson, where he seems to be under the influence, and couldn't recall joining the cast of Liger.",
        img: "https://images.indianexpress.com/2021/11/Vijay-Deverakonda-and-Mike-Tyson-1200by667.jpg?resize=600,334",
    },
    {
        name: "When Rajesh Khanna said he ‘wouldn’t have stopped’ Dimple Kapadia from acting if he knew of her talent: ‘Wanted a mother for my children’ Rajesh Khanna and Dimple Kapadia married even before her debut film released, and at the time, this marked the end of her career even before it began.",
        img: "https://images.indianexpress.com/2022/07/rajesh-khanna-1200-1.jpg?resize=600,334",
    },
    {
        name: "The Kapil Sharma Show promo: Comedy show welcomes new cast members The Kapil Sharma Show is set to launch its next season from September 10 with a new cast. While Krushna Abhishek will move out, here's introducing the new cast members of the show.",
        img: "https://images.indianexpress.com/2022/08/kapil-sharma-show-entries.jpg?resize=600,334",
    },
    {
        name: "Criminal Justice Season 3 review: Pankaj Tripathi lifts an engaging series Criminal Justice Season 3 review: Pankaj Tripathi’s implacable good cheer overlays the horrific murder of a young girl, a teenaged lad in the dock for the crime and complex modern-day iterations of nuclear families.",
        img: "https://images.indianexpress.com/2022/08/Criminal-Justice-3-1200-k.jpg?resize=600,334",
    },
    {
        name: "When Amitabh Bachchan, Salman Khan and Shah Rukh Khan sang and danced together, fans call them ‘desi Men in Black’ An old video has resurfaced where Shah Rukh Khan, Salman Khan and Amitabh Bachchan are singing on the stage of an event and seem to be enjoying themselves more than anyone.",
        img: "https://images.indianexpress.com/2022/08/FotoJet-16.jpg?resize=600,334",
    },
    {
        name: "Kangana Ranaut strikes her favourite ‘direction pose’ in Emergency’s BTS pics Kangana Ranaut shares BTS from her upcoming directorial film, Emergency.",
        img: "https://images.indianexpress.com/2022/08/Collage-Maker-26-Aug-2022-10.36-AM.jpg?resize=600,334",
    },
    {
        name: "Laal Singh Chaddha’s promising international box office collection saves its OTT fortune: report Laal Singh Chaddha could not create magic at the domestic box office but its performance at the international box office has saved AAmir Khan's film's OTT fortune.",
        img: "https://images.indianexpress.com/2022/08/aamir1200-2.jpg?resize=600,334",
    },
    {
        name: "Ewan McGregor to lead Paramount+ drama series A Gentleman In Moscow Production for A Gentleman In Moscow series is set to begin later this year.",
        img: "https://images.indianexpress.com/2022/08/Ewan-McGregor-1200by667.jpg?resize=600,334"
    },
    {
        name: "Anupam Kher wishes wife Kirron Kher on their 37th anniversary with rare photo of their wedding: ‘Dug it out off…’ Anupam Kher shared his and Kirron Kher's wedding picture as they celebrate their 37th wedding anniversary.",
        img: "https://images.indianexpress.com/2022/08/Anupam-Kher-Kirron-Kher-1200.jpg?resize=600,334",
    },
    {
       
        name: "Mira Kapoor posts adorable throwback on daughter’s birthday, Shahid Kapoor’s expression steals the show Actor Shahid Kapoor's wife Mira remembered the time when she was about to deliver their first child, daughter Misha.",
        img: "https://images.indianexpress.com/2022/08/Shahid-and-MIRA-R.jpg?resize=600,334",
    },
];

let tbody = document.querySelector("tbody");
let sort = document.getElementById("sort");
let paginationDOM = document.getElementById("pagination");
let crypto_per_page = 8;
let currentPageState = 1;
let pages = Math.ceil(crypto_data.length / crypto_per_page);
function renderDOM(data) {
    tbody.innerHTML = null;
    data.forEach(function (ele) {
        let tr = document.createElement("tr");

        let img = document.createElement("img");
        img.src = ele.img;

        let name = document.createElement("td");
        name.innerText = ele.name;

       

        tr.append(img, name);

        tbody.append(tr);
    });
}

function renderPagination(pages) {
    for (let i = 1; i <= pages; i++) {
        let btn = document.createElement("button");
        btn.innerText = i;
        btn.addEventListener("click", function () {
            currentPageState = i;
            activePage(currentPageState);
            paginatedTable(crypto_data, currentPageState, crypto_per_page);
        });
        paginationDOM.append(btn);
    }
}
renderPagination(pages);

function paginatedTable(data, page, perPage) {
    let start = perPage * (page - 1);
    let end = perPage * page;
    let splited = data.slice(start, end);
    renderDOM(splited);
}
paginatedTable(crypto_data, currentPageState, crypto_per_page);

sort.addEventListener("change", function () {
    currentPageState = 1;
    activePage(currentPageState);
    if (sort.value === "") {
        paginatedTable(crypto_data, currentPageState, crypto_per_page);
    } else {
        let crypto_data_copy = crypto_data.map(function (el) {
            return el;
        });
        let sorted = crypto_data_copy.sort(function (a, b) {
            if (sort.value === "Low-High") {
                return a.price - b.price;
            } else if (sort.value === "High-Low") {
                return b.price - a.price;
            }
        });
        paginatedTable(sorted, currentPageState, crypto_per_page);
    }
});

function activePage(currentPageState) {
    let buttons = document.querySelectorAll("#pagination>button");
    buttons.forEach(function (el, i) {
        if (i === (currentPageState - 1)) {
            el.style.backgroundColor = "green";
        } else {
            el.style.backgroundColor = "gray";
        }
    });
}
activePage(currentPageState);


