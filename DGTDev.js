//variable nav barre
const nav = document.querySelector("nav");
//variable section 2
const boxDiplome = document.querySelector(".diplome")
const boxFront = document.querySelector(".front_end")
const boxEnCours = document.querySelector(".en_cours")
const listeDiplome = document.querySelector(".liste_diplome")
const listeFront = document.querySelector(".liste_frontend")
const listeEnCours = document.querySelector(".liste_cours")
//variable section 3 
const boxCreer = document.querySelector(".creer")
const boxDocument = document.querySelector(".document")
const boxCodage = document.querySelector(".codage")
const boxRemise = document.querySelector(".remise")
const photoSection3 = document.querySelector(".partie3_image")




//.creer .document .codage . remise

//barre de navigation
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        nav.style.background = "rgb(212, 222, 222)"
        nav.style.color = "rgb(22, 86, 196)"
    } else {
            nav.style.background = "rgb(13, 13, 13)"
            nav.style.color = "rgb(220, 222, 220)"
        }
    });


//box Diplome de la section 2
    boxDiplome.addEventListener("mouseover", () =>{
        boxDiplome.style.width = "21%"
        boxDiplome.style.height = "81%"
        boxDiplome.style.transition = "0.5s"
        boxDiplome.style.boxShadow = "6px 6px 50px rgba(0, 0, 0, 1)"
        listeDiplome.style.fontSize = "1em"
        listeDiplome.style.transition = "0.5s"
    })


    boxDiplome.addEventListener("mouseout", () =>{
        boxDiplome.style.width = "20%"
        boxDiplome.style.height = "80%"
        boxDiplome.style.transition = "0.5s"
        boxDiplome.style.boxShadow = "6px 6px 25px rgba(0, 0, 0, 0.5)"
        listeDiplome.style.fontSize = "0.95em"
        listeDiplome.style.transition = "0.5s"
    })


//box Front-end de la section 2
    boxFront.addEventListener("mouseover", () =>{
        boxFront.style.width = "21%"
        boxFront.style.height = "81%"
        boxFront.style.transition = "0.5s"
        boxFront.style.boxShadow = "6px 6px 50px rgba(0, 0, 0, 1)"
        listeFront.style.fontSize = "1em"
        listeFront.style.transition = "0.5s"
    })

    boxFront.addEventListener("mouseout", () =>{
        boxFront.style.width = "20%"
        boxFront.style.height = "80%"
        boxFront.style.transition = "0.5s"
        boxFront.style.boxShadow = "6px 6px 25px rgba(0, 0, 0, 0.5)"
        listeFront.style.fontSize = "0.95em"
        listeFront.style.transition = "0.5s"
    })


//box en cours de la section 2 
    boxEnCours.addEventListener("mouseover", () =>{
        boxEnCours.style.width = "21%"
        boxEnCours.style.height = "81%"
        boxEnCours.style.transition = "0.5s"
        boxEnCours.style.boxShadow = "6px 6px 50px rgba(0, 0, 0, 1)"
        listeEnCours.style.fontSize = "1em"
        listeEnCours.style.transition = "0.5s"
    })

    boxEnCours.addEventListener("mouseout", () =>{
        boxEnCours.style.width = "20%"
        boxEnCours.style.height = "80%"
        boxEnCours.style.transition = "0.5s"
        boxEnCours.style.boxShadow = "6px 6px 25px rgba(0, 0, 0, 0.5)"
        listeEnCours.style.fontSize = "0.95em"
        listeEnCours.style.transition = "0.5s"
    })

//box creer de la section 3 (mouseover-mouseout)
boxCreer.addEventListener("mouseover", () =>{
    boxCreer.style.width = "26%"
    boxCreer.style.height = "102%"
    boxCreer.style.transition = "0.5s"
    boxCreer.style.boxShadow = "6px 6px 50px rgba(0, 0, 0, 1)"
})

