const dietsData = [
    { id: 1, name: 'Mediterranean Diet', category: 'balanced', emoji: '🥗', description: 'Rich in vegetables, lean proteins, and healthy fats for sustainable health.' },
    { id: 2, name: 'Vegan Power', category: 'vegan', emoji: '🌱', description: 'Plant-based nutrition packed with vitamins and minerals.' },
    { id: 3, name: 'Ketogenic Plan', category: 'keto', emoji: '🥑', description: 'Low-carb, high-fat diet for energy and mental clarity.' },
    { id: 4, name: 'Balanced Nutrition', category: 'balanced', emoji: '🍎', description: 'Perfect macronutrient ratio for overall wellness.' },
    { id: 5, name: 'Vegan Athlete', category: 'vegan', emoji: '🌾', description: 'High-protein plant-based meals for active individuals.' },
    { id: 6, name: 'Keto Beginner', category: 'keto', emoji: '🥩', description: 'Simple keto recipes to get you started.' },
];

const exercisesData = [
    { id: 1, name: 'Morning Run', category: 'cardio', emoji: '🏃', description: '30-minute cardio session to boost energy.' },
    { id: 2, name: 'Strength Training', category: 'strength', emoji: '💪', description: 'Build muscle with effective resistance exercises.' },
    { id: 3, name: 'Yoga Flow', category: 'flexibility', emoji: '🧘', description: 'Improve flexibility and mental peace.' },
    { id: 4, name: 'HIIT Workout', category: 'cardio', emoji: '⚡', description: 'High-intensity interval training for maximum results.' },
    { id: 5, name: 'Weight Lifting', category: 'strength', emoji: '🏋️', description: 'Advanced strength and conditioning program.' },
    { id: 6, name: 'Pilates Core', category: 'flexibility', emoji: '🤸', description: 'Core strengthening through controlled movements.' },
];

const blogsData = [
    { id: 1, title: '10 Tips for Healthy Living', emoji: '✨', excerpt: 'Discover practical habits that transform your health.' },
    { id: 2, title: 'Understanding Nutrition Labels', emoji: '📊', excerpt: 'Learn to make informed food choices.' },
    { id: 3, title: 'Exercise Motivation Hacks', emoji: '🎯', excerpt: 'Stay committed to your fitness goals.' },
    { id: 4, title: 'Sleep and Recovery', emoji: '😴', excerpt: 'Optimize rest for better performance.' },
    { id: 5, title: 'Mental Health Matters', emoji: '🧠', excerpt: 'Wellness includes mental well-being.' },
    { id: 6, title: 'Meal Prep Guide', emoji: '🍲', excerpt: 'Save time with smart meal preparation.' },
];

function renderDiets(filter = 'all') {
    const grid = document.getElementById('diets-grid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? dietsData : dietsData.filter(d => d.category === filter);
    
    filtered.forEach(diet => {
        const card = createCard(diet.name, diet.emoji, diet.description, diet.category, 'diet');
        grid.appendChild(card);
    });
}

function renderExercises(filter = 'all') {
    const grid = document.getElementById('exercises-grid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? exercisesData : exercisesData.filter(e => e.category === filter);
    
    filtered.forEach(exercise => {
        const card = createCard(exercise.name, exercise.emoji, exercise.description, exercise.category, 'exercise');
        grid.appendChild(card);
    });
}

function renderBlogs() {
    const grid = document.getElementById('blogs-grid');
    grid.innerHTML = '';
    
    blogsData.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">${blog.emoji}</div>
            <div class="card-content">
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <button class="card-btn" onclick="openModal('${blog.title}', '${blog.excerpt}')">Read More</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function createCard(name, emoji, description, category, type) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-img">${emoji}</div>
        <div class="card-content">
            <h3>${name}</h3>
            <p>${description}</p>
            <span class="card-tag">${category}</span>
            <button class="card-btn" onclick="openModal('${name}', '${description}')">Learn More</button>
        </div>
    `;
    return card;
}

function filterDiets(category) {
    updateFilterButtons(event.target);
    renderDiets(category);
}

function filterExercises(category) {
    updateFilterButtons(event.target);
    renderExercises(category);
}

function updateFilterButtons(btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function openModal(title, content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderDiets();
    renderExercises();
    renderBlogs();
});
