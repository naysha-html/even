const a_btn = document.getElementById("a-btn")
const s_btn = document.getElementById("s-btn")
const d_btn = document.getElementById("d-btn")
const f_btn = document.getElementById("f-btn")
const g_btn = document.getElementById("g-btn")
const h_btn = document.getElementById("h-btn")
const j_btn = document.getElementById("j-btn")
const k_btn = document.getElementById("k-btn")
const l_btn = document.getElementById("l-btn")
const title_card = document.getElementById("title-card")
const audio = document.getElementById("audio")
const a_btn = document.getElementById("a-btn")
const b_btn = document.getElementById("b btn")
const list_container = document.getElementById("list-container")

a_btn.addEventListener('click',()=>{
    audio.play();
    image.style.animationPlayState = "running"
})
const canciones = [
    {
        id: 1,
        title:"A",
        audio: "audio/boom.wav",
     },
     {
        id: 2,
        title:"S",
        audio: "audio/clap.wav",
     },
     {
        id: 3,
        title:"D",
        audio: "audio/hihat.wav",
     },
     {
        id: 4,
        title:"F",
        audio: "kick.wav",
     },
     {
        id: 5,
        title:"G",
        audio: "audio/openhat.wav",
     },
     {
        id: 6,
        title:"H",
        audio: "audio/ride.wav",
     },
     {
        id: 7,
        title:"J",
        audio: "audio/snare.wav",
     },
     {
        id: 8,
        title:"K",
        audio: "audio/tink.wav",
     },
     {
        id: 9,
        title:"L",
        audio: "audio/tom.wav",
     },
];

canciones.forEach((e) => {
    list_container.insertAdjacentHTML(
        "beforeend",
        `
            <div class="list-item" id="${e.id}">
                <div class="song-data">
                    <div>${e.title}</div>
                </div>
            </div>
        `
    );
});

list_container.addEventListener("click", () => {
    audio.play();

});

