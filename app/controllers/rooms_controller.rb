class RoomsController < ApplicationController
  def create
    @journey = Journey.find(params[:journey_id]) # works because of nested routes in Router
    @room.journey = @journey
    @enemy = Enemy.find() # ???? --> via disorder und journey, s. unten ?

    # authorize @room

    # @booking.start_date = params[:booking][:start_date]
    # @booking.end_date = params[:booking][:end_date]

    if @room.save
      redirect_to room_path(@room)
    else
      render "journeys/index", status: :unprocessable_entity
    end
  end

  def room_params
    params.require(:room).permit(# :disorder, :enemy) => werden durch journey bestimmt
    # --> kommen durch submitten der Form auf journeys/index Seite
  end
end
