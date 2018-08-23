//constructors are structure of data
//methods are the actions on the data
//code Plan
//create class with crewMember containing properites for name, job, specialSkill and this.ship = null
//create enterShip method in CrewMember Class that adds crewmember to ship
//create Ship class containing properties for name, type, ability and this.crew = []
//create missionstatement method that returns crewmember's ability or can't perform mission if no crew are on a ship

'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

class CrewMember {
  constructor (name, job, specialSkill) {
    this.name = name;
    this.job = job;
    this.specialSkill= specialSkill;
    this.ship = null;
  }
  enterShip(ship) {
    this.ship = ship;
    ship.crew.push(this); //ship is parameter, crew refers to array in ship class and this is the crewMember

  }
}
class Ship  {
  constructor (name, type, ability) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
  }
  missionStatement() {
    if(this.crew.length > 0){
      return this.ability
    }
    return "Can't perform a mission yet."
  }
}
const crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
const crewMember2 = new CrewMember("Commander Lewis", "commander", "geology");
const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
const hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');

//tests
//checking for class for CrewMember with constructor assign name, job, specialskill, This.ship is null (not in constructor)
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });
    //entership method will live in crewmember class
    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav,"Ship the crew member entered should be mav");
      assert.equal(mav.crew.length, 1, "The number of crew members on the nav should be 1");
      assert.equal(mav.crew[0], crewMember1, "The crew member should be listed on the crew of the mav");
    });
  });
  //create classfor ship with construtor assigning name, type and ability and empty this.crew = []
  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);   
    });
    //method misson statement goes in ship function

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
