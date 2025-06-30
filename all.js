// hover return
document.addEventListener("DOMContentLoaded", function () {
    const hoverElements = document.querySelectorAll(".hover");

    hoverElements.forEach(function (element) {
        element.addEventListener("mouseover", function () {
            const aChild = this.querySelector(".a");
            const bChild = this.querySelector(".b");
            
            if (aChild && bChild) {
                aChild.style.display = "none";
                bChild.style.display = "block";
            }
        });

        element.addEventListener("mouseout", function () {
            const aChild = this.querySelector(".a");
            const bChild = this.querySelector(".b");
            
            if (aChild && bChild) {
                bChild.style.display = "none";
                aChild.style.display = "block";
            }
        });
    });
});


const q1Plate = document.querySelector(".q1 .plate");
const q2Plate = document.querySelector(".q2 .plate");
const q3Plate = document.querySelector(".q3 .plate");
const q1Mushroom = document.querySelector(".mushroom1");
const q2Mushroom = document.querySelector(".mushroom2");
const q3Mushroom = document.querySelector(".mushroom3");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");

q1Plate.addEventListener("mouseover", function () {
    document.querySelectorAll(".q2, .q3, .answer2, .answer3").forEach(item => item.classList.remove('active'));
    this.parentElement.classList.add('active');
    answer1.classList.add('active');
});
q2Plate.addEventListener("mouseover", function () {
    document.querySelectorAll(".q1, .q3, .answer1, .answer3").forEach(item => item.classList.remove('active'));
    this.parentElement.classList.add('active');
    answer2.classList.add('active');
});
q3Plate.addEventListener("mouseover", function () {
    document.querySelectorAll(".q1, .q2, .answer1, .answer2").forEach(item => item.classList.remove('active'));
    this.parentElement.classList.add('active');
    answer3.classList.add('active');
});

q1Mushroom.addEventListener("mouseover", function () {
    document.querySelectorAll(".q2, .q3, .answer2, .answer3").forEach(item => item.classList.remove('active'));
    this.parentElement.classList.add('active');
    answer1.classList.add('active');
});
q2Mushroom.addEventListener("mouseover", function () {
    document.querySelectorAll(".q1, .q3, .answer1, .answer3").forEach(item => item.classList.remove('active'));
    this.parentElement.classList.add('active');
    answer2.classList.add('active');
});
q3Mushroom.addEventListener("mouseover", function () {
    document.querySelectorAll(".q1, .q2, .answer1, .answer2").forEach(item => item.classList.remove('active'));
    this.parentElement.classList.add('active');
    answer3.classList.add('active');
});


const qaBtn = document.querySelector('#s02 .mobile .qa_btn');
const btnN = document.querySelector('.qa_btn .btn_next');
const btnB = document.querySelector('.qa_btn .btn_back');
const qa1 = document.querySelector('.qa1_mobile');
const qa2 = document.querySelector('.qa2_mobile');
const qa3 = document.querySelector('.qa3_mobile');
let qaGroup = [qa1, qa2, qa3];

