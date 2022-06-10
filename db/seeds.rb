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
puts "1 character created"

puts "Create users..."
User.create(
  username: "Dummy",
  email: "test@dummy.com",
  password: "123456",
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
  description: "Persons afflicted with paranoia might indeed feel like they have a horrible gaze upon them at all times. Anxious or fearful thoughts and feelings of being threatened or persecuted in some way, even if there is no evidence for it, characterize this condition. In more severe cases, these thoughts and feelings can become delusions: nothing (including contrary evidence) can convince a person that what they think or feel is not true. People afflicted with paranoia often find it difficult to trust others and might tend to behave defensively or aggressively, making it harder for them to maintain relationships.",
  success_text: "Paranoia is not a diagnosis itself, but a symptom of three different mental health conditions: paranoid personality disorder, delusional disorder (a type of psychosis), and paranoid schizophrenia (a subtype of schizophrenia). It can also occur in many other mental disorders. The cause of paranoia is a breakdown of various mental and emotional functions involving reasoning and assigned meanings. The reasons for these breakdowns are varied and uncertain, and depend on the condition with which it is associated. Among the possible causes are genes, brain chemistry, traumatic life events, stress, or a combination of these.",
  meltdown_text: "While there is no absolute cure for the conditions that cause paranoia, treatment can help to cope with their symptoms and live a happier, more productive life. The most important element in treating paranoia is building trusting and collaborative relationships to reduce the impact of irrational fearful thoughts and improve social skills. Treatments that aim to improve the person’s ability to function socially may include relaxation therapy, techniques to reduce anxiety, and behavior modification. Medication is also a treatment option."
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
  description: "A common but serious mood disorder, depression can feel like a deep abyss of sadness or emptiness. However, it can also have various other – less commonly known – symptoms. Feelings of worthlessness, or a lack of interest and pleasure in daily activities are the chains that might hold an afflicted person down. Physical symptoms include significant weight loss or gain, insomnia or excessive sleeping, lack of energy and inability to concentrate.",
  success_text: "Depression is one of the most common mental disorders and can occur at any age, including children and adolescents. Risk factors can be genetic (a personal or family history of depression), environmental / psychological (major life changes, trauma, stress), or biological (certain physical illnesses and medications).",
  meltdown_text: "Fortunately, depression is highly treatable. Treatment usually involves therapy, medication, or both. The earlier that treatment can begin, the more effective it is. Keep in mind that there is no single best solution for everybody! Outside of treatment, it helps to seek the right kind of social support. While talking about problems is important, spending too much time discussing them could actually increase depression as well. Physical exercise helps the brain to cope with stress and can thus decrease depression."
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
  description: "Though not an official diagnosis, it is widely acknowledged as a very real and specific form of intellectual self-doubt. Generally, people with imposter syndrome feel like they do not deserve the position they are in, or praise and rewards they receive for their accomplishments. For instance, they may attribute their professional success to luck rather than to ability, and fear that others will eventually unmask them as a fraud. Imposter feelings are generally accompanied by anxiety and, often, depression. Importantly, people that also suffer from other mental afflictions may not seek help because they don’t consider themselves worthy of help and professional attention.",
  success_text: "Imposter syndrome is not a mental disorder but rather an experience occurring in an individual. Explanations for the causes of imposter syndrome range from personality traits (like perfectionism or neuroticism) to family or behavioral causes, like growing up in a family with a strong focus on achievement. Societal pressures to be competitive and a high achiever are thought to add to the development of imposter syndrome. People who experience institutionalized discrimination (e.g. women or people of color) tend to be disproportionately affected by it.",
  meltdown_text: "Changing your mindset about your own abilities (and struggles) is easier said than done. Talking to mentors or peers can be a good first step. However, clear treatment guidelines to combat the root causes of imposter syndrome have yet to be developed. You can read more about potential new approaches in the resources below."
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
  name: "Anxiety",
  description: "Lorem Ipsum",
  success_text: "You have overcome a step of your journey",
  meltdown_text: "Do not give up, take a break in an save environment"
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
