document.addEventListener('DOMContentLoaded', function() {
    // Channel data
    const channels = [
        {
            id: 1,
            name: "Netflix",
            description: "Watch TV shows, movies, and more on Netflix. Original content available.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/7/77/Netflix_icon.svg",
            url: "https://www.netflix.com"
        },
        {
            id: 2,
            name: "YouTube",
            description: "Enjoy the videos and music you love, upload original content, and share it all.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg",
            url: "https://www.youtube.com"
        },
        {
            id: 3,
            name: "Disney+",
            description: "Disney, Pixar, Marvel, Star Wars, National Geographic and more in one place.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
            url: "https://www.disneyplus.com"
        },
        {
            id: 4,
            name: "HBO Max",
            description: "Stream all of HBO together with even more from Warner Bros., DC, Studio Ghibli, and more.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
            url: "https://www.hbomax.com"
        },
        {
            id: 5,
            name: "Prime Video",
            description: "Watch movies, TV shows, and award-winning Amazon Originals.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
            url: "https://www.primevideo.com"
        },
        {
            id: 6,
            name: "Hulu",
            description: "Stream TV shows and movies including current episodes, hit movies, Hulu Originals, kids shows, and more.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
            url: "https://www.hulu.com"
        },
        {
            id: 7,
            name: "Apple TV+",
            description: "Original stories from the most creative minds in TV and film.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Apple_TV_Plus_Logo.svg",
            url: "https://tv.apple.com"
        },
        {
            id: 8,
            name: "Peacock",
            description: "Stream TV shows, movies, news, sports, and more from NBCUniversal.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/d/d3/NBCUniversal_Peacock_Logo.svg",
            url: "https://www.peacocktv.com"
        },
        {
            id: 9,
            name: "Plex",
            description: "Your personal streaming service for all your own media.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Plex_Logo_2022.svg",
            url: "https://www.plex.tv"
        },
        {
            id: 10,
            name: "Spotify",
            description: "Music and podcasts for everyone. Millions of songs and episodes.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
            url: "https://www.spotify.com"
        },
        {
            id: 11,
            name: "Twitch",
            description: "Twitch is where millions of people come together live every day to chat, interact.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/2/26/Twitch_logo.svg",
            url: "https://www.twitch.tv"
        },
        {
            id: 12,
            name: "Crunchyroll",
            description: "The world's largest anime library. Watch over 1,000 titles—from classics to latest episodes.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.svg",
            url: "https://www.crunchyroll.com"
        }
    ];

    const channelGrid = document.getElementById('channelGrid');
    const infoTitle = document.getElementById('infoTitle');
    const infoDescription = document.getElementById('infoDescription');
    const launchButton = document.getElementById('launchButton');
    
    let selectedChannelIndex = 0;
    let channelElements = [];

    // Create channel elements
    channels.forEach((channel, index) => {
        const channelElement = document.createElement('div');
        channelElement.className = 'channel';
        channelElement.dataset.id = channel.id;
        channelElement.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = channel.icon;
        img.alt = channel.name;
        
        channelElement.appendChild(img);
        channelGrid.appendChild(channelElement);
        channelElements.push(channelElement);
        
        // Add click event
        channelElement.addEventListener('click', () => {
            selectChannel(index);
        });
    });

    // Initialize with first channel selected
    selectChannel(0);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowUp':
                moveSelection(-4);
                break;
            case 'ArrowDown':
                moveSelection(4);
                break;
            case 'ArrowLeft':
                moveSelection(-1);
                break;
            case 'ArrowRight':
                moveSelection(1);
                break;
            case 'Enter':
                launchChannel();
                break;
        }
    });

    function moveSelection(step) {
        const newIndex = selectedChannelIndex + step;
        
        // Check boundaries
        if (newIndex >= 0 && newIndex < channels.length) {
            selectChannel(newIndex);
        }
    }

    function selectChannel(index) {
        // Remove active class from previous selection
        channelElements[selectedChannelIndex].classList.remove('active');
        
        // Update selection
        selectedChannelIndex = index;
        channelElements[index].classList.add('active');
        
        // Update info panel
        const channel = channels[index];
        infoTitle.textContent = channel.name;
        infoDescription.textContent = channel.description;
        launchButton.onclick = () => {
            window.open(channel.url, '_blank');
        };
        
        // Scroll into view if needed
        channelElements[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    function launchChannel() {
        const channel = channels[selectedChannelIndex];
        window.open(channel.url, '_blank');
    }
});