class GamesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :create ]

  def create
    # Triggering creation of Character instance when clicking 'Start Game' on homepage
    @character = Character.new(health: 100, energy: 50, attack_damage: 5)
    @character.save

    # Triggering creation of UserCharacter instance when clicking 'Start Game' on homepage
    # UserCharacter is the table connecting our new character instance to the current user
    # (necessary in order to access the current user later)
    @user_character = UserCharacter.new(character_id: @character.id, user_id: current_user.id)
    @user_character.save

    # Triggering creation of Game instance when clicking 'Start Game' on homepage.
    # The character we just created gets assigned to it.
    @game = Game.new(character_id: @character.id)
    @game.save

    redirect_to new_journey_path
  end
end
