class User < ApplicationRecord
    has_many :games
    
    validates :username, uniqueness: true
    validates :username, presence: true
end
