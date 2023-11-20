const navTabs = document.getElementsByClassName("nav__tab")

const videogames = document.querySelector(".videogames")
const experiments = document.querySelector(".experiments")
const websites = document.querySelector(".websites")
const about = document.querySelector(".about")

const sections = [videogames, experiments, websites, about]

// Previews, to be used later for animation ?
// const previews = document.getElementsByClassName("preview")

// const previewsVideogames = document.getElementsByClassName("preview--videogame")
// const previewsExperiments = document.getElementsByClassName("preview--experiment")
// const previewsWebsites = document.getElementsByClassName("preview--website")

initTabs()
function initTabs() {
    for(let i = 0; i < navTabs.length; i++){
        let navTab = navTabs[i]
    
        navTab.addEventListener('click', function(){
            setTabActive(navTab)

            switch(navTab.innerHTML){
                case "Video Games":
                    showSection(videogames)
                    window.localStorage.setItem("activeTab", "Video Games")
                    break;
                
                case "Experiments":
                    showSection(experiments)
                    window.localStorage.setItem("activeTab", "Experiments")
                    break;

                case "Websites":
                    showSection(websites)
                    window.localStorage.setItem("activeTab", "Websites")
                    break;

                case "About":
                    showSection(about)
                    window.localStorage.setItem("activeTab", "About")
                    break;

                default :
                    console.error("We didnt find the previews to show")
            }
        }, false);
    }
}

initActiveTab()
function initActiveTab() {
    const activeTab = window.localStorage.getItem("activeTab");

    switch (activeTab) {
        case "Video Games":
            setTabActive(navTabs[0])
            showSection(videogames)
            break;
        
        case "Experiments":
            setTabActive(navTabs[1])
            showSection(experiments)
            break;

        case "Websites":
            setTabActive(navTabs[2])
            showSection(websites)
            break;

        case "About":
            setTabActive(navTabs[3])
            showSection(about)
            break;

        default :
            setTabActive(navTabs[0])
            showSection(videogames)
    }
}

// Deprecated, sections init is done in initActiveTab()
// function initSections() {
//     for(let i = 0; i < sections.length; i++){
//         sections[i].classList.add("hidden")
//     }
// }

function showSection(section) {
    for(let i = 0; i < sections.length; i++){
        sections[i] == section ? sections[i].classList.remove("hidden") : sections[i].classList.add("hidden")
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