let notificationDisplay = document.getElementById("count_of_notifications");
const eachPosts = document.querySelectorAll(".post");
const markAsRead = document.querySelector('.mark-all-msgs');
const newPostDot = document.querySelectorAll(".dot");
const link = document.querySelectorAll(".link");
const userName = document.querySelectorAll(".user-name");

let notificationCount = 0;


for (let i = 0; i < eachPosts.length; i++) {
    if (eachPosts[i].classList.contains("new")) {
       notificationCount += 1;
    }     
};

// Mark all as read button
markAsRead.addEventListener("click", function() {
    for (let i = 0; i< eachPosts.length; i++) {
        if (eachPosts[i].classList.contains("new") ) {
            eachPosts[i].classList.remove("new"),
            link[i].classList.remove("new"),
            newPostDot[i].classList.add("hide_dot"),
            notificationDisplay.textContent = 0;
        }  
    }
    }) ;

    // Each post click removes notification count and "new" post look.
    eachPosts.forEach(post => post.addEventListener("click", function() {
        if (post.classList.contains("new")) {
        post.classList.remove("new"),
        link[post.id].classList.remove("new"),
        newPostDot[post.id].classList.add("hide_dot"),
        notificationDisplay.textContent -= 1
        }
    }));

    
notificationDisplay.textContent = notificationCount;
