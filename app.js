var Question1 = function () {
    var userinputNum1 = prompt("Please Enter Number A");
    var userinputNum2 = prompt("Please Enter Number B");
    if (userinputNum1 && userinputNum2) {
        var Num1 = parseInt(userinputNum1);
        var Num2 = parseInt(userinputNum2);
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
};
//question no two.......................
var myQuestion2 = function () {
    var userinputNum1 = prompt("Please Enter Number A");
    var userinputNum2 = prompt("Please Enter Number B");
    var userinputNum3 = prompt("Please Enter Number C");
    if (userinputNum1 && userinputNum2 && userinputNum3) {
        var Num1 = parseInt(userinputNum1);
        var Num2 = parseInt(userinputNum2);
        var Num3 = parseInt(userinputNum3);
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
};
//question no three
var myQuestion3 = function () {
    var userinputNum1 = prompt("Enter Number A");
    var userinputNum2 = prompt("Enter Number B");
    if (userinputNum1 && userinputNum2) {
        var Num1 = parseInt(userinputNum1);
        var Num2 = parseInt(userinputNum2);
        if (Num1 > 0 && Num2 > 0) {
            console.log("Number is Postive ");
            alert("Number ".concat(Num1, " & ").concat(Num2, " is Postive"));
        }
        else if (Num1 < 0 && Num2 < 0) {
            console.log("Number is Negative ");
            alert("Number ".concat(Num1, " & ").concat(Num2, " is Negative"));
        }
        else if (Num1 == 0 && Num2 == 0) {
            console.log("Number is Zero ");
            alert("Number ".concat(Num1, " & ").concat(Num2, " is Zero"));
        }
        else if ((Num1 > 0 && Num2 < 0) || (Num1 < 0 && Num2 > 0)) {
            console.log("Both Number  is  Postive And Negative ");
            alert("Both Number  ".concat(Num1, " & ").concat(Num2, " is Postive And Negative"));
        }
        else if ((Num1 >= 0 && Num2 > 0) || (Num1 > 0 && Num2 >= 0)) {
            console.log(" Number  is  Postive");
            alert(" Number A ".concat(Num1, " & B ").concat(Num2, " is Postive Number"));
        }
        else if ((Num1 <= 0 && Num2 < 0) || (Num1 < 0 && Num2 <= 0)) {
            console.log(" Number  is  Negative");
            alert(" Number A ".concat(Num1, " & B ").concat(Num2, " is Negative Number"));
        }
        else {
            alert("Please Enter Your Again Number");
        }
    }
};
//question no 4
var myQuestion4 = function () {
    var userinputNum1 = prompt("Enter Your Number A 5", "5");
    var userinputNum2 = prompt("Enter Your Number A 11", "11");
    if (userinputNum1 && userinputNum2) {
        var Num1 = parseInt(userinputNum1);
        var Num2 = parseInt(userinputNum2);
        if ((Num1 / 5 == 1 && Num2 / 11 == 1)) {
            console.log("a number is divisible by 5 and 11 ");
            alert("A number ".concat(Num1, " & ").concat(Num2, " is divisible by 5 and 11 "));
        }
        else {
            console.log("or Not number is divisible by 5 and 11 ");
            alert("or Not number ".concat(Num1, " & ").concat(Num2, " is divisible by 5 and 11 "));
        }
    }
};
// question 5 
var myQuestion5 = function () {
    var userinputNum1 = prompt("Enter Your Number even and odd ");
    if (userinputNum1) {
        var Num1 = parseInt(userinputNum1);
        if (Num1 % 2 == 1) {
            console.log("the number is odd. ");
            alert("the number ".concat(Num1, " is odd. "));
        }
        else {
            console.log("the number is Even. ");
            alert("the Number ".concat(Num1, "  is Even. "));
        }
    }
};
// question no 6 
var myQuestion6 = function () {
    var userinputNum1 = prompt("Enter Your Year", " 2000 ");
    if (userinputNum1) {
        var year = parseInt(userinputNum1);
        var leapYear = new Date(year, 1, 29).getDate() === 29;
        if (leapYear) {
            alert("".concat(year, " is a leap Year"));
        }
        else {
            alert("".concat(year, " is not a leap Year"));
        }
    }
};
// question no 7 
var myQuestion7 = function () {
    var latter = prompt("Enter Your alphabet A to Z", "A");
    if ((latter === null || latter === void 0 ? void 0 : latter.length) == 1) {
        if ((latter >= 'a' && latter <= 'z') || (latter >= 'A' && latter <= 'Z')) {
            alert("".concat(latter, " is  a alphabet "));
        }
        else {
            alert("".concat(latter, " is Not  a alphabet "));
        }
    }
    else {
        alert("please Enter One Character ".concat(latter));
    }
};
// question no 8 
var myQuestion8 = function () {
    var latter = prompt("Enter Your vowel or consonant");
    var words = latter === null || latter === void 0 ? void 0 : latter.toLowerCase();
    if ((words === null || words === void 0 ? void 0 : words.length) == 1) {
        if ((words == 'a') || (words == 'e') || (words == 'i') || (words == 'o') || (words == 'u')) {
            alert("it is vowel ".concat(words));
        }
        else {
            alert("it is consonant  ".concat(words));
        }
    }
    else {
        alert("Please Enter 1 Character");
    }
};
// question no 9 
var myQuestion9 = function () {
    var latter = prompt("Enter Your  alphabet , digit or special character");
    var words = latter === null || latter === void 0 ? void 0 : latter.toLowerCase();
    if (words >= 'a' && words <= 'z') {
        alert("".concat(words, " Alphabet Character "));
    }
    else if (words >= '0' && words <= '9') {
        alert("".concat(words, " Digit "));
    }
    else if ((words >= 'a' || words >= '0') && (words <= 'z' || words <= '9')) {
        alert("".concat(words, " alphabet & Digit "));
    }
    else {
        alert("".concat(words, "  is special Character "));
    }
};
// question no 10 
var myQuestion10 = function () {
    var latter = prompt("Enter Your  uppercase or lowercase alphabet");
    if (latter === (latter === null || latter === void 0 ? void 0 : latter.toUpperCase())) {
        alert("".concat(latter, "  is Uppercase alphabet"));
    }
    else if (latter === (latter === null || latter === void 0 ? void 0 : latter.toLowerCase())) {
        alert("".concat(latter, "  is Lowercase alphabet"));
    }
    else {
        alert("".concat(latter, "  is Uppercase && Lowercase alphabet"));
    }
};
// question no 11 
var myQuestion11 = function () {
    var userinputNum1 = prompt("Please enter week number between 1-7.");
    if (userinputNum1) {
        var Num = parseInt(userinputNum1);
        if (Num == 1) {
            alert("".concat(Num, "  Monday"));
        }
        else if (Num == 2) {
            alert("".concat(Num, "  Tuesday"));
        }
        else if (Num == 3) {
            alert("".concat(Num, "  Wednesday"));
        }
        else if (Num == 4) {
            alert("".concat(Num, "  Thursday"));
        }
        else if (Num == 5) {
            alert("".concat(Num, "  Friday"));
        }
        else if (Num == 6) {
            alert("".concat(Num, "  Saturday"));
        }
        else if (Num == 7) {
            alert("".concat(Num, "  Sunday"));
        }
        else {
            alert("".concat(Num, "  Please enter week number between 1-7"));
        }
    }
};
// question no 12 
var myQuestion12 = function () {
    var userinputNum1 = prompt("Please enter week number between 1-7.");
    if (userinputNum1) {
        var monthNumber = parseInt(userinputNum1);
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
};
// question no 13 
var myQuestion13 = function () {
    var userinputNum1 = prompt("Please Enter the amount.");
    if (userinputNum1) {
        var amount = parseInt(userinputNum1);
        var note5000 = 0;
        var note1000 = 0;
        var note500 = 0;
        var note100 = 0;
        var note50 = 0;
        var note20 = 0;
        var note10 = 0;
        var note5 = 0;
        var note2 = 0;
        var note1 = 0;
        // note5000=note1000=note500=note100=note50=note10=note5=note2=note1 =0
        if (amount >= 5000) {
            note5000 = amount / 5000;
            amount = amount - (note5000 * 5000);
        }
        else if (amount >= 1000) {
            note1000 = amount / 1000;
            amount = amount - (note1000 * 1000);
        }
        else if (amount >= 500) {
            note500 = amount / 500;
            amount = amount - (note500 * 500);
        }
        else if (amount >= 100) {
            note100 = amount / 100;
            amount = amount - (note100 * 100);
        }
        else if (amount >= 50) {
            note50 = amount / 50;
            amount = amount - (note50 * 50);
        }
        else if (amount >= 20) {
            note20 = amount / 20;
            amount = amount - (note20 * 20);
        }
        else if (amount >= 10) {
            note10 = amount / 10;
            amount = amount - (note10 * 10);
        }
        else if (amount >= 5) {
            note5 = amount / 5;
            amount = amount - (note5 * 5);
        }
        else if (amount >= 2) {
            note2 = amount / 2;
            amount = amount - (note2 * 2);
        }
        else if (amount >= 1) {
            note1 = amount / 1;
            amount = amount - (note1 * 1);
        }
        alert("Enter the amount: ".concat(amount, "\n                Note 5000  ").concat(note5000, " \n                Note 1000  ").concat(note1000, "   \n                Note 500  ").concat(note500, " \n                Note 100  ").concat(note100, "   \n                Note 50  ").concat(note50, "  \n                Note 20  ").concat(note20, "   \n                Note 10  ").concat(note10, "  \n                Note 5  ").concat(note5, "  \n                Note 2  ").concat(note2, " \n                Note 1  ").concat(note1, "  \n                "));
        console.log("Enter the amount: ".concat(amount));
        console.log("Note 5000  ".concat(note5000, " "));
        console.log("Note 1000  ".concat(note1000, " "));
        console.log("Note 500  ".concat(note500, " "));
        console.log("Note 50  ".concat(note50, " "));
        console.log("Note 10  ".concat(note10, " "));
        console.log("Note 5  ".concat(note5, " "));
        console.log("Note 2  ".concat(note2, " "));
        console.log("Note 1  ".concat(note1, " "));
    }
};
// question no 14 
var myQuestion14 = function () {
    var userinputNum1 = prompt("Please Enter Your No A.");
    var userinputNum2 = prompt("Please Enter Your No B.");
    var userinputNum3 = prompt("Please Enter Your No C.");
    if (userinputNum1 && userinputNum2 && userinputNum3) {
        var Num1 = parseInt(userinputNum1);
        var Num2 = parseInt(userinputNum2);
        var Num3 = parseInt(userinputNum3);
        var sumThree = Num1 + Num2 + Num3;
        if (sumThree === 180 && Num1 > 0 && Num2 > 0 && Num3 > 0) {
            alert("triangle is equal to  ".concat(sumThree, "  degrees"));
        }
        else {
            alert("  ".concat(sumThree, "  Not a triangle is not equal to 180 degrees"));
        }
    }
};
// question no 15 
var myQuestion15 = function () {
    var userinputNum1 = prompt("Please Enter Your No A.");
    var userinputNum2 = prompt("Please Enter Your No B.");
    var userinputNum3 = prompt("Please Enter Your No C.");
    if (userinputNum1 && userinputNum2 && userinputNum3) {
        var a = parseInt(userinputNum1);
        var b = parseInt(userinputNum2);
        var c = parseInt(userinputNum3);
        if (a + b > c && a + c > b && b + c > a) {
            alert("A triangle is valid ".concat(a, " ").concat(b, " ").concat(c));
        }
        else {
            alert('A triangle is Not valid');
        }
    }
};
// question no 16 
var myQuestion16 = function () {
    var userinputNum1 = prompt("Please Enter Your No A.");
    var userinputNum2 = prompt("Please Enter Your No B.");
    var userinputNum3 = prompt("Please Enter Your No C.");
    if (userinputNum1 && userinputNum2 && userinputNum3) {
        var a = parseInt(userinputNum1);
        var b = parseInt(userinputNum2);
        var c = parseInt(userinputNum3);
        if (a == b && b == c) {
            alert("Equilateral Triangle ".concat(a, " ").concat(b, " ").concat(c));
        }
        if (a == b && b == c && c == a) {
            alert("Isosceles Triangle".concat(a, " ").concat(b, " ").concat(c));
        }
        else {
            alert('Scalene Triangle');
        }
    }
};
// question no 17 
var myQuestion17 = function () {
    // take input from the user
    var aa = prompt("Enter the first number: ");
    var bb = prompt("Enter the second number: ");
    var cc = prompt("Enter the third number: ");
    if (aa && bb && cc) {
        var a = parseInt(aa);
        var b = parseInt(bb);
        var c = parseInt(cc);
        // calculate discriminant
        var discriminant = b * b - 4 * a * c;
        // condition for real and different roots
        if (discriminant > 0) {
            var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            // result
            console.log("The roots of quadratic equation are ".concat(root1, " and ").concat(root2));
            alert("The roots of quadratic equation are ".concat(root1, " and ").concat(root2));
        }
        // condition for real and equal roots
        else if (discriminant == 0) {
            root1 = root2 = -b / (2 * a);
            // result
            console.log("The roots of quadratic equation are ".concat(root1, " and ").concat(root2));
            alert("The roots of quadratic equation are ".concat(root1, " and ").concat(root2));
        }
        // if roots are not real
        else {
            var realPart = (-b / (2 * a)).toFixed(2);
            var imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
            // result
            console.log("The roots of quadratic equation are ".concat(realPart, " + ").concat(imagPart, "i and ").concat(realPart, " - ").concat(imagPart, "i"));
            alert("The roots of quadratic equation are ".concat(realPart, " + ").concat(imagPart, "i and ").concat(realPart, " - ").concat(imagPart, "i"));
        }
    }
};
// question no 18 
var myQuestion18 = function () {
    var userinputNum1 = prompt("Please Enter Your Cost Price.");
    var userinputNum2 = prompt("Please Enter Your Selling Price");
    if (userinputNum1 && userinputNum2) {
        var cost_price = parseInt(userinputNum1);
        var selling_pric = parseInt(userinputNum2);
        if (cost_price < selling_pric) {
            alert("Profit  ".concat(selling_pric - cost_price));
        }
        else if (cost_price > selling_pric) {
            alert("Loss  ".concat(cost_price - selling_pric));
        }
        else {
            alert("no profit no loss");
        }
    }
};
// question no 19 
var myQuestion19 = function () {
    var aa = prompt("Enter the Marks Physices ");
    var bb = prompt("Enter the Marks Chemistry ");
    var cc = prompt("Enter the Marks Biology");
    var dd = prompt("Enter the Marks Mathematics  ");
    var ee = prompt("Enter the Marks Computer ");
    if (aa && bb && cc && dd && ee) {
        var a = parseInt(aa);
        var b = parseInt(bb);
        var c = parseInt(cc);
        var d = parseInt(dd);
        var e = parseInt(ee);
        var sum = ((a + b + c + d + e) / 5);
        if (sum >= 90) {
            alert("Grade A Percentage ".concat(sum, " %"));
        }
        else if (sum >= 80) {
            alert("Grade B  Percentage ".concat(sum, " %"));
        }
        else if (sum >= 70) {
            alert("Grade C Percentage ".concat(sum, " %"));
        }
        else if (sum >= 60) {
            alert("Grade D Percentage ".concat(sum, " %"));
        }
        else if (sum >= 40) {
            alert("Grade E Percentage ".concat(sum, " %"));
        }
        else {
            alert("Grade F Percentage ".concat(sum, " %"));
        }
    }
};
// question no 20 
var myQuestion20 = function () {
    var salar = prompt("Enter the basic salary of the Employee ");
    if (salar) {
        var salary = parseInt(salar);
        if (salary <= 10000) {
            var da = salary * 20 / 100;
            var hra = salary * 80 / 100;
            var gross = salary + da + hra;
            alert("The gross salary of the Employee is ".concat(gross));
        }
        if (salary <= 20000) {
            da = salary * 25 / 100;
            hra = salary * 90 / 100;
            gross = salary + da + hra;
            alert("The gross salary of the Employee is ".concat(gross));
        }
        else if (salary > 20000) {
            da = salary * 30 / 100;
            hra = salary * 95 / 100;
            gross = salary + da + hra;
            alert("The gross salary of the Employee is ".concat(gross));
        }
        else {
            alert("You have No Salary");
        }
    }
};
// question no 21 
var myQuestion21 = function () {
    var uni = prompt("Enter Total Units ");
    if (uni) {
        var unit = parseInt(uni);
        var amount;
        var total_amount;
        var surcharge;
        if (unit <= 50) {
            amount = unit * 0.50;
            surcharge = amount * 0.20;
            total_amount = amount + surcharge;
            alert("Your Electric \", ".concat(total_amount));
        }
        else if (unit <= 150) {
            amount = 25 + (unit - 50) * 0.75;
            surcharge = amount * 0.20;
            total_amount = amount + surcharge;
            alert("Your Electric \", ".concat(total_amount));
        }
        else if (unit <= 250) {
            amount = 100 + (unit - 150) * 1.20;
            surcharge = amount * 0.20;
            total_amount = amount + surcharge;
            alert("Your Electric \", ".concat(total_amount));
        }
        else {
            amount = 220 + (unit - 250) * 1.50;
            surcharge = amount * 0.20;
            total_amount = amount + surcharge;
            alert("Your Electric \", ".concat(total_amount));
        }
    }
};
