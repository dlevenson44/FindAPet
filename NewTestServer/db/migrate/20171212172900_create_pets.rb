class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
    	t.string :name
    	t.string :post_type
    	t.string :animal
    	t.string :breed
    	t.integer :age
    	t.string :picture
    	t.string :description
    	t.string :foster_length
    	t.belongs_to :user

      t.timestamps
    end
  end
end