boxCreer.addEventListener("mouseout", () =>{
    boxCreer.style.width = "25%"
    boxCreer.style.height = "100%"
    boxCreer.style.transition = "0.5s"
    boxCreer.style.boxShadow = "6px 6px 25px rgba(0, 0, 0, 0.5)"
})

//box document de la section 3 (mouseover-mouseout)
boxDocument.addEventListener("mouseover", () =>{
    boxDocument.style.width = "26%"
    boxDocument.style.height = "102%"
    boxDocument.style.transition = "0.5s"
    boxDocument.style.boxShadow = "6px 6px 50px rgba(0, 0, 0, 1)"
})

boxDocument.addEventListener("mouseout", () =>{
    boxDocument.style.width = "25%"
    boxDocument.style.height = "100%"
    boxDocument.style.transition = "0.5s"
    boxDocument.style.boxShadow = "6px 6px 25px rgba(0, 0, 0, 0.5)"
})

//box codage de la section 3 (mouseover-mouseout)
boxCodage.addEventListener("mouseover", () =>{
    boxCodage.style.width = "26%"
    boxCodage.style.height = "102%"
    boxCodage.style.transition = "0.5s"
    boxCodage.style.boxShadow = "6px 6px 50px rgba(0, 0, 0, 1)"
})

boxCodage.addEventListener("mouseout", () =>{
    boxCodage.style.width = "25%"
    boxCodage.style.height = "100%"
    boxCodage.style.transition = "0.5s"
    boxCodage.style.boxShadow = "6px 6px 25px rgba(0, 0, 0, 0.5)"
})

//box remise de la section 3 (mouseover-mouseout)
boxRemise.addEventListener("mouseover", () =>{
    boxRemise.style.width = "62%"
    boxRemise.style.height = "15%"
    boxRemise.style.transition = "0.5s"
    boxRemise.style.boxShadow = "6px 6px 50px rgba(0, 0, 0, 1)"
})

boxRemise.addEventListener("mouseout", () =>{
    boxRemise.style.width = "60%"
    boxRemise.style.height = "14%"
    boxRemise.style.transition = "0.5s"
    boxRemise.style.boxShadow = "6px 6px 25px rgba(0, 0, 0, 0.5)"
})

//box creer section 3 (scrollY)
window.addEventListener("scroll", () => {
    if (window.scrollY > 850) {
        boxCreer.style.marginLeft = "20px"
        boxCreer.style.opacity = "1"
        boxCreer.style.transition = "1.5s"
    } else {
        boxCreer.style.marginLeft = "-700px"
        boxCreer.style.opacity = "0"
        boxCreer.style.transition = "1.5s"
        }
    });

    //box document section 3 (scrollY)
window.addEventListener("scroll", () => {
    if (window.scrollY > 850) {
        boxDocument.style.opacity = "1"
        boxDocument.style.transition = "1.5s"
    } else {
        boxDocument.style.opacity = "0"
        boxDocument.style.transition = "1.5s"
        }
    });

    //box codage section 3 (scrollY)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 850) {
            boxCodage.style.marginRight = "20px"
            boxCodage.style.opacity = "1"
            boxCodage.style.transition = "1.5s"
        } else {
            boxCodage.style.marginRight = "700px"
            boxCodage.style.opacity = "0"
            boxCodage.style.transition = "1.5s"
            }
        });

        window.addEventListener("scroll", () => {
            if (window.scrollY > 1150) {
                boxRemise.style.marginLeft = "20%"
                boxRemise.style.opacity = "1"
                boxRemise.style.transition = "1.5s"
            } else {
                boxRemise.style.marginLeft = "500px"
                boxRemise.style.opacity = "0"
                boxRemise.style.transition = "1.5s"
                }
            });

// photo de la section 3
            photoSection3.addEventListener("mouseover", () => {
                photoSection3.style.width = "38%"
                photoSection3.style.height = "78%"
                photoSection3.style.transition = "0.5s"
            })


            photoSection3.addEventListener("mouseout", () => {
                photoSection3.style.width = "35%"
                photoSection3.style.height = "75%"
                photoSection3.style.transition = "0.5s"
            })