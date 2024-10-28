
let boolList = false;
let boolJobs = false;
let boolBookmarks = false;
let boolVerified_Orgs = false;
let boolPremium = false;
let boolCommunities = false;

let toogler=false

let Main_Menu=document.getElementById("Main_Menu");
let items = Main_Menu.children;
let more_span=document.querySelector("#More summary span")


// Function to hide the element if the height is less than 500px
function checkHeight() {
    let more= document.querySelector("#More ul")
    let more_items=more.children;
    
    
    // Text toogler
    if (window.innerWidth<1280 && !toogler) {
        Array.from(items).forEach(element=>{
            let elem = element.querySelector("a span")  
            elem.classList.add("hidden")        
        });
        
        toogler=true
        
        more_span.classList.add("hidden")
    }
    else if(window.innerWidth>=1280 && toogler){
        more_span.classList.remove("hidden")
        
        Array.from(items).forEach(element=>{
            let elem = element.querySelector("a span")  
            elem.classList.remove("hidden")        
        });
        more.classList.remove("hidden")
        
        toogler=false
        
    }

    const List = document.getElementById("List");
    const Jobs = document.getElementById("Jobs");
    const Bookmarks = document.getElementById("Bookmarks");
    const Verified_Orgs = document.getElementById("Verified_Orgs");
    const Premium = document.getElementById("Premium");
    const Communities = document.getElementById("Communities");
    const More = document.querySelector("#More ul");



    // Check the height
    // list menu
    if (window.innerHeight < 989) {

        if (!boolList) {
            const ListCopy = List.cloneNode(true);
            ListCopy.classList.remove("hidden");
            
            More.insertBefore(ListCopy, More.firstChild);
            boolList = true;
        }
        List.classList.add("hidden");
    }
    else {
        if (boolList) {
            boolList = false;
            const RemoveList = More.querySelector("#List");
            RemoveList.remove();
        }
        List.classList.remove("hidden");
    }

    // -----------------------------------------------------
    // jobs menu
    if (window.innerHeight < 931 && window.innerHeight > 854 || window.innerHeight < 819) {


        if (!boolJobs) {
            const JobsCopy = Jobs.cloneNode(true);
            JobsCopy.classList.remove("hidden");
            
            More.insertBefore(JobsCopy, More.firstChild);
            boolJobs = true;
        }
        Jobs.classList.add("hidden");
    }
    else {
        if (boolJobs) {
            boolJobs = false;
            const RemoveJobs = More.querySelector("#Jobs");
            RemoveJobs.remove();
        }
        Jobs.classList.remove("hidden");
    }
    // ------------------------------------------------------
    // Bookmarks menu

    if (window.innerHeight < 768) {


        if (!boolBookmarks) {
            const BookmarksCopy = Bookmarks.cloneNode(true);
            BookmarksCopy.classList.remove("hidden");
            
            More.insertBefore(BookmarksCopy, More.firstChild);
            boolBookmarks = true;
        }
        Bookmarks.classList.add("hidden");
    }
    else {
        if (boolBookmarks) {
            boolBookmarks = false;
            const RemoveBookmarks = More.querySelector("#Bookmarks");
            RemoveBookmarks.remove();
        }
        Bookmarks.classList.remove("hidden");
    }
    // ------------------------------------------------------
    // Verified_Orgs menu
    if (window.innerHeight < 718) {


        if (!boolVerified_Orgs) {
            const Verified_OrgsCopy = Verified_Orgs.cloneNode(true);
            Verified_OrgsCopy.classList.remove("hidden");
            
            More.insertBefore(Verified_OrgsCopy, More.firstChild);
            boolVerified_Orgs = true;
        }
        Verified_Orgs.classList.add("hidden");
    }
    else {
        if (boolVerified_Orgs) {
            boolVerified_Orgs = false;
            const RemoveVerified_Orgs = More.querySelector("#Verified_Orgs");
            RemoveVerified_Orgs.remove();
        }
        Verified_Orgs.classList.remove("hidden");
    }
    // ------------------------------------------------------
    // Premium menu
    if (window.innerHeight < 668) {


        if (!boolPremium) {
            const PremiumCopy = Premium.cloneNode(true);
            PremiumCopy.classList.remove("hidden");
            
            More.insertBefore(PremiumCopy, More.firstChild);
            boolPremium = true;
        }
        Premium.classList.add("hidden");
    }
    else {
        if (boolPremium) {
            boolPremium = false;
            const RemovePremium = More.querySelector("#Premium");
            RemovePremium.remove();
        }
        Premium.classList.remove("hidden");
    }
    // ------------------------------------------------------
    // Communities menu
    if (window.innerHeight < 618) {


        if (!boolCommunities) {
            const CommunitiesCopy = Communities.cloneNode(true);
            CommunitiesCopy.classList.remove("hidden");
            
            More.insertBefore(CommunitiesCopy, More.firstChild);
            boolCommunities = true;
        }
        Communities.classList.add("hidden");

    }
    else {
        if (boolCommunities) {
            boolCommunities = false;
            const RemoveCommunities = More.querySelector("#Communities");
            RemoveCommunities.remove();
        }
        Communities.classList.remove("hidden");
    }

    Array.from(more_items).forEach(element=>{
        let elem = element.querySelector("a span")
        elem.classList.remove("hidden")
        })
}

window.onload = checkHeight;
window.onresize = checkHeight;