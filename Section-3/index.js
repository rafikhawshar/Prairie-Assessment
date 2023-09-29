function prime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function seeprime() {
    try {
        let user_input = parseInt(prompt("Enter a number, please."));
      
        if (isNaN(user_input) || user_input <= 1) {
            console.log("Please enter a valid number greater than 1.");
        } else {
            let primeNumbers = Array.from({ length: user_input - 1 }, (_, i) => i + 2).filter(prime);
        
            console.log("Output: " + primeNumbers.join(' '));
        }
    } catch (error) {
        console.log("An error occurred: " + error.message);
    }
}
seeprime();
