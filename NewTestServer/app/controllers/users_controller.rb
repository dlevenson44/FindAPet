class UsersController < ApiController
  before_action :require_login, except: [:create]

  def create
    user = User.create!(user_params)
    render json: { token: user.auth_token }
  end

  def profile
    user = User.find_by_auth_token!(request.headers[:token])
    user_pets = user.pets
    render json: { user: { username: user.username, f_name: user.f_name, l_name: user.l_name, address: user.address, city: user.city, state: user.state, zip: user.zip, phone: user.phone, email: user.email }, pets: user_pets }
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :f_name, :l_name, :address, :city, :state, :zip, :phone, :email)
  end

end

# <Pet id: 1, name: "Pringle", 
# post_type: "Foster", 
# animal: "Dog",
#  breed: "Black Lab", 
#  age: 11, 
#  picture: "https://imgur.com/a/W6U2W", 
#  description: "Enthusiastic eater, lover of walks, cuddles, and t...", 
#  foster_length: "6 months", 
#  user_id: 1, 
#  created_at: "2017-12-12 20:05:28", updated_at: "2017-12-12 20:05:28">