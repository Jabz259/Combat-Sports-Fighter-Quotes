// document.addEventListener('DOMContentLoaded', function() {
// });


// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//         alert("hey!");
//     });


// const btn = document.getElementById('btn');

// btn.onclick = function() {
//     alert("shut your mouth")
// }


// const test = document.getElementById('muhammedAli');
// test.onclick = function() {
//     // console.log("hello");
// }


//selecting all fighter frames
const fighterClass = document.querySelectorAll('.fighter-frame');

//looping through collection of classes fighterClass
//for each frame add the following function
fighterClass.forEach(nav => {
    nav.addEventListener('click', function() {
        //getting the attribute data-page from the current nav(frame)
        const fighterPage = nav.getAttribute('data-page');

        try {
            if(fighterPage) {
                window.location.href = fighterPage;
                console.log("hello");
                } else {
                    alert("page does not exist yet")
                }
        } catch (error) {
            console.log("Unable to load contents")
        }
    })
})