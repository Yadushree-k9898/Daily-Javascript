let result = condition ? value1 : value2;


let accessAllowed = (age > 18) ? true: false;

let accessAllowedd = age > 18 ? true : false;

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi , baby':

(age < 18) ? 'Hello':
(age < 100)  ?  'Gtreetings':
"What an unusal age ? "


alert(message)

if(age < 3){
    message = "Hi, baby";

} else if(age < 18){
    message = 'Hello'
} else if(age < 100){
    message = 'Greetings'
}
else{
    message = "What an unusal age "
}


let company = prompt('Which company created javascript>');
if(company == 'Netscape'){
    console.log('Right');
    

}else{
    console.log('Wrong');
    
}


if("0"){
    console.log('Hello');
    
};


let resultt;


if( a+ b < 4){
    resultt = 'Below'
}else{
    resultt = "Over"
}


let messag;

if(login == 'Employee'){
    messag = 'Hello'
} else if( login == 'Director'){
    messag = 'Greetings'
} else if( login === ''){
    messag  = 'No login'
} else{
    message = ''
}