btnN.addEventListener('click', function() {
    if( qaBtn.className.includes('qa1') ) {
        qaBtn.classList.remove('qa1');
        qaBtn.classList.add('qa2');
        qaGroup.forEach(function(e) {
            e.classList.remove('slide-left-in', 'slide-left-out', 'slide-right-in', 'slide-right-out');
        })
        qa1.classList.add('slide-right-out');
        qa2.classList.add('slide-right-in');
        return;
    }

    if( qaBtn.className.includes('qa2') ) {
        qaBtn.classList.remove('qa2');
        qaBtn.classList.add('qa3');
        qaGroup.forEach(function(e) {
            e.classList.remove('slide-left-in', 'slide-left-out', 'slide-right-in', 'slide-right-out');
        })
        qa2.classList.add('slide-right-out');
        qa3.classList.add('slide-right-in');
        return;
    }

    if( qaBtn.className.includes('qa3') ) {
        qaBtn.classList.remove('qa3');
        qaBtn.classList.add('qa1');
        qaGroup.forEach(function(e) {
            e.classList.remove('slide-left-in', 'slide-left-out', 'slide-right-in', 'slide-right-out');
        })
        qa3.classList.add('slide-right-out');
        qa1.classList.add('slide-right-in');
        return;
    }
})
btnB.addEventListener('click', function() {
    if( qaBtn.className.includes('qa1') ) {
        qaBtn.classList.remove('qa1');
        qaBtn.classList.add('qa3');
        qaGroup.forEach(function(e) {
            e.classList.remove('slide-left-in', 'slide-left-out', 'slide-right-in', 'slide-right-out');
        })
        qa1.classList.add('slide-left-out');
        qa3.classList.add('slide-left-in');
        return;
    }

    if( qaBtn.className.includes('qa2') ) {
        qaBtn.classList.remove('qa2');
        qaBtn.classList.add('qa1');
        qaGroup.forEach(function(e) {
            e.classList.remove('slide-left-in', 'slide-left-out', 'slide-right-in', 'slide-right-out');
        })
        qa2.classList.add('slide-left-out');
        qa1.classList.add('slide-left-in');
        return;
    }

    if( qaBtn.className.includes('qa3') ) {
        qaBtn.classList.remove('qa3');
        qaBtn.classList.add('qa2');
        qaGroup.forEach(function(e) {
            e.classList.remove('slide-left-in', 'slide-left-out', 'slide-right-in', 'slide-right-out');
        })
        qa3.classList.add('slide-left-out');
        qa2.classList.add('slide-left-in');
        return;
    }
})

const msg = document.querySelector(".form_msg");
const btnStepNext = document.querySelector(".btn_step-next");
const formPersonalInfo = document.querySelector(".form_personal-info");
btnStepNext.addEventListener("click", function () {
    if (!Boolean(msg.value)) return;
    formPersonalInfo.classList.add("show");
    this.disabled = true;
});

const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
const swotPC = document.querySelectorAll('.pc [src*="_swot.jpg"]');
const swotMB = document.querySelectorAll('.mobile [src*="_swot_mobile"]');
const itemsBtn = document.querySelectorAll('.list_group .list_item');
const lightboxBtn = document.querySelector('#s05 .btn_lightbox');
const lightboxPanel = document.querySelector('#s05 .panel_lightbox');
const lightboxClose = document.querySelector('#s05 .panel_lightbox .btn_close');

itemsBtn.forEach((e, index) => {
    e.addEventListener('click', function() {
        itemsBtn.forEach(e => e.classList.remove('active'));
        swotPC.forEach(e => e.classList.remove('active'));
        swotMB.forEach(e => e.classList.remove('active'));
        items.forEach(e => lightboxBtn.classList.remove(e));
        swotPC[index].classList.add('active');
        swotMB[index].classList.add('active');
        lightboxBtn.classList.add(items[index]);
        console.dir(lightboxBtn);
        e.classList.add('active');
    })
})
lightboxBtn.addEventListener('click', function() {
    if(this.className.includes('item1')) {
        lightboxPanel.classList.add('item1')
        return;
    }
    if(this.className.includes('item2')) {
        lightboxPanel.classList.add('item2')
        return;
    }
    if(this.className.includes('item3')) {
        lightboxPanel.classList.add('item3')
        return;
    }
    if(this.className.includes('item4')) {
        lightboxPanel.classList.add('item4')
        return;
    }
    if(this.className.includes('item5')) {
        lightboxPanel.classList.add('item5')
        return;
    }
})
lightboxClose.addEventListener('click', function() {
    items.forEach(e => lightboxPanel.classList.remove(e));
})
lightboxPanel.addEventListener('click', function() {
    items.forEach(e => this.classList.remove(e));
})





const links = document.querySelectorAll('#s07 .link_item');
const backBTN = document.querySelector('#s07 .back');
const nextBTN = document.querySelector('#s07 .next');
nextBTN.addEventListener('click', function() {
    for (let i = 0; i < links.length; i++) {
        if ( links[i].className.includes('active') ) {
            let newI = i+1>3 ? 0 : i+1;
            links[i].classList.remove('active');
            links[newI].classList.add('active');
            break;
        }
    }
});
backBTN.addEventListener('click', function() {
    for (let i = 0; i < links.length; i++) {
        if ( links[i].className.includes('active') ) {
            let newI = i-1<0 ? 3 : i-1;
            links[i].classList.remove('active');
            links[newI].classList.add('active');
            break;
        }
    }
});


