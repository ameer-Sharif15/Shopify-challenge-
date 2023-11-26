const customizDiv = document.getElementById('div-setup')
const customizDiv_2 = document.getElementById('div-setup-2')
const customizDiv_3 = document.getElementById('div-setup-3')
const customizDiv_4 = document.getElementById('div-setup-4')
const customizDiv_5 = document.getElementById('div-setup-5')
const customizSec = document.querySelector("#customize")
const customizSec_2 = document.querySelector("#customize-2")
const customizSec_3 = document.querySelector("#customize-3")
const customizSec_4 = document.querySelector("#customize-4")
const customizSec_5 = document.querySelector("#customize-5")
const customizImg = document.querySelector("#setup-img")
const customizImg_2 = document.querySelector("#setup-img-2")
const customizImg_3 = document.querySelector("#setup-img-3")
const customizImg_4 = document.querySelector("#setup-img-4")
const customizImg_5 = document.querySelector("#setup-img-5")
const close_sec = document.querySelector("#close")
const close_sec_2 = document.querySelector("#close-2")
const trial_sec = document.querySelector("#trial")
const openTab = document.querySelector("#openTab")
const closeTab = document.querySelector("#closeTab")
const list = document.querySelector("#list")
const select_cos = document.querySelector('#select-cos')
const select_cos_1 = document.querySelector('#select-cos-1')
const select_cos_2 = document.querySelector('#select-cos-2')
const select_cos_3 = document.querySelector('#select-cos-3')
const select_pro = document.querySelector('#select-pro')
const select_pro_1 = document.querySelector('#select-pro-1')
const select_pro_2 = document.querySelector('#select-pro-2')
const select_pro_3 = document.querySelector('#select-pro-3')
const select_dom = document.querySelector('#select-dom')
const select_dom_1 = document.querySelector('#select-dom-1')
const select_dom_2 = document.querySelector('#select-dom-2')
const select_dom_3 = document.querySelector('#select-dom-3')
const select_nam = document.querySelector('#select-nam')
const select_nam_1 = document.querySelector('#select-nam-1')
const select_nam_2 = document.querySelector('#select-nam-2')
const select_nam_3 = document.querySelector('#select-nam-3')
const select_pay = document.querySelector('#select-pay')
const select_pay_1 = document.querySelector('#select-pay-1')
const select_pay_2 = document.querySelector('#select-pay-2')
const select_pay_3 = document.querySelector('#select-pay-3')
const num = document.querySelector('#num')
const input = document.querySelector('#input')
const listId = document.querySelector('#listId')
const progress = document.querySelector('#progress-bar')

const setUpPlan = document.querySelector('#plans')

const alarm_btn = document.querySelector('#alarm-btn')
const alertBox = document.querySelector('#alert-box')
const profileBtn = document.querySelector('#profile-btn')
const notifyBox = document.querySelector('#notify')


alarm_btn.addEventListener('click', () => {
    alertBox.classList.toggle('hide')
    notifyBox.classList.add('hide')

})

profileBtn.addEventListener('click', () => {
    notifyBox.classList.toggle('hide')
    alertBox.classList.add('hide')
    const AllMenuItems = notifyBox.querySelectorAll('[role="menuitem"]')
    const isExpanded = profileBtn.attributes['aria-expanded'].value === 'true';

     function handleMenuItemArrowKeyPress(event, menuItemIndex) {
        const isLastMenuItem = menuItemIndex === AllMenuItems.length -1;
        const isFirstMenuItem = menuItemIndex === 0;

        const nextMenuItem = AllMenuItems.item(menuItemIndex + 1)
        const previousMenuItem = AllMenuItems.item(menuItemIndex - 1)

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            if (isLastMenuItem) {
                AllMenuItems.item(0).focus()
                return
            }
            nextMenuItem.focus()
        }

        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            if (isFirstMenuItem) {
                AllMenuItems.item(
                    AllMenuItems.length - 1
                ).focus()
                return
            }
            previousMenuItem.focus()
        }
    }

    if (isExpanded) {
        profileBtn.ariaExpanded = 'false'
     
    } else {
        profileBtn.ariaExpanded = 'true'
        AllMenuItems.item(0).focus()
        notifyBox.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                profileBtn.ariaExpanded = 'false'
                notifyBox.classList.toggle('hide')
                profileBtn.focus()
            }
        });

        ///
        AllMenuItems.forEach(function (menuItem, menuItemIndex) {
            menuItem.addEventListener('keyup', function (event) {handleMenuItemArrowKeyPress(event,menuItemIndex)})
        })
    }

})


