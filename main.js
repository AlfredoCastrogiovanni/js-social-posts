const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: ""
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

const postWrapper = document.getElementById("container");

createPost(posts, postWrapper);

// LikeButtons Event Listener
const likeButtons = document.querySelectorAll(".js-like-button");

likeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const likecounterEl = document.querySelector(`#like-counter-${index}`);
        if (button.classList.contains("bg-blue")) {
            likecounterEl.innerHTML = parseInt(likecounterEl.innerHTML) - 1;
        } else {
            likecounterEl.innerHTML = parseInt(likecounterEl.innerHTML) + 1;
        }
        button.classList.toggle("bg-blue");
    });
})

// ==================== Functions ====================

function createPost(postInfo, wrapper) {
    postInfo.forEach((post, index) => {
        newDate = new Date(post.created);

        wrapper.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        ${createProPic(post,)}
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${newDate.toLocaleDateString()}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${index}" class="js-likes-counter">${post.likes}</b> persone
                    </div>
                </div>
            </div>
        </div>`
    });
}

function createProPic(post) {
    if(post.author.image != "") {
        return `<img class='profile-pic' src='${post.author.image}' alt='${post.author.name}'>`;
    } else {
        return `<div class="profile-pic-default"><span>${getInitials(post.author.name)}</span></div>`;
    }
}

function getInitials(name) {
    let parts = name.split(' ');
    let initials = '';
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] !== '') initials += parts[i][0];
    }
    return initials;
}