export const useFooterAccordion = () => {
    // Проверяем ширину экрана
    const isMobile = window.innerWidth <= 377;

    // Функция для обработки кликов
    function handleFooterAccordion() {
        const footerItemTitles = document.querySelectorAll(
            '.footer__item-title',
        );

        footerItemTitles.forEach((title) => {
            title.addEventListener('click', function () {
                if (isMobile) {
                    const sublist = this.nextElementSibling;
                    if (
                        sublist &&
                        sublist.classList.contains('footer__sublist')
                    ) {
                        sublist.classList.toggle('footer__sublist--open');
                    }
                }
            });
        });
    }

    // Инициализация только если мы на мобильном разрешении
    if (isMobile) {
        // Ждем загрузки DOM
        if (document.readyState === 'loading') {
            document.addEventListener(
                'DOMContentLoaded',
                handleFooterAccordion,
            );
        } else {
            handleFooterAccordion();
        }
    }

    // Обработчик изменения размера окна (опционально)
    window.addEventListener('resize', function () {
        const newIsMobile = window.innerWidth <= 377;

        if (newIsMobile !== isMobile) {
            // Перезагружаем страницу при переходе через брейкпоинт
            // или можно переинициализировать логику здесь
            location.reload();
        }
    });
};

// Автоматическая инициализация при импорте (опционально)
// initFooterAccordion();