const data = [
    {
    custom: 
        {
            1:customizSec,
            2:customizImg,
            3:customizDiv
        },
        product: 
        {
            1:customizSec_2,
            2:customizImg_2,
            3:customizDiv_2
        },
        domain: 
        {
            1:customizSec_3,
            2:customizImg_3,
            3:customizDiv_3
        },
        name: 
        {
            1:customizSec_4,
            2:customizImg_4,
            3:customizDiv_4
        },
        pay: 
        {
            1:customizSec_5,
            2:customizImg_5,
            3:customizDiv_5
        },
        }

]


const select = (type) => {
    switch (type) {
        case 'custom':
            data.forEach((item) => {
                item.custom[1].classList.toggle('hide')
                item.custom[2].classList.toggle('hide')
                item.custom[3].classList.toggle('bgtrp')
                item.product[1].classList.add('hide')
                item.product[2].classList.add('hide')
                item.product[3].classList.add('bgtrp')
                item.domain[1].classList.add('hide')
                item.domain[2].classList.add('hide')
                item.domain[3].classList.add('bgtrp')
                item.name[1].classList.add('hide')
                item.name[2].classList.add('hide')
                item.name[3].classList.add('bgtrp')
                item.pay[1].classList.add('hide')
                item.pay[2].classList.add('hide')
                item.pay[3].classList.add('bgtrp')
            })
            break;
        case 'product':
            data.forEach((item) => {
                item.product[1].classList.toggle('hide')
                item.product[2].classList.toggle('hide')
                item.product[3].classList.toggle('bgtrp')
                item.custom[1].classList.add('hide')
                item.custom[2].classList.add('hide')
                item.custom[3].classList.add('bgtrp')
                item.domain[1].classList.add('hide')
                item.domain[2].classList.add('hide')
                item.domain[3].classList.add('bgtrp')
                item.name[1].classList.add('hide')
                item.name[2].classList.add('hide')
                item.name[3].classList.add('bgtrp')
                item.pay[1].classList.add('hide')
                item.pay[2].classList.add('hide')
                item.pay[3].classList.add('bgtrp')
            })
            break;
            case 'domain':
                data.forEach((item) => {
                    item.domain[1].classList.toggle('hide')
                    item.domain[2].classList.toggle('hide')
                    item.domain[3].classList.toggle('bgtrp')
                    item.product[1].classList.add('hide')
                    item.product[2].classList.add('hide')
                    item.product[3].classList.add('bgtrp')
                    item.custom[1].classList.add('hide')
                    item.custom[2].classList.add('hide')
                    item.custom[3].classList.add('bgtrp')
                    item.name[1].classList.add('hide')
                    item.name[2].classList.add('hide')
                    item.name[3].classList.add('bgtrp')
                    item.pay[1].classList.add('hide')
                    item.pay[2].classList.add('hide')
                    item.pay[3].classList.add('bgtrp')
                })
                break;
            case 'name':
                data.forEach((item) => {
                    item.name[1].classList.toggle('hide')
                    item.name[2].classList.toggle('hide')
                    item.name[3].classList.toggle('bgtrp')
                    item.domain[1].classList.add('hide')
                    item.domain[2].classList.add('hide')
                    item.domain[3].classList.add('bgtrp')
                    item.product[1].classList.add('hide')
                    item.product[2].classList.add('hide')
                    item.product[3].classList.add('bgtrp')
                    item.custom[1].classList.add('hide')
                    item.custom[2].classList.add('hide')
                    item.custom[3].classList.add('bgtrp')
                    item.pay[1].classList.add('hide')
                    item.pay[2].classList.add('hide')
                    item.pay[3].classList.add('bgtrp')
                })
                break;
                case 'pay':
                    data.forEach((item) => {
                        item.pay[1].classList.toggle('hide')
                        item.pay[2].classList.toggle('hide')
                        item.pay[3].classList.toggle('bgtrp')
                        item.name[1].classList.add('hide')
                        item.name[2].classList.add('hide')
                        item.name[3].classList.add('bgtrp')
                        item.domain[1].classList.add('hide')
                        item.domain[2].classList.add('hide')
                        item.domain[3].classList.add('bgtrp')
                        item.product[1].classList.add('hide')
                        item.product[2].classList.add('hide')
                        item.product[3].classList.add('bgtrp')
                        item.custom[1].classList.add('hide')
                        item.custom[2].classList.add('hide')
                        item.custom[3].classList.add('bgtrp')
                    })
                    break;
        default:
            break;
    }
}

