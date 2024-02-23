'use strict';
//from all product to new collection
let new_collection = document.getElementById("new_collection");
let all_products = document.getElementById("all_products");

new_collection.addEventListener("click", function(){
    new_collection.classList.add("active");
    all_products.classList.remove("active");
});

all_products.addEventListener("click", function(){
    all_products.classList.add("active");
    new_collection.classList.remove("active");
});

//Dropdown js
const showDropdown = function(content, button){
    const dropdownContent = document.getElementById(content),
          dropdownButton = document.getElementById(button)

          dropdownButton.addEventListener('click', () => {
            dropdownContent.classList.toggle('show_dropdown')
          })
}

showDropdown("dropdown_content", "dropdown_button")

//Checking the Checkbox
let dropdownContent = document.getElementById('dropdown_content')
let checkBox = document.getElementById('checkBox1')

checkBox.addEventListener('change', function() {

    if (checkBox.checked){
        dropdownContent.classList.remove('show_dropdown')
        dropdownContent.classList.add('show_dropdown_button')
        
    } 
    else if (!checkBox.checked){
        dropdownContent.classList.remove('show_dropdown')
        dropdownContent.classList.remove('show_dropdown_button')
        
    }

})

//Checking the Checkbox
// const chk_arr =  document.querySelectorAll(".check_box");



// for(let i = 0; i < chk_arr.length; i++){
//     chk_arr[i].addEventListener('change', function() {

//         if (chk_arr[i].checked == true){
//             dropdownContent.classList.remove('show_dropdown')
//             dropdownContent.classList.add('show_dropdown_button')
//         } 
//     })
// }

//flag
// let isChecked = false;
// for(let i = 0; i < chk_arr.length; i++){

//     chk_arr[i].addEventListener('change', function() {
        
//         if (chk_arr[i].checked){
//             isChecked = true;   
//         }
//     })
// }

// if(!isChecked){
//         dropdownContent.classList.remove('show_dropdown')
//         dropdownContent.classList.remove('show_dropdown_button')
// }
