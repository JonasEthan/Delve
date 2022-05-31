class RunsController < ApplicationController
  def create
    @run = Run.create(run_params)
    @game = Game.find(params[:game_id])
    @run.game = @game
  end

  # def edit
  # end

  # def update
  # end

  private

  def run_params
    params.require(:run).permit(:journey_id) # Wie hier alle 3 journey_ids?
  end
end
