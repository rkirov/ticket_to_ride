interface Route {
    from: City;
    to: City;
    distance: number;
    colors: Color[];
}

type Color = 'red' | 'blue' | 'green' | 'yellow' | 'black' | 'white' | 'wild';

type City = 'San Francisco' | 'Los Angeles' | 'Seattle'
    | 'Helena' | 'Calgary' | 'Salt Lake City' | 'Denver' | 'Albuquerque'
    | 'Winnipeg' | 'Duluth' | 'Chicago' | 'Kansas City' | 'Dallas'
    | 'Montreal' | 'New York' | 'Washington' | 'Atlanta' | 'Miami' | 'New Orleans';

let ROUTES: Route[] = [
    {
        from: 'San Francisco',
        to: 'Seattle',
        distance: 3,
        colors: ['green', 'blue']
    },
    {
        from: 'San Francisco',
        to: 'Los Angeles',
        distance: 1,
        colors: ['red', 'black']
    },
    {
        from: 'Los Angeles',
        to: 'Albuquerque',
        distance: 3,
        colors: ['white', 'blue']
    },
    {
        from: 'San Francisco',
        to: 'Salt Lake City',
        distance: 2,
        colors: ['green', 'yellow']
    },
    {
        from: 'Los Angeles',
        to: 'Salt Lake City',
        distance: 2,
        colors: ['red']
    },
    {
        from: 'Seattle',
        to: 'Calgary',
        distance: 3,
        colors: ['black', 'red']
    },
    {
        from: 'Seattle',
        to: 'Helena',
        distance: 2,
        colors: ['yellow']
    },
    {
        from: 'Helena',
        to: 'Salt Lake City',
        distance: 1,
        colors: ['green', 'black']
    },
    {
        from: 'Calgary',
        to: 'Helena',
        distance: 1,
        colors: ['red', 'white']
    },
    {
        from: 'Seattle',
        to: 'Salt Lake City',
        distance: 3,
        colors: ['white']
    },
    {
        from: 'Calgary',
        to: 'Winnipeg',
        distance: 3,
        colors: ['green', 'yellow']
    },
    {
        from: 'Helena',
        to: 'Winnipeg',
        distance: 3,
        colors: ['blue']
    },
    {
        from: 'Helena',
        to: 'Denver',
        distance: 2,
        colors: ['yellow']
    },
    {
        from: 'Salt Lake City',
        to: 'Denver',
        distance: 2,
        colors: ['black', 'blue']
    },
    {
        from: 'Salt Lake City',
        to: 'Albuquerque',
        distance: 2,
        colors: ['yellow']
    },
    {
        from: 'Winnipeg',
        to: 'Duluth',
        distance: 1,
        colors: ['red', 'black']
    },
    {
        from: 'Duluth',
        to: 'Denver',
        distance: 4,
        colors: ['black']
    },
    {
        from: 'Denver',
        to: 'Albuquerque',
        distance: 1,
        colors: ['red']
    },
    {
        from: 'Kansas City',
        to: 'Duluth',
        distance: 2,
        colors: ['white']
    },
    {
        from: 'Kansas City',
        to: 'Denver',
        distance: 2,
        colors: ['white', 'green']
    },
    {
        from: 'Kansas City',
        to: 'Dallas',
        distance: 1,
        colors: ['yellow', 'red']
    },
    {
        from: 'Dallas',
        to: 'Albuquerque',
        distance: 2,
        colors: ['black', 'green']
    },
    {
        from: 'Duluth',
        to: 'Montreal',
        distance: 3,
        colors: ['green', 'blue']
    },
    {
        from: 'Duluth',
        to: 'Chicago',
        distance: 1,
        colors: ['blue', 'red']
    },
    {
        from: 'Chicago',
        to: 'Kansas City',
        distance: 1,
        colors: ['black', 'yellow']
    },
    {
        from: 'Chicago',
        to: 'Montreal',
        distance: 3,
        colors: ['yellow']
    },
    {
        from: 'Montreal',
        to: 'New York',
        distance: 1,
        colors: ['black', 'white']
    },
    {
        from: 'New York',
        to: 'Chicago',
        distance: 3,
        colors: ['red', 'white']
    },
    {
        from: 'Chicago',
        to: 'Washington',
        distance: 3,
        colors: ['black']
    },
    {
        from: 'New York',
        to: 'Washington',
        distance: 1,
        colors: ['yellow', 'blue']
    },
    {
        from: 'Washington',
        to: 'Atlanta',
        distance: 2,
        colors: ['yellow', 'white']
    },
    {
        from: 'Atlanta',
        to: 'Miami',
        distance: 2,
        colors: ['black', 'blue']
    },
    {
        from: 'Washington',
        to: 'Miami',
        distance: 4,
        colors: ['green', 'red']
    },
    {
        from: 'Miami',
        to: 'New Orleans',
        distance: 3,
        colors: ['yellow', 'white']
    },
    {
        from: 'New Orleans',
        to: 'Atlanta',
        distance: 1,
        colors: ['black', 'red']
    },
    {
        from: 'New Orleans',
        to: 'Dallas',
        distance: 2,
        colors: ['red', 'blue']
    },
    {
        from: 'Dallas',
        to: 'Atlanta',
        distance: 3,
        colors: ['white']
    },
    {
        from: 'Atlanta',
        to: 'Kansas City',
        distance: 3,
        colors: ['blue']
    },
    {
        from: 'Atlanta',
        to: 'Chicago',
        distance: 2,
        colors: ['green']
    }
]

