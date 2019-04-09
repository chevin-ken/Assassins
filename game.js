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
		this.player_index.set(p, this.count)
		this.count ++;
	}
	removePlayer(assassin, target) {
		this.stats.set(assassin, this.stats.get(assassin) + 1)
		assassin.target = target.target
		this.players.splice(player_index.get(target) - this.deaths, 1)
		this.deaths ++;
		this.count --;
		if (this.count === 1) {
			this.endGame()
		}
	}
	startGame() {
		for (let i of range(this.players.length - 1)) {
			let assassin = this.players[i]
			let target = this.players[i+1]
			assassin.target = target
		}
		this.players[this.players.length-1].target = this.players[0]
		this.started = True;
	}
	endGame() {
		this.winner = players[0]
		this.over = True;
	}
}