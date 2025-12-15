// --- script.js (ATUALIZADO: TEXTOS DE SUCESSO + TOP 3) ---

// 1. DADOS DOS ÁLBUNS
const dadosAlbuns = {

    // ================= ESTÚDIO =================
    'album-mots7': {
        titulo: 'MAP OF THE SOUL: 7',
        tracklist: `O álbum mais vendido do mundo em 2020 (IFPI). Uma obra-prima introspectiva que celebra os 7 anos de carreira do grupo, explorando as sombras e o ego.🔥 Top 3 Hits:
1. Boy With Luv (feat. Halsey)
2. Black Swan
3. ON`,
        clipeLink: 'https://www.youtube.com/watch?v=mPVDH0_zJvI'
    },

    'album-loveyourself-tear': {
        titulo: 'LOVE YOURSELF 轉 Tear',
        tracklist: `Um marco histórico: foi o primeiro álbum de K-pop a alcançar o #1 na Billboard 200. Aborda a dor da separação e o lado sombrio do amor falso.🔥 Top 3 Hits:
1. FAKE LOVE
2. The Truth Untold
3. Magic Shop`,
        clipeLink: 'https://www.youtube.com/watch?v=7C2z4GqqS5E'
    },

    'album-wings': {
        titulo: 'WINGS',
        tracklist: `O álbum que mudou a estética do K-pop. Introduziu solos para cada membro e explorou temas de tentação e crescimento, baseados no livro "Demian".🔥 Top 3 Hits:
1. Blood Sweat & Tears
2. Lie (Jimin Solo)
3. Boy Meets Evil`,
        clipeLink: 'https://www.youtube.com/watch?v=hmE9f-TEutc'
    },

    'album-dark-wild': {
        titulo: 'DARK & WILD',
        tracklist: `O primeiro álbum completo de estúdio. Mostra um BTS mais rebelde, com forte influência de Hip-Hop e R&B, cantando sobre amores frustrados.🔥 Top 3 Hits:
1. Danger
2. War of Hormone
3. Let Me Know`,
        clipeLink: 'https://www.youtube.com/watch?v=gwJ7J3LhWLo'
    },

    'album-japon-face': {
        titulo: 'FACE YOURSELF',
        tracklist: `Sucesso massivo no Japão, ganhando certificado de Platina Dupla. Mistura faixas originais japonesas com versões remixadas de sucessos coreanos.🔥 Top 3 Hits:
1. Don't Leave Me
2. Let Go
3. Crystal Snow`,
        clipeLink: 'https://www.youtube.com/watch?v=x0xN95hJ5xQ'
    },

    'album-japon-yfl': {
        titulo: 'YOUTH',
        tracklist: `O segundo álbum japonês, que alcançou o topo da Oricon Chart. Celebra a energia e as dificuldades da juventude.🔥 Top 3 Hits:
1. For You
2. Run (Japanese Ver.)
3. I Need U (Japanese Ver.)`,
        clipeLink: 'https://www.youtube.com/watch?v=gS9o1sFXJ6Y'
    },

    'album-japon-wake': {
        titulo: 'WAKE UP',
        tracklist: `A estreia oficial em álbuns no Japão. O título convida os fãs a "acordarem" para a música do BTS.🔥 Top 3 Hits:
1. The Stars
2. Wake Up
3. No More Dream (Japanese Ver.)`,
        clipeLink: 'https://www.youtube.com/watch?v=XQk93p7yU7k'
    },

    // ================= MINI ÁLBUNS =================
    'album-be': {
        titulo: 'BE (Deluxe Edition)',
        tracklist: `Criado durante a pandemia, é o álbum mais autoral do grupo. Transmite uma mensagem de conforto, cura e esperança para o mundo.🔥 Top 3 Hits:
1. Dynamite
2. Life Goes On
3. Blue & Grey`,
        clipeLink: 'https://www.youtube.com/watch?v=kYg-EPg3R9Y'
    },

    'album-loveyourself-her': {
        titulo: 'LOVE YOURSELF 承 Her',
        tracklist: `O início da era "Love Yourself". Um álbum brilhante e enérgico que explora a alegria e a ansiedade de se apaixonar.🔥 Top 3 Hits:
1. DNA
2. Go Go
3. Mic Drop`,
        clipeLink: 'https://www.youtube.com/watch?v=MB_dD3zF0L8'
    },

    'album-hyyh-2': {
        titulo: 'HYYH Pt. 2',
        tracklist: `A continuação do momento mais crítico da carreira. Solidificou o sucesso do grupo e entrou na Billboard 200 pela primeira vez.🔥 Top 3 Hits:
1. Run
2. Butterfly
3. Silver Spoon (Baepsae)`,
        clipeLink: 'https://www.youtube.com/watch?v=5Wn85ge200o'
    },

    'album-hyyh-1': {
        titulo: 'HYYH Pt. 1',
        tracklist: `O ponto de virada na carreira do BTS. Deixaram o hip-hop agressivo para um som mais emotivo, conquistando sua primeira vitória (Win) em programas de TV.🔥 Top 3 Hits:
1. I Need U
2. Dope
3. Hold Me Tight`,
        clipeLink: 'https://www.youtube.com/watch?v=2g_V9YvJ-4Q'
    },

    'album-skool-luv': {
        titulo: 'Skool Luv Affair',
        tracklist: `Focado no amor adolescente e na vida escolar. Mistura batidas fortes com letras românticas e rebeldes.🔥 Top 3 Hits:
1. Boy In Luv
2. Just One Day
3. Tomorrow`,
        clipeLink: 'https://www.youtube.com/watch?v=m8MfJg8K-F4'
    },

    'album-orul82': {
        titulo: 'O!RUL8,2?',
        tracklist: `Sigla para "Oh! Are you late, too?". Questiona as pressões da sociedade sobre os jovens para seguirem sonhos que não são deles.🔥 Top 3 Hits:
1. N.O
2. Attack on Bangtan
3. Coffee`,
        clipeLink: 'https://www.youtube.com/watch?v=ffW3yC-M2iY'
    },

    'album-mots-persona': {
        titulo: 'MAP OF THE SOUL: PERSONA',
        tracklist: `Um presente para os fãs, explorando a alegria do amor e o interesse pelo mundo exterior. Quebrou recordes no Guinness Book.🔥 Top 3 Hits:
1. Boy With Luv
2. Mikrokosmos
3. Dionysus`,
        clipeLink: 'https://www.youtube.com/watch?v=Xs9vWj7R0VM'
    },

    // ================= COMPILAÇÕES =================
    'album-proof': {
        titulo: 'Proof',
        tracklist: `Uma antologia massiva cobrindo 9 anos de história. Celebra o passado, presente e futuro do BTS com 3 CDs e faixas inéditas.🔥 Top 3 Hits:
1. Yet To Come
2. Run BTS
3. For Youth`,
        clipeLink: 'https://www.youtube.com/watch?v=MB6Gf_2xJnc'
    },

    'album-loveyourself-answer': {
        titulo: 'LOVE YOURSELF 結 Answer',
        tracklist: `A conclusão épica da trilogia. Ensina que amar a si mesmo é o verdadeiro amor. Inclui solos e faixas novas.🔥 Top 3 Hits:
1. Idol
2. Euphoria (Jungkook Solo)
3. Epiphany (Jin Solo)`,
        clipeLink: 'https://www.youtube.com/watch?v=pBuZEBpS-L8'
    },

    'album-ynwa': {
        titulo: 'You Never Walk Alone',
        tracklist: `Um epílogo para a era WINGS. Traz mensagens de conforto para aqueles que estão sofrendo ou se sentem sozinhos.🔥 Top 3 Hits:
1. Spring Day (A rainha das paradas)
2. Not Today
3. A Supplementary Story: You Never Walk Alone`,
        clipeLink: 'https://www.youtube.com/watch?v=xEeFrLSkMm8'
    },

    // ================= SINGLES =================
    'album-dynamite': {
        titulo: 'Dynamite',
        tracklist: `O single que explodiu globalmente. Primeira música do grupo inteiramente em inglês e a primeira a atingir o #1 na Billboard Hot 100.`,
        clipeLink: 'https://www.youtube.com/watch?v=gdZLi9oWf5c'
    },

    'album-butter': {
        titulo: 'Butter',
        tracklist: `Um hit de verão instantâneo. Quebrou recordes no YouTube e dominou a Billboard Hot 100 por semanas consecutivas.🔥 Top Hits:
1. Butter
2. Permission to Dance`,
        clipeLink: 'https://www.youtube.com/watch?v=WMweEpGlu_U'
    },

    'album-jp-bst': {
        titulo: 'Blood Sweat & Tears (JP)',
        tracklist: `A versão japonesa do hit global, acompanhada de um videoclipe visualmente deslumbrante e psicodélico.🔥 Faixas:
1. Blood Sweat & Tears (JP Ver.)
2. Spring Day (JP Ver.)`,
        clipeLink: 'https://www.youtube.com/watch?v=7hP-n1-B2qY'
    }
};

