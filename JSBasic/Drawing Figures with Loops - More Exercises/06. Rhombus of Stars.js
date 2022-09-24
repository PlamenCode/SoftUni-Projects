function rombOfStars(input){
        let n = Number(input[0]);
        for (let i = 1; i <= n; i++) {
            console.log(" ".repeat(n-i) + "* ".repeat(i) + " ".repeat(n-i));
        }
        for (let i = n-1; i >= 1; i--) {
            console.log(" ".repeat(n-i) + "* ".repeat(i) + " ".repeat(n-i));
        }
}
rombOfStars(['2'])