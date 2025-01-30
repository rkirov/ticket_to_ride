# Ticket to Ride: First Journey simulator

Basic analysis of the game Ticket to Ride: First Journey.

- distribution of tickets - length and number of cities
- simulation of single player games to produce a distribution of number of turns to win.

Used Cursor AI.

## Analysis

Tickets per length:

- 3 cards - 3 cities: 3 tickets = Washington -> New Orleans, New York -> Atlanta, Chicago -> New Orleans
- 4 cards - 3 cities: 11 tickets = Denver -> Los Angeles, Salt Lake City -> Dallas, Winnipeg -> Montreal, Montreal -> Kansas City, Seattle -> Los Angeles,Seattle -> Denver, Helena -> Kansas City, Chicago -> Miami, Kansas City -> Washington, Duluth -> Washington, Denver -> San Francisco
- 4 cards - 4 cities: 5 tickets = Calgary -> San Francisco, Calgary -> Los Angeles, Chicago -> Albuquerque, New York -> New Orleans, Montreal -> Atlanta
- 5 cards - 3 cities: 6 tickets = Kansas City -> Miami, Seattle -> Albuquerque, Seattle -> Winnipeg, Dallas -> Miami, New York -> Miami, Los Angeles -> Dallas
- 5 cards - 4 cities: 7 tickets = Winnipeg -> New York, New York -> Dallas, Duluth -> Albuquerque, Calgary -> Chicago, Duluth -> Salt Lake City, Denver -> New Orleans, Helena -> Chicago


## Simulation

Turns to win playing solo for 1000 simulations:

- 11 turns: 1 games (0.1%)
- 14 turns: 2 games (0.2%)
- 15 turns: 1 games (0.1%)
- 16 turns: 6 games (0.6%)
- 17 turns: 9 games (0.9%)
- 18 turns: 30 games (3.0%)
- 19 turns: 24 games (2.4%)
- 20 turns: 53 games (5.3%)
- 21 turns: 155 games (15.5%)
- 22 turns: 266 games (26.6%)
- 23 turns: 275 games (27.5%)
- 24 turns: 133 games (13.3%)
- 25 turns: 41 games (4.1%)
- 26 turns: 4 games (0.4%)