let CITIES = [...new Set(ROUTES.map(r => r.from).concat(ROUTES.map(r => r.to)))] as City[];
console.log(`Cities: ${CITIES.length}`);
console.log(`Routes: ${ROUTES.length}`);

let neighbors = new Map<City, City[]>();
for (let route of ROUTES) {
    if (!neighbors.has(route.from)) {
        neighbors.set(route.from, []);
    }
    neighbors.get(route.from)?.push(route.to);
    if (!neighbors.has(route.to)) {
        neighbors.set(route.to, []);
    }
    neighbors.get(route.to)?.push(route.from);
}

console.log(`Degrees:`);
for (let [k, v] of neighbors) {
    console.log(`${k}: ${v.length}`);
}

let routesPerColor = new Map<Color, Route[]>();
for (let route of ROUTES) {
    for (let color of route.colors) {
        if (!routesPerColor.has(color)) {
            routesPerColor.set(color, []);
        }
        routesPerColor.get(color)?.push(route);
    }
}

console.log(`Routes per color:`);
for (let [k, v] of routesPerColor) {
    let sumLength = v.reduce((acc, route) => acc + route.distance, 0);
    console.log(`${k}: ${v.length} routes, ${sumLength} distance`);
}

type Ticket = [City, City];

let TICKETS: Ticket[] = [
    ['Denver', 'Los Angeles'],
    ['Salt Lake City', 'Dallas'],
    ['Winnipeg', 'Montreal'],
    ['Montreal', 'Kansas City'],
    ['Washington', 'New Orleans'],
    ['Calgary', 'San Francisco'],
    ['Winnipeg', 'New York'],
    ['Kansas City', 'Miami'],
    ['Seattle', 'Los Angeles'],
    ['New York', 'Dallas'],
    ['Seattle', 'Denver'],
    ['Seattle', 'Albuquerque'],
    ['Calgary', 'Los Angeles'],
    ['New York', 'Atlanta'],
    ['Duluth', 'Albuquerque'],
    ['Seattle', 'Winnipeg'],
    ['Helena', 'Kansas City'],
    ['Calgary', 'Chicago'],
    ['Chicago', 'Albuquerque'],
    ['Chicago', 'New Orleans'],
    ['Dallas', 'Miami'],
    ['Chicago', 'Miami'],
    ['New York', 'New Orleans'],
    ['Montreal', 'Atlanta'],
    ['Kansas City', 'Washington'],
    ['Duluth', 'Salt Lake City'],
    ['New York', 'Miami'],
    ['Denver', 'New Orleans'],
    ['Los Angeles', 'Dallas'],
    ['Helena', 'Chicago'],
    ['Duluth', 'Washington'],
    ['Denver', 'San Francisco']
];

