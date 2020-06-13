/* * Firts Part *
import Airplane from './airplane';
const displayFuelCapacity = () => {
  Airplane.availableAirplanes.forEach(function(element){
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`)
  });
};
displayFuelCapacity();
*/
/* * Second part * */
import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}
function displayStaffStatus() {
    availableAirplanes.forEach(function(element){
        console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
    });
}
function displaySpeedRangeStatus() {
    availableAirplanes.forEach(function(element) {
        console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
    });
}
displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();