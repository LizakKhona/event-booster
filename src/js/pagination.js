// ===== ФУНКЦІЯ ПАГІНАЦІЇ ===== \\

function setupPagination(data, renderFunction) {
    // data = всі події (З ПОШУКУ У ХЕДЕРІ) 
    // renderFunction = функція, яка малює картки (КАРТКИ З МЕЙНУ)  

    let currentPage = 1;
    const perPage = 20;

    const container = document.querySelector(".pagination");

    // ===== 1 РЕНДЕР КНОПКИ ===== \\

    // функція, яка створює кнопки
    function renderButtons() {

        container.innerHTML = ""; // очищає всі кнопки щоб не дублювались

        const totalPages = Math.ceil(data.length / perPage); // рахує, скільки всього сторінок

        for (let i = 1; i <= totalPages; i++) {

            const btn = document.createElement("button");
            btn.textContent = i;

            btn.addEventListener("click", () => { // Якщо клікнуть
                goToPage(i); // То викликається goToPage(i)
            });

            container.appendChild(btn);
        }
    }

    // ===== 2 ПЕРЕХІД СТОРІНКИ ===== \\

    // функція переходу на сторінку
    function goToPage(page) {

        currentPage = page;

        // ПАГІНАЦІЯ
        const start = (page - 1) * perPage;
        const end = start + perPage;

        const pageData = data.slice(start, end); // вирізає частину масиву з start до end

        // викликає чужий код (картки)
        renderFunction(pageData);

        updateActive(); // оновлює активну кнопку
    }

    // ===== 3. НА ЯКІЙ МИ СТОРІНКЦІ ===== \\

    // функція підсвітки кнопки
    function updateActive() {

        const buttons = container.querySelectorAll("button"); // знаходить всі кнопки

        buttons.forEach((btn, index) => { // проходишся по кожній кнопці
            btn.classList.remove("active");

            if (index + 1 === currentPage) { //якщо це поточна сторінка:
                btn.classList.add("active"); // додається active 
            }
        });
    }

    // ==========================
    // СТАРТ
    // ==========================
    renderButtons();
    goToPage(1); // відкриває першу сторінку 
}

setupPagination(headerSearch, getInfo);