function init() {
    // ================= ELEMENTOS =================
    const modal = document.getElementById("album-modal");
    const spanFechar = document.querySelector(".fechar-modal");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalTracklist = document.getElementById("modal-tracklist");
    const modalLinkClipe = document.getElementById("modal-link-clipe");

    const cardsAlbum = document.querySelectorAll(".card-album");
    const filtroBtns = document.querySelectorAll(".filtro-btn");
    const slides = document.querySelectorAll(".slide");

    // ================= EFEITO DE SCROLL (REVEAL) - OPCIONAL =================
    // Se quiser o efeito de aparecer suavemente, descomente o bloco abaixo:
    /*
    const reveals = document.querySelectorAll(".reveal, .reveal-left");
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    */

    // ================= MODAL =================

    /**
     * Preenche o modal com dados e exibe-o.
     * @param {string} albumId - O ID do álbum para procurar em dadosAlbuns.
     */
    function abrirModal(albumId) {
        const dados = dadosAlbuns[albumId];
        if (!dados) return;

        modalTitulo.textContent = dados.titulo;
        modalTracklist.textContent = dados.tracklist; // Agora exibe o texto descritivo
        modalLinkClipe.href = dados.clipeLink;
        modal.style.display = "flex";
    }

    cardsAlbum.forEach(card => {
        card.addEventListener("click", e => {
            e.preventDefault();
            abrirModal(card.id);
        });
    });

    // Fecha o modal ao clicar no 'x' ou fora da caixa
    spanFechar.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };


    // ================= FILTRO =================

    /**
     * Aplica o filtro de álbuns e atualiza os botões.
     * @param {string} categoria - A categoria a filtrar (ex: 'studio', 'todos').
     */
    function aplicarFiltro(categoria) {
        // 1. Atualiza o estado "active" dos botões
        filtroBtns.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.categoria === categoria);
        });

        // 2. Mostra/Esconde os cards
        cardsAlbum.forEach(card => {
            const deveMostrar = categoria === "todos" || card.dataset.categoria === categoria;
            
            // Usa a classe CSS "hidden"
            card.classList.toggle("hidden", !deveMostrar);
        });
    }

    filtroBtns.forEach(btn => {
        btn.addEventListener("click", () => aplicarFiltro(btn.dataset.categoria));
    });


    // ================= SLIDER =================

    let slideIndex = 0;

    /**
     * Avança para o próximo slide no carrossel.
     */
    function nextSlide() {
        slides[slideIndex].classList.remove("current");
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add("current");
    }

    if (slides.length > 1) {
        setInterval(nextSlide, 5000);
    }

    // ================= INICIALIZAÇÃO PADRÃO =================
    
    // Inicializa mostrando todos os álbuns
    aplicarFiltro("todos");
}

// Inicializa todas as funcionalidades após o carregamento da página
window.onload = init;