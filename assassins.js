let admins = new Map()

let players = new Map()

const registerUser = function(name, username, password, admin) {
	if (admin) {
		if (!admin.hasKey(username)) {
			admin.set(username, new User(name, username, password, true))
		}
		else {
			return "Username Taken"
		}
	}
	else {
		if (!players.hasKey(username)) {
			players.set(username, new User(name, username, password, false))
		}
		else {
			return "Username Taken"
		}
	}
}



