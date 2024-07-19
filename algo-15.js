// Funksiya: Arraydəki bütün ədədlərin tək olub olmadığını yoxlayır
function areAllOdd(array) {
    // Arraydəki hər bir ədəd üçün yoxlama aparır
    for (const number of array) {
        // Əgər ədəd çütdürsə, false qaytarır
        if (number % 2 === 0) {
            return false;
        }
    }
    // Əgər bütün ədədlər təkdirsə, true qaytarır
    return true;
}

// Nümunə istifadəsi
const numbersArray = [1, 3, 5, 7, 9];
const result = areAllOdd(numbersArray);
console.log("Bütün ədədlər təkdir mi?", result);