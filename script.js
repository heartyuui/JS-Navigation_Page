document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initPage();
});

function initPage() {
    // 添加鼠标移动效果
    document.addEventListener("mousemove", function(event) {
        const tail = document.createElement("div");
        tail.classList.add("tail");
        tail.style.left = `${event.clientX}px`;
        tail.style.top = `${event.clientY}px`;
        document.body.appendChild(tail);

        setTimeout(() => {
            tail.remove();
        }, 2000);
    });

    // 显示模态框
    showModal();
}

function showModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
        modal.style.display = 'block';
        document.getElementById('backgroundContent').classList.add('blur-background');
        generateRandomContent();
    }
}

function closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
        modal.style.display = 'none';
        document.getElementById('backgroundContent').classList.remove('blur-background');
    }
}

function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}