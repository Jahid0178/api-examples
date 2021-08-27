const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayBuddies(data));
};

loadBuddies();

const displayBuddies = data => {
    const buddies = data.results;
    console.log(buddies);
    const buddiesContainer = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}`;
        buddiesContainer.appendChild(p);
    };
};