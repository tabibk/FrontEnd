'use strict';
// show doctors popup
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.show_doctors');

    var popup = document.querySelector('.doctors_popup');
    var overlay = document.querySelector('.overlay');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            popup.classList.remove('hidden');
            overlay.classList.remove('hidden');
        });
    });

    var closeIcon = document.querySelector('.close');
    

    overlay.addEventListener('click', function() {
        popup.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    closeIcon.addEventListener('click', function() {
        popup.classList.add('hidden');
        overlay.classList.add('hidden');
    });
});

//  Model popup MAi
document.addEventListener('DOMContentLoaded', function() {
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.overlay');
    document.getElementById("add_field").addEventListener("click", function() {
            popup.classList.remove('hidden');
            overlay.classList.remove('hidden');
    });
    overlay.addEventListener("click", function() {
        popup.classList.add('hidden');
        overlay.classList.add('hidden');
    });
    document.querySelector(".close").addEventListener("click", function() {
        popup.classList.add('hidden');
        overlay.classList.add('hidden');
    });
});

//Popup
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    // console.log(e.key);

    if (e.key === 'Escape') {
        closeModal();
    }
});


//popUP ==> 2
function popUP2(){
    const modal = document.querySelector('.modal1');
    const overlay = document.querySelector('.overlay');
    const btnsOpenModal = document.querySelector('.show-form');

    const openModal = function() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };
    
    const closeModal = function() {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };
    
    btnsOpenModal.addEventListener('click', openModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {

        if (e.key === 'Escape') {
            closeModal();
        }
    })
}

// add another department  
    function addDepartment() { 
        var departContainer = document.querySelector('.hospital_departments'); 
        var lastRow1 = document.querySelector('.depart_row:last-child');
        var addDepartmentLink = document.getElementById('add_department');
        var newRow = document.createElement("div");
        newRow.className = "depart_row"; 

        newRow.innerHTML =
        `<div class="depart_row grid">
        <div class="depart_name">
            <label>Department Name</label>
            <input type="text" name="depart_name">
        </div>
        <div class="doctor_name">
            <label>Doctor Name</label>
            <input type="text" name="doctor_name">
        </div>
    </div>` 

        departContainer.insertBefore(newRow, addDepartmentLink);
    }
    function addMed() { 
        var departContainer = document.querySelector('.dep_Doctors'); 
        var lastRow1 = document.querySelector('.doc_input:last-child');
        var addMEDLink = document.getElementById('addMedLink');
        var newRow = document.createElement("div");
        newRow.classList.add("doc_input");

        newRow.innerHTML = lastRow1.innerHTML

        departContainer.insertBefore(newRow, addMEDLink);
    }