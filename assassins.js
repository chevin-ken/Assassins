//Admin account database

let admins = new Map()

//Player account database

let players = new Map()

//Registers a user given name, username, password, and whether or not it's an admin account
const registerUser = function(name, username, password, admin) {
	if (admin) {
		if (!admins.hasKey(username)) {
			admins.set(username, new User(name, username, password, true))
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


//Returns the user object associated with the login info, returns error string if login fails
const login = function(username, password, admin) {
	if (admin) {
		if (!admins.hasKey(username) || (! admins.get(username).password === password)) {
			return "Login failed";
		}
		else {
			return admins.get(username);
		}
	}
	else {
		if (!players.hasKey(username) || (!players.get(username).password === password)) {
			return "Login failed"
		}
		else {
			return admins.get(username)
		}
	}
}





