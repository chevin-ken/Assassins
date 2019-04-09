admins = new Map()

players = new Map()

registerUser(username, password, admin) {
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



