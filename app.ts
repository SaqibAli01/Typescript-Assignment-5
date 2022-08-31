
var Question1 = () => {
    var userinputNum1: string | null = prompt("Please Enter Number A");
    var userinputNum2: string | null = prompt("Please Enter Number B");
    if (userinputNum1 && userinputNum2) {

        var Num1: number = parseInt(userinputNum1)
        var Num2: number = parseInt(userinputNum2)

        if (Num1 > Num2) {
            console.log("Number One Is maximum", Num1);
            alert("Number One Is maximum " + Num1);
        }
        else if (Num1 < Num2) {
            console.log("Number Two Is maximum", Num2);
            alert("Number Two Is maximum " + Num2);
        }

        else {
            console.log("Number Two Is maximum", Num2);
            alert("Number One " + Num1 + " Number Two " + Num2 + " Both Number is equal");
        }
    }
}
//question no two.......................

var myQuestion2 = () => {
    var userinputNum1: string | null = prompt("Please Enter Number A");
    var userinputNum2: string | null = prompt("Please Enter Number B");
    var userinputNum3: string | null = prompt("Please Enter Number C");

    if (userinputNum1 && userinputNum2 && userinputNum3) {

        var Num1: number = parseInt(userinputNum1);
        var Num2: number = parseInt(userinputNum2);
        var Num3: number = parseInt(userinputNum3);

        if (Num1 > Num2 && Num1 > Num3) {
            console.log("Number One Is maximum", Num1);
            alert("Number One Is maximum " + Num1);
        }


        else if (Num2 > Num1 && Num2 > Num3) {
            console.log("Number Two Is maximum", Num2);
            alert("Number Two Is maximum " + Num2);
        }


        else if (Num3 > Num2 && Num3 > Num1) {
            console.log("Number Three Is maximum", Num3);
            alert("Number Three Is maximum " + Num3);
        }

        else if (Num1 == Num2 && Num1 > Num3) {
            console.log("Both One & Two No is Equal " + " " + Num1 + " " + Num2 + " Number Three is Minimum No One & Two " + Num3);
            alert("Both One & Two No is Equal " + " " + Num1 + " " + Num2 + " Number Three is Minimum No One & Two  " + Num3);
        }

        else if (Num1 < Num2 && Num2 == Num3) {
            console.log("Both Two & Three No is Equal " + " " + Num2 + " " + Num3 + " Number One is Minimum No One & Two " + Num1);
            alert("Both Two & Three No is Equal " + " " + Num2 + " " + Num3 + " Number One is Minimum No Two & Three " + Num1);
        }


        else if (Num1 == Num2 && Num1 == Num3 && Num2 == Num3) {

            console.log("All Number is Equal" + " " + Num1 + " " + Num2 + " " + Num3);
            alert("All Number is Equal" + " " + Num1 + " " + Num2 + " " + Num3);
        }
        else {
            console.log("Please Again Your Enter Numbers ");

        }
    }
}
//question no three
var myQuestion3 = () => {
    var userinputNum1: string | null = prompt("Enter Number A");
    var userinputNum2: string | null = prompt("Enter Number B");
    if (userinputNum1 && userinputNum2) {
        var Num1: number = parseInt(userinputNum1);
        var Num2: number = parseInt(userinputNum2);

        if (Num1 > 0 && Num2 > 0) {
            console.log("Number is Postive ");
            alert(`Number ${Num1} & ${Num2} is Postive`);
        }
        else if (Num1 < 0 && Num2 < 0) {
            console.log("Number is Negative ");
            alert(`Number ${Num1} & ${Num2} is Negative`);
        }

        else if (Num1 == 0 && Num2 == 0) {
            console.log("Number is Zero ");
            alert(`Number ${Num1} & ${Num2} is Zero`);
        }
        else if ((Num1 > 0 && Num2 < 0) || (Num1 < 0 && Num2 > 0)) {
            console.log("Both Number  is  Postive And Negative ");
            alert(`Both Number  ${Num1} & ${Num2} is Postive And Negative`);
        }

        else if ((Num1 >= 0 && Num2 > 0) || (Num1 > 0 && Num2 >= 0)) {
            console.log(" Number  is  Postive");
            alert(` Number A ${Num1} & B ${Num2} is Postive Number`);
        }
        else if ((Num1 <= 0 && Num2 < 0) || (Num1 < 0 && Num2 <= 0)) {
            console.log(" Number  is  Negative");
            alert(` Number A ${Num1} & B ${Num2} is Negative Number`);
        }

        else {
            alert("Please Enter Your Again Number")
        }
    }
}

