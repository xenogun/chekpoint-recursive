function getTicketPriceSwitch(age) {
    switch (true) {
        case (age <= 12):
            return 10;
        case (age >= 13 && age <= 17):
            return 15;
        default:
            return 20;
    }
}


const userAge = parseInt(prompt("Entrez votre âge :"), 10);
console.log(`Le prix de votre billet est de ${getTicketPriceSwitch(userAge)} $.`);