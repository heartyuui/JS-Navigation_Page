document.addEventListener('DOMContentLoaded', function() {
    initPage();
});

function initPage() {
    console.log("页面初始化");

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

function generateRandomContent() {
    const modalText = document.getElementById('modalText');
    if (modalText) {
        modalText.textContent = `1.该页面中的所有功能和界面仅用于演示目的，不代表最终版本。实际功能可能会根据开发进度和用户反馈进行调整和更新。`;
    }
}

