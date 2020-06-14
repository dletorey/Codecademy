/* ** refactoring to use aliases **
let Employee = {
    salary: 100000,
    getCadre: function() {
        if (this.salary >= payGrades.entryLevel.minSalary && this.salary <= payGrades.entryLevel.maxSalary) {
            return 'entryLevel';
        } else if (this.salary >= payGrades.midLevel.minSalary && this.salary <= payGrades.midLevel.maxSalary) {
            return 'midLevel';
        } else return 'seniorLevel';
    },
    calculateTax: function() {
        return payGrades[this.getCadre()].taxMultiplier * this.salary;    
    },
    getBenefits: function() {
        return payGrades[this.getCadre()].benefits.join(', ');
    },
    calculateBonus: function() {
        return .02 * this.salary;
    },
    reimbursementEligibility: function() {
        let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
        let totalBenefitsValue = 0; 
        let employeeBenefits = payGrades[this.getCadre()].benefits;
        for (let i = 0; i < employeeBenefits.length; i++) {
            totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
        }
        return totalBenefitsValue;
    }
};
*/

let Employee = {
    salary: 100000
};

export let getCadre = () => {
    if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
        return 'entryLevel';
    } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
        return 'midLevel';
    } else return 'seniorLevel';
};

export let calculateTax = () => {
    return payGrades[getCadre()].taxMultiplier * Employee.salary;    
};

export let getBenefits = () => {
    return payGrades[getCadre()].benefits.join(', ');
};

export let calculateBonus = () => {
    return .02 * Employee.salary;
};

export let reimbursementEligibility = () => {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0; 
    let employeeBenefits = payGrades[getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
        totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
};

let payGrades = {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

export default Employee;