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

	def edit
		pet = Pet.find(params[:id])
	end

	def update
		pet = Pet.find(params[:id])
		if pet.update(pet_params)
			render json: {
				message: 'ok',
				pet: pet
			}
		else
			render json: { message: "couldn't save changes"}
		end		
	end

	def destroy
		pet = Pet.find(params[:id])
		pet.delete
	end

	private
	def pet_params
		params.require(:pet).permit(:name, :post_type, :animal, :breed, :age, :picture, :picture_content_type, :picture_file_name, :picture_file_size, :picture_updated_at, :description, :foster_length)
	end

end



# ActionController::ParameterMissing (param is missing or the value is empty: pet):
 
# app/controllers/pets_controller.rb:50:in `pet_params'
# app/controllers/pets_controller.rb:33:in `update'