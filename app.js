function duel() {
    const p1Health = getAttributeValue("p1-health");
    const p1Armor = getAttributeValue("p1-armor");
    const p1DPS = getAttributeValue("p1-attack");

    const p2Health = getAttributeValue("p2-health");
    const p2Armor = getAttributeValue("p2-armor");
    const p2DPS = getAttributeValue("p2-attack");

    /**
     * This if statement checks if there are any missing inputs and 
     * then alerts the user if ther are.
     */
    if (p1Health === null || p1Armor === null || p1DPS === null || 
        p2Health === null || p2Armor === null || p2DPS === null) {
        alert("Please fill out all fields before continuing.");
        
        return;
    }

    /**
     * This funtion calculates the time that each player is alive when 
     * taking the other players damage by using the surviving time of the armor and health and 
     * then combinging them.
     * @param health This is the health of the player
     * @param armor This is the armor of the player
     * @param dps  This is the damage per a second of the players
     * @returns 
     */
    function calculateTime(health, armor, dps) {
        let armorTime = (armor * 2) / dps;
        let healthTime = health / dps;
        
        return armorTime + healthTime;
    }

    const p1SurvivalTime = calculateTime(p1Health, p1Armor, p2DPS); // player one survival time
    const p2SurvivalTime = calculateTime(p2Health, p2Armor, p1DPS); // player two survival time

    /**
     * These if statements determine the result of the battle and 
     * alert the user with a message based on the outcome.
     */
    if (Math.abs(p1SurvivalTime - p2SurvivalTime) <= 0.1) {
        alert("It's a draw!");
    } else if (p1SurvivalTime > p2SurvivalTime) {
        alert(`Player 1 wins in ${p2SurvivalTime} seconds!`);
    } else {
        alert(`Player 2 wins in ${p1SurvivalTime} seconds!`);
    }
}
