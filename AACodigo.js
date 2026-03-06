let botonNoche = document.getElementById("botonNoche")
let ModoNocheCONT = document.getElementById("cont")
let ModoNocheSec = document.getElementById("section")
let CajaTitle = document.getElementById("cajaTitulo")
let caja1 = document.getElementById("caja1")
let caja7 = document.getElementById("caja7")
let caja7y5 = document.getElementById("caja7y5")
let sectCajaNoche1 = document.getElementById("sectioncaja1")
let sectCajaNoche2 = document.getElementById("sectioncaja2")
let sectCajaNoche3 = document.getElementById("sectioncaja3")
let sectCajaNoche4 = document.getElementById("sectioncaja4")
let sectCajaNoche5 = document.getElementById("sectioncaja5")

botonNoche.addEventListener
(
    'click', () =>
    {
        ModoNocheCONT.setAttribute("class", "ModoNocheCont")
        CajaTitle.setAttribute("class", "ModoNocheLetraTitle")
        caja1.setAttribute("class", "ModoNocheParraf1")
        caja7.setAttribute("class", "ModoNocheLetra")
        caja7y5.setAttribute("class", "ModoNocheLetra")
        ModoNocheSec.setAttribute("class", "ModoNocheSection")
        sectCajaNoche1.setAttribute("class", "ModoNocheSecCajas")
        sectCajaNoche2.setAttribute("class", "ModoNocheSecCajas")
        sectCajaNoche3.setAttribute("class", "ModoNocheSecCajas")
        sectCajaNoche4.setAttribute("class", "ModoNocheSecCajas")
        sectCajaNoche5.setAttribute("class", "ModoNocheSecCajas")
    }
)

let botonDia = document.getElementById("botonDia")
botonDia.addEventListener
(
    'click', () =>
    {
        ModoNocheCONT.removeAttribute("class", "ModoNocheCont")
        CajaTitle.removeAttribute("class", "ModoNocheLetraTitle")
        caja1.removeAttribute("class", "ModoNocheLetra")
        caja7.removeAttribute("class", "ModoNocheLetra")
        caja7y5.removeAttribute("class", "ModoNocheLetra")
        ModoNocheSec.removeAttribute("class", "ModoNocheSection")
        sectCajaNoche1.removeAttribute("class", "ModoNocheSecCajas")
        sectCajaNoche2.removeAttribute("class", "ModoNocheSecCajas")
        sectCajaNoche3.removeAttribute("class", "ModoNocheSecCajas")
        sectCajaNoche4.removeAttribute("class", "ModoNocheSecCajas")
        sectCajaNoche5.removeAttribute("class", "ModoNocheSecCajas")
    }
)