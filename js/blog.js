const main = document.querySelector('main');

const t = ["First", "Second", "Third", "Fourth", "Fifth"];

for(let i = 0; i < t.length; i++) {
    main.innerHTML += `
        <article>
            <div class="head_article">
                <img src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile">
                <hgroup>
                    <h3>${t[i]} articolo</h3>
                    <h4>15/04/23</h4>
                </hgroup>
            </div>
            <p>
                Questa è una prova di un primo articolo per il sito web.<br />
                Questa è una prova di un primo articolo per il sito web.<br /><br />
                Questa è una prova di un primo articolo per il sito web.<br />
                Questa è una prova di un primo articolo per il sito web.<br />
            </p>
        </article>
    `;
}

const mybutton = document.getElementById("topBtn");
const f = document.querySelector('footer');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
    f.style.display = "none";
  } else {
    mybutton.style.display = "none";
    f.style.display = "block";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}