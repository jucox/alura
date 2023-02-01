export default function ageValidation(field) {
    const birthDate = new Date(field.value);
    
    if (!ageDateValidation(birthDate)) {
        field.setCustomValidity('O usuário não é maior de idade');
    }
}

function ageDateValidation(date) {
    const currentDate = new Date();
    const dateOlderThan18years = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return currentDate >= dateOlderThan18years;
}