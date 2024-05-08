// get all button elements
const contactsButton = document.querySelector('#contacts-button');
const projectsButton = document.querySelector('#projects-button');
const buttonsArray = [contactsButton, projectsButton];

// get all category divs
const contactsCategory = document.querySelector('#contactbuttons');
const projectsCategory = document.querySelector('#projects');
const categoryArray = [contactsCategory, projectsCategory];

function enableContacts() {
    buttonsArray.forEach(button => {
        if (button !== contactsButton) {
            try {
                button.classList.remove('category-btn-selected');
            }
            catch (error) {};
        }
    });
    contactsButton.classList.add('category-btn-selected');

    categoryArray.forEach(category => {
        if (category !== contactsCategory) {
            try {
                category.classList.add('display-none');
            }
            catch (error) {};
        }
    })
    contactsCategory.classList.remove('display-none');
    
}

function enableProjects() {
    buttonsArray.forEach(button => {
        if (button !== projectsButton) {
            try {
                button.classList.remove('category-btn-selected');
            }
            catch (error) {};
        }
    });
    projectsButton.classList.add('category-btn-selected');

    categoryArray.forEach(category => {
        if (category !== projectsCategory) {
            try {
                category.classList.add('display-none');
            }
            catch (error) {};
        }
    })
    projectsCategory.classList.remove('display-none');

}

enableContacts();