customizDiv.addEventListener('click',() => select('custom'))
customizDiv_2.addEventListener('click',() => select('product'))
customizDiv_3.addEventListener('click',() => select('domain'))
customizDiv_4.addEventListener('click',() => select('name'))
customizDiv_5.addEventListener('click',() => select('pay'))


openTab.addEventListener('click',  () => {
    list.classList.toggle('hide')
    closeTab.classList.toggle('hide')
    openTab.classList.toggle('hide')
    
    const isExpanded = openTab.attributes['aria-expanded'].value === 'true';
    const allBtnMenu = setUpPlan.querySelectorAll('[role="menuitem"]')

    function handleMenuItemArrowKeyPress(event, menuItemIndex) {
        const isLastMenuItem = menuItemIndex === allBtnMenu.length -1;
        const isFirstMenuItem = menuItemIndex === 0;

        const nextMenuItem = allBtnMenu.item(menuItemIndex + 1)
        const previousMenuItem = allBtnMenu.item(menuItemIndex - 1)

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            if (isLastMenuItem) {
                allBtnMenu.item(0).focus()
                return
            }
            nextMenuItem.focus()
        }

        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            if (isFirstMenuItem) {
                allBtnMenu.item(
                    allBtnMenu.length - 1
                ).focus()
                return
            }
            previousMenuItem.focus()
        }
    }

    if (isExpanded) {
        openTab.ariaExpanded = 'false'
     
    } else {
        openTab.ariaExpanded = 'true'
        allBtnMenu.item(0).focus()
        console.log(allBtnMenu.item(0));
        setUpPlan.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                openTab.ariaExpanded = 'false'
                setUpPlan.classList.toggle('hide')
                openTab.focus()
            }
        });
        ///
        allBtnMenu.forEach(function (menuItem, menuItemIndex) {
            menuItem.addEventListener('keyup', function (event) {handleMenuItemArrowKeyPress(event,menuItemIndex)})
        })
    }

});

closeTab.addEventListener('click',  () => {
    list.classList.toggle('hide')
    openTab.classList.toggle('hide')
    closeTab.classList.toggle('hide')

})

close_sec.addEventListener('click', () => {
    trial_sec.classList.toggle('hide')
})

close_sec_2.addEventListener('click', () => {
    trial_sec.classList.toggle('hide')
})



let set_1 = true
select_cos.addEventListener('click', () => {
    select_cos_1.classList.toggle('hide')
    if (set_1 === true) {
        select_cos_2.classList.toggle('hide')
     setTimeout(() => {
        select_cos_2.classList.add('hide')
    }, 500);
    setTimeout(() => {
        select_cos_3.classList.toggle('hide')
        progress.value += 20;
        num.innerHTML++;
        customizSec.classList.add('hide')
        customizImg.classList.add('hide')
        customizDiv.classList.add('bgtrp')
        customizSec_2.classList.remove('hide')
        customizImg_2.classList.remove('hide')
        customizDiv_2.classList.remove('bgtrp')
        select_pro.focus()
    }, 501);
    set_1 = false
    } else {
        select_cos_1.classList.remove('hide')
        select_cos_3.classList.toggle('hide')
        progress.value -= 20;

        num.innerHTML = num.innerHTML  - 1
    set_1 = true
    }
   
})

