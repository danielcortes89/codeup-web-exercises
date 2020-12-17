"use strict"

// $(document).ready(function(){
//     alert("The Document is ready")
// })

// alert($('#second').html())

// $('.codeup').css('border', '1px solid red')

// $('li').css('font-size', '20px')
// $('h1, li, p').html()
// $('p').html()
// alert(
//     $('h1, li, p').html()
// )


// EVENTS
// EVENTS

// $(document).ready(function(){
//     $('h1').click(
//         function(){
//             $(this).css('background', 'green')
//         }
//     )
// })

$('h1').click(
    function(){
        $(this).css('background', 'green')
    }
)

$('p').dblclick(
    function(){
        $(this).css('font-size', '18px')
    }
)

$('li').hover(
    function(){
        $(this).css('color', 'red')
    },
    function(){
        $(this).css('color', 'black')
    }
)
