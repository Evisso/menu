// Tablica z menu na każdy dzień
const menuData = [
    { day: "Niedziela", menu: "Tortilla z kurczakiem" }
    { day: "Poniedziałek", menu: "Makaron z mięsem mielonym i z dodatkiem warzyw // Paweł - tortilla" },
    { day: "Wtorek", menu: "Kurczak tikka massala z chlebkiem Naan" },
    { day: "Środa", menu: "Bigos" },
    { day: "Czwartek", menu: "Bigos" },
    { day: "Piątek", menu: "Pancakes // Paweł - bigos" },
    { day: "Sobota", menu: "Filet z piersi kurczaka" },
];

// Funkcja do dynamicznego dodawania wierszy do tabeli
function populateMenu() {
    const tableBody = document.getElementById('menuTable');

    menuData.forEach(item => {
        const row = document.createElement('tr');
        const dayCell = document.createElement('td');
        const menuCell = document.createElement('td');

        dayCell.textContent = item.day;
        menuCell.textContent = item.menu;

        row.appendChild(dayCell);
        row.appendChild(menuCell);

        tableBody.appendChild(row);
    });
}

// Wywołanie funkcji po załadowaniu strony
window.onload = populateMenu;