//question no 4
var myQuestion4 = () => {

    var userinputNum1: string | null = prompt("Enter Your Number A 5", "5");
    var userinputNum2: string | null = prompt("Enter Your Number A 11", "11");


    if (userinputNum1 && userinputNum2) {
        var Num1: number = parseInt(userinputNum1);
        var Num2: number = parseInt(userinputNum2);

        if ((Num1 / 5 == 1 && Num2 / 11 == 1)) {
            console.log("a number is divisible by 5 and 11 ");
            alert(`A number ${Num1} & ${Num2} is divisible by 5 and 11 `);
        }
        else {
            console.log("or Not number is divisible by 5 and 11 ");
            alert(`or Not number ${Num1} & ${Num2} is divisible by 5 and 11 `);
        }
    }
}

// question 5 

var myQuestion5 = () => {

    var userinputNum1: string | null = prompt("Enter Your Number even and odd ");

    if (userinputNum1) {
        var Num1: number = parseInt(userinputNum1);

        if (Num1 % 2 == 1) {
            console.log("the number is odd. ");
            alert(`the number ${Num1} is odd. `);
        }

        else {
            console.log("the number is Even. ");
            alert(`the Number ${Num1}  is Even. `);
        }


    }
}

// question no 6 
var myQuestion6 = () => {

    var userinputNum1: string | null = prompt("Enter Your Year", " 2000 ");

    if (userinputNum1) {
        var year: number = parseInt(userinputNum1);

        var leapYear: any = new Date(year, 1, 29).getDate() === 29;

        if (leapYear) {
            alert(`${year} is a leap Year`);
        }
        else {
            alert(`${year} is not a leap Year`);
        }

    }

}

// question no 7 
var myQuestion7 = () => {

    var latter: string | null = prompt("Enter Your alphabet A to Z", "A");

    if (latter?.length == 1) {

        if ((latter >= 'a' && latter <= 'z') || (latter >= 'A' && latter <= 'Z')) {
            alert(`${latter} is  a alphabet `);
        }
        else {
            alert(`${latter} is Not  a alphabet `);
        }
    }
    else {
        alert(`please Enter One Character ${latter}`);
    }

}

// question no 8 
var myQuestion8 = () => {

    var latter: string | null = prompt("Enter Your vowel or consonant");
    var words: any = latter?.toLowerCase();
    if (words?.length == 1) {

        if ((words == 'a') || (words == 'e') || (words == 'i') || (words == 'o') || (words == 'u')) {
            alert(`it is vowel ${words}`)
        }
        else {
            alert(`it is consonant  ${words}`)
        }
    }
    else {
        alert("Please Enter 1 Character")
    }
}

// question no 9 
var myQuestion9 = () => {

    var latter: string | null = prompt("Enter Your  alphabet , digit or special character");
    var words: any = latter?.toLowerCase();


    if (words >= 'a' && words <= 'z') {
        alert(`${words} Alphabet Character `)
    }

    else if (words >= '0' && words <= '9') {
        alert(`${words} Digit `)
    }

    else if ((words >= 'a' || words >= '0') && (words <= 'z' || words <= '9')) {
        alert(`${words} alphabet & Digit `)
    }

    else {
        alert(`${words}  is special Character `)
    }

}

