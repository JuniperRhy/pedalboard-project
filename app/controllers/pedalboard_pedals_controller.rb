class PedalboardPedalsController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        pedalboard_pedals = PedalboardPedals.all 
        render json: pedalboard_pedals, status: :ok 
    end

    def show
        pedalboard_pedal = find_pedalboard_pedal
        render json: pedalboard_pedal, status: :ok
    end

    def create 
        pedalboard_pedal = PedalboardPedal.create(pedalboard_pedal_params)
        render json: pedalboard_pedal, status: :created
    end

    # def update
    #     pedalboard_pedal = find_pedalboard_pedal
    #     pedalboard_pedal.update(pedalboard_pedal_params)
    #     render json: pedalboard_pedal, status: :created 
    # end

    def destroy
        pedalboard_pedal = find_pedalboard_pedal
        pedalboard_pedal.destroy
        head :no_content
    end

    private

    def pedalboard_pedal_params
        params.permit(:pedalboard_id, :pedal_id)
    end

    def find_pedalboard_pedal
        PedalboardPedal.find(params[:id])
    end

    def render_not_found_response
        render json: { error: pedalboard_pedal.errors.full_messages }, status: :not_found 
    end
    
end
