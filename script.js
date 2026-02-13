// Ждем, когда загрузится страница
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== СЕКРЕТНЫЙ БЛОК 1 =====
    const secretBtn = document.getElementById('secretBtn');
    const secretContent = document.getElementById('secretContent');
    
    let clickCount = 0;
    
    secretBtn.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 1) {
            secretContent.innerHTML = '💖 Я тебя люблю, Буся! 💖';
        } else if (clickCount === 2) {
            secretContent.innerHTML = '💗 ОЧЕНЬ-ОЧЕНЬ ЛЮБЛЮ! 💗';
        } else if (clickCount === 3) {
            secretContent.innerHTML = '💓 ТЫ САМЫЙ ЛУЧШИЙ НА СВЕТЕ! 💓';
        } else if (clickCount === 4) {
            secretContent.innerHTML = '💞 Бесконечно ❤️';
        } else {
            secretContent.innerHTML = '💕 ' + '❤️ '.repeat(clickCount) + '💕';
        }
        
        secretContent.classList.add('show');
    });
    
    // ===== СЕКРЕТНЫЙ БЛОК 2 =====
    const secretBtn2 = document.getElementById('secretBtn2');
    const secretContent2 = document.getElementById('secretContent2');
    
    secretBtn2.addEventListener('click', function() {
        // Генерируем случайное число сердечек
        const heartCount = Math.floor(Math.random() * 50) + 20; // от 20 до 70
        
        let hearts = '';
        for (let i = 0; i < heartCount; i++) {
            hearts += '❤️';
        }
        
        secretContent2.innerHTML = hearts + '<br><span style="font-size: 14px;">' + heartCount + ' сердечек! Каждое — с любовью</span>';
        secretContent2.classList.add('show');
    });
    
    // ===== ДОБАВЛЯЕМ ПЛАВАЮЩИЕ СЕРДЕЧКИ =====
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.zIndex = '999';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `floatHeart ${Math.random() * 3 + 4}s linear forwards`;
        
        // Добавляем стиль анимации, если его еще нет
        if (!document.querySelector('#heartAnimation')) {
            const style = document.createElement('style');
            style.id = 'heartAnimation';
            style.innerHTML = `
                @keyframes floatHeart {
                    0% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
                    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(heart);
        
        // Удаляем сердечко после анимации
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
    
    // Запускаем сердечки каждые 300мс
    setInterval(createFloatingHeart, 300);
    
    // ===== НЕБОЛЬШОЙ СЮРПРИЗ =====
    // Добавим аниме-шрифт для заголовка
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        nameElement.style.fontFamily = "'Montserrat Alternates', sans-serif";
    }
    
    // И добавим маленький футбольный мяч в угол
    const football = document.createElement('div');
    football.innerHTML = '⚽';
    football.style.position = 'fixed';
    football.style.bottom = '10px';
    football.style.left = '10px';
    football.style.fontSize = '24px';
    football.style.opacity = '0.2';
    football.style.zIndex = '999';
    football.style.transform = 'rotate(0deg)';
    football.style.transition = 'transform 0.5s';
    
    football.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(360deg)';
        this.style.opacity = '0.8';
    });
    
    football.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg)';
        this.style.opacity = '0.2';
    });
    
    document.body.appendChild(football);
    
    // И добавим маленькую принцессу
    const princess = document.createElement('div');
    princess.innerHTML = '👑';
    princess.style.position = 'fixed';
    princess.style.bottom = '40px';
    princess.style.left = '10px';
    princess.style.fontSize = '20px';
    princess.style.opacity = '0.2';
    princess.style.zIndex = '999';
    
    princess.addEventListener('mouseover', function() {
        this.style.opacity = '0.8';
        this.style.fontSize = '30px';
    });
    
    princess.addEventListener('mouseout', function() {
        this.style.opacity = '0.2';
        this.style.fontSize = '20px';
    });
    
    document.body.appendChild(princess);
    
    // Сообщение в консоль (он не увидит, но нам приятно)
    console.log('💝 Сайт для Буси и Семенчика загружен! 💝');
    
    // ===== ПРИВЕТСТВИЕ ПО КЛИКУ НА ЗАГОЛОВОК =====
    const title = document.querySelector('.main-title');
    title.addEventListener('click', function() {
        alert('💌 Буся, Семенчик тебя любит! 💌');
    });
    
});
