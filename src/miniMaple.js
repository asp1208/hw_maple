function checkFirstArg(first_arg, secon_arg) {

    if (first_arg[0] === '+' || first_arg[0] === '-')
        first_arg = first_arg.substring(1);

    const args_arr = first_arg.split(/[+-]/);

    let flag = true;
    args_arr.forEach(element => {
        if (!(/^[a-z]$|^-?[1-9][0-9]*$|^[a-z]\^[1-9][0-9]*$|^[1-9][0-9]*\*[a-z]$|^[1-9][0-9]*\*[a-z]\^[1-9][0-9]*$/.test(element))) {
            flag = false;
        }
        if (/[a-z]/.test(element)) {
            if (!element.includes(secon_arg)) {
                flag = false;
            }
        }
    });
    return flag;
}

function checkSecondArg(secon_arg) {
    return /^[a-z]$/.test(secon_arg);
}

//function checkSecondArg = (secon_arg)  => /^[a-z]$/.test(secon_arg);

function checkArgs(first_arg, secon_arg) {
    if (!checkFirstArg(first_arg, secon_arg))
        return false;
    if (!checkSecondArg(secon_arg))
        return false;
    return true;
}

function calculate(first_arg, secon_arg) {
    let result = '';
    if (/^[a-z]$/.test(first_arg)) {
        result = '1';
    }
    else if (/^[1-9][0-9]*$/.test(first_arg)) {
        result = '0';
    }
    else if (/^[a-z]\^[1-9][0-9]*$/.test(first_arg)) {
        if (first_arg[2] === '1') {
            result = secon_arg;
        }
        else if (first_arg[2] === '2') {
            result = Number(first_arg.substring(2)) + '*' + secon_arg;
        }
        else {
            result += Number(first_arg.substring(2)) + '*' +
                first_arg[0] + first_arg[1] + Number(first_arg.substring(2) - 1);
        }
    }
    else if (/^[1-9][0-9]*\*[a-z]$/.test(first_arg)) {
        const pos = first_arg.indexOf(secon_arg);
        result = first_arg.slice(0, pos - 1);
    }
    else if (/^[1-9][0-9]*\*[a-z]\^[1-9][0-9]*$/.test(first_arg)) {

        const pos_mult = first_arg.indexOf('*');
        const pos_sqr = first_arg.indexOf('^');
        const numb = Number(first_arg.slice(0, pos_mult));
        const sqr_numb = Number(first_arg.slice(pos_sqr + 1));

        if (sqr_numb === 1) {
            result += numb;
        }
        else if (sqr_numb === 2) {
            result += numb * sqr_numb + '*' + secon_arg;
        }
        else {
            result += numb * sqr_numb + '*' + secon_arg + '^' + (sqr_numb - 1);
        }
    }

    return result;
}


function diff(first_arg = '', secon_arg = '') {
    first_arg = first_arg.split(' ').join('')

    if (!checkArgs(first_arg, secon_arg))
        return null;

    let bad_symbols_list = [];
    bad_symbols_list = first_arg.split(/[^+-]/);

    let symbols_list = [];
    if (first_arg[0] !== '-')
        symbols_list.push('+');
    bad_symbols_list.forEach(element => {
        if (element !== '')
            symbols_list.push(element);
    });

    if (first_arg[0] === '+' || first_arg[0] === '-')
        first_arg = first_arg.substring(1);

    const args_arr = first_arg.split(/[+-]/);

    let result = '';
    for (let i = 0; i < args_arr.length; i++) {
        result += ' ' + symbols_list.shift() + ' ' + calculate(args_arr[i], secon_arg);
    }

    if (result[1] === '+') {
        result = result.substring(3)
    }
    else if (result[1] === '-') {
        result = '-' + result.substring(3)
    }
    return result;
}


export { diff }