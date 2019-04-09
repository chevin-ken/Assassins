class Game{
	constructor(id) {
		this.id = id;
		this.over = false;
		this.started = false;
		this.count = 0
		this.players = []
		this.player_index = new Map()
		this.deaths = 0
		this.stats = new Map()
	}

	addPlayer(p) {
		p.game = this
		this.players.push(p)
		this.stats.set(p, 0)
		this.player_index.set(p, count)
		count ++;
	}
	removePlayer(assassin, target) {
		this.stats.set(assassin, this.stats.get(assassin) + 1)
		assassin.target = target.target
		this.players.splice(player_index.get(target) - deaths, 1)
		deaths ++;
		count --;
		if (count === 1) {
			endGame()
		}
	}
	startGame() {
		for (let i of range(players.length - 1)) {
			assassin = players[i]
			target = players[i+1]
			assassin.target = target
		}
		players[players.length-1].target = players[0]
		started = True;
	}
	endGame() {
		this.winner = players[0]
		this.over = True;
	}
}