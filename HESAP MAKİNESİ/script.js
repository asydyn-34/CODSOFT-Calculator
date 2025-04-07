//1.Adım tıklanan tuşları ekrana yazdırma fonksiyonu

function appendToDisplay(value) {
    let display = document.getElementById("display");
    display.value += value;
}

//2.Adım  ekranı silme ve son karakteri silme fonksiyonu

function clearDisplay(){
    document.getElementById("display").value = "";
}

function deleteLast(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}

//3.Adım  eşittir fonksiyonu yazdırma

function calculate(){
    let display = document.getElementById("display");
    let expression = display.value.replace(',' , '.');

    if (/^[0-9+\-*/().\s]*$/.test(expression)) {
        try {
            let result = eval(expression);
            display.value = result;
        } catch(e) {
            display.value = 'Hata';
        }
    }else {
        display.value = 'Geçersiz İfade'
    }  
}



   