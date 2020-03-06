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

thinking = Gif.create(image_url:"https://media.giphy.com/media/CaiVJuZGvR8HK/giphy.gif")
kissing = Gif.create(image_url:"https://media.giphy.com/media/8YBM61XW2vZJykO0j4/giphy.gif")
screaming = Gif.create(image_url:"https://media.giphy.com/media/11CD1W0njRgJFK/giphy.gif")
tongue_out = Gif.create(image_url:"https://media.giphy.com/media/JlfERQStnPLiM/giphy.gif")
winking = Gif.create(image_url:"https://media.giphy.com/media/138soHYfxnxfbi/giphy.gif")
burger = Gif.create(image_url:"https://media.giphy.com/media/3og0IUEEbY9wRwrBL2/giphy.gif")
alien = Gif.create(image_url:"https://media.giphy.com/media/YEL6QTRi7efSM/giphy.gif")
crying = Gif.create(image_url:"https://media.giphy.com/media/3ohrypGmT9bFovUzmM/giphy.gif")

annie = User.create(username: "annie")
liz = User.create(username: "liz")

g1 = Game.create(user_id: annie.id, attempts: 3, playtime: 28, status: true)
g2 = Game.create(user_id: liz.id, attempts: 4, playtime: 85, status: true)

gg1 = GameGif.create(game_id: g1.id, gif_id: burger.id)
gg2 = GameGif.create(game_id: g1.id, gif_id: alien.id)
gg3 = GameGif.create(game_id: g1.id, gif_id: winking.id)
gg4 = GameGif.create(game_id: g1.id, gif_id: crying.id)

gg5 = GameGif.create(game_id: g2.id, gif_id: kissing.id)
gg6 = GameGif.create(game_id: g2.id, gif_id: alien.id)
gg7 = GameGif.create(game_id: g2.id, gif_id: tongue_out.id)
gg8 = GameGif.create(game_id: g2.id, gif_id: screaming.id)



