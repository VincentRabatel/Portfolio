const navTabs = document.getElementsByClassName("nav__tab");

initTabs();

function initTabs() {
    navTabs[0].classList.add("nav__tab--active")
    
    for(let i = 0; i < navTabs.length; i++){
        let navTab = navTabs[i];
    
        navTab.addEventListener('click', function(){
            setTabActive(navTab)
        }, false);
    }
}

function setTabActive(navTab) {
    for(let i = 0; i < navTabs.length; i++){
        setTabInactive(navTabs[i]);
    }

    navTab.classList.add("nav__tab--active");
}

function setTabInactive(navTab) {
    navTab.classList.remove("nav__tab--active");
}