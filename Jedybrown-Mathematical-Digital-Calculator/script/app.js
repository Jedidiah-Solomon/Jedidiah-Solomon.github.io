// Root Functions for the Calculator Project
(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let sqrt = document.querySelector('.btn-sqrt');
    let square = document.querySelector('.btn-square');
    let sin = document.querySelector('.btn-sin');
    let cos = document.querySelector('.btn-cos');
    let tan = document.querySelector('.btn-tan');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value +=value;
        }) 
    });

    equal.addEventListener('click', function(e) {
        if(screen.value === '') {
            screen.value = " ";
        }
        else if(screen.value.includes('sqrt')) {
            try {
                let number = screen.value.slice(0, screen.value.indexOf('sqrt'));
                let answer = Math.sqrt(parseFloat(number));
                if (isNaN(answer)) {
                    throw new Error('Invalid Input');
                }
                screen.value = answer;
            } catch(err) {
                screen.value = "Invalid Input";
            }
        }
        else if(screen.value.includes('^2')) {
            let number = screen.value.slice(0, screen.value.indexOf('^2'));
            let answer = Math.pow(parseFloat(number), 2);
            if (isNaN(answer)) {
                screen.value = "Invalid Input";
            }
            else {
                screen.value = answer;
            }
        }
        else if(screen.value.includes('sin')) {
            try {
                let number = screen.value.slice(0, screen.value.indexOf('sin'));
                let radians = parseFloat(number) * Math.PI/180;
                let answer = Math.sin(radians);
                if (isNaN(answer)) {
                    throw new Error('Invalid Input');
                }
                screen.value = answer;
            } catch(err) {
                screen.value = "Invalid Input";
            }
        }
        else if(screen.value.includes('cos')) {
            try {
                let number = screen.value.slice(0, screen.value.indexOf('cos'));
                let radians = parseFloat(number) * Math.PI/180;
                let answer = Math.cos(radians);
                if (isNaN(answer)) {
                    throw new Error('Invalid Input');
                }
                screen.value = answer;
            } catch(err) {
                screen.value = "Invalid Input";
            }
        }
        else if(screen.value.includes('tan')) {
            try {
                let number = screen.value.slice(0, screen.value.indexOf('tan'));
                let radians = parseFloat(number) * Math.PI/180;
                let answer = Math.tan(radians);
                if (isNaN(answer)) {
                    throw new Error('Invalid Input');
                }
                screen.value = answer;
            } catch(err) {
                screen.value = "Invalid Input";
            }
        }
        else {
            let answer = eval(screen.value);
            if (isNaN(answer)) {
                screen.value = "Invalid Input";
            }
            else {
                screen.value = answer;
            }
        }
    });

    clear.addEventListener('click', function(e) {
        screen.value = " ";
    });

    sqrt.addEventListener('click', function(e) {
        screen.value += 'sqrt';
    });

    square.addEventListener('click', function(e) {
        screen.value += '^2';
    });

    sin.addEventListener('click', function(e) {
        screen.value += 'sin';
    });

    cos.addEventListener('click', function(e) {
        screen.value += 'cos';
    });

    tan.addEventListener('click', function(e) {
        screen.value += 'tan';
    });

})();


