'use strict';
//Dropdown js
const showDropdown = function(content, button){
    const dropdownContent = document.getElementById(content),
        dropdownButton = document.getElementById(button)

        dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show_dropdown')
        })
}

// departments dropdown
document.addEventListener('DOMContentLoaded', function() {
    const dropdownDepartment = document.querySelector('.depart-dropdown');
    dropdownDepartment.addEventListener('click', () => {
        dropdownDepartment.classList.toggle('active');
    });
});



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

//=====================================
//BloodBags
const addBag = document.getElementById('addBag');
const reduceBag = document.getElementById('reduceBag');
let bagNoInput = document.getElementById("bagNo");
let bagNo = 1;

bagNoInput.innerHTML = `<span>${bagNo}</span>`;
addBag.addEventListener('click', function(){

    bagNo++;
    bagNoInput.innerHTML = `<span>${bagNo}</span>`;

});

reduceBag.addEventListener('click', function(){

    bagNo--;
    if(bagNo <= 0){
        bagNo = 0;
    }
    bagNoInput.innerHTML = `<span>${bagNo}</span>`;

});
