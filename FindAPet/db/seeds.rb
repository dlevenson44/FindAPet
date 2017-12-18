#User table
danwoo = User.create!(username: 'danwoo', password: 'test', f_name: 'Dan', l_name: 'Levenson', address: '41 Hooper St', city: 'Worcester', state: 'MA', zip: '01605', phone: '9174990107', email: 'dan@dan.com')
danfram = User.create!(username: 'danfram', password: 'test', f_name: 'Danny', l_name: 'Levenson', address: '14 Temple St', city: 'Framingham', state: 'MA', zip: '01702', phone: '9174990107', email: 'dan@aol.com')
sue = User.create!(username: 'sue', password: 'sue', f_name: 'Sue', l_name: 'Progoff', address: '123 Main St', city: 'New York', state: 'NY', zip: '10028', phone: '2125551234', email: 'sue@aol.com')
billy = User.create!(username: 'billy', password: 'billy', f_name: 'Billy', l_name: 'Blue', address: '456 Electric Ave', city: 'New York', state: 'NY', zip: '10021', phone: '9175551234', email: 'billy@hotmail.com')
mai = User.create!(username: 'mai', password: 'mai', f_name: 'Mai', l_name: 'Moly', address: '789 Boogie Dr', city: 'Denver', state: 'CO', zip: '12345', phone: '1234567890', email: 'mai@gmail.com')
emma = User.create!(username: 'emma', password: 'emma', f_name: 'Emma', l_name: 'Cheddar', address: '012 Success Ln', city: 'Denver', state: 'CO', zip: '54321', phone: '0987654321', email: 'emma@aol.com')


#Pets table
Pet.create!(user: danwoo, name: 'Pringle', post_type: 'Foster', animal: 'Dog', breed: 'Black Lab', age: 11, description: 'Enthusiastic eater, lover of walks, cuddles, and tummy rubs, Pringle is simply the bees knees.', foster_length: '6 months')
Pet.create!(user: danfram, name: 'Kara', post_type: 'Foster', animal: 'Dog', breed: 'Black Lab', age: 13, description: 'Lover of food, tennis balls, and tummy rubs, Kara is a patient and gentle doggo who is great with kids.', foster_length: '1 year')
Pet.create!(user: sue, name: 'Sneakers', post_type: 'Adoption', animal: 'Dog', breed: 'Beagle', age: 6, description: 'Great home security, Sneakers is a vocal and loyal dog who is terrific at chasing chickens.')
Pet.create!(user: billy, name: 'Rocky', post_type: 'Adoption', animal: 'Dog', breed: 'Golden Retriever', age: 10, description: 'Lover of swimming and tummy rubs, Rocky loves travelling and being outside.')
Pet.create!(user: mai, name: 'Tino', post_type: 'Adoption', animal: 'Dog', breed: 'Pitbull', age: 5, description: 'Good as a door bell, Tino will bark anytime any body walks through the door.  But do not let that fool you, as Tino is softer than tissue paper and enjoys love and attention from all.')
Pet.create!(user: emma, name: 'Ryder', post_type: 'Foster', animal: 'Cat', breed: 'Black Kitty', age: 2, description: 'Ryder loves the outdoors and rolling around in dirt, very well behaved kitty!', foster_length: '1 year')
Pet.create!(user: emma, name: 'Oscar', post_type: 'Adoption', animal: 'Cat', breed: 'Grey Kitty', age: 2, description: 'Oscar likes playing with jalapenos, sneaking outside, and licking the air.  He rocks.')