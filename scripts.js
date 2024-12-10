/*<!-- home -->*/
document.addEventListener('DOMContentLoaded', () =>{

    const artistsData = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gustavo Lima', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' }
    ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg' }
    ];

    const artistsContainer = document.querySelector('.artists');
    const albumsContainer = document.querySelector('.albuns');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Função para renderizar os artistas
    const renderArtists = (data) => {
        artistsContainer.innerHTML = '';
        data.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.classList.add('artistCard');

            artistCard.innerHTML = `
                <img src="${artist.image}" alt="Imagem de ${artist.name}">
                <div>
                    <h3>${artist.name}</h3>
                    <p>Artista</p>
                </div>
            `;

            artistsContainer.appendChild(artistCard);
        });
    };

    // Função para renderizar os álbuns
    const renderAlbums = (data) => {
        albumsContainer.innerHTML = '';
        data.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.classList.add('albumCard');

            albumCard.innerHTML = `
                <img src="${album.image}" alt="Imagem de ${album.name}">
                <div>
                    <h3>${album.name}</h3>
                    <p>${album.artist}</p>
                </div>
            `;

            albumsContainer.appendChild(albumCard);
        });
    };

    // Renderiza todos os artistas e álbuns inicialmente
    renderArtists(artistsData);
    renderAlbums(albumsData);

    // Função de busca para filtrar artistas e álbuns
    const handleSearch = () => {
        const query = searchInput.value.trim().toLowerCase();

        const filteredArtists = artistsData.filter(artist =>
            artist.name.toLowerCase().includes(query)
        );

        const filteredAlbums = albumsData.filter(album =>
            album.name.toLowerCase().includes(query) || album.artist.toLowerCase().includes(query)
        );

        renderArtists(filteredArtists);
        renderAlbums(filteredAlbums);
    };

    // Evento de clique no botão de busca
    searchButton.addEventListener('click', handleSearch);

    // Evento de pressionar Enter no campo de busca
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });




    document.querySelector('.login-button').addEventListener('click', () => {
        window.location.href = 'login.html'; // Redireciona para a página de login
    });

    document.querySelector('.signup-button').addEventListener('click', () => {
        window.location.href = 'signup.html'; // Redireciona para a página de cadastro
    });

    /*<!-- contact -->*/
    const contactForm = document.getElementById('contact');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso!');
            setTimeout(() => {
                location.reload(); // Recarrega a página após a confirmação
            }, 500);
        });
    }

    document.querySelector('.login-button').addEventListener('click', () => {
        window.location.href = 'login.html'; // Redireciona para a página de login
    });
    
    document.querySelector('.signup-button').addEventListener('click', () => {
        window.location.href = 'signup.html'; // Redireciona para a página de cadastro
    });
    
    
    /*<!-- contact -->*/
    document.getElementById('contact').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        setTimeout(() => {
            location.reload(); // Recarrega a página após a confirmação
        }, 500); // Aguarda 0.5 segundo antes de recarregar
    });
})