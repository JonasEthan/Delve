# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Character.create(
  health: 100,
  energy: 50,
  attack_damage: 5
)

User.create(
  username: "TestDummy",
  email: "test@dummy.com",
  password: "123456",
  character_id: 1
)

Disorder.create(
  name: "Paranoia",
  description: "Lorem Ipsum",
  success_text: "You have overcome a step of your Journey",
  meltdown_text: "Do not give, take a break in an save enviorment"
)

Enemy.create(
  name: "The Witness",
  health: 50,
  energy: 20,
  attack_damage: 5,
  disorder_id: 1,
  boss: false,
  img_url: "../app/assets/images/Witness.svg"
)
