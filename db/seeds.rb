# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ! Please drop the data base and then create, migrate and seed anew
# ! rails db:drop db:create db:migrate db:seed

# puts "Create character..."
# Character.create(
#   health: 100,
#   energy: 50,
#   attack_damage: 5
# )
# puts "1 character created"

puts "Create users..."
User.create(
  username: "Dummy",
  email: "test@dummy.com",
  password: "123456"
  # character_id: 1
)
# User.create(
#   username: "Jonas",
#   email: "jonas@dummy.com",
#   password: "password",
#   character_id: 1
# )
# User.create(
#   username: "Lena",
#   email: "lena@dummy.com",
#   password: "password",
#   character_id: 1
# )
# User.create(
#   username: "Lukas",
#   email: "lukas@dummy.com",
#   password: "password",
#   character_id: 1
# )
# puts "4 users created"
puts User.first

puts "Special Ability Nr. 1-3"

PlayerAbility.create(
  name: "Healing",
  description: "This special ability heals you for the cost of 5 energy from 10 to 20 HP",
  ability_cost: 5
)

PlayerAbility.create(
  name: "Heavy Strike",
  description: "This ability damages your enemy more than a regular attack",
  ability_cost: 10
)

PlayerAbility.create(
  name: "Reckless Attack",
  description: "Does more damage than the regular attack but has a change of damaging the user",
  ability_cost: 5
)

puts "Ability created"

UserAbility.create(
  user_id: 1,
  player_ability_id: 1
)

UserAbility.create(
  user_id: 1,
  player_ability_id: 2
)

UserAbility.create(
  user_id: 1,
  player_ability_id: 3
)

puts "Ability assigned"

puts "Paranoia"

Disorder.create(
  name: "Paranoia",
  description: "Lorem Ipsum",
  success_text: "You have overcome a step of your Journey",
  meltdown_text: "Do not give up, take a break in an save enviorment"
)

puts "Paranoia Enemy"

Enemy.create(
  name: "The Witness",
  health: 50,
  energy: 15,
  attack_damage: 5,
  disorder_id: 1,
  boss: false
)

Enemy.create(
  name: "The Stalker",
  health: 75,
  energy: 40,
  attack_damage: 5,
  disorder_id: 1,
  boss: true
)

puts "Paranoia done"

puts "Depression"

Disorder.create(
  name: "Depression",
  description: "Lorem Ipsum",
  success_text: "You have overcome a step of your Journey",
  meltdown_text: "Do not give up, take a break in an save enviorment"
)

puts "Depression Enemy"

Enemy.create(
  name: "The Chain",
  health: 50,
  energy: 20,
  attack_damage: 5,
  disorder_id: 2,
  boss: false
)

Enemy.create(
  name: "The Abyss",
  health: 75,
  energy: 45,
  attack_damage: 5,
  disorder_id: 2,
  boss: true
)

puts "Depression done"

puts "Imposter Sydrom"

Disorder.create(
  name: "Imposter Syndrome",
  description: "Lorem Ipsum",
  success_text: "You have overcome a step of your Journey",
  meltdown_text: "Do not give up, take a break in an save enviorment"
)

puts "Imposter Syndrom Enemy"

Enemy.create(
  name: "The Prosecutor",
  health: 50,
  energy: 20,
  attack_damage: 5,
  disorder_id: 3,
  boss: false
)

Enemy.create(
  name: "The Mask",
  health: 75,
  energy: 35,
  attack_damage: 5,
  disorder_id: 3,
  boss: true
)

puts "Imposter Syndrom done"

puts "Hysteria is now invited"

Disorder.create(
  name: "Testing",
  description: "Lorem Ipsum",
  success_text: "You have overcome a step of your Journey",
  meltdown_text: "Do not give up, take a break in an save enviorment"
)

Enemy.create(
  name: "Hysteria",
  health: 50,
  energy: 50,
  attack_damage: 5,
  disorder_id: 4,
  boss: false
)

puts "Hysteria joined the Party"

puts "Enemies are Special too"