let EAST_COAST = ['New York', 'Washington', 'Miami'] as const as City[];
let WEST_COAST = ['San Francisco', 'Los Angeles', 'Seattle'] as const as City[];

console.log(`Tickets: ${TICKETS.length}`);

let ticketsPerCity = new Map<City, City[]>();
for (let ticket of TICKETS) {
    for (let city of ticket) {
        if (!ticketsPerCity.has(city)) {
            ticketsPerCity.set(city, []);
        }
        ticketsPerCity.get(city)?.push(ticket[0] === city ? ticket[1] : ticket[0]);
    }
}

console.log(`Tickets per city:`);
for (let [k, v] of ticketsPerCity) {
    console.log(`${k}: ${v.length}`);
}

// Cache for Dijkstra paths to avoid recalculating
const pathCache = new Map<string, [City[], number]>();

function djikstra(start: City, end: City): [City[], number] {
    // Check if path is already cached
    const cacheKey = `${start}-${end}`;
    if (pathCache.has(cacheKey)) {
        return pathCache.get(cacheKey)!;
    }
    
    // Reverse direction check - path A→B is the same as B→A in reverse
    const reverseCacheKey = `${end}-${start}`;
    if (pathCache.has(reverseCacheKey)) {
        const [reversePath, distance] = pathCache.get(reverseCacheKey)!;
        const forwardPath = [...reversePath].reverse();
        return [forwardPath, distance];
    }

    let distances = new Map<City, number>();
    let hops = new Map<City, number>();
    let previous = new Map<City, City | null>();
    let queue: City[] = [];

    for (let city of CITIES) {
        distances.set(city, Infinity);
        hops.set(city, Infinity);
        previous.set(city, null);
        queue.push(city);
    }

    distances.set(start, 0);
    hops.set(start, 0);

    while (queue.length > 0) {
        // Find city with minimum composite score (distance * 1000 + hops)
        let current = queue.reduce((min, city) => {
            let minScore = distances.get(min)! * 1000 + hops.get(min)!;
            let cityScore = distances.get(city)! * 1000 + hops.get(city)!;
            return cityScore < minScore ? city : min;
        }, queue[0]);
        queue.splice(queue.indexOf(current), 1);

        for (let neighbor of neighbors.get(current)!) {
            let d = ROUTES.find(r =>
                (r.from === current && r.to === neighbor) ||
                (r.to === current && r.from === neighbor)
            )?.distance;
            let alt = distances.get(current)! + d!;
            let newHops = hops.get(current)! + 1;
            
            // Update if distance is shorter OR if distance is equal but hops is fewer
            if (alt < distances.get(neighbor)! || 
                (alt === distances.get(neighbor)! && newHops < hops.get(neighbor)!)) {
                distances.set(neighbor, alt);
                hops.set(neighbor, newHops);
                previous.set(neighbor, current);
            }
        }
    }

    let path: City[] = [];
    let current = end;
    while (current) {
        path.push(current);
        current = previous.get(current)!;
    }

    const result: [City[], number] = [path.reverse(), distances.get(end)!];
    
    // Cache the result for future use
    pathCache.set(cacheKey, result);
    
    return result;
}

let ticketLengths = new Map<Ticket, [City[], number]>();
for (let ticket of TICKETS) {
    ticketLengths.set(ticket, djikstra(...ticket));
}

let ticketsPerLengths = new Map<string, Ticket[]>();
for (let [k, v] of ticketLengths) {
    let length = v[1].toString();
    let numCities = v[0].length;
    let key = `${length}-${numCities}`;
    if (!ticketsPerLengths.has(key)) {
        ticketsPerLengths.set(key, []);
    }
    ticketsPerLengths.get(key)?.push(k);
}

