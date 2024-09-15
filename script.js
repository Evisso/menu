// Dane menu dla każdego dnia tygodnia
const menuData = [
    { day: "Poniedziałek", menu: "Makaron z mięsem mielonym i z dodatkiem warzyw // Paweł - tortilla" },
    { day: "Wtorek", menu: "Kurczak tikka massala z chlebkiem Naan" },
    { day: "Środa", menu: "Bigos" },
    { day: "Czwartek", menu: "Bigos" },
    { day: "Piątek", menu: "Pancakes // Paweł - bigos" },
    { day: "Sobota", menu: "Filet z piersi kurczaka" },
    { day: "Niedziela", menu: "..." }
];

// Funkcja do generowania menu
function populateMenu() {
    const menuScroll = document.getElementById('menuScroll');
    
    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const dayTitle = document.createElement('h2');
        dayTitle.textContent = item.day;

        const menuDescription = document.createElement('p');
        menuDescription.textContent = item.menu;

        menuItem.appendChild(dayTitle);
        menuItem.appendChild(menuDescription);

        menuScroll.appendChild(menuItem);
    });
}

// Wywołanie funkcji po załadowaniu strony
window.onload = populateMenu;
