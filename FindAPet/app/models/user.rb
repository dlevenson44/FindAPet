class User < ApplicationRecord
	#makes sure username is only repeated once in database
	validates_uniqueness_of :username
	#bcrypt method that handles password hashing
  has_secure_password
  has_secure_token :auth_token
  has_many :pets

  #used to logout
  def invalidate_token
    self.update_columns(auth_token: nil)
  end

  #makes sure use of built-in auth method bcrypt gives and hashes the password against the password_digest in the db
  def self.validate_login(username, password)
    user = find_by(username: username)
    if user && user.authenticate(password)
      user
    end
  end
end


