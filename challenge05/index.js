function cyberReindeer(road, time) {
  let moves = [road];
  let sledIndex = 0;
  let barrierSymbol = ".";

  for (let currentTime = 1; currentTime < time; currentTime++) {
    if (currentTime === 5) {
      road = road.replace(/\|/g, "*");
    }

    const newRoad = road.replace(/S[\.\*]/, `${barrierSymbol}S`);
    
    if (newRoad !== road) {
      sledIndex++;
      barrierSymbol = road[sledIndex];
    }

    road = newRoad;
    moves.push(road);
  }

  return moves;
}
