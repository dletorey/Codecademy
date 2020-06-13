/* * first part *
let Airplane = {};
Airplane.availableAirplanes = [
    {name: 'AeroJet', fuelCapacity: 800},
    {name: 'SkyJet', fuelCapacity: 500}
];
export default Airplane;
*/
/* second part */
let availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'SensorOperators']
    }, 
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants']
    }
];
let flightRequirements = {
    requiredStaff: 4
};
const meetsStaffRequirements = (availableStaff, requiredStaff) => {
    if (availableStaff.length >= requiredStaff) {
        return true;
    } else {
        return false;
    }
};
export {availableAirplanes, flightRequirements, meetsStaffRequirements};