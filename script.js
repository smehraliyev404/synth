function popupAlisa() {
  document.querySelector(".card__popup__alisa").classList.toggle("activeAlisa");
}
document.querySelector("#alisa").onclick = popupAlisa;
document.querySelector("#alisaPopup").onclick = popupAlisa;


function popupSaid() {
  document.querySelector(".card__popup__said").classList.toggle("activeSaid");
}
document.querySelector("#said").onclick = popupSaid;
document.querySelector("#saidPopup").onclick = popupSaid;


function popupGunay() {
  document.querySelector(".card__popup__gunay").classList.toggle("activeGunay");
}
document.querySelector("#gunay").onclick = popupGunay;
document.querySelector("#gunayPopup").onclick = popupGunay;


function popupMalik() {
  document.querySelector(".card__popup__malik").classList.toggle("activeMalik");
}
document.querySelector("#malik").onclick = popupMalik;
document.querySelector("#malikPopup").onclick = popupMalik;























class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}


const phrases = [
  'ADA university',
  'Group Project',
  'Hour Of Code',
  'WEB Project'
]

const el = document.querySelector('.content__animation')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 3000)
  })
  counter = (counter + 1) % phrases.length
}

next()


document.addEventListener('mousemove', (e) => {
  const height = circle.offsetHeight;
  const width = circle.offsetWidth;

  if (e.target.tagName === 'A' ||
      e.target.tagName === 'BUTTON' ||
      e.target.tagName === 'IMG' ||
      e.target.parentNode.tagName === 'A' ||
      e.target.parentNode.tagName === 'BUTTON') {
      circle.classList.add('big');
  } else {
      circle.classList.remove('big');
  }

  setTimeout(() => { 
      circle.style.left = `${e.clientX - width/2}px`;
      circle.style.top = `${e.clientY - height/2}px`;
  }, 20);
});