let set_2 = true

select_pro.addEventListener('click', () => {
    select_pro_1.classList.toggle('hide')
    if (set_2 === true) {
        select_pro_2.classList.toggle('hide')
     setTimeout(() => {
        select_pro_2.classList.add('hide')
    }, 500);
    setTimeout(() => {
        select_pro_3.classList.toggle('hide')
        num.innerHTML++;
        progress.value += 20;
            customizSec_2.classList.add('hide')
            customizImg_2.classList.add('hide')
            customizDiv_2.classList.add('bgtrp')
            customizSec_3.classList.remove('hide')
            customizImg_3.classList.remove('hide')
            customizDiv_3.classList.remove('bgtrp')
            select_dom.focus()
    }, 501);
    set_2 = false
    } else {
        select_pro_1.classList.remove('hide')
        select_pro_3.classList.toggle('hide')
        progress.value -= 20;
        num.innerHTML = num.innerHTML  - 1
    set_2 = true
    }
   
})


let set_3 = true

select_dom.addEventListener('click', () => {
    select_dom_1.classList.toggle('hide')
    if (set_3 === true) {
        select_dom_2.classList.toggle('hide')
     setTimeout(() => {
        select_dom_2.classList.add('hide')
        
    }, 500);
    setTimeout(() => {
        select_dom_3.classList.toggle('hide')
        num.innerHTML++;
        progress.value += 20;
        customizSec_3.classList.add('hide')
        customizImg_3.classList.add('hide')
        customizDiv_3.classList.add('bgtrp')
        customizSec_4.classList.remove('hide')
        customizImg_4.classList.remove('hide')
        customizDiv_4.classList.remove('bgtrp')
        select_nam.focus()
    }, 501);
    set_3 = false
    } else {
        select_dom_1.classList.remove('hide')
        select_dom_3.classList.toggle('hide')
        progress.value -= 20;
        num.innerHTML = num.innerHTML  - 1
    set_3 = true
    }
})



let set_4 = true

select_nam.addEventListener('click', () => {
    select_nam_1.classList.toggle('hide')
    if (set_4 === true) {
        select_nam_2.classList.toggle('hide')
     setTimeout(() => {
        select_nam_2.classList.add('hide')
    }, 500);
    setTimeout(() => {
        select_nam_3.classList.toggle('hide')
        num.innerHTML++;
                progress.value += 20;
        customizSec_4.classList.add('hide')
        customizImg_4.classList.add('hide')
        customizDiv_4.classList.add('bgtrp')
        customizSec_5.classList.remove('hide')
        customizImg_5.classList.remove('hide')
        customizDiv_5.classList.remove('bgtrp')
        select_pay.focus()
    }, 501);
    set_4 = false
    } else {
        select_nam_1.classList.remove('hide')
        select_nam_3.classList.toggle('hide')
                progress.value -= 20;
        num.innerHTML = num.innerHTML  - 1
    set_4 = true
    }
})



let set_5 = true

select_pay.addEventListener('click', () => {
    select_pay_1.classList.toggle('hide')
    if (set_5 === true) {
        select_pay_2.classList.toggle('hide')
     setTimeout(() => {
        select_pay_2.classList.add('hide')
        
    }, 500);
    setTimeout(() => {
        select_pay_3.classList.toggle('hide')
        num.innerHTML++;
        progress.value += 20;
        customizSec_5.classList.add('hide')
        customizImg_5.classList.add('hide')
        customizDiv_5.classList.add('bgtrp')
        closeTab.focus()
    }, 501);
    set_5 = false
  
    } else {
        select_pay_1.classList.remove('hide')
        select_pay_3.classList.toggle('hide')
        progress.value -= 20;
        num.innerHTML = num.innerHTML  - 1
    set_5 = true
    }
   
})
