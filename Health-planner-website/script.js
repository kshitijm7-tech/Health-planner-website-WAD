const dietsData = [
    { id: 1, name: 'Mediterranean Diet', category: 'balanced', imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999', description: 'Rich in vegetables, lean proteins, and healthy fats for sustainable health.' },
    { id: 2, name: 'Vegan Power', category: 'vegan', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd', description: 'Plant-based nutrition packed with vitamins and minerals.' },
    { id: 3, name: 'Ketogenic Plan', category: 'keto', imageUrl: 'https://images.unsplash.com/photo-1532556467393-909d573b416b', description: 'Low-carb, high-fat diet for energy and mental clarity.' },
    { id: 4, name: 'Balanced Nutrition', category: 'balanced', imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', description: 'Perfect macronutrient ratio for overall wellness.' },
    { id: 5, name: 'Vegan Athlete', category: 'vegan', imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba1a033', description: 'High-protein plant-based meals for active individuals.' },
    { id: 6, name: 'Keto Beginner', category: 'keto', imageUrl: 'https://images.unsplash.com/photo-1554222216-a34242152b9d', description: 'Simple keto recipes to get you started.' },
    { id: 7, name: 'Paleo Diet', category: 'balanced', imageUrl: 'https://images.unsplash.com/photo-1543362905-f2423ef7e052', description: 'Focuses on whole foods, lean proteins, fruits, and vegetables.' },
    { id: 8, name: 'Low-Carb Diet', category: 'keto', imageUrl: 'https://images.unsplash.com/photo-1528738478935-423b98436532', description: 'A diet that restricts carbohydrates, such as those found in sugary foods, pasta, and bread.' },
];

const exercisesData = [
    { id: 1, name: 'Morning Run', category: 'cardio', imageUrl: 'https://images.unsplash.com/photo-1475257026014-a9d443653372', description: '30-minute cardio session to boost energy.' },
    { id: 2, name: 'Strength Training', category: 'strength', imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5', description: 'Build muscle with effective resistance exercises.' },
    { id: 3, name: 'Yoga Flow', category: 'flexibility', imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b', description: 'Improve flexibility and mental peace.' },
    { id: 4, name: 'HIIT Workout', category: 'cardio', imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438', description: 'High-intensity interval training for maximum results.' },
    { id: 5, name: 'Weight Lifting', category: 'strength', imageUrl: 'https://images.unsplash.com/photo-1581009137042-c5521683452f', description: 'Advanced strength and conditioning program.' },
    { id: 6, name: 'Pilates Core', category: 'flexibility', imageUrl: 'https://images.unsplash.com/photo-1599449833775-3580459c35b8', description: 'Core strengthening through controlled movements.' },
    { id: 7, name: 'Cycling', category: 'cardio', imageUrl: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182', description: 'A great way to build lower body strength and improve cardiovascular fitness.' },
    { id: 8, name: 'Swimming', category: 'strength', imageUrl: 'https://images.unsplash.com/photo-1552554228-e053c4014168', description: 'A full-body workout that is easy on the joints.' },
];

const blogsData = [
    { id: 1, title: '10 Tips for Healthy Living', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773', excerpt: 'Discover practical habits that transform your health.' },
    { id: 2, title: 'Understanding Nutrition Labels', imageUrl: 'https://images.unsplash.com/photo-1579867500984-8a4279781664', excerpt: 'Learn to make informed food choices.' },
    { id: 3, title: 'Exercise Motivation Hacks', imageUrl: 'https://images.unsplash.com/photo-1552672553-f3c57404a378', excerpt: 'Stay committed to your fitness goals.' },
    { id: 4, title: 'Sleep and Recovery', imageUrl: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d', excerpt: 'Optimize rest for better performance.' },
    { id: 5, title: 'Mental Health Matters', imageUrl: 'https://images.unsplash.com/photo-1591543620782-1a24d5a9b704', excerpt: 'Wellness includes mental well-being.' },
    { id: 6, title: 'Meal Prep Guide', imageUrl: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77', excerpt: 'Save time with smart meal preparation.' },
    { id: 7, title: 'The Benefits of a Morning Workout', imageUrl: 'https://images.unsplash.com/photo-1522898467494-603b1433c395', excerpt: 'Start your day with a boost of energy and focus.' },
    { id: 8, title: 'The Importance of Hydration', imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2', excerpt: 'Learn how proper hydration can improve your health and performance.' },
];

const quotes = [
    { text: "The greatest wealth is health.", author: "Virgil" },
    { text: "He who has health has hope; and he who has hope, has everything.", author: "Thomas Carlyle" },
    { text: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.", author: "Buddha" },
    { text: "A healthy outside starts from the inside.", author: "Robert Urich" },
];

function renderQuote() {
    const quoteContainer = document.getElementById('quote-container');
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.innerHTML = `
        <p id="quote-text">"${quote.text}"</p>
        <p id="quote-author">- ${quote.author}</p>
    `;
}

function renderDiets(filter = 'all') {
    const grid = document.getElementById('diets-grid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? dietsData : dietsData.filter(d => d.category === filter);
    
    filtered.forEach(diet => {
        const card = createCard(diet.name, diet.imageUrl, diet.description, diet.category, 'diet', diet.id);
        grid.appendChild(card);
    });
}

function renderExercises(filter = 'all') {
    const grid = document.getElementById('exercises-grid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? exercisesData : exercisesData.filter(e => e.category === filter);
    
    filtered.forEach(exercise => {
        const card = createCard(exercise.name, exercise.imageUrl, exercise.description, exercise.category, 'exercise', exercise.id);
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
            <img src="${blog.imageUrl}" alt="${blog.title}" class="card-img">
            <div class="card-content">
                <h3>${blog.title}</h3>
                <p>${blog.excerpt}</p>
                <button class="card-btn" onclick="openModal('blog', ${blog.id})">Read More</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function createCard(name, imageUrl, description, category, type, id) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${imageUrl}" alt="${name}" class="card-img">
        <div class="card-content">
            <h3>${name}</h3>
            <p>${description}</p>
            <span class="card-tag">${category}</span>
            <button class="card-btn" onclick="openModal('${type}', ${id})">Learn More</button>
        </div>
    `;
    return card;
}

function filterDiets(category) {
    const dietsSection = document.getElementById('diets');
    const btn = event.target;
    updateFilterButtons(btn, dietsSection);
    renderDiets(category);
}

function filterExercises(category) {
    const exercisesSection = document.getElementById('exercises');
    const btn = event.target;
    updateFilterButtons(btn, exercisesSection);
    renderExercises(category);
}

function updateFilterButtons(btn, section) {
    section.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function openModal(type, id) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    let item;
    if (type === 'diet') {
        item = dietsData.find(d => d.id === id);
    } else if (type === 'exercise') {
        item = exercisesData.find(e => e.id === id);
    } else {
        item = blogsData.find(b => b.id === id);
    }

    modalBody.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name || item.title}" class="modal-img">
        <h2>${item.name || item.title}</h2>
        <p>${item.description || item.excerpt}</p>
    `;
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderDiets();
    renderExercises();
    renderBlogs();
    renderQuote();
});

const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    newsletterForm.querySelector('input').value = '';
});
