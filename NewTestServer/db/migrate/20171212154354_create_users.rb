class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
    	t.string :username
    	t.string :password_digest
    	t.string :f_name
    	t.string :l_name
    	t.string :address
    	t.string :city
    	t.string :state
    	t.string :zip
    	t.string :phone
    	t.string :email
    	t.string :auth_token
    	
      t.timestamps
    end
  end
end
