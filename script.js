// Dane menu dla każdego dnia tygodnia
const menuData = {
    "Poniedziałek": "Makaron z mięsem mielonym i z dodatkiem warzyw // Paweł - tortilla",
    "Wtorek": "Kurczak tikka massala z chlebkiem Naan",
    "Środa": "Bigos",
    "Czwartek": "Bigos",
    "Piątek": "Pancakes // Paweł - bigos",
    "Sobota": "Filet z piersi kurczaka",
    "Niedziela": "Tortilla z kurczakiem"
};

// Funkcja, która wyświetla menu dla danego dnia
function showDayMenu(day) {
    const tableBody = document.querySelector('#menuTable tbody');
    tableBody.innerHTML = ''; // Wyczyszczenie tabeli przed dodaniem nowych danych

    const row = document.createElement('tr');
    const dayCell = document.createElement('td');
    const menuCell = document.createElement('td');

    dayCell.textContent = day;
    menuCell.textContent = menuData[day];

    row.appendChild(dayCell);
    row.appendChild(menuCell);
    tableBody.appendChild(row);
}

// Wyświetl domyślnie menu dla niedzieli przy pierwszym załadowaniu strony
window.onload = function() {
    showDayMenu('Niedziela');
};
