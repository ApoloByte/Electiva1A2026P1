// --- AUTH ---
function toggleAuth(show) {
    document.getElementById('login-form').classList.toggle('hidden', show);
    document.getElementById('register-form').classList.toggle('hidden', !show);
}

function handleRegister() {
    const u = document.getElementById('reg-user').value;
    const p = document.getElementById('reg-pass').value;
    if(!u || !p) return alert("Llena los datos");
    let users = JSON.parse(localStorage.getItem('gc_users')) || [];
    users.push({ user: u, pass: p, avatar: `https://ui-avatars.com/api/?name=${u}&background=random` });
    localStorage.setItem('gc_users', JSON.stringify(users));
    alert("Registrado"); toggleAuth(false);
}

function handleLogin() {
    const u = document.getElementById('login-user').value;
    const p = document.getElementById('login-pass').value;
    let users = JSON.parse(localStorage.getItem('gc_users')) || [];
    const found = users.find(user => user.user === u && user.pass === p);
    if(found) {
        localStorage.setItem('gc_active', JSON.stringify(found));
        initApp();
    } else alert("Error");
}

function logout() { localStorage.removeItem('gc_active'); location.reload(); }

// --- APP ---
function initApp() {
    const session = JSON.parse(localStorage.getItem('gc_active'));
    if(!session) return;
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('app-content').classList.remove('hidden');
    document.getElementById('nav-username').innerText = session.user;
    document.getElementById('profile-name').innerText = session.user;
    document.getElementById('profile-avatar').src = session.avatar;
    renderPosts(); renderGames();
}

// --- PUBLICAR (ESTA ES LA QUE NECESITAS) ---
function publicarPost() {
    const text = document.getElementById('postInput').value.trim();
    if(!text) return;
    const session = JSON.parse(localStorage.getItem('gc_active'));
    let posts = JSON.parse(localStorage.getItem('gc_posts')) || [];
    
    posts.unshift({
        id: Date.now(),
        author: session.user,
        avatar: session.avatar,
        text: text,
        likes: 0,
        comments: [],
        date: new Date().toLocaleString()
    });

    localStorage.setItem('gc_posts', JSON.stringify(posts));
    document.getElementById('postInput').value = ""; // Limpia el textarea
    renderPosts(); // Actualiza la lista
}

function renderPosts() {
    const container = document.getElementById('feedContainer');
    const posts = JSON.parse(localStorage.getItem('gc_posts')) || [];
    container.innerHTML = posts.map(p => `
        <div class="card shadow-sm mb-3 border-0 rounded-4">
            <div class="card-body">
                <div class="d-flex align-items-center mb-2">
                    <img src="${p.avatar}" class="rounded-circle me-2" width="40">
                    <div><h6 class="mb-0 fw-bold">${p.author}</h6><small class="text-muted">${p.date}</small></div>
                </div>
                <p>${p.text}</p>
                <div class="d-flex gap-3 border-top pt-2">
                    <button class="btn btn-sm btn-light rounded-pill" onclick="likePost(${p.id})">👍 ${p.likes} Likes</button>
                    <button class="btn btn-sm btn-light rounded-pill" onclick="toggleC(${p.id})">💬 ${p.comments.length} Comentarios</button>
                </div>
                <div id="c-${p.id}" class="hidden">
                    <div class="comment-section">
                        ${p.comments.map(c => `<div class="small"><b>${c.u}:</b> ${c.t}</div>`).join('')}
                        <div class="input-group input-group-sm mt-2">
                            <input type="text" id="in-${p.id}" class="form-control" placeholder="Escribe...">
                            <button class="btn btn-primary" onclick="addComment(${p.id})">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`).join('');
}

function likePost(id) {
    let posts = JSON.parse(localStorage.getItem('gc_posts'));
    posts.find(x => x.id === id).likes++;
    localStorage.setItem('gc_posts', JSON.stringify(posts)); renderPosts();
}

function toggleC(id) { document.getElementById(`c-${id}`).classList.toggle('hidden'); }

function addComment(id) {
    const t = document.getElementById(`in-${id}`).value;
    if(!t) return;
    const session = JSON.parse(localStorage.getItem('gc_active'));
    let posts = JSON.parse(localStorage.getItem('gc_posts'));
    posts.find(x => x.id === id).comments.push({ u: session.user, t: t });
    localStorage.setItem('gc_posts', JSON.stringify(posts)); renderPosts();
}

// --- JUEGOS ---
function saveGame() {
    const t = document.getElementById('gameTitle').value;
    const i = document.getElementById('gameImg').value || 'https://via.placeholder.com/150';
    const s = document.getElementById('gameStatus').value;
    let games = JSON.parse(localStorage.getItem('gc_games')) || [];
    games.push({ id: Date.now(), t, i, s });
    localStorage.setItem('gc_games', JSON.stringify(games)); renderGames();
}

function toggleGameStatus(id) {
    let games = JSON.parse(localStorage.getItem('gc_games'));
    const g = games.find(x => x.id === id);
    const flow = {'Pendiente':'Jugando','Jugando':'Completado','Completado':'Pendiente'};
    g.s = flow[g.s] || 'Pendiente';
    localStorage.setItem('gc_games', JSON.stringify(games)); renderGames();
}

function renderGames() {
    const grid = document.getElementById('gamesGrid');
    const games = JSON.parse(localStorage.getItem('gc_games')) || [];
    grid.innerHTML = games.map(g => `
        <div class="col-md-4 mb-3"><div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
            <img src="${g.i}" class="game-img-preview">
            <div class="card-body p-2 text-center">
                <h6>${g.t}</h6>
                <span class="badge bg-primary mb-2">${g.s}</span>
                <div class="d-flex justify-content-between border-top pt-2">
                    <button class="btn btn-sm text-danger" onclick="delGame(${g.id})">🗑</button>
                    <button class="btn btn-sm text-primary" onclick="toggleGameStatus(${g.id})">🔄</button>
                </div>
            </div>
        </div></div>`).join('');
}

function delGame(id) {
    let g = JSON.parse(localStorage.getItem('gc_games'));
    localStorage.setItem('gc_games', JSON.stringify(g.filter(x => x.id !== id))); renderGames();
}

function showSection(sec) {
    document.getElementById('section-feed').classList.toggle('hidden', sec !== 'feed');
    document.getElementById('section-games').classList.toggle('hidden', sec !== 'games');
}

function toggleTheme() {
    const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
}

document.addEventListener('DOMContentLoaded', initApp);