console.log(`Tickets per length:`);
for (let [k, v] of ticketsPerLengths) {
    console.log(`${k}: ${v.length} tickets, ${v.map(t => t.join(' -> ')).join(', ')}`);
}

function shuffled<T>(array: T[]): T[] {
    let result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function isRouteCompleted(route: Route, completedRoutes: Set<string>): boolean {
    let routeKey = `${route.from}-${route.to}`;
    return completedRoutes.has(routeKey);
}


function hasCardsForRoute(route: Route, hand: Color[]): boolean {
    let availableColors = [...hand];
    let wildcards = availableColors.filter(c => c === 'wild').length;
    
    return route.colors.every(neededColor => {
        let idx = availableColors.indexOf(neededColor);
        if (idx !== -1) {
            availableColors.splice(idx, 1);
            return true;
        }
        if (wildcards > 0) {
            // Only use wildcard if no matching color is available
            wildcards--;
            availableColors.splice(availableColors.indexOf('wild'), 1);
            return true;
        }
        return false;
    });
}

function scoreRouteForTickets(route: Route, tickets: Ticket[]): number {
    let routeScore = 0;
    
    // First, check direct ticket completion
    for (let ticket of tickets) {
        let [start, end] = ticket;

        if ((route.from === start && route.to === end) ||
            (route.from === end && route.to === start)) {
            routeScore += 10;
            continue;
        }

        // Check if this route helps complete any tickets by being part of the shortest path
        let [path, _] = djikstra(start, end);
        if (path.includes(route.from) && path.includes(route.to) && 
            Math.abs(path.indexOf(route.from) - path.indexOf(route.to)) === 1) {
            routeScore += 8; // High priority for routes that are part of shortest paths
        } else if (route.from === start || route.to === start ||
            route.from === end || route.to === end) {
            routeScore += 5;
        }
    }
    return routeScore;
}

function completeRoute(route: Route, hand: Color[], completedRoutes: Set<string>): number {
    route.colors.forEach(color => {
        let idx = hand.indexOf(color);
        hand.splice(idx, 1);
    });
    completedRoutes.add(`${route.from}-${route.to}`);
    return route.colors.length;
}

function isTicketCompleted(start: City, end: City, completedRoutes: Set<string>): boolean {
    let visited = new Set<City>();
    let queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        let city = queue.shift()!;
        if (city === end) return true;

        for (let route of ROUTES) {
            let routeKey = `${route.from}-${route.to}`;
            let reverseKey = `${route.to}-${route.from}`;
            if (!completedRoutes.has(routeKey) && !completedRoutes.has(reverseKey)) continue;

            let nextCity = route.from === city ? route.to :
                          route.to === city ? route.from : null;
            
            if (nextCity && !visited.has(nextCity)) {
                queue.push(nextCity);
                visited.add(nextCity);
            }
        }
    }
    return false;
}

function drawNewTicket(shuffledTickets: Ticket[], completedRoutes: Set<string>, completedTickets: number): [Ticket | null, number] {
    while (shuffledTickets.length > 0) {
        let newTicket = shuffledTickets[0];
        let [start, end] = newTicket;
        shuffledTickets.splice(0, 1);
        
        if (isTicketCompleted(start, end, completedRoutes)) {
            // Count this ticket as completed immediately
            completedTickets++;
            // If we've reached our goal, return null
            if (completedTickets >= 6) return [null, completedTickets];
            // Otherwise continue looking for an uncompleted ticket
            continue;
        }
        return [newTicket, completedTickets];
    }
    return [null, completedTickets];
}

function isWestToEastCompleted(completedRoutes: Set<string>): boolean {
    for (let west of WEST_COAST) {
        for (let east of EAST_COAST) {
            if (isTicketCompleted(west, east, completedRoutes)) {
                return true;
            }
        }
    }
    return false;
}

