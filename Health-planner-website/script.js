// Data for Balanced Diets
const dietsData = [
    { id: 1, name: 'Mediterranean Diet', category: 'balanced', description: 'Heart-healthy diet rich in fruits, vegetables, and olive oil', benefits: 'Reduces heart disease risk, improves digestion' },
    { id: 2, name: 'Plant-Based Vegan', category: 'vegan', description: 'Completely plant-based nutrition plan', benefits: 'Weight loss, lower cholesterol, better energy' },
    { id: 3, name: 'Ketogenic Diet', category: 'keto', description: 'Low-carb, high-fat diet for rapid weight loss', benefits: 'Quick weight loss, improved mental clarity' },
    { id: 4, name: 'Balanced Macro Plan', category: 'balanced', description: 'Balanced mix of proteins, carbs, and fats', benefits: 'Sustained energy, muscle growth, weight management' },
    { id: 5, name: 'Vegan Protein Power', category: 'vegan', description: 'High-protein plant-based diet', benefits: 'Muscle building, sustained energy, ethical eating' },
    { id: 6, name: 'Keto Advanced', category: 'keto', description: 'Advanced ketogenic approach with meal planning', benefits: 'Enhanced fat burning, metabolic health' }
];

// Data for Exercise Routines
const exercisesData = [
    { id: 1, name: 'Morning Cardio Blast', category: 'cardio', description: '30-minute high-intensity cardio routine', duration: '30 mins', difficulty: 'Moderate' },
    { id: 2, name: 'Full Body Strength', category: 'strength', description: 'Complete strength training with weights', duration: '45 mins', difficulty: 'Hard' },
    { id: 3, name: 'Yoga Flexibility Flow', category: 'flexibility', description: 'Gentle yoga for flexibility and relaxation', duration: '40 mins', difficulty: 'Easy' },
    { id: 4, name: 'HIIT Cardio Interval', category: 'cardio', description: 'High-intensity interval training', duration: '25 mins', difficulty: 'Very Hard' },
    { id: 5, name: 'Core Strength Builder', category: 'strength', description: 'Focused core and stability training', duration: '35 mins', difficulty: 'Hard' },
    { id: 6, name: 'Stretching & Mobility', category: 'flexibility', description: 'Dynamic stretching and mobility work', duration: '20 mins', difficulty: 'Easy' }
];

// Data for Wellness Blogs
const blogsData = [
    { id: 1, title: '10 Tips for Better Sleep', author: 'Dr. Sarah Johnson', date: '2024-01-15', excerpt: 'Discover science-backed strategies to improve your sleep quality and wake up refreshed.' },
    { id: 2, title: 'The Power of Hydration', author: 'Fitness Coach Mike', date: '2024-01-10', excerpt: 'Learn how proper hydration can boost your energy, metabolism, and overall health.' },
    { id: 3, title: 'Stress Management Techniques', author: 'Wellness Expert Lisa', date: '2024-01-08', excerpt: 'Explore effective techniques to manage stress and improve your mental well-being.' },
    { id: 4, title: 'Nutrition for Athletes', author: 'Sports Nutritionist Tom', date: '2024-01-05', excerpt: 'Optimize your diet for athletic performance and faster recovery.' },
    { id: 5, title: 'Building a Workout Habit', author: 'Life Coach Emma', date: '2024-01-01', excerpt: 'Transform your fitness routine into a sustainable habit with proven methods.' },
    { id: 6, title: 'Mental Health & Exercise', author: 'Psychologist Dr. Alex', date: '2023-12-28', excerpt: 'Understand the powerful connection between physical activity and mental health.' }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderDiets('all');
    renderExercises('all');
    renderBlogs();
});

// Render Diets
function renderDiets(category) {
    const grid = document.getElementById('diets-grid');
    grid.innerHTML = '';
    
    const filtered = category === 'all' ? dietsData : dietsData.filter(diet => diet.category === category);
    
    filtered.forEach(diet => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${diet.name}</h3>
            <p>${diet.description}</p>
            <button class="details-btn" onclick="openModal('diet', ${diet.id})">Learn More</button>
        `;
        grid.appendChild(card);
    });
}

// Render Exercises
function renderExercises(category) {
    const grid = document.getElementById('exercises-grid');
    grid.innerHTML = '';
    
    const filtered = category === 'all' ? exercisesData : exercisesData.filter(exercise => exercise.category === category);
    
    filtered.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>${exercise.description}</p>
            <p><strong>Duration:</strong> ${exercise.duration}</p>
            <button class="details-btn" onclick="openModal('exercise', ${exercise.id})">View Details</button>
        `;
        grid.appendChild(card);
    });
}

// Render Blogs
function renderBlogs() {
    const grid = document.getElementById('blogs-grid');
    grid.innerHTML = '';
    
    blogsData.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${blog.title}</h3>
            <p><strong>By ${blog.author}</strong> | ${blog.date}</p>
            <p>${blog.excerpt}</p>
            <button class="details-btn" onclick="openModal('blog', ${blog.id})">Read More</button>
        `;
        grid.appendChild(card);
    });
}

// Filter functions
function filterDiets(category) {
    updateActiveButton(event.target);
    renderDiets(category);
}

function filterExercises(category) {
    updateActiveButton(event.target);
    renderExercises(category);
}

// Update active button styling
function updateActiveButton(button) {
    const buttons = button.parentElement.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// Modal functions
function openModal(type, id) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    let content = '';
    
    if (type === 'diet') {
        const diet = dietsData.find(d => d.id === id);
        content = `
            <h2>${diet.name}</h2>
            <p>${diet.description}</p>
            <p><strong>Benefits:</strong> ${diet.benefits}</p>
        `;
    } else if (type === 'exercise') {
        const exercise = exercisesData.find(e => e.id === id);
        content = `
            <h2>${exercise.name}</h2>
            <p>${exercise.description}</p>
            <p><strong>Duration:</strong> ${exercise.duration}</p>
            <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
        `;
    } else if (type === 'blog') {
        const blog = blogsData.find(b => b.id === id);
        content = `
            <h2>${blog.title}</h2>
            <p><strong>By ${blog.author}</strong> | ${blog.date}</p>
            <p>${blog.excerpt}</p>
            <p>Read full article on our blog...</p>
        `;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