// question no 10 
var myQuestion10 = () => {

    var latter: string | null = prompt("Enter Your  uppercase or lowercase alphabet");

    if (latter === latter?.toUpperCase()) {
        alert(`${latter}  is Uppercase alphabet`);
    }
    else if (latter === latter?.toLowerCase()) {
        alert(`${latter}  is Lowercase alphabet`);
    }
    else {
        alert(`${latter}  is Uppercase && Lowercase alphabet`);
    }
}

// question no 11 
var myQuestion11 = () => {

    var userinputNum1: string | null = prompt("Please enter week number between 1-7.");

    if (userinputNum1) {

        var Num: number = parseInt(userinputNum1);
        if (Num == 1) {
            alert(`${Num}  Monday`);
        }
        else if (Num == 2) {
            alert(`${Num}  Tuesday`);
        }
        else if (Num == 3) {
            alert(`${Num}  Wednesday`);
        }
        else if (Num == 4) {
            alert(`${Num}  Thursday`);
        }
        else if (Num == 5) {
            alert(`${Num}  Friday`);
        }
        else if (Num == 6) {
            alert(`${Num}  Saturday`);
        }
        else if (Num == 7) {
            alert(`${Num}  Sunday`);
        }
        else {
            alert(`${Num}  Please enter week number between 1-7`);
        }
    }

}

// question no 12 
var myQuestion12 = () => {

    var userinputNum1: string | null = prompt("Please enter week number between 1-7.");

    if (userinputNum1) {
        var monthNumber: number = parseInt(userinputNum1);
        // var dt = new Date();
        // var month = dt.getMonth();
        // var year = dt.getFullYear();
        // var daysInMonth = new Date(year, month, 0).getDate();
        var dt = new Date();
        var month = dt.getMonth();
        var year = dt.getFullYear();
        var ShowDate = new Date(year, month, monthNumber).getDate();
        alert("ShowDate " + ShowDate);
        console.log("ShowDate " + ShowDate);

    }
}

// question no 13 
var myQuestion13 = () => {

    var userinputNum1: string | null = prompt("Please Enter the amount.");
    if (userinputNum1) {
        var amount: number = parseInt(userinputNum1);
        var note5000: number = 0;
        var note1000: number = 0;
        var note500: number = 0;
        var note100: number = 0;
        var note50: number = 0;
        var note20: number = 0;
        var note10: number = 0;
        var note5: number = 0;
        var note2: number = 0;
        var note1: number = 0;

        // note5000=note1000=note500=note100=note50=note10=note5=note2=note1 =0

        if (amount >= 5000) {
            note5000 = amount / 5000;
            amount = amount - (note5000 * 5000);
        }

       else if (amount >= 1000) {
            note1000 = amount / 1000;
            amount = amount - (note1000 * 1000);
        }
        else  if (amount >= 500) {
            note500 = amount / 500;
            amount = amount - (note500 * 500);
        }
        else  if (amount >= 100) {
            note100 = amount / 100;
            amount = amount - (note100 * 100);
        }
        else     if (amount >= 50) {
            note50 = amount / 50;
            amount = amount - (note50 * 50);
        }
        else  if (amount >= 20) {
            note20 = amount / 20;
            amount = amount - (note20 * 20);
        }
        else   if (amount >= 10) {
            note10 = amount / 10;
            amount = amount - (note10 * 10);
        }
        else  if (amount >= 5) {
            note5 = amount / 5;
            amount = amount - (note5 * 5);
        }
        else  if (amount >= 2) {
            note2 = amount / 2;
            amount = amount - (note2 * 2);
        }
        else   if (amount >= 1) {
            note1 = amount / 1;
            amount = amount - (note1 * 1);
        }

        alert(`Enter the amount: ${amount}
                Note 5000  ${note5000} 
                Note 1000  ${note1000}   
                Note 500  ${note500} 
                Note 100  ${note100}   
                Note 50  ${note50}  
                Note 20  ${note20}   
                Note 10  ${note10}  
                Note 5  ${note5}  
                Note 2  ${note2} 
                Note 1  ${note1}  
                `)
        console.log(`Enter the amount: ${amount}`);
        console.log(`Note 5000  ${note5000} `);
        console.log(`Note 1000  ${note1000} `);

        console.log(`Note 500  ${note500} `);
        console.log(`Note 50  ${note50} `);
        console.log(`Note 10  ${note10} `);
        console.log(`Note 5  ${note5} `);
        console.log(`Note 2  ${note2} `);
        console.log(`Note 1  ${note1} `);


    }
}

