class UsersController < ApiController
  before_action :require_login, except: [:create]

  def create
    user = User.create!(user_params)
    render json: { token: user.auth_token }
  end

  def profile
    user = User.find_by_auth_token!(request.headers[:token])
    user_pets = user.pets
    render json: { user: { username: user.username, f_name: user.f_name, l_name: user.l_name, address: user.address, city: user.city, state: user.state, zip: user.zip, phone: user.phone, email: user.email, pets: user_pets } }
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :f_name, :l_name, :address, :city, :state, :zip, :phone, :email)
  end

end