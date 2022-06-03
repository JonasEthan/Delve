class JourneysController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @disorders = Disorder.all
    @journey = Journey.new
  end

  def create
    array_current_user_character = UserCharacter.where(user_id: current_user.id) #array of 1
    current_user_character = array_current_user_character.first

    game_array = Game.where(character_id: current_user_character.character_id) #array of 1
    @current_game = game_array.first
    # @current_game.save ? is it helpful/important to save it?

    @run = Run.new(game_id: @current_game.id)
    @run.save

    params[:journey][:title].each do |disorder_id|
      @journey = Journey.new(disorder_id: disorder_id, title: Disorder.find(disorder_id).name)
      @journey.save
      @journey_run = JourneyRun.new(run_id: @run.id, journey_id: @journey.id)
      @journey_run.save
    end
    redirect_to new_room_path
  end

  def menu
  end

  def completed
  end

  def repeat
  end

  # def edit
  # end

  # def update
  # end

  private

  def journey_params
    params.require(:journey).permit(:title)
  end
end
