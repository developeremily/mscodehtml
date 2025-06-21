function somar() {
            let n1 = Number(window.document.querySelector("#n1").value);
            let n2 = Number(window.document.querySelector("#n2").value);
            let soma = n1 + n2;
            let resSoma = window.document.querySelector("#resSoma");
            resSoma.innerText = `A soma de ${n1} + ${n2} é igual a: ${soma}`;
        }

        function subtrair() {
            let n3 = Number(window.document.querySelector("#n3").value);
            let n4 = Number(window.document.querySelector("#n4").value);
            let subtracao = n3 - n4;
            let resSub = window.document.querySelector("#resSub");
            resSub.innerText = `A subtração de ${n3} - ${n4} é igual a: ${subtracao}`;
        }


        function limparSoma() {
            let n1 = window.document.querySelector("#n1");
            let n2 = window.document.querySelector("#n2");
            let resSoma = window.document.querySelector("#resSoma");
            n1.value = "";
            n2.value = "";
            resSoma.innerText = "Resultado: ";
        }
        function limparSub() {
            let n3 = window.document.querySelector("#n3");
            let n4 = window.document.querySelector("#n4");
            let resSub = window.document.querySelector("#resSub");
            n3.value = "";
            n4.value = "";
            resSub.innerText = "Resultado: ";
        }