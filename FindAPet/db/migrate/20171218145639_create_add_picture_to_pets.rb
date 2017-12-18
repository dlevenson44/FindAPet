class CreateAddPictureToPets < ActiveRecord::Migration[5.1]
	def up
		add_attachment: :pets, :picture
	end

	def down
		remove_attachment: :pets, :picture
	end
end