const ruleLightboxPanel = document.querySelector('#s03 .panel_lightbox');
const ruleLightboxClose = document.querySelector('#s03 .btn_close');
const rule1Btn = document.querySelector('#s03 .rule1_btn');
const rule2Btn = document.querySelector('#s03 .rule2_btn');
const rule3Btn = document.querySelector('#s03 .rule3_btn');
const rule4Btn = document.querySelector('#s03 .rule4_btn');
const rule1 = document.querySelector('#s03 .rule1');
const rule2 = document.querySelector('#s03 .rule2');
const rule3 = document.querySelector('#s03 .rule3');
const rule4 = document.querySelector('#s03 .rule4');
const ruleWinner = document.querySelector('#s03 .rule-winner');
const rules = [rule1, rule2, rule3, rule4, ruleWinner];

rule1Btn.addEventListener('click', function() {
    ruleLightboxPanel.classList.add('active');
    rule1.classList.add('show');
});
rule2Btn.addEventListener('click', function() {
    ruleLightboxPanel.classList.add('active');
    rule2.classList.add('show');
});
rule3Btn.addEventListener('click', function() {
    ruleLightboxPanel.classList.add('active');
    rule3.classList.add('show');
});
rule4Btn.addEventListener('click', function() {
    ruleLightboxPanel.classList.add('active');
    rule4.classList.add('show');
});
ruleLightboxClose.addEventListener('click', function() {
    ruleLightboxPanel.classList.remove('active');
    rules.forEach(e => e.classList.remove('show'));
})
ruleLightboxPanel.addEventListener('click', function() {
    ruleLightboxPanel.classList.remove('active');
    rules.forEach(e => e.classList.remove('show'));
})


const menuBG = document.querySelector('.menu .bg')
const menuList = document.querySelector('.menu .menu_list');
const menuBtn = document.querySelector('.menu_btn');
const menuPanel = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu_list a');
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
const winScale = winWidth / winHeight;
if( winWidth < 768 ) {
    if( winScale < 0.3 ) {
        menuBG.classList.add('w-100');
        menuList.classList.add('w-100');
    } else {
        menuBG.classList.add('h-100');
        menuList.classList.add('h-100');
    }
}
menuBtn.addEventListener('click', function() {
    this.classList.toggle('open');
    menuPanel.classList.toggle('open');
})
menuPanel.addEventListener('click', function() {
    this.classList.remove('open');
    menuBtn.classList.remove('open');
})
menuItems.forEach(e => {
    e.addEventListener('click', function() {
        menuBtn.classList.remove('open');
        menuPanel.classList.remove('open');
    })
});

const floatBtn = document.querySelector('.float');

floatBtn.addEventListener('click', function(e) {
    if ( e.target.parentNode.classList.contains('scroll-animate') ) {
        e.preventDefault();
        
        const anchor = e.target.parentNode.getAttribute('href');
        const linkScroll = document.querySelector(anchor).offsetTop;
        const windowWidth = window.innerWidth;
        
        if (windowWidth < 798) {
            scrollWithAnimation(linkScroll - 150, 700);
        } else {
            scrollWithAnimation(linkScroll, 700);
        }
    }
});

menuList.addEventListener('click', function(e) {
    if ( e.target.parentNode.classList.contains('scroll-animate') ) {
        console.log('298');
        e.preventDefault();
        
        const anchor = e.target.parentNode.getAttribute('href');
        const linkScroll = document.querySelector(anchor).offsetTop;
        const windowWidth = window.innerWidth;
        
        if (windowWidth < 798) {
            scrollWithAnimation(linkScroll - 150, 700);
        } else {
            scrollWithAnimation(linkScroll, 700);
        }
    }
});

function scrollWithAnimation(to, duration) {
    const start = window.scrollY;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function animateScroll(timestamp) {
        const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        const elapsed = currentTime - startTime;
        const scrollAmount = Math.easeInOutQuad(elapsed, start, to - start, duration);

        window.scrollTo(0, scrollAmount);

        if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animateScroll);
}