// question no 14 
var myQuestion14 = () => {

    var userinputNum1: string | null = prompt("Please Enter Your No A.");
    var userinputNum2: string | null = prompt("Please Enter Your No B.");
    var userinputNum3: string | null = prompt("Please Enter Your No C.");

    if (userinputNum1 && userinputNum2 && userinputNum3) {

        var Num1: number = parseInt(userinputNum1);
        var Num2: number = parseInt(userinputNum2);
        var Num3: number = parseInt(userinputNum3);

        var sumThree: number = Num1 + Num2 + Num3;

        if (sumThree === 180 && Num1 > 0 && Num2 > 0 && Num3 > 0) {
            alert(`triangle is equal to  ${sumThree}  degrees`);
        }
        else {
            alert(`  ${sumThree}  Not a triangle is not equal to 180 degrees`);
        }
    }
}

// question no 15 
var myQuestion15 = () => {

    var userinputNum1: string | null = prompt("Please Enter Your No A.");
    var userinputNum2: string | null = prompt("Please Enter Your No B.");
    var userinputNum3: string | null = prompt("Please Enter Your No C.");

    if (userinputNum1 && userinputNum2 && userinputNum3) {

        var a: number = parseInt(userinputNum1);
        var b: number = parseInt(userinputNum2);
        var c: number = parseInt(userinputNum3);

        if (a + b > c && a + c > b && b + c > a) {
            alert(`A triangle is valid ${a} ${b} ${c}`)
        }
        else {
            alert('A triangle is Not valid')
        }

    }
}

// question no 16 
var myQuestion16 = () => {

    var userinputNum1: string | null = prompt("Please Enter Your No A.");
    var userinputNum2: string | null = prompt("Please Enter Your No B.");
    var userinputNum3: string | null = prompt("Please Enter Your No C.");

    if (userinputNum1 && userinputNum2 && userinputNum3) {

        var a: number = parseInt(userinputNum1);
        var b: number = parseInt(userinputNum2);
        var c: number = parseInt(userinputNum3);

        if (a == b && b == c) {
            alert(`Equilateral Triangle ${a} ${b} ${c}`)
        }
        if (a == b && b == c && c == a) {
            alert(`Isosceles Triangle${a} ${b} ${c}`)
        }
        else {
            alert('Scalene Triangle')
        }

    }
}

