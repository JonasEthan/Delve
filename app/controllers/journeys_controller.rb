class JourneysController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    # Creating the instances of Disorder and Journey needed for the form on view page journeys/new
    @disorders = Disorder.all
    @journey = Journey.new
  end

  def create
    # This create action creates the run, the journeys and the journey_runs connecting the journeys to the current run.

    # To create the current run, first look for the user_character associated with the current user...
    array_current_user_character = UserCharacter.where(user_id: current_user.id) #array of 1
    current_user_character = array_current_user_character.first

    # ... then we can select the game whose stored character_id is the same as the id of the character associated with
    # our user_character from the step before ...
    game_array = Game.where(character_id: current_user_character.character_id) #array of 1
    @current_game = game_array.first
    # @current_game.save ? is it helpful/important to save it?

    # ... with the id of that game, we can create our current run.
    @run = Run.new(game_id: @current_game.id)
    @run.save

    # The disorders chosen in the form on view page journeys/new are used to create journey instances.
    unless params[:journey].nil?
      params[:journey][:title].each do |disorder_id|
        @journey = Journey.new(disorder_id: disorder_id, title: Disorder.find(disorder_id).name)
        @journey.save
        # Now, with an existing journey and our existing current run, we can link them to each other by creating
        # an instance of JourneyRun.
        @journey_run = JourneyRun.new(run_id: @run.id, journey_id: @journey.id)
        @journey_run.save
      end
    end
    if @journey == Journey.last
      redirect_to new_room_path
    else
      @journey = Journey.new
      @disorders = Disorder.all
      Run.last.delete
      render :new, status: :unprocessable_entity
    end
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
