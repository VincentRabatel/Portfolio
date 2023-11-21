const navTabs = document.getElementsByClassName("nav__tab")

initTabs()
function initTabs() {
    for(let i = 0; i < navTabs.length; i++){
        let navTab = navTabs[i]
    
        navTab.addEventListener('click', function(){

            // Set the "activeTab" key in localStorage to navigate to the correct tab
            switch(navTab.innerHTML){
                case "Video Games":
                    window.localStorage.setItem("activeTab", "Video Games")
                    break;
                
                case "Experiments":
                    window.localStorage.setItem("activeTab", "Experiments")
                    break;

                case "Websites":
                    window.localStorage.setItem("activeTab", "Websites")
                    break;

                case "About":
                    window.localStorage.setItem("activeTab", "About")
                    break;

                default :
                    console.error("We didnt find this tab to init")
            }

            // Move to home page
            window.location.href = "../../index.html"

        }, false);
    }
}