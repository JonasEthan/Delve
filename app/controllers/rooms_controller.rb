class RoomsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    # Creating the instance of Room needed for the form on view page rooms/new
    @room = Room.new

    # For the form on the view page rooms/new, we want to give as options the journeys that the user has selected
    # before on the journeys/new page.

    # (ALMOST) SAME CODE AS IN JOURNEYS CONTROLLER:
    # Starting from the current user all the way until we have our current run ...
    array_current_user_character = UserCharacter.where(user_id: current_user.id) #array of 1
    current_user_character = array_current_user_character.first
    game_array = Game.where(character_id: current_user_character.character_id) # array of 1
    current_game = game_array.last
    run_array = Run.where(game_id: current_game.id) # array of 1
    current_run = run_array.last

    # ... then selecting all the journey_runs associated with our current run.
    journey_runs = JourneyRun.where(run_id: current_run.id) # = array OF SEVERAL !!!

    # Iterating over the journey_runs to find their associated journeys (= the user selection) and storing them into
    # an array which is given to the form on the view page.
    @journeys = []
    journey_runs.each do |journey_run|
      journey_id = journey_run.journey_id
      journey = Journey.find(journey_id)
      @journeys << journey # => array of 2 journeys !!!
    end
  end

  def create
    # The form on the view page gives us the journey the user has selected.
    # Accordingly, we select the enemies associated to that journey via the disorder id shared by enemy and journey.
    @journey = Journey.find(params[:room][:journey_id])
    @enemies = Enemy.where(disorder_id: @journey.disorder_id) # => array because of "where"

    # For each enemy associated with that journey(/disorder), we create a room.
    # @array_of_journey_rooms = []
    # @enemies.each do |enemy|
    #   @room = Room.new(journey_id: @journey.id, enemy_id: enemy.id)
    #   @room.save
    #   @array_of_journey_rooms << @room
    # end
    # Hard coded needs to be improved!
    Room.create(journey_id: @journey.id, enemy_id: @enemies.first.id)
    Room.create(journey_id: @journey.id, enemy_id: 7)
    Room.create(journey_id: @journey.id, enemy_id: @enemies.last.id)
    redirect_to test_fight_path(rooms_id: @journey.room_ids) # room_path(@array_of_journey_rooms[0][:id])
    # .sort to make sure last room/enemy is always boss etc.
  end

  def show
    # @room = Room.find(params[:id])
  end

  # def edit
  # end

  # def update
  # end

  private

  def room_params
    params.require(:room).permit(:journey_id)
  end
end
