const playlist = document.getElementById("playlist");
const player = document.getElementById("player");
let currentSongIndex = 0;

// Lista de arquivos MP3 na pasta "musicas"
const musicas = [
    "musicas/01-dj-rodrigo-soares.mp3",
    "musicas/02-dj-rodrigo-soares.mp3",
    "musicas/03-dj-rodrigo-soares.mp3",
    "musicas/04-dj-rodrigo-soares.mp3",
    "musicas/05-dj-rodrigo-soares.mp3",
    "musicas/06-dj-rodrigo-soares.mp3",
    "musicas/07-dj-rodrigo-soares.mp3",
    "musicas/08-dj-rodrigo-soares.mp3",
    "musicas/09-dj-rodrigo-soares.mp3",
    "musicas/14-dj-rodrigo-soares.mp3",

];

let musicaAtual = 0;

// Função para criar a lista de reprodução
function criarPlaylist() {
    musicas.forEach((musicas, index) => {
        const li = document.createElement("li");
        li.textContent = musicas ;
        li.addEventListener("click", () => tocarMusica(index));
        playlist.appendChild(li);
    });
    const playButton = document.getElementById("playButton");
    const player = document.getElementById("player");
    
  }

// Função para tocar uma música
function tocarMusica(index) {
    musicaAtual = index;
    player.src = musicas[index];
    player.play();
}

// Função para tocar a próxima música
function tocarProximaMusica() {
    musicaAtual = (musicaAtual + 1) % musicas.length;
    tocarMusica(musicaAtual);
}

// Função para tocar a música anterior
function tocarMusicaAnterior() {
    musicaAtual = (musicaAtual - 1 + musicas.length) % musicas.length;
    tocarMusica(musicaAtual);
}

criarPlaylist();

// Adicionar event listeners para os botões de próxima e anterior
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

nextButton.addEventListener("click", tocarProximaMusica);
prevButton.addEventListener("click", tocarMusicaAnterior);


function loadAudio() {
  audio.src = audios[currentTrack];
  audio.load();
}

// Toca o arquivo de áudio
function play() {
  if (!playing) {
    musicas.play();
    playing = true;
  }
}

// Pausa o arquivo de áudio
function pause() {
  if (playing) {
    audio.pause();
    playing = false;
  }
}

// Para o arquivo de áudio
function stop() {
  audio.pause();
  audio.currentTime = 0;
  playing = false;
}

// Carrega o primeiro arquivo de áudio
loadAudio();
