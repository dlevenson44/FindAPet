class PetsController < ApiController
	before_action :require_login, except: [:index, :show]

	def index
		pets = Pet.all
		render json: { pets: pets }
	end

	def show
		pet = Pet.find(params[:id])
		render json: { pet: pet }
	end

	def create
		pet = Pet.new(pet_params)
		pet.user = current_user
		if pet.save
			render json: {
				message: 'ok',
				pet: pet
			}
		else
			render json: { message: "couldn't create pet" }
		end
	end	

	private
	def pet_params
		params.require(:pet).permit(:name, :post_type, :animal, :breed, :age, :picture, :description, :foster_length)
	end

end