function simulateGame(): number {
    let deck = shuffled([
        ...Array(12).fill('red'),
        ...Array(12).fill('blue'),
        ...Array(12).fill('green'),
        ...Array(12).fill('yellow'),
        ...Array(12).fill('black'),
        ...Array(12).fill('white'),
        ...Array(12).fill('wild')
    ]);
    let hand: Color[] = [];
    let completedRoutes = new Set<string>();
    let completedTickets = 0;
    let cardsPlayed = 0;
    let turns = 0;
    let westToEastCompleted = false;

    // Initial draw of cards
    for (let i = 0; i < 4; i++) {
        hand.push(deck[0]);
        deck.splice(0, 1);
    }

    // Initial draw of tickets
    let tickets: Ticket[] = [];
    let shuffledTickets = shuffled([...TICKETS]);
    tickets.push(shuffledTickets[0], shuffledTickets[1]);
    shuffledTickets.splice(0, 2);

    // Game loop
    while (completedTickets < 6 && cardsPlayed < 20) {
        turns++;

        // If hand is empty and deck is empty, break the loop
        if (hand.length === 0 && deck.length === 0) {
            break;
        }

        // Try to complete a route
        let routeCompleted = false;
        let bestRoute: Route | null = null;
        let bestScore = 0;

        // Find the route with the highest score
        for (let route of ROUTES) {
            if (isRouteCompleted(route, completedRoutes)) continue;

            if (hasCardsForRoute(route, hand)) {
                let routeScore = scoreRouteForTickets(route, tickets);
                
                // If no high-scoring routes found, consider any valid route
                if (routeScore === 0) routeScore = 1;

                if (routeScore > bestScore) {
                    bestScore = routeScore;
                    bestRoute = route;
                }
            }
        }

        // Complete the best route if one was found
        if (bestRoute) {
            cardsPlayed += completeRoute(bestRoute, hand, completedRoutes);

            // Check if this route completes any tickets
            for (let ticket of [...tickets]) {
                let [start, end] = ticket;
                if (isTicketCompleted(start, end, completedRoutes)) {
                    completedTickets++;
                    tickets.splice(tickets.indexOf(ticket), 1);
                    
                    // Only draw a new ticket if we haven't reached 6 completed tickets
                    if (completedTickets < 6 && tickets.length < 2) {
                        let [newTicket, updatedCount] = drawNewTicket(shuffledTickets, completedRoutes, completedTickets);
                        completedTickets = updatedCount;
                        if (newTicket) tickets.push(newTicket);
                    }
                }
            }

            // Check for West-to-East coast completion
            if (!westToEastCompleted && isWestToEastCompleted(completedRoutes)) {
                completedTickets++;
                westToEastCompleted = true;
            }

            routeCompleted = true;
        }

        // If no route completed, draw 2 cards
        if (!routeCompleted && deck.length > 0) {
            for (let i = 0; i < 2 && deck.length > 0; i++) {
                let idx = Math.floor(Math.random() * deck.length);
                hand.push(deck[idx]);
                deck.splice(idx, 1);
            }
        }
    }

    return turns;
}

// Run 1000 simulations and calculate distribution
let turnDistribution = new Map<number, number>();
const NUM_SIMULATIONS = 1_000;

for (let i = 0; i < NUM_SIMULATIONS; i++) {
    let turns = simulateGame();
    turnDistribution.set(turns, (turnDistribution.get(turns) || 0) + 1);
}

// Sort and display distribution
console.log(`Turn distribution over ${NUM_SIMULATIONS} simulations:`);
let sortedTurns = Array.from(turnDistribution.entries()).sort(([a], [b]) => a - b);
for (let [turns, count] of sortedTurns) {
    let percentage = (count / NUM_SIMULATIONS * 100).toFixed(1);
    console.log(`${turns} turns: ${count} games (${percentage}%)`);
}





