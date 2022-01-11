const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(data => displayUsers(data));
}
loadUsers();

const displayUsers = data => {
    // console.log(data.results);
    const buddiess = data.results;

    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddiess) {
        console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerText = buddy.email;
        buddiesDiv.appendChild(p);

        const pp = document.createElement('p');
        pp.innerText = buddy.name.first + ' ' + buddy.name.last;
        buddiesDiv.appendChild(pp);
    }

}