class Pet < ApplicationRecord
	#declares model has an attachment in the picture column
	has_attached_file :picture, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
	#validates the content type being uploaded is an image
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/
	belongs_to :user
end
