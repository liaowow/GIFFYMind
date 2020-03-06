# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Gif.destroy_all
User.destroy_all
GameGif.destroy_all
Game.destroy_all

gracie = Gif.create(image_url: "https://ca.slack-edge.com/T02MD9XTF-UD5PW68JW-55f48a258cbc-512")
mazen = Gif.create(image_url:"https://ca.slack-edge.com/T02MD9XTF-UFKMPLPQ8-a306271a419d-512")
ian = Gif.create(image_url:"https://emoji.slack-edge.com/T02MD9XTF/ultimate-ian-hollander/fd19494751960b66.jpg")
thinking = Gif.create(image_url:"https://media.giphy.com/media/CaiVJuZGvR8HK/giphy.gif")
kissing = Gif.create(image_url:"https://media.giphy.com/media/8YBM61XW2vZJykO0j4/giphy.gif")
screaming = Gif.create(image_url:"https://media.giphy.com/media/11CD1W0njRgJFK/giphy.gif")
tongue_out = Gif.create(image_url:"https://media.giphy.com/media/JlfERQStnPLiM/giphy.gif")
winking = Gif.create(image_url:"https://media.giphy.com/media/138soHYfxnxfbi/giphy.gif")

annie = User.create(username: "annie")
liz = User.create(username: "liz")

g1 = Game.create(user_id: annie.id, attempts: 3, playtime: 28, status: true)
g2 = Game.create(user_id: liz.id, attempts: 4, playtime: 85, status: true)

gg1 = GameGif.create(game_id: g1.id, gif_id: gracie.id)
gg2 = GameGif.create(game_id: g1.id, gif_id: ian.id)
gg3 = GameGif.create(game_id: g1.id, gif_id: winking.id)
gg4 = GameGif.create(game_id: g1.id, gif_id: mazen.id)

gg5 = GameGif.create(game_id: g2.id, gif_id: kissing.id)
gg6 = GameGif.create(game_id: g2.id, gif_id: ian.id)
gg7 = GameGif.create(game_id: g2.id, gif_id: tongue_out.id)
gg8 = GameGif.create(game_id: g2.id, gif_id: screaming.id)