// question no 17 
var myQuestion17 = () => {


    // take input from the user
    var aa: string | null = prompt("Enter the first number: ");
    let bb: string | null = prompt("Enter the second number: ");
    let cc: string | null = prompt("Enter the third number: ");

    if (aa && bb && cc) {
        var a: number = parseInt(aa);
        var b: number = parseInt(bb);
        var c: number = parseInt(cc);
        // calculate discriminant
        let discriminant = b * b - 4 * a * c;

        // condition for real and different roots
        if (discriminant > 0) {
            var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            // result
            console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
            alert(`The roots of quadratic equation are ${root1} and ${root2}`);
        }

        // condition for real and equal roots
        else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);

            // result
            console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
            alert(`The roots of quadratic equation are ${root1} and ${root2}`);
        }

        // if roots are not real
        else {
            let realPart = (-b / (2 * a)).toFixed(2);
            let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

            // result
            console.log(
                `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
            );

            alert(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);

        }
    }

}
// question no 18 
var myQuestion18 = () => {

    var userinputNum1: string | null = prompt("Please Enter Your Cost Price.");
    var userinputNum2: string | null = prompt("Please Enter Your Selling Price");


    if (userinputNum1 && userinputNum2) {

        var cost_price: number = parseInt(userinputNum1);
        var selling_pric: number = parseInt(userinputNum2);
        if (cost_price < selling_pric) {
            alert(`Profit  ${selling_pric - cost_price}`)
        }
        else if (cost_price > selling_pric) {
            alert(`Loss  ${cost_price - selling_pric}`)
        }
        else {
            alert("no profit no loss")
        }
    }
}

// question no 19 
var myQuestion19 = () => {



    var aa: string | null = prompt("Enter the Marks Physices ");
    let bb: string | null = prompt("Enter the Marks Chemistry ");
    let cc: string | null = prompt("Enter the Marks Biology");
    let dd: string | null = prompt("Enter the Marks Mathematics  ");
    let ee: string | null = prompt("Enter the Marks Computer ");

    if (aa && bb && cc && dd && ee) {
        var a: number = parseInt(aa);
        var b: number = parseInt(bb);
        var c: number = parseInt(cc);
        var d: number = parseInt(dd);
        var e: number = parseInt(ee);

        var sum: number = ((a + b + c + d + e) / 5);

        if (sum >= 90) {
            alert(`Grade A Percentage ${sum} %`);
        }
        else if (sum >= 80) {
            alert(`Grade B  Percentage ${sum} %`);
        }
        else if (sum >= 70) {
            alert(`Grade C Percentage ${sum} %`);
        }
        else if (sum >= 60) {
            alert(`Grade D Percentage ${sum} %`);
        }
        else if (sum >= 40) {
            alert(`Grade E Percentage ${sum} %`);
        }
        else {
            alert(`Grade F Percentage ${sum} %`);
        }

    }

}
// question no 20 
var myQuestion20 = () => {



    var salar: string | null = prompt("Enter the basic salary of the Employee ");

    if (salar) {
        var salary: number = parseInt(salar);

        if (salary <= 10000) {
            var da: number = salary * 20 / 100;
            var hra: number = salary * 80 / 100;
            var gross: number = salary + da + hra;
            alert(`The gross salary of the Employee is ${gross}`);
        }
        if (salary <= 20000) {
            da = salary * 25 / 100;
            hra = salary * 90 / 100;
            gross = salary + da + hra;
            alert(`The gross salary of the Employee is ${gross}`);

        }
        else if (salary > 20000) {
            da = salary * 30 / 100;
            hra = salary * 95 / 100;
            gross = salary + da + hra;
            alert(`The gross salary of the Employee is ${gross}`);

        }
        else {
            alert(`You have No Salary`);

        }

    }

}

// question no 21 
var myQuestion21 = () => {

    var uni: string | null = prompt("Enter Total Units ");

    if (uni) {
        var unit: number = parseInt(uni);
        var amount: number;
        var total_amount: number;
        var surcharge: number;

        if (unit <= 50) {
            amount = unit * 0.50;
            surcharge = amount * 0.20;
            total_amount = amount + surcharge;
            alert(`Your Electric ", ${total_amount}`)
        }

        else if (unit <= 150) {
            amount = 25 + (unit - 50) * 0.75;
            surcharge = amount * 0.20;
            total_amount = amount + surcharge;
            alert(`Your Electric ", ${total_amount}`)
        }
        else if (unit <= 250) {
            amount = 100 + (unit - 150) * 1.20;
            surcharge = amount * 0.20;
            total_amount = amount + surcharge;
            alert(`Your Electric ", ${total_amount}`)
        }
        else {
            amount = 220 + (unit - 250) * 1.50;
            surcharge = amount * 0.20;
            total_amount = amount + surcharge;
            alert(`Your Electric ", ${total_amount}`)
        }

    }
}
