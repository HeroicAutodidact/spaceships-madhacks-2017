"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class GameState {
  constructor() {
    this.obstacles = [];
    this.players = [];
  }

  addObstacle(obstacle) {
    this.obstacles.push(obstacle);
  }

  addPlayer(player) {
    this.players.push(player);
  }

  getPlayers() {
    return this.players;
  }

  getPlayer(id) {
    return this.players.find(person => {
      if (person.id === id) return person.id;
    });
  }
}
exports.GameState = GameState;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9HYW1lU3RhdGUuanMiXSwibmFtZXMiOlsiR2FtZVN0YXRlIiwiY29uc3RydWN0b3IiLCJvYnN0YWNsZXMiLCJwbGF5ZXJzIiwiYWRkT2JzdGFjbGUiLCJvYnN0YWNsZSIsInB1c2giLCJhZGRQbGF5ZXIiLCJwbGF5ZXIiLCJnZXRQbGF5ZXJzIiwiZ2V0UGxheWVyIiwiaWQiLCJmaW5kIiwicGVyc29uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFNBQU4sQ0FBZ0I7QUFDckJDLGdCQUFjO0FBQ1osU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7O0FBRURDLGNBQVlDLFFBQVosRUFBc0I7QUFDcEIsU0FBS0gsU0FBTCxDQUFlSSxJQUFmLENBQW9CRCxRQUFwQjtBQUNEOztBQUVERSxZQUFVQyxNQUFWLEVBQWtCO0FBQ2hCLFNBQUtMLE9BQUwsQ0FBYUcsSUFBYixDQUFrQkUsTUFBbEI7QUFDRDs7QUFFREMsZUFBYTtBQUNYLFdBQU8sS0FBS04sT0FBWjtBQUNEOztBQUVETyxZQUFVQyxFQUFWLEVBQWM7QUFDWixXQUFPLEtBQUtSLE9BQUwsQ0FBYVMsSUFBYixDQUFtQkMsTUFBRCxJQUFZO0FBQ25DLFVBQUlBLE9BQU9GLEVBQVAsS0FBY0EsRUFBbEIsRUFDRSxPQUFPRSxPQUFPRixFQUFkO0FBQ0gsS0FITSxDQUFQO0FBSUQ7QUF2Qm9CO1FBQVZYLFMsR0FBQUEsUyIsImZpbGUiOiJsaWIvR2FtZVN0YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub2JzdGFjbGVzID0gW11cbiAgICB0aGlzLnBsYXllcnMgPSBbXVxuICB9XG5cbiAgYWRkT2JzdGFjbGUob2JzdGFjbGUpIHtcbiAgICB0aGlzLm9ic3RhY2xlcy5wdXNoKG9ic3RhY2xlKVxuICB9XG5cbiAgYWRkUGxheWVyKHBsYXllcikge1xuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcilcbiAgfVxuXG4gIGdldFBsYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyc1xuICB9XG5cbiAgZ2V0UGxheWVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVycy5maW5kKChwZXJzb24pID0+IHtcbiAgICAgIGlmIChwZXJzb24uaWQgPT09IGlkKVxuICAgICAgICByZXR1cm4gcGVyc29uLmlkXG4gICAgfSlcbiAgfVxufSJdfQ==