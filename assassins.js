let admins = new Map()

let players = new Map()

const registerUser = function(username, password, admin) {
	if (admin) {
		if (!admin.hasKey(username)) {
			admin.set(username, new User(username, password, true))
		}
		else {
			return "Username Taken"
		}
	}
	else {
		if (!players.hasKey(username)) {
			players.set(username, new User(username, password, false))
		}
		else {
			return "Username Taken"
		}
